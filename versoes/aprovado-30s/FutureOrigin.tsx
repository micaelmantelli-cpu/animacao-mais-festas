import {AbsoluteFill,interpolate,useCurrentFrame} from 'remotion';
import {arrive,Caption,K,PhotoPanel,smooth,Title,vanish} from './FutureWorld';
export const FutureOrigin=()=>{
 const f=useCurrentFrame(); const exit=1-vanish(f,76,19);
 return <AbsoluteFill style={{opacity:arrive(f,0,14)*vanish(f,83,16)}}>
  <div style={{opacity:vanish(f,77,12)}}><Title first="Entenda" second="a nossa origem."/></div>
  <div style={{position:'absolute',left:155,top:665,width:770,height:790,background:'linear-gradient(0deg,#FEC40013,transparent 80%)',clipPath:'polygon(15% 100%,85% 100%,100% 0,0 0)',opacity:arrive(f,5)*.6}}/>
  <div style={{position:'absolute',inset:0,perspective:1800,transform:`translateX(${-exit*290}px) scale(${1-exit*.35})`,transformOrigin:'540px 1100px'}}>
   <div style={{position:'absolute',left:245,top:771,width:633,height:584,border:'1px solid #FEC40030',borderRadius:18,transform:'translateZ(-90px) rotateY(-12deg)',opacity:arrive(f,7)}}/>
   <PhotoPanel src="origem.jpeg" width={636} height={574} style={{left:218,top:755,opacity:arrive(f,4,18),transform:`translateY(${interpolate(f,[4,34],[160,0],smooth)}px) rotateY(${interpolate(f,[4,40],[35,-7],smooth)}deg) rotateX(${interpolate(f,[4,40],[8,0],smooth)}deg) scale(${interpolate(f,[4,40],[.74,1],smooth)})`}}/>
  </div>
  <div style={{position:'absolute',left:315,top:1530,width:450,textAlign:'center',opacity:arrive(f,27)*vanish(f,75),fontSize:27,letterSpacing:3,color:K.gold}}>ONDE TUDO COMEÇOU</div>
  <Caption at={37}>Uma história construída na prática.</Caption>
 </AbsoluteFill>;
};
