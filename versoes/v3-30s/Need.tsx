import {AbsoluteFill,interpolate,useCurrentFrame} from 'remotion';
import {arrive,Caption,K,smooth,Title,vanish} from './FutureWorld';
export const Need=()=>{
 const f=useCurrentFrame();
 return <AbsoluteFill style={{opacity:arrive(f,0,14)*vanish(f,123,12)}}>
  <Title first="Da operação," second="uma necessidade."/>
  <svg width="1080" height="1920" style={{position:'absolute',inset:0}}>
   <defs><radialGradient id="needorb"><stop stopColor="#5b4320"/><stop offset=".8" stopColor="#241b12"/><stop offset="1" stopColor="#151313"/></radialGradient></defs>
   <g opacity={arrive(f,8)}>
    <path d="M280 860 Q540 845 540 1130 M800 880 Q550 910 540 1130 M310 1380 Q500 1370 540 1130" stroke="#FEC400" strokeWidth="2" strokeDasharray="1100" strokeDashoffset={1100*(1-arrive(f,10,55))} fill="none" opacity=".4"/>
    <circle cx="280" cy="860" r="83" fill="#191816" stroke="#8e702c"/>
    <rect x="247" y="834" width="66" height="56" rx="7" fill="none" stroke={K.gold} strokeWidth="3"/><path d="M247 852H313 M261 824V841 M298 824V841 M260 866H274 M286 866H299 M260 879H274" fill="none" stroke={K.gold} strokeWidth="3"/>
    <circle cx="800" cy="880" r="83" fill="#191816" stroke="#8e702c"/>
    <circle cx="800" cy="862" r="17" fill="none" stroke={K.gold} strokeWidth="3"/><path d="M767 910 Q767 883 800 883 Q833 883 833 910" fill="none" stroke={K.gold} strokeWidth="3"/>
    <circle cx="310" cy="1380" r="83" fill="#191816" stroke="#8e702c"/>
    <path d="M276 1405H344V1377H276Z M284 1377V1358H336V1377 M295 1358V1345 M325 1358V1345" fill="none" stroke={K.gold} strokeWidth="3"/>
   </g>
   <g style={{transformOrigin:'540px 1130px',transform:`scale(${interpolate(f,[36,68],[.15,1],smooth)})`,opacity:arrive(f,36,25)}}>
    <circle cx="540" cy="1130" r={175+Math.max(0,f-55)*.8} fill="none" stroke={K.red} strokeWidth="1" opacity={interpolate(f,[55,120],[.5,0],smooth)}/>
    <circle cx="540" cy="1130" r="176" fill="url(#needorb)" stroke="#b79549" strokeWidth="2"/>
    <circle cx="540" cy="1130" r="153" fill="none" stroke="#FEC400" opacity=".12"/>
    <path d="M540 1049V1146" stroke={K.gold} strokeWidth="16" strokeLinecap="round"/><circle cx="540" cy="1194" r="11" fill={K.red}/>
   </g>
  </svg>
  <Caption at={80}>Uma necessidade de quem vive o setor.</Caption>
 </AbsoluteFill>;
};
