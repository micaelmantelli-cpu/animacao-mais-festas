import {CanvasImage,interpolate,Sequence,staticFile,useCurrentFrame} from 'remotion';
import {arrive,Caption,K,PhotoPanel,Podium,smooth,vanish} from './FutureWorld';
import {Head,Scene} from './Graphics';
import {Video} from '@remotion/media';
export const Closing=()=>{const f=useCurrentFrame();return <Scene>
 <div style={{opacity:vanish(f,126,20)}}><Head first="Mais do que" second="estudar o mercado." secondSize={84}/></div>
 <div style={{position:'absolute',inset:0,perspective:1700,opacity:vanish(f,121,33),transform:`scale(${interpolate(f,[115,156],[1,.85],smooth)})`}}>
  <PhotoPanel src="lucca-real.jpg" width={420} height={465} style={{left:110,top:898,opacity:arrive(f,3),transform:`rotateY(15deg) translateY(${interpolate(f,[3,38],[130,0],smooth)}px)`}}/>
  <div style={{position:'absolute',left:544,top:737,width:414,height:730,padding:7,background:'#181613',borderRadius:18,border:'1px solid #c5a35a88',boxShadow:'10px 13px 0 #111,0 35px 70px #0008',opacity:arrive(f,18),transform:`rotateY(-14deg) translateY(${interpolate(f,[18,53],[130,0],smooth)}px)`}}><div style={{width:'100%',height:'100%',overflow:'hidden',borderRadius:11}}><Video src={staticFile('familia-festa.mp4')} muted premountFor={30} durationInFrames={162} objectFit="cover" style={{width:'100%',height:'100%'}}/></div></div>
 </div>
 <Sequence from={135} premountFor={30}><Head first="Vivemos" second="esse mercado."/></Sequence>
 <div style={{position:'absolute',inset:0,opacity:arrive(f,138,32)}}>
  <Podium/>
  <CanvasImage src={staticFile('logo-clara.png')} premountFor={30} style={{position:'absolute',left:250,top:834,width:580,height:395,objectFit:'contain',scale:interpolate(f,[138,180],[.78,1],smooth)}}/>
  <div style={{position:'absolute',left:83,top:1520,width:910,textAlign:'center',fontSize:58,fontWeight:800,color:K.gold,opacity:arrive(f,186)}}>Todos os dias.</div>
 </div>
 <div style={{opacity:vanish(f,131,10)}}><Caption at={48}>Experiência que vem da prática.</Caption></div>
</Scene>};
