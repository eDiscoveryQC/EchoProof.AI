import { splitLargeAudio } from '@/lib/split-large-files';

const chunks = await splitLargeAudio('/tmp/big-file.mp4', '/tmp/chunks');
