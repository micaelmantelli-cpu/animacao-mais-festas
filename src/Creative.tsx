import {CanvasImage,interpolate,staticFile,useCurrentFrame} from 'remotion';
import {arrive,Caption,K,smooth} from './FutureWorld';
import {Head,Panel,Scene} from './Graphics';
import {Video} from '@remotion/media';
export const Creative=()=>{const f=useCurrentFrame();return <Scene>
 <Head first="Anúncios, vídeos" second="e imagens." firstSize={82}/>
 <div style={{position:'absolute',inset:0,perspective:1700}}>
  <Panel at={34} style={{left:534,top:929,width:374,height:451,padding:15,transform:`rotateY(-15deg) translateY(${interpolate(f,[34,68],[110,0],smooth)}px)`}}><CanvasImage src={staticFile('lucca-real.jpg')} premountFor={30} style={{width:'100%',height:352,objectFit:'cover',borderRadius:10}}/><div style={{fontSize:24,letterSpacing:2,color:K.gold,marginTop:24,marginLeft:12}}>IMAGENS</div></Panel>
  <div style={{position:'absolute',left:166,top:738,width:383,height:739,borderRadius:46,background:'linear-gradient(100deg,#9e8653,#26231b 6%,#151412 92%,#786039)',border:'2px solid #b99b58',padding:15,boxShadow:'14px 16px 0 #0b0b0b,0 35px 65px #0008',opacity:arrive(f,5),transform:`rotateY(${interpolate(f,[5,44],[31,8],smooth)}deg) translateY(${interpolate(f,[5,44],[130,0],smooth)}px)`}}>
   <div style={{height:'100%',position:'relative',overflow:'hidden',borderRadius:32}}><Video src={staticFile('entrada-festa.mp4')} muted premountFor={30} objectFit="cover" style={{width:'100%',height:'100%'}}/><div style={{position:'absolute',inset:0,background:'linear-gradient(transparent 65%,#000b)'}}/><div style={{position:'absolute',left:33,bottom:47,fontSize:31,fontWeight:800}}>Seu espaço.<br/>Sua identidade.</div></div>
   <div style={{position:'absolute',top:23,left:140,width:118,height:16,borderRadius:15,background:'#080808'}}/>
  </div>
 </div>
 <Caption at={77}>Conteúdo personalizado para o seu negócio.</Caption>
</Scene>};
