import {interpolate,useCurrentFrame} from 'remotion';
import {Caption,cl,K} from './FutureWorld';
import {Head,Scene} from './Graphics';
import {Circuit,MotionNode} from './SceneMotion';
export const Journey=()=> {const f=useCurrentFrame();return <Scene>
 <Head first="Do anúncio" second="à festa fechada."/>
 <Circuit points={[[260,835],[600,720],[960,830],[770,1090]]} at={40} duration={72}/>
 <Circuit points={[[770,1090],[640,1060],[300,1110],[295,1290]]} at={113} duration={43}/>
 <Circuit points={[[295,1290],[400,1350],[670,1360],[790,1430]]} at={163} duration={71}/>
 <MotionNode x={260} y={835} icon="ad" label="Anúncio" at={4} activeAt={12}/>
 <MotionNode x={770} y={1090} icon="chat" label="Atendimento" at={70} activeAt={112}/>
 <MotionNode x={295} y={1290} icon="visit" label="Visita" at={120} activeAt={156}/>
 <MotionNode x={790} y={1430} icon="money" label="Fechamento" at={188} activeAt={234} size={166}/>
 <svg width="1080" height="1920" style={{position:'absolute',inset:0,pointerEvents:'none'}}>
  {[234,248].map(at=>{const p=interpolate(f,[at,at+30],[0,1],cl);return <circle key={at} cx="790" cy="1430" r={88+p*85} fill="none" stroke={K.gold} strokeWidth="2" opacity={f>=at?(1-p)*.65:0}/>;})}
  {Array.from({length:8},(_,i)=>{const p=interpolate(f,[234,264],[0,1],cl),a=i*Math.PI/4,r=99+p*62;return <path key={i} d={'M'+(790+Math.cos(a)*r)+' '+(1430+Math.sin(a)*r)+' l'+(Math.cos(a)*13)+' '+(Math.sin(a)*13)} stroke={i%3===0?K.red:K.gold} strokeWidth="3" strokeLinecap="round" opacity={f>=234?(1-p)*.8:0}/>;})}
 </svg>
 <Caption at={222}>Cada etapa importa na decisão.</Caption>
</Scene>;};
