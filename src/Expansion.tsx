import {interpolate,useCurrentFrame} from 'remotion';
import {arrive,Caption,K,smooth} from './FutureWorld';
import {Head,Icon,LinePath,Orb,Scene} from './Graphics';
export const Expansion=()=>{const f=useCurrentFrame();return <Scene>
 <div style={{position:'absolute',inset:0,translate:'0 35px'}}><Head first="Do Castelo" second="a outros espaços." secondSize={90}/></div>
 <LinePath d="M540 1060L260 790 M540 1060L820 790 M540 1060L180 1140 M540 1060L900 1140 M540 1060L310 1410 M540 1060L780 1410" at={35} duration={90}/>
 <Orb x={260} y={790} icon="building" at={30} activeAt={61} size={116}/>
 <Orb x={820} y={790} icon="building" at={44} activeAt={75} size={116}/>
 <Orb x={180} y={1140} icon="building" at={58} activeAt={89} size={116}/>
 <Orb x={900} y={1140} icon="building" at={72} activeAt={103} size={116}/>
 <Orb x={310} y={1410} icon="building" at={86} activeAt={117} size={116}/>
 <Orb x={780} y={1410} icon="building" at={100} activeAt={131} size={116}/>
 <div style={{position:'absolute',left:380,top:920,width:320,height:300,borderRadius:32,background:'radial-gradient(ellipse at 30% 15%,#5b4828,#1a1712 78%)',border:'2px solid #c3a355',boxShadow:'8px 12px 0 #0b0a08,0 0 45px #FEC40016',opacity:arrive(f,0),transform:`translateY(${interpolate(f,[0,30],[55,0],smooth)}px)`,display:'flex',flexDirection:'column',alignItems:'center'}}>
  <div style={{marginTop:37}}><Icon name="building" size={87}/></div>
  <div style={{marginTop:25,textAlign:'center',fontSize:34,lineHeight:1.16,fontWeight:800,color:K.gold,opacity:arrive(f,16)}}>Castelo dos<br/>Sonhos</div>
 </div>
 <div style={{position:'absolute',inset:0,translate:'0 50px'}}><Caption at={105}>Experiência aplicada a outros negócios.</Caption></div>
</Scene>};
