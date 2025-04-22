import { NextRequest, NextResponse } from 'next/server';

// Temporary in-memory DB
let fakeDB: any[] = [];

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name } = body;

  if (!name || name.trim() === '') {
    return NextResponse.json({ error: 'Project name is required' }, { status: 400 });
  }

  const newProject = {
    id: `case-${fakeDB.length + 1}`.padStart(3, '0'),
    name: name.trim(),
    status: 'Active',
    files: 0
  };

  fakeDB.push(newProject);
  return NextResponse.json(newProject, { status: 200 });
}
