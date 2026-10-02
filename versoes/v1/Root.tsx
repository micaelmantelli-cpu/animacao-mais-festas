import React from 'react';
import {AbsoluteFill, Composition, Sequence, staticFile, useCurrentFrame, interpolate} from 'remotion';
import {Audio} from '@remotion/media';
import {loadFont} from '@remotion/fonts';
import {Opening} from './Opening';
import {Origin} from './Origin';
import {Operation} from './Operation';
import {C} from './Shared';

loadFont({family:'DejaVu',url:staticFile('DejaVuSans.ttf'),weight:'400'});
const Wipe=({at}:{at:number})=>{
 const f=useCurrentFrame();
 if(f<at-7||f>at+9)return null;
 return <AbsoluteFill style={{pointerEvents:'none',overflow:'hidden'}}><div style={{position:'absolute',inset:'-200px -400px',background:C.yellow,transform:`translateX(${interpolate(f,[at-7,at+9],[-1600,1700])}px) skewX(-15deg)`,width:1400}}/><div style={{position:'absolute',top:-200,bottom:-200,width:55,background:C.red,transform:`translateX(${interpolate(f,[at-7,at+9],[-230,3070])}px) skewX(-15deg)`}}/></AbsoluteFill>;
};
export const Preview=()=> <AbsoluteFill style={{fontFamily:'DejaVu, sans-serif',background:C.white}}>
 <Sequence name="01 · A marca" from={0} durationInFrames={84} premountFor={30}><Opening/></Sequence>
 <Sequence name="02 · A origem" from={84} durationInFrames={81} premountFor={30}><Origin/></Sequence>
 <Sequence name="03 · Dentro da operação" from={165} durationInFrames={135} premountFor={30}><Operation/></Sequence>
 <Wipe at={84}/><Wipe at={165}/>
 <Audio src={staticFile('narracao-previa.wav')} premountFor={30}/>
</AbsoluteFill>;
export const RemotionRoot:React.FC=()=> <>
 <Composition id="MaisFestas-Previa10s" component={Preview} width={1080} height={1920} fps={30} durationInFrames={300}/>
 <Composition id="Abertura" component={Opening} width={1080} height={1920} fps={30} durationInFrames={84}/>
 <Composition id="Origem" component={Origin} width={1080} height={1920} fps={30} durationInFrames={81}/>
 <Composition id="Operacao" component={Operation} width={1080} height={1920} fps={30} durationInFrames={135}/>
</>;
