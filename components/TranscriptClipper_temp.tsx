import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #0f172a;
  color: #f8fafc;
  padding: 2rem;
  border-radius: 12px;
  margin-top: 2rem;
`;

const Highlight = styled.span`
  background: #1e293b;
  border-left: 4px solid #38bdf8;
  padding: 0.5rem 0.75rem;
  display: inline-block;
  margin-bottom: 0.75rem;
  font-weight: 600;
  font-family: monospace;
`;

const ClipBlock = styled.div`
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1.25rem;
`;

const ClipHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ClipText = styled.p`
  margin-top: 0.5rem;
  font-size: 0.95rem;
  white-space: pre-wrap;
  color: #e2e8f0;
`;

const Input = styled.input`
  margin-top: 0.5rem;
  padding: 0.6rem;
  width: 100%;
  border: 1px solid #475569;
  background: #1e293b;
  color: #f8fafc;
  border-radius: 6px;
`;

const Button = styled.button`
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background: #2563eb;
  }
`;

const TimeInput = styled.input`
  margin-top: 0.5rem;
  padding: 0.6rem;
  width: 48%;
  border: 1px solid #475569;
  background: #1e293b;
  color: #f8fafc;
  border-radius: 6px;
  margin-right: 4%;
`;

const NoteArea = styled.textarea`
  margin-top: 0.5rem;
  padding: 0.6rem;
  width: 100%;
  background: #1e293b;
  color: #f8fafc;
  border: 1px solid #475569;
  border-radius: 6px;
  font-size: 0.9rem;
`;

export default function TranscriptClipper({ transcript }: { transcript: string }) {
  const [clips, setClips] = useState<{ text: string; tag: string; start?: string; end?: string; note?: string }[]>([]);
  const [selection, setSelection] = useState('');
  const [tag, setTag] = useState('');
  const [note, setNote] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleMouseUp = () => {
    const selectedText = window.getSelection()?.toString();
    if (selectedText) setSelection(selectedText);
  };

  const handleSaveClip = () => {
    if (!selection) return;
    setClips([...clips, { text: selection, tag, start: startTime, end: endTime, note }]);
    setSelection('');
    setTag('');
    setNote('');
    setStartTime('');
    setEndTime('');
  };

  const handleDeleteClip = (index: number) => {
    const updated = [...clips];
    updated.splice(index, 1);
    setClips(updated);
  };

  const handleExportClips = () => {
    const content = clips
      .map(c => `Tag: ${c.tag || 'Untitled'}\nStart: ${c.start || 'N/A'} - End: ${c.end || 'N/A'}\nNote: ${c.note || 'None'}\n\n${c.text}`)
      .join('\n\n---\n\n');

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'transcript_clips.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Clip copied to clipboard!');
  };

  return (
    <Wrapper>
      <h3 style={{ marginBottom: '1rem' }}>🎬 Transcript Clipper</h3>

      <p onMouseUp={handleMouseUp} style={{ whiteSpace: 'pre-wrap', cursor: 'text', background: '#1e293b', padding: '1rem', borderRadius: '8px' }}>
        {transcript}
      </p>

      {selection && (
        <div style={{ marginTop: '1rem' }}>
          <Highlight>{selection}</Highlight>
          <Input
            type="text"
            placeholder="Add a tag or label (e.g., Witness Statement)"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <TimeInput
              type="text"
              placeholder="Start Time (e.g., 00:00:10)"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
            <TimeInput
              type="text"
              placeholder="End Time (e.g., 00:00:45)"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
          <NoteArea
            rows={2}
            placeholder="Optional notes about this clip"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <br />
          <Button onClick={handleSaveClip}>💾 Save Clip</Button>
        </div>
      )}

      {clips.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <h4 style={{ marginBottom: '1rem' }}>🗂️ Saved Clips</h4>
          {clips.map((clip, i) => (
            <ClipBlock key={i}>
              <ClipHeader>
                <strong>{clip.tag || 'Untitled Clip'} ({clip.start} - {clip.end})</strong>
                <div>
                  <Button style={{ background: '#10b981' }} onClick={() => handleCopyToClipboard(clip.text)}>
                    📋 Copy
                  </Button>
                  <Button style={{ background: '#ef4444' }} onClick={() => handleDeleteClip(i)}>
                    🗑️ Delete
                  </Button>
                </div>
              </ClipHeader>
              {clip.note && <p style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>{clip.note}</p>}
              <ClipText>{clip.text}</ClipText>
            </ClipBlock>
          ))}
          <Button onClick={handleExportClips} style={{ background: '#059669', marginTop: '1rem' }}>
            📤 Export Clip List
          </Button>
        </div>
      )}
    </Wrapper>
  );
}
