import {useCurrentFrame,interpolate} from 'remotion';
import {arrive,Caption,K,smooth} from './FutureWorld';
import {Head,Icon,Panel,Scene} from './Graphics';
export const Training=()=>{const f=useCurrentFrame();return <Scene>
 <Head first="Treinamento" second="comercial atualizado." secondSize={79}/>
 <div style={{position:'absolute',inset:0,perspective:1800}}><Panel at={5} style={{left:155,top:779,width:770,height:555,padding:35,boxSizing:'border-box',transform:`rotateY(${interpolate(f,[5,44],[25,-4],smooth)}deg) translateY(${interpolate(f,[5,44],[130,0],smooth)}px)`}}>
  <div style={{fontSize:24,letterSpacing:3,color:K.gold}}>MAIS FESTAS · COMERCIAL</div>
  <div style={{position:'absolute',left:34,top:97,width:430,height:326,background:'radial-gradient(ellipse,#655022,#161410)',border:'1px solid #7b663a',borderRadius:13,display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name="play" size={125}/></div>
  <div style={{position:'absolute',left:496,top:95,width:226}}>{['Atendimento','Visita','Fechamento'].map((t,i)=><div key={t} style={{padding:'23px 15px',fontSize:21,marginBottom:14,borderRadius:8,background:'#FEC4000d',border:'1px solid #FEC40022',opacity:arrive(f,25+i*24),color:K.white}}><span style={{color:K.gold,marginRight:12}}>0{i+1}</span>{t}</div>)}</div>
  <div style={{position:'absolute',left:36,right:36,bottom:37,height:5,background:'#ffffff15',borderRadius:5}}><div style={{height:5,width:`${interpolate(f,[30,210],[0,95],smooth)}%`,background:K.gold,boxShadow:'0 0 15px #FEC40044'}}/></div>
 </Panel><div style={{position:'absolute',left:117,top:1361,width:845,height:65,background:'linear-gradient(#655838,#171612)',clipPath:'polygon(6% 0,94% 0,100% 70%,97% 100%,3% 100%,0 70%)',opacity:arrive(f,16)}}/></div>
 <Caption at={119}>Baseado no que usamos para vender festas.</Caption>
</Scene>};
