import {Sequence,useCurrentFrame} from 'remotion';
import {arrive,Caption,K,vanish} from './FutureWorld';
import {Head,LinePath,Orb,Scene} from './Graphics';
export const Meeting=()=>{const f=useCurrentFrame();return <Scene>
 <div style={{opacity:vanish(f,129,14),position:'absolute',inset:0,translate:'0 35px'}}><Head first="Na sua próxima" second="reunião."/></div>
 <Sequence from={140} premountFor={30}><div style={{position:'absolute',inset:0,translate:'0 35px'}}><Head first="Mais do que" second="tráfego pago."/></div></Sequence>
 <LinePath d="M285 935C350 1220 650 1290 800 960 M285 935Q540 695 800 960" at={11} duration={60}/>
 <Orb x={285} y={935} icon="building" at={3} activeAt={8} size={191}/>
 <Orb x={800} y={960} icon="people" at={18} activeAt={28} size={191}/>
 <div style={{position:'absolute',left:125,top:1100,width:320,textAlign:'center',fontSize:34,opacity:arrive(f,17)}}>Seu negócio</div>
 <div style={{position:'absolute',left:640,top:1125,width:320,textAlign:'center',fontSize:34,opacity:arrive(f,32)}}>Nossa equipe</div>
 <div style={{position:'absolute',left:270,top:1340,width:540,height:170,borderRadius:26,border:'1px solid #B29855',background:'linear-gradient(130deg,#443722,#191612)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:45,fontWeight:800,color:K.gold,boxShadow:'0 25px 50px #0007',opacity:arrive(f,41)}}>Uma visão completa.</div>
 <div style={{position:'absolute',inset:0,translate:'0 50px'}}><Caption at={150}>Vamos olhar para a sua operação.</Caption></div>
</Scene>};
