import TranscriptClipper from '../components/TranscriptClipper';

export default function ClipperPage() {
  const mockTranscript = `
    This is a sample transcript. You can highlight any portion of this text to create a clip.
    Include timestamps, tags, and notes to keep things organized.
    Perfect for reviewing deposition audio, surveillance footage, or interviews.
  `;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Transcript Clipper Preview</h1>
      <TranscriptClipper transcript={mockTranscript} />
    </div>
  );
}
