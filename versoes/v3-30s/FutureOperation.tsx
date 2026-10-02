import {AbsoluteFill,interpolate,useCurrentFrame} from 'remotion';
import {arrive,Caption,K,PhotoPanel,smooth,Title} from './FutureWorld';
export const FutureOperation=()=>{
 const f=useCurrentFrame();const pulse=interpolate(f,[45,95],[0,1],smooth);
 return <AbsoluteFill style={{opacity:arrive(f,0,13)}}>
  <Title first="Nascemos dentro" second="da operação." delay={2}/>
  <svg width="1080" height="1920" style={{position:'absolute',inset:0}}>
   <path d="M258 1180 C190 1455 790 1600 845 1290" fill="none" stroke="#FEC400" strokeWidth="2" opacity=".5" strokeDasharray="950" strokeDashoffset={950*(1-arrive(f,20,45))}/>
   <circle cx={258*(1-pulse)**3+3*190*(1-pulse)**2*pulse+3*790*(1-pulse)*pulse**2+845*pulse**3} cy={1180*(1-pulse)**3+3*1455*(1-pulse)**2*pulse+3*1600*(1-pulse)*pulse**2+1290*pulse**3} r="5" fill="#fff3b8" opacity={arrive(f,30)} style={{filter:'drop-shadow(0 0 10px #FEC400)'}}/>
  </svg>
  <div style={{position:'absolute',inset:0,perspective:1800}}>
   <PhotoPanel src="origem.jpeg" width={330} height={355} style={{left:101,top:920,opacity:arrive(f,1,20)*.7,transform:`translateX(${interpolate(f,[0,38],[140,0],smooth)}px) rotateY(23deg) scale(.96)`}}/>
   <PhotoPanel src="fachada.jpeg" width={550} height={680} style={{left:400,top:702,opacity:arrive(f,12,22),transform:`translateX(${interpolate(f,[12,53],[500,0],smooth)}px) translateY(${interpolate(f,[12,53],[100,0],smooth)}px) rotateY(${interpolate(f,[12,63],[-42,-9],smooth)}deg) scale(${interpolate(f,[12,63],[.72,1],smooth)})`}}/>
  </div>
  <div style={{position:'absolute',left:85,top:1530,width:910,textAlign:'center',fontSize:48,fontWeight:800,letterSpacing:-1,color:K.white,opacity:arrive(f,69,20),transform:`translateY(${interpolate(f,[69,91],[25,0],smooth)}px)`}}>Castelo dos Sonhos<span style={{color:K.gold}}>.</span></div>
  <Caption at={87}>A experiência vem de dentro.</Caption>
 </AbsoluteFill>;
};
