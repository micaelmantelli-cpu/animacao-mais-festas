import {interpolate,useCurrentFrame} from 'remotion';
import {Base,C,ease,enter,Footer,Line,Photo} from './Shared';
export const Operation=()=>{
 const f=useCurrentFrame();
 return <Base>
 <div style={{position:'absolute',left:84,top:270}}><Line at={-2} size={98}>Nascemos</Line><div style={{position:'relative',marginTop:9}}><div style={{position:'absolute',left:-10,right:-14,top:2,bottom:0,background:C.yellow,scale:`${enter(f,28,20)} 1`,transformOrigin:'left'}}/><Line at={24} size={91} style={{position:'relative'}}>na operação.</Line></div></div>
 <div style={{position:'absolute',left:84,top:560,fontSize:37,color:C.gray,opacity:enter(f,43)}}>Dentro do Castelo dos Sonhos.</div>
 <div style={{position:'absolute',inset:0,perspective:1900}}>
 <Photo file="origem.jpeg" width={565} height={580} caption="ONDE TUDO COMEÇOU" style={{left:55,top:820,opacity:enter(f,0),transform:`translateX(${interpolate(f,[0,77],[220,0],ease)}px) rotateY(15deg) rotateZ(-8deg) scale(.94)`}}/>
 <Photo file="fachada.jpeg" width={480} height={630} caption="CASTELO DOS SONHOS" style={{left:460,top:735,opacity:enter(f,48,20),transform:`translateX(${interpolate(f,[48,85],[750,0],ease)}px) translateY(${Math.sin(f/30)*6}px) rotateY(${interpolate(f,[48,90],[-48,-13],ease)}deg) rotateZ(4deg)`}}/>
 </div>
 <div style={{position:'absolute',left:92,top:1580,display:'flex',alignItems:'center',gap:20,opacity:enter(f,77)}}><span style={{width:14,height:14,borderRadius:'50%',background:C.red}}/><div style={{width:interpolate(f,[77,103],[0,120],ease),height:3,background:C.red}}/><span style={{fontSize:30,color:C.gray}}>A experiência vem de dentro.</span></div>
 <Footer step="03" label="DA EXPERIÊNCIA À MAIS FESTAS"/>
 </Base>;
};
