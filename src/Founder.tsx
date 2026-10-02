import {AbsoluteFill,interpolate,useCurrentFrame} from 'remotion';
import {arrive,Caption,K,PhotoPanel,smooth,vanish} from './FutureWorld';
export const Founder=()=>{
 const f=useCurrentFrame();
 return <AbsoluteFill style={{opacity:arrive(f,0,12)*vanish(f,90,13)}}>
  <div style={{position:'absolute',left:86,top:305,fontWeight:800,letterSpacing:-4,lineHeight:1.06,opacity:arrive(f,0),transform:`translateY(${interpolate(f,[0,25],[45,0],smooth)}px)`}}>
   <div style={{fontSize:102}}>Fernando</div><div style={{fontSize:110,color:K.gold}}>Fernandes<span style={{color:K.red}}>.</span></div>
  </div>
  <div style={{position:'absolute',left:90,top:567,fontSize:35,color:K.muted,opacity:arrive(f,32,20)}}>Dono do Castelo dos Sonhos</div>
  <div style={{position:'absolute',inset:0,perspective:2000}}><PhotoPanel src="fernando.png" width={625} height={625} style={{left:220,top:795,transform:`rotateY(${interpolate(f,[8,45],[27,0],smooth)}deg) translateY(${interpolate(f,[8,45],[120,0],smooth)}px)`,opacity:arrive(f,8)}}/></div>
  <div style={{position:'absolute',left:243,top:1435,width:595,height:50,border:'1px solid #FEC40044',borderRadius:'50%',boxShadow:'0 0 30px #FEC4000d',opacity:arrive(f,17)}}/>
  <Caption at={45}>A visão de dentro da operação.</Caption>
 </AbsoluteFill>;
};
