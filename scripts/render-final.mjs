import {spawnSync} from 'node:child_process';
import {mkdirSync} from 'node:fs';
import {fileURLToPath} from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const run = (command, args) => {
  const result = spawnSync(command, args, {cwd: root, stdio: 'inherit'});
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(command + ' encerrou com código ' + result.status);
};

run('ffmpeg', ['-version']);
mkdirSync(new URL('../out/', import.meta.url), {recursive: true});
const browserArgs = process.env.REMOTION_BROWSER_EXECUTABLE
  ? ['--browser-executable=' + process.env.REMOTION_BROWSER_EXECUTABLE] : [];
run(process.execPath, [fileURLToPath(new URL('../node_modules/@remotion/cli/remotion-cli.js', import.meta.url)),
  'render', 'MaisFestas-Completo', 'out/mais-festas-base-atual.mp4',
  '--codec=h264', '--crf=17', '--audio-bitrate=320k', '--image-format=png', '--concurrency=4', ...browserArgs]);

const filters = '[0:v]setpts=PTS/1.15,fps=30,trim=end_frame=3809[vout];[1:a]atempo=1.15,apad=whole_dur=126.966667,atrim=duration=126.966667,asplit=2[voice][sidechain];[2:a]atrim=duration=126.966667,afade=t=out:st=124.466667:d=2.5[music];[music][sidechain]sidechaincompress=threshold=0.025:ratio=3:attack=25:release=350:makeup=1[ducked];[voice][ducked]amix=inputs=2:duration=longest:normalize=0,alimiter=limit=0.89:level=false,atrim=duration=126.966667[aout]';
run('ffmpeg', ['-y', '-v', 'error', '-i', 'out/mais-festas-base-atual.mp4',
  '-i', 'public/voz-completa-normalizada.wav', '-i', 'public/trilha-baixa.wav',
  '-filter_complex', filters, '-map', '[vout]', '-map', '[aout]',
  '-c:v', 'libx264', '-preset', 'fast', '-crf', '15', '-pix_fmt', 'yuv420p',
  '-c:a', 'aac', '-b:a', '320k', '-ar', '48000', '-movflags', '+faststart', 'out/mais-festas-final.mp4']);
console.log('Vídeo final exportado: out/mais-festas-final.mp4');
