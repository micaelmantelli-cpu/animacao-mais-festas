import {useCurrentFrame,interpolate} from 'remotion';
import {arrive,Caption,K,smooth} from './FutureWorld';
import {Head,Icon,Scene} from './Graphics';
export const Dashboard=()=>{const f=useCurrentFrame();return <Scene>
 <Head first="Sua operação" second="em números."/>
 <div style={{position:'absolute',inset:0,perspective:1900}}><div style={{position:'absolute',left:105,top:734,width:855,height:770,padding:34,boxSizing:'border-box',borderRadius:22,background:'linear-gradient(130deg,#353025,#161514 65%)',border:'1px solid #b1955277',boxShadow:'10px 13px 0 #0b0b0b,11px 14px 0 #7d683e44,0 30px 80px #0009',opacity:arrive(f,7),transform:`translateY(${interpolate(f,[7,48],[160,0],smooth)}px) rotateY(${interpolate(f,[7,48],[22,-4],smooth)}deg)`}}>
  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid #FEC40022',paddingBottom:26}}><span style={{fontSize:29,fontWeight:800,letterSpacing:1}}>DASHBOARD DE KPI</span><Icon name="chart" size={36}/></div>
  <div style={{display:'flex',gap:17,marginTop:24}}>
   <Metric name="Marketing" at={91} icon="ad"/>
   <Metric name="Metas" at={176} icon="target"/>
   <Metric name="Vendas" at={210} icon="chart"/>
  </div>
  <div style={{position:'absolute',left:35,top:338,width:463,height:328,border:'1px solid #ffffff13',background:'#08080833',borderRadius:12,opacity:arrive(f,226)}}>
   <div style={{fontSize:25,color:K.muted,padding:'21px 24px'}}>Dados comerciais</div>
   <svg width="463" height="231"><path d="M26 45H433 M26 100H433 M26 155H433 M26 208H433" stroke="#ffffff0e"/>{[75,132,95,167,143,194].map((h,i)=><rect key={i} x={33+i*67} y={215-h*arrive(f,235+i*8,38)} width="31" height={h*arrive(f,235+i*8,38)} rx="4" fill={i===5?K.gold:'#A08742'}/>)}</svg>
  </div>
  <div style={{position:'absolute',left:523,right:32,top:338,height:328,border:'1px solid #ffffff13',background:'#08080833',borderRadius:12,opacity:arrive(f,286)}}>
   <div style={{fontSize:25,padding:'22px 19px',color:K.muted}}>Otimizações</div>
   {[0,1,2].map((n)=><div key={n} style={{display:'flex',alignItems:'center',gap:13,padding:'10px 23px',opacity:arrive(f,293+n*13)}}><Icon name="check" size={29}/><div style={{height:6,width:100-n*13,background:'#d4bb7944',borderRadius:4}}/></div>)}
  </div>
  <div style={{position:'absolute',left:35,bottom:23,fontSize:17,letterSpacing:1.2,color:'#91897a'}}>REPRESENTAÇÃO VISUAL DOS INDICADORES</div>
 </div></div>
 <Caption at={290}>Acompanhe os números e as otimizações.</Caption>
</Scene>};
const Metric=({name,at,icon}:{name:string;at:number;icon:'ad'|'target'|'chart'})=>{const f=useCurrentFrame();return <div style={{flex:1,height:187,background:'linear-gradient(140deg,#FEC40013,#FEC40003)',border:'1px solid #FEC40030',borderRadius:12,padding:21,boxSizing:'border-box',opacity:arrive(f,at)}}><Icon name={icon} size={43}/><div style={{fontSize:27,fontWeight:800,marginTop:20}}>{name}</div><div style={{height:4,background:K.gold,marginTop:18,width:`${arrive(f,at+12,35)*80}%`}}/></div>};
