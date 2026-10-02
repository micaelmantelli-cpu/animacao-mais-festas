import {AbsoluteFill,CanvasImage,interpolate,staticFile,useCurrentFrame} from 'remotion';
import {arrive,Caption,cl,K,smooth,Title,vanish} from './FutureWorld';

export const FutureOpening=()=>{
 const f=useCurrentFrame();const gone=1-vanish(f,77,16);
 return <AbsoluteFill style={{opacity:vanish(f,80,16)}}>
  <div style={{opacity:vanish(f,75,13)}}><Title first="Antes de explicar" second="o que fazemos." delay={-9}/></div>
  <div style={{position:'absolute',left:540,top:1070,width:0,height:0,transform:`translateY(${-gone*60}px) scale(${interpolate(f,[0,35,77,96],[.85,1,1.02,.35],smooth)})`,opacity:arrive(f,-5,24)}}>
   <svg width="930" height="820" viewBox="0 0 930 820" style={{position:'absolute',left:-465,top:-410,overflow:'visible'}}>
    <defs><radialGradient id="orbGlow"><stop stopColor="#FEC400" stopOpacity=".2"/><stop offset="1" stopColor="#FEC400" stopOpacity="0"/></radialGradient><linearGradient id="orbitStroke"><stop stopColor="#FEC40000"/><stop offset=".25" stopColor="#FEC40088"/><stop offset=".55" stopColor="#fff3b8"/><stop offset=".8" stopColor="#FEC40088"/><stop offset="1" stopColor="#FEC40000"/></linearGradient></defs>
    <ellipse cx="465" cy="430" rx="430" ry="310" fill="url(#orbGlow)"/>
    <ellipse cx="465" cy="440" rx="413" ry="173" fill="none" stroke="url(#orbitStroke)" strokeWidth="2" transform={`rotate(${-19+f*.04} 465 440)`}/>
    <ellipse cx="465" cy="420" rx="373" ry="292" fill="none" stroke="#FEC400" strokeOpacity=".13" strokeWidth="1"/>
    <path d="M160 635 Q450 845 778 627" fill="none" stroke={K.red} strokeOpacity=".42" strokeWidth="2"/>
    <circle cx={465+410*Math.cos(f*.024+3.6)} cy={440+185*Math.sin(f*.024+3.6)} r="6" fill="#fff3b8" style={{filter:'drop-shadow(0 0 12px #FEC400)'}}/>
   </svg>
   <CanvasImage src={staticFile('logo-clara.png')} premountFor={30} style={{position:'absolute',left:-295,top:-230,width:590,height:402,objectFit:'contain',opacity:arrive(f,1,20),translate:`0 ${interpolate(f,[0,32],[60,0],smooth)}px`}}/>
   <div style={{position:'absolute',left:-1,top:222,width:2,height:80,background:'linear-gradient(#FEC40000,#FEC40099)',opacity:interpolate(f,[0,30],[0,.5],cl)}}/>
  </div>
  <Caption at={37}>Antes de tudo, a nossa origem.</Caption>
 </AbsoluteFill>;
};
