create extension if not exists "uuid-ossp";

-- USERS
create table users (
  id uuid primary key default uuid_generate_v4(),
  email text not null unique,
  full_name text,
  role text check (role in ('admin', 'reviewer', 'investigator')) default 'reviewer',
  created_at timestamp with time zone default now(),
  last_login_at timestamp with time zone
);

-- PROJECTS
create table projects (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  description text,
  owner_id uuid references users(id) on delete cascade,
  status text check (status in ('active', 'archived')) default 'active',
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- PROJECT USERS
create table project_users (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid references projects(id) on delete cascade,
  user_id uuid references users(id) on delete cascade,
  role_in_project text check (role_in_project in ('lead', 'editor', 'viewer')),
  unique (project_id, user_id)
);

-- MEDIA FILES
create table media_files (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid references projects(id) on delete cascade,
  title text,
  type text check (type in ('audio', 'video', 'image')) not null,
  storage_url text,
  thumbnail_url text,
  duration_seconds numeric,
  size_bytes bigint,
  upload_status text check (upload_status in ('processing', 'complete', 'failed')) default 'processing',
  uploaded_by uuid references users(id),
  uploaded_at timestamp with time zone default now()
);

-- TRANSCRIPTS
create table transcripts (
  id uuid primary key default uuid_generate_v4(),
  media_file_id uuid references media_files(id) on delete cascade,
  content text,
  whisper_json jsonb,
  summary_ai text,
  language text,
  status text check (status in ('pending', 'complete', 'error')) default 'pending',
  created_at timestamp with time zone default now()
);

-- TRANSCRIPT SEGMENTS
create table transcript_segments (
  id uuid primary key default uuid_generate_v4(),
  transcript_id uuid references transcripts(id) on delete cascade,
  start_time numeric,
  end_time numeric,
  speaker text,
  text text,
  entity_tags text[]
);

-- ANNOTATIONS
create table annotations (
  id uuid primary key default uuid_generate_v4(),
  media_file_id uuid references media_files(id) on delete cascade,
  type text check (type in ('clip', 'region', 'note')) not null,
  start_time numeric,
  end_time numeric,
  note text,
  tag text,
  created_by uuid references users(id),
  created_at timestamp with time zone default now()
);

-- ENTITIES
create table entities (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid references projects(id) on delete cascade,
  name text,
  type text check (type in ('person', 'org', 'location', 'other')),
  first_seen_segment_id uuid references transcript_segments(id),
  linked_segments uuid[]
);

-- AI TASK QUEUE
create table ai_tasks (
  id uuid primary key default uuid_generate_v4(),
  task_type text check (task_type in ('transcription', 'summary', 'entity_extraction')) not null,
  status text check (status in ('pending', 'running', 'complete', 'error')) default 'pending',
  input_ref uuid,
  output_data jsonb,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);
