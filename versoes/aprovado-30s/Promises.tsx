import {AbsoluteFill,interpolate,useCurrentFrame} from 'remotion';
import {arrive,Caption,K,smooth,Title} from './FutureWorld';
export const Promises=()=>{
 const f=useCurrentFrame();
 return <AbsoluteFill style={{opacity:arrive(f,0,13)}}>
  <Title first="As promessas" second="eram boas."/>
  <svg width="1080" height="1920" style={{position:'absolute',inset:0}}>
   <defs><radialGradient id="promise-core" cx=".32" cy=".2"><stop stopColor="#806530"/><stop offset=".55" stopColor="#312819"/><stop offset="1" stopColor="#111111"/></radialGradient></defs>
   <ellipse cx="540" cy="1450" rx="290" ry="63" fill="#FEC400" opacity=".04"/>
   <g style={{transformOrigin:'540px 1120px',transform:`scale(${interpolate(f,[0,32],[.65,1],smooth)})`,opacity:arrive(f,0,18)}}>
    <circle cx="540" cy="1120" r="252" fill="none" stroke="#FEC400" opacity=".14" strokeWidth="1"/>
    <circle cx="540" cy="1120" r="221" fill="url(#promise-core)" stroke="#b9984e" strokeWidth="2"/>
    <circle cx="540" cy="1120" r="200" fill="none" stroke="#FEC400" opacity=".22"/>
    <path d="M433 1114 513 1190 653 1037" fill="none" stroke={K.gold} strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="320" strokeDashoffset={320*(1-arrive(f,12,30))}/>
    <circle cx="540" cy="1120" r={252+Math.max(0,f-27)*1.8} fill="none" stroke={K.gold} opacity={interpolate(f,[27,72],[.3,0],smooth)}/>
   </g>
  </svg>
  <Caption at={18}>Entender o segmento era a promessa.</Caption>
 </AbsoluteFill>;
};
