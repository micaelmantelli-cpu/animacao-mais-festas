import {useCurrentFrame,interpolate} from 'remotion';
import {arrive,Caption,K,smooth} from './FutureWorld';
import {Head,LinePath,Orb,Scene} from './Graphics';
export const BeyondLead=()=>{const f=useCurrentFrame();return <Scene>
 <Head first="O lead chegou." second="E agora?"/>
 <LinePath d="M315 1030C510 935 610 1040 790 1200" at={10} duration={44}/>
 <Orb x={315} y={1030} icon="chat" label="Contato recebido" size={212} at={0} activeAt={8}/>
 <div style={{position:'absolute',left:700,top:1110,width:180,height:180,borderRadius:'50%',background:'radial-gradient(circle at 30% 20%,#70521e,#1a1712 75%)',border:'2px solid #a48a48',fontSize:110,fontWeight:800,color:K.gold,textAlign:'center',opacity:arrive(f,26),scale:interpolate(f,[26,59],[.45,1],smooth)}}>?</div>
 <Caption at={40}>Nosso trabalho continua.</Caption>
</Scene>};
