import {AbsoluteFill,interpolate,useCurrentFrame} from 'remotion';
import {arrive,Caption,K,smooth,Title,vanish} from './FutureWorld';
const Proposal=({at,x,y,rotation}:{at:number;x:number;y:number;rotation:number})=>{
 const f=useCurrentFrame();
 return <div style={{position:'absolute',left:x,top:y,width:440,height:535,padding:40,boxSizing:'border-box',borderRadius:16,background:'linear-gradient(135deg,#383326,#191815 55%,#232016)',border:'1px solid #977638',boxShadow:'9px 11px 0 #0b0b0b,10px 12px 0 #76613c66,0 35px 70px #0008',opacity:arrive(f,at),transform:`translateY(${interpolate(f,[at,at+33],[220,0],smooth)}px) rotateY(${rotation}deg) rotateZ(${rotation/5}deg)`}}>
  <div style={{display:'flex',alignItems:'center',gap:16,fontSize:25,letterSpacing:3,color:K.gold}}><div style={{width:19,height:19,borderRadius:4,background:K.gold}}/>PROPOSTA</div>
  <div style={{fontSize:44,lineHeight:1.15,fontWeight:800,marginTop:48}}>Festas<br/>e eventos.</div>
  <div style={{marginTop:36,display:'flex',gap:9}}><div style={{height:3,width:75,background:K.red}}/><div style={{height:3,width:190,background:'#ffffff14'}}/></div>
  {[0,1,2].map(i=><div key={i} style={{marginTop:27,height:7,width:260-i*26,background:'#c7b99628',borderRadius:3,opacity:arrive(f,at+14+i*6)}}/>)}
  <div style={{position:'absolute',bottom:30,right:34,fontSize:32,color:K.gold}}>↗</div>
 </div>;
};
export const Agencies=()=>{
 const f=useCurrentFrame();
 return <AbsoluteFill style={{opacity:arrive(f,0,12)*vanish(f,122,12)}}>
  <Title first="Outras agências." second="Novas promessas."/>
  <div style={{position:'absolute',inset:0,perspective:1800}}>
   <Proposal at={3} x={130} y={845} rotation={18}/>
   <Proposal at={28} x={410} y={943} rotation={-13}/>
  </div>
  <svg width="1080" height="1920" style={{position:'absolute',inset:0,pointerEvents:'none'}}><path d="M255 1520 Q535 1600 836 1520" fill="none" stroke={K.gold} strokeWidth="2" strokeDasharray="620" strokeDashoffset={620*(1-arrive(f,42,45))} opacity=".4"/></svg>
  <Caption at={69}>Diziam entender o segmento.</Caption>
 </AbsoluteFill>;
};
