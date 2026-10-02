$ErrorActionPreference = 'Stop'
$projectDir = Split-Path -Parent $PSScriptRoot
Push-Location $projectDir
try {
  $filters = '[0:v]trim=end_frame=471,setpts=PTS-STARTPTS[a];[0:v]trim=start_frame=606:end_frame=1159,setpts=PTS-STARTPTS[b];[0:v]trim=start_frame=1442,setpts=PTS-STARTPTS[c];[1:v]setpts=PTS-STARTPTS[n];[2:v]setpts=PTS-STARTPTS[j];[a][n][b][j][c]concat=n=5:v=1:a=0,setpts=PTS/1.15,fps=30,trim=end_frame=3809[vout]'
  & ffmpeg -y -v error -i 'out/mais-festas-completo-revisado.mp4' -i 'out/motion-necessidade.mp4' -i 'out/motion-jornada.mp4' -i 'out/mais-festas-voz-mais-rapida.mp4' -filter_complex $filters -map '[vout]' -map 3:a:0 -c:v libx264 -preset fast -crf 15 -pix_fmt yuv420p -c:a copy -movflags +faststart 'out/mais-festas-motion-refinado.mp4'
  if ($LASTEXITCODE -ne 0) { throw 'Falha ao atualizar as cenas animadas.' }
} finally { Pop-Location }
