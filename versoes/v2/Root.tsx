import React from 'react';
import {AbsoluteFill,Composition,Sequence,staticFile,useCurrentFrame,interpolate} from 'remotion';
import {Audio} from '@remotion/media';
import {loadFont} from '@remotion/fonts';
import {FutureWorld,Podium,cl} from './FutureWorld';
import {FutureOpening} from './FutureOpening';
import {FutureOrigin} from './FutureOrigin';
import {FutureOperation} from './FutureOperation';

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
export const RemotionRoot:React.FC=()=> <>
 <Composition id="MaisFestas-Previa10s" component={Preview} width={1080} height={1920} fps={30} durationInFrames={300}/>
</>;
