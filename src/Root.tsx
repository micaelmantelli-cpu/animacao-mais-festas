import React from 'react';
import {AbsoluteFill,Composition,Sequence,staticFile,useCurrentFrame,interpolate} from 'remotion';
import {Audio} from '@remotion/media';
import {loadFont} from '@remotion/fonts';
import {FutureWorld,Podium,cl,vanish} from './FutureWorld';
import {FutureOpening} from './FutureOpening';
import {FutureOrigin} from './FutureOrigin';
import {FutureOperation} from './FutureOperation';
import {Network} from './Network';
import {Need} from './Need';
import {Founder} from './Founder';
import {Agencies} from './Agencies';
import {Promises} from './Promises';
import {FullVideo} from './FullVideo';

loadFont({family:'MotionSans',url:staticFile('manrope-500.ttf'),weight:'500'});
loadFont({family:'MotionSans',url:staticFile('manrope-800.ttf'),weight:'800'});

const LightPass=({at}:{at:number})=>{
 const f=useCurrentFrame();
 const intensity=interpolate(f,[at-6,at,at+11],[0,.18,0],cl);
 return <AbsoluteFill style={{pointerEvents:'none',background:'radial-gradient(ellipse at 60% 65%,#fff3ad 0%,#FEC40070 30%,transparent 70%)',opacity:intensity}}/>;
};
export const Preview=()=> <AbsoluteFill style={{fontFamily:'MotionSans',fontWeight:500,color:'#F8F8F5',background:'#0B0B0C',overflow:'hidden'}}>
 <FutureWorld/>
 <Podium/>
 <Sequence name="Marca · órbitas e luz" from={0} durationInFrames={98} premountFor={30}><FutureOpening/></Sequence>
 <Sequence name="Origem · revelação em profundidade" from={80} durationInFrames={99} premountFor={30}><FutureOrigin/></Sequence>
 <Sequence name="Operação · fotos conectadas" from={163} durationInFrames={137} premountFor={30}><FutureOperation/></Sequence>
 <LightPass at={87}/><LightPass at={170}/>
 <Audio src={staticFile('narracao-previa.wav')} premountFor={30}/>
</AbsoluteFill>;
const FadeEnd=({at,children}:{at:number;children:React.ReactNode})=>{
 const f=useCurrentFrame();return <AbsoluteFill style={{opacity:vanish(f,at,15)}}>{children}</AbsoluteFill>;
};
export const Preview30=()=> <AbsoluteFill style={{fontFamily:'MotionSans',fontWeight:500,color:'#F8F8F5',background:'#0B0B0C',overflow:'hidden'}}>
 <FutureWorld/>
 <Sequence name="Base luminosa" from={0} durationInFrames={310} premountFor={30}><FadeEnd at={287}><Podium/></FadeEnd></Sequence>
 <Sequence name="Marca · órbitas e luz" from={0} durationInFrames={98} premountFor={30}><FutureOpening/></Sequence>
 <Sequence name="Origem · revelação em profundidade" from={80} durationInFrames={99} premountFor={30}><FutureOrigin/></Sequence>
 <Sequence name="Operação · fotos conectadas" from={163} durationInFrames={146} premountFor={30}><FadeEnd at={125}><FutureOperation/></FadeEnd></Sequence>
 <Sequence name="20 unidades · rede conectada" from={291} durationInFrames={186} premountFor={30}><Network/></Sequence>
 <Sequence name="Necessidade · surge da operação" from={471} durationInFrames={135} premountFor={30}><Need/></Sequence>
 <Sequence name="Fernando Fernandes · CEO" from={599} durationInFrames={103} premountFor={30}><Founder/></Sequence>
 <Sequence name="Agências · propostas" from={694} durationInFrames={134} premountFor={30}><Agencies/></Sequence>
 <Sequence name="Promessas · final da prévia" from={820} durationInFrames={80} premountFor={30}><Promises/></Sequence>
 <LightPass at={87}/><LightPass at={170}/><LightPass at={297}/><LightPass at={478}/><LightPass at={606}/><LightPass at={701}/><LightPass at={827}/>
 <Audio src={staticFile('narracao-30s.wav')} premountFor={30}/>
</AbsoluteFill>;
export const RemotionRoot:React.FC=()=> <>
 <Composition id="MaisFestas-Completo" component={FullVideo} width={1080} height={1920} fps={30} durationInFrames={4380}/>
 <Composition id="MaisFestas-Previa30s" component={Preview30} width={1080} height={1920} fps={30} durationInFrames={900}/>
 <Composition id="MaisFestas-Previa10s" component={Preview} width={1080} height={1920} fps={30} durationInFrames={300}/>
</>;
