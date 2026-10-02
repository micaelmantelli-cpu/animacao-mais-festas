import {AbsoluteFill,interpolate,useCurrentFrame} from 'remotion';
import {arrive,Caption,K,smooth,vanish} from './FutureWorld';
import {Head} from './Graphics';
const Proposal=({at,x,y,rotation,label}:{at:number;x:number;y:number;rotation:number;label:string})=>{
 const f=useCurrentFrame();
 return <div style={{position:'absolute',left:x,top:y,width:350,height:480,padding:30,boxSizing:'border-box',borderRadius:16,background:'linear-gradient(135deg,#383326,#191815 55%,#232016)',border:'1px solid #977638',boxShadow:'9px 11px 0 #0b0b0b,10px 12px 0 #76613c66,0 35px 70px #0008',opacity:arrive(f,at),transform:`translateY(${interpolate(f,[at,at+33],[220,0],smooth)}px) rotateY(${rotation}deg) rotateZ(${rotation/5}deg)`}}>
  <div style={{fontSize:25,letterSpacing:1,color:K.gold,fontWeight:800}}>ASSESSORIA {label}</div>
  <div style={{fontSize:36,lineHeight:1.15,fontWeight:800,marginTop:35}}>Proposta de<br/>marketing.</div>
  <div style={{marginTop:36,display:'flex',gap:9}}><div style={{height:3,width:75,background:K.red}}/><div style={{height:3,width:190,background:'#ffffff14'}}/></div>
  {[0,1,2].map(i=><div key={i} style={{marginTop:27,height:7,width:260-i*26,background:'#c7b99628',borderRadius:3,opacity:arrive(f,at+14+i*6)}}/>)}
  <div style={{position:'absolute',bottom:30,right:34,fontSize:32,color:K.gold}}>↗</div>
 </div>;
};
export const Agencies=()=>{
 const f=useCurrentFrame();
 return <AbsoluteFill style={{opacity:arrive(f,0,12)*vanish(f,122,12)}}>
  <Head first="Outras assessorias." second="Novas promessas." firstSize={78} secondSize={87}/>
  <div style={{position:'absolute',inset:0,perspective:1800}}>
   <Proposal at={3} x={108} y={780} rotation={13} label="01"/>
   <Proposal at={21} x={362} y={963} rotation={0} label="02"/>
   <Proposal at={39} x={616} y={1146} rotation={-13} label="03"/>
  </div>
  <svg width="1080" height="1920" style={{position:'absolute',inset:0,pointerEvents:'none'}}><path d="M255 1520 Q535 1600 836 1520" fill="none" stroke={K.gold} strokeWidth="2" strokeDasharray="620" strokeDashoffset={620*(1-arrive(f,42,45))} opacity=".4"/></svg>
  <Caption at={69}>Assessorias de marketing para festas e eventos.</Caption>
 </AbsoluteFill>;
};
