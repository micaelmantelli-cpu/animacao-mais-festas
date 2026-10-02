from pathlib import Path
import numpy as np, wave
root=Path(__file__).resolve().parent.parent
sr=48000; length=146; n=sr*length
mix=np.zeros((n,2),np.float64); rng=np.random.default_rng(2042)
def add(y,start,pan=0,amp=1):
 a=max(0,int(start*sr));b=min(n,a+len(y));y=y[:b-a]*amp
 mix[a:b,0]+=y*np.sqrt((1-pan)/2);mix[a:b,1]+=y*np.sqrt((1+pan)/2)
def hz(m):return 440*2**((m-69)/12)
def note(m,d,kind='pluck'):
 t=np.arange(int(d*sr))/sr;freq=hz(m)
 if kind=='pad':
  y=sum(np.sin(2*np.pi*freq*(1+det)*t)/3 for det in [-.003,0,.003]);env=np.minimum(t/.55,1)*np.minimum((d-t)/.9,1)
 elif kind=='bass':
  y=np.sin(2*np.pi*freq*t)+.23*np.sin(4*np.pi*freq*t);env=np.minimum(t/.008,1)*np.exp(-t*4)
 else:
  y=np.sin(2*np.pi*freq*t)+.3*np.sin(4*np.pi*freq*t)+.12*np.sin(6*np.pi*freq*t);env=np.minimum(t/.006,1)*np.exp(-t*7)
 return y*env
chords=[[48,55,60,63],[44,51,56,60],[51,58,63,67],[46,53,58,62]]
for bar in range(73):
 start=bar*2;ch=chords[(bar//2)%4]
 for j,m in enumerate(ch):add(note(m,2.8,'pad'),start,(-.7+j*.45),.042)
 for step in range(8):
  tm=start+step*.25; m=ch[[0,2,1,3,2,1,3,2][step]]+12
  add(note(m,.7),tm,(-.65 if step%2 else .65),.032 if tm<5 else .044)
 for beat in range(4):
  tm=start+beat*.5
  if tm<4 or tm>142:continue
  t=np.arange(int(.35*sr))/sr
  kick=np.sin(2*np.pi*(47*t+70*.025*(1-np.exp(-t/.025))))*np.exp(-t*16)
  add(kick,tm,0,.18)
  add(note(ch[0]-12,.4,'bass'),tm+.025,0,.1)
  if beat%2:
   noise=rng.normal(0,1,len(t));hp=noise-np.convolve(noise,np.ones(9)/9,'same')
   add(hp*np.exp(-t*32),tm,.08,.039)
 for step in range(8):
  tm=start+step*.25
  if tm<4:continue
  t=np.arange(int(.08*sr))/sr;noise=rng.normal(0,1,len(t));hp=noise-np.convolve(noise,np.ones(11)/11,'same')
  add(hp*np.exp(-t*75),tm,.5 if step%2 else -.4,.024 if step%2 else .014)
for tm in [9.7,15.7,38.65,47.8,59.9,65.7,73.7,83.4,97.3,110.28,131.08,140.6]:
 t=np.arange(int(.55*sr))/sr;noise=rng.normal(0,1,len(t));smooth=np.convolve(noise,np.ones(17)/17,'same')
 add(smooth*np.sin(np.pi*t/.55)**2,tm-.3,0,.13)
 add(note(84,.65),tm,.25,.05)
# Slow stereo echoes keep the arpeggio spacious while leaving the center for speech.
delay=int(.375*sr);dry=mix.copy();mix[delay:,0]+=dry[:-delay,1]*.14;mix[delay:,1]+=dry[:-delay,0]*.14
t=np.arange(n)/sr;env=np.minimum(t/1.2,1)*np.minimum((length-t)/1.4,1);mix*=env[:,None]
mix=np.tanh(mix*1.4);mix*=.66/max(abs(mix).max(),.01)
out=root/'public/trilha-futurista-completa.wav';out.parent.mkdir(parents=True,exist_ok=True)
with wave.open(str(out),'wb') as w:w.setnchannels(2);w.setsampwidth(2);w.setframerate(sr);w.writeframes((mix*32767).astype('<i2').tobytes())
print('Original stereo electronic score:',out,'146s,120bpm')
