import {interpolate,useCurrentFrame} from 'remotion';
import {Caption,K,arrive,cl,smooth} from './FutureWorld';
import {Head,Icon,Panel,Scene} from './Graphics';
export const Reality=()=>{const f=useCurrentFrame();return <Scene>
 <Head first="Na prática," second="faltava entender."/>
 <div style={{position:'absolute',inset:0,perspective:1500}}><Panel at={8} style={{left:227,top:790,width:615,height:595,transform:`rotateY(${interpolate(f,[8,48],[23,-5],smooth)}deg) translateY(${interpolate(f,[8,48],[120,0],smooth)}px)`}}>
  <div style={{position:'absolute',left:68,top:57,fontSize:27,letterSpacing:3,color:K.muted}}>PROMESSAS</div>
  <div style={{position:'absolute',left:63,top:139,fontSize:48,fontWeight:800,lineHeight:1.18}}>Entender<br/>o seu negócio.</div>
  <svg width="615" height="595" style={{position:'absolute',inset:0}}><path d="M60 284L520 132 M60 137L520 292" stroke={K.red} strokeWidth="8" strokeLinecap="round" strokeDasharray="1100" strokeDashoffset={1100*(1-arrive(f,28,34))}/></svg>
  <div style={{position:'absolute',left:64,top:352,display:'flex',gap:24,alignItems:'center',opacity:arrive(f,78)}}><Icon name="building"/><span style={{fontSize:36,color:K.gold}}>Como uma casa<br/>de festas vende.</span></div>
 </Panel></div>
 <div style={{position:'absolute',top:1480,left:240,width:600,height:2,background:K.gold,opacity:interpolate(f,[65,100],[0,.4],cl),scale:`${arrive(f,60,40)} 1`}}/>
 <Caption at={107}>Conhecer a operação faz diferença.</Caption>
</Scene>};
