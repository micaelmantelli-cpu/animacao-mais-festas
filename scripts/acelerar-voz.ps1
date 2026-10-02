$ErrorActionPreference = 'Stop'
$projectDir = Split-Path -Parent $PSScriptRoot
Push-Location $projectDir
try {
  $filters = '[0:v]setpts=PTS/1.15,fps=30,trim=end_frame=3809[vout];[1:a]atempo=1.15,apad=whole_dur=126.966667,atrim=duration=126.966667,asplit=2[voice][sidechain];[2:a]atrim=duration=126.966667,afade=t=out:st=124.466667:d=2.5[music];[music][sidechain]sidechaincompress=threshold=0.025:ratio=3:attack=25:release=350:makeup=1[ducked];[voice][ducked]amix=inputs=2:duration=longest:normalize=0,alimiter=limit=0.89:level=false,atrim=duration=126.966667[aout]'
  & ffmpeg -y -v error -i 'out/mais-festas-completo-revisado.mp4' -i 'public/voz-completa-normalizada.wav' -i 'public/trilha-baixa.wav' -filter_complex $filters -map '[vout]' -map '[aout]' -c:v libx264 -preset fast -crf 15 -pix_fmt yuv420p -c:a aac -b:a 320k -ar 48000 -movflags +faststart 'out/mais-festas-voz-mais-rapida.mp4'
  if ($LASTEXITCODE -ne 0) { throw 'Falha ao exportar a versão com voz acelerada.' }
} finally {
  Pop-Location
}
