import {interpolate,useCurrentFrame} from 'remotion';
import {arrive,Caption,K,smooth} from './FutureWorld';
import {Head,Icon,IconName,Scene} from './Graphics';
const Pillar=({x,at,name,number,icon}:{x:number;at:number;name:string;number:string;icon:IconName})=>{const f=useCurrentFrame();return <div style={{position:'absolute',left:x,top:885,width:260,height:580,opacity:arrive(f,at),transform:`translateY(${interpolate(f,[at,at+37],[220,0],smooth)}px)`}}><div style={{position:'absolute',left:17,top:50,width:244,height:510,background:'linear-gradient(90deg,#201b13,#0c0c0c)',transform:'skewY(-9deg)',border:'1px solid #6b573a'}}/><div style={{position:'absolute',inset:'0 10px 0 0',background:'linear-gradient(125deg,#56472a,#1e1b16 48%,#141311)',border:'1px solid #b89b51',borderRadius:'14px 14px 5px 5px',padding:29,boxShadow:'0 25px 45px #0008'}}><div style={{fontSize:26,color:K.gold,letterSpacing:3}}>{number}</div><div style={{marginTop:38}}><Icon name={icon} size={83}/></div><div style={{fontSize:34,fontWeight:800,lineHeight:1.25,marginTop:43,whiteSpace:'pre-line'}}>{name}</div><div style={{position:'absolute',left:30,right:30,bottom:40,height:3,background:K.gold,boxShadow:'0 0 20px #FEC40066'}}/></div></div>};
export const Pillars=()=> <Scene>
 <Head first="Três pilares." second="Uma operação."/>
 <Pillar x={115} at={70} name={'Demanda\nde clientes'} number="01" icon="people"/>
 <Pillar x={410} at={151} name={'Estratégia\nde marketing'} number="02" icon="target"/>
 <Pillar x={705} at={193} name={'Processo\nde vendas'} number="03" icon="chart"/>
 <Caption at={225}>Marketing e vendas conectados.</Caption>
</Scene>;
