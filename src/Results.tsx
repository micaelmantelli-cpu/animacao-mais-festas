import {useCurrentFrame,interpolate} from 'remotion';
import {arrive,Caption,K,smooth} from './FutureWorld';
import {Head,Scene} from './Graphics';
export const Results=()=>{const f=useCurrentFrame();const clients=Math.round(interpolate(f,[18,77],[0,400],smooth));return <Scene>
 <Head first="Nosso" second="ecossistema."/>
 <div style={{position:'absolute',left:90,top:653,width:900,textAlign:'center',opacity:arrive(f,7)}}><div style={{fontSize:185,fontWeight:800,letterSpacing:-9,color:K.gold,lineHeight:1.04}}>+{clients}</div><div style={{fontSize:45,marginTop:20}}>clientes</div></div>
 <div style={{position:'absolute',left:160,top:985,width:760,height:1,background:'linear-gradient(90deg,transparent,#FEC40088,transparent)',scale:`${arrive(f,75,30)} 1`}}/>
 <div style={{position:'absolute',left:90,top:1107,width:900,textAlign:'center',opacity:arrive(f,129,24),transform:`translateY(${interpolate(f,[129,165],[50,0],smooth)}px)`}}><div style={{fontSize:33,color:K.muted,letterSpacing:3}}>MAIS DE</div><div style={{fontSize:146,fontWeight:800,color:K.gold,letterSpacing:-6,lineHeight:1.25}}>R$ 2 milhões</div><div style={{fontSize:40,lineHeight:1.3}}>em festas vendidas<br/>por mês</div></div>
 <Caption at={172}>Resultados do nosso ecossistema.</Caption>
</Scene>};
