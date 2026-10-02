$ErrorActionPreference = 'Stop'
$projectDir = Split-Path -Parent $PSScriptRoot
Push-Location $projectDir
try {
  $filters = '[0:v]trim=end_frame=471,setpts=PTS-STARTPTS[a];[0:v]trim=start_frame=606:end_frame=1159,setpts=PTS-STARTPTS[b];[0:v]trim=start_frame=1442:end_frame=1530,setpts=PTS-STARTPTS[c];[0:v]trim=start_frame=1979:end_frame=3687,setpts=PTS-STARTPTS[d];[0:v]trim=start_frame=3940,setpts=PTS-STARTPTS[e];[1:v]setpts=PTS-STARTPTS[n];[2:v]setpts=PTS-STARTPTS[j];[3:v]setpts=PTS-STARTPTS[s];[4:v]setpts=PTS-STARTPTS[r];[a][n][b][j][c][s][d][r][e]concat=n=9:v=1:a=0,setpts=PTS/1.15,fps=30,trim=end_frame=3809[vout]'
  & ffmpeg -y -v error -i 'out/mais-festas-completo-revisado.mp4' -i 'out/motion-necessidade.mp4' -i 'out/motion-jornada.mp4' -i 'out/layout-espacos-castelo.mp4' -i 'out/layout-reuniao.mp4' -i 'out/mais-festas-voz-mais-rapida.mp4' -filter_complex $filters -map '[vout]' -map 5:a:0 -c:v libx264 -preset fast -crf 15 -pix_fmt yuv420p -c:a copy -movflags +faststart 'out/mais-festas-layout-ajustado.mp4'
  if ($LASTEXITCODE -ne 0) { throw 'Falha ao exportar o vídeo com o layout atualizado.' }
} finally { Pop-Location }
