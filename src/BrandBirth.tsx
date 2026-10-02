import {CanvasImage,staticFile,useCurrentFrame,interpolate} from 'remotion';
import {arrive,Caption,K,Podium,smooth} from './FutureWorld';
import {Head,Scene} from './Graphics';
export const BrandBirth=()=>{const f=useCurrentFrame();return <Scene>
 <Head first="Foi assim" second="que nascemos."/>
 <Podium/>
 <div style={{position:'absolute',left:165,top:785,width:750,height:580,borderRadius:'50%',background:'radial-gradient(ellipse,#FEC40027,transparent 70%)',scale:interpolate(f,[0,60],[.65,1.15],smooth)}}/>
 <CanvasImage src={staticFile('logo-clara.png')} premountFor={30} style={{position:'absolute',left:250,top:820,width:580,height:395,objectFit:'contain',opacity:arrive(f,7),scale:interpolate(f,[7,43],[.7,1],smooth)}}/>
 <div style={{position:'absolute',left:222,top:1260,width:640,height:2,background:`linear-gradient(90deg,transparent,${K.gold},transparent)`,opacity:arrive(f,24)}}/>
 <Caption at={40}>Mais Festas. Da operação para o mercado.</Caption>
</Scene>};
