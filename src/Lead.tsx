import {useCurrentFrame} from 'remotion';
import {arrive,Caption,K} from './FutureWorld';
import {Head,Orb,Scene} from './Graphics';
export const Lead=()=>{const f=useCurrentFrame();return <Scene>
 <Head first="Não basta" second="gerar leads."/>
 <Orb x={540} y={1100} icon="people" size={310} at={3} activeAt={10}/>
 <div style={{position:'absolute',left:712,top:940,width:107,height:107,borderRadius:'50%',background:K.red,boxShadow:'0 0 50px #DC2D3220',fontSize:70,fontWeight:800,textAlign:'center',scale:arrive(f,14),opacity:arrive(f,14)}}>!</div>
 <Caption at={18}>O caminho continua depois do anúncio.</Caption>
</Scene>};
