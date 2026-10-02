from pathlib import Path
import subprocess,json,re,os,runpy

root=Path(__file__).resolve().parent.parent
runpy.run_path(str(root/'scripts/criar-trilha.py'),run_name='__main__')

def normalize(src,out,level,peak):
    base=f'loudnorm=I={level}:TP={peak}:LRA=7'
    p=subprocess.run(['ffmpeg','-hide_banner','-i',str(src),'-af',base+':print_format=json','-f','null',os.devnull],capture_output=True,text=True,check=True)
    stats=json.loads(re.findall(r'\{[^{}]+\}',p.stderr)[-1])
    filt=base+f":measured_I={stats['input_i']}:measured_TP={stats['input_tp']}:measured_LRA={stats['input_lra']}:measured_thresh={stats['input_thresh']}:offset={stats['target_offset']}:linear=true"
    subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-i',str(src),'-af',filt,'-ar','48000','-ac','2','-y',str(out)],check=True)
    return stats

public=root/'public'
voice=normalize(public/'narracao-original.mp3',public/'voz-completa-normalizada.wav',-17,-2)
music=normalize(public/'trilha-futurista-completa.wav',public/'trilha-baixa.wav',-31,-9)
filters='[0:a]apad=whole_dur=146,asplit=2[v][sc];[1:a][sc]sidechaincompress=threshold=0.025:ratio=3:attack=25:release=350:makeup=1[m];[v][m]amix=inputs=2:duration=longest:normalize=0,alimiter=limit=0.89:level=false,atrim=duration=146[out]'
subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-i',str(public/'voz-completa-normalizada.wav'),'-i',str(public/'trilha-baixa.wav'),'-filter_complex',filters,'-map','[out]','-ar','48000','-y',str(public/'mix-completa.wav')],check=True)
(root/'analise').mkdir(exist_ok=True)
(root/'analise/audio-completo.json').write_text(json.dumps({'voice':voice,'music':music,'musicSource':'Composição eletrônica original do projeto ProBuffet, recomposição para 146 segundos sem emendas','voiceTargetLUFS':-17,'musicTargetLUFS':-31,'ducking':True,'voiceSpeed':1},indent=2),encoding='utf8')
print('Mix de 146 segundos concluída com voz integral e trilha reduzida durante a fala.')
