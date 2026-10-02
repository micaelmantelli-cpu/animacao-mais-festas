import {CanvasImage,staticFile,interpolate,useCurrentFrame} from 'remotion';
import {arrive,Caption,K,smooth} from './FutureWorld';
import {Head,LinePath,Scene} from './Graphics';
import {Video} from '@remotion/media';
export const Inside=()=>{const f=useCurrentFrame();return <Scene>
 <div style={{position:'absolute',inset:0,translate:'0 35px'}}><Head first="De dentro" second="do seu mercado."/></div>
 <LinePath d="M290 1280 C280 1510 730 1530 790 1210" at={94} duration={65}/>
 <div style={{position:'absolute',inset:0,perspective:1800}}><div style={{position:'absolute',left:125,top:735,width:435,height:760,padding:7,borderRadius:19,border:'1px solid #c5a35a88',background:'#151310',boxShadow:'10px 14px 0 #111,0 35px 75px #0008',transform:`rotateY(${interpolate(f,[10,48],[28,10],smooth)}deg) translateY(${interpolate(f,[10,48],[90,0],smooth)}px)`,opacity:arrive(f,10)}}><div style={{position:'relative',width:'100%',height:'100%',overflow:'hidden',borderRadius:12}}>
  <Video src={staticFile('atendimento-real.mp4')} muted premountFor={30} durationInFrames={135} objectFit="cover" style={{position:'absolute',width:'100%',height:'100%'}}/>
  <Video src={staticFile('interior-real.mp4')} from={128} durationInFrames={147} muted premountFor={30} objectFit="cover" style={{position:'absolute',width:'100%',height:'100%',opacity:arrive(f,128,7)}}/>
 </div></div></div>
 <div style={{position:'absolute',left:580,top:980,width:370,height:290,background:'radial-gradient(ellipse,#665021,#151310 73%)',border:'1px solid #8f723c',borderRadius:28,boxShadow:'0 25px 60px #0008',opacity:arrive(f,87),scale:interpolate(f,[87,132],[.6,1],smooth),display:'flex',alignItems:'center',justifyContent:'center'}}><CanvasImage src={staticFile('logo-clara.png')} premountFor={30} style={{width:300,height:205,objectFit:'contain'}}/></div>
 <div style={{position:'absolute',left:90,top:1580,width:900,textAlign:'center',fontSize:40,fontWeight:800,color:K.gold,opacity:arrive(f,172)}}>Para resolver um problema real.</div>
 <div style={{position:'absolute',inset:0,translate:'0 60px'}}><Caption at={183}>Vivência antes de estratégia.</Caption></div>
</Scene>};
