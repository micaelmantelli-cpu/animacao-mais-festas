import {AbsoluteFill,interpolate,useCurrentFrame} from 'remotion';
import {arrive,Caption,K,smooth,vanish} from './FutureWorld';
import {Head} from './Graphics';

const Venue=({active=false}:{active?:boolean})=><svg width="132" height="118" viewBox="0 0 132 118">
 <defs><linearGradient id={active?'front-on':'front-off'} x2="1" y2="1"><stop stopColor={active?'#615222':'#292824'}/><stop offset="1" stopColor="#131313"/></linearGradient></defs>
 <path d="M13 88 65 62 119 88 66 115Z" fill="#FEC400" opacity=".07"/>
 <path d="M24 49 73 29 109 47 60 69Z" fill={active?'#d4ad45':'#706044'} stroke="#fbd973" strokeWidth="1.1"/>
 <path d="M24 49 60 69 60 105 24 85Z" fill="#292721" stroke="#68562f"/>
 <path d="M60 69 109 47 109 85 60 105Z" fill={`url(#${active?'front-on':'front-off'})`} stroke="#68562f"/>
 <path d="M24 49 73 29 109 47 60 69Z" fill="none" stroke={active?K.gold:'#8e7749'} strokeWidth={active?2.6:1}/>
 <path d="M31 60 41 66 41 80 31 74Z M46 69 53 73 53 87 46 83Z" fill={active?'#FEC400':'#5b5136'}/>
 <path d="M68 77 79 72 79 96 68 101Z M86 69 101 62 101 76 86 83Z" fill={active?'#FEC400':'#72603a'} opacity=".8"/>
</svg>;

export const Network=()=>{
 const f=useCurrentFrame(); const count=Math.min(20,Math.floor(interpolate(f,[5,36],[0,20],smooth)));
 return <AbsoluteFill style={{opacity:arrive(f,0,13)*vanish(f,173,13)}}>
  <Head first="Uma rede" second="de franquias."/>
  <div style={{position:'absolute',left:0,top:594,width:1080,textAlign:'center',opacity:arrive(f,4),transform:`translateY(${interpolate(f,[4,35],[60,0],smooth)}px)`}}>
   <div style={{fontSize:33,lineHeight:1,letterSpacing:5,color:K.muted,marginBottom:8}}>MAIS DE</div>
   <div style={{fontSize:243,fontWeight:800,lineHeight:1,letterSpacing:-13,color:K.gold,textShadow:'0 0 70px #FEC40025'}}>{count.toString().padStart(2,'0')}</div>
   <div style={{fontSize:40,lineHeight:1.25,marginTop:20,letterSpacing:-1}}>unidades de<br/><span style={{color:K.gold}}>espaços de eventos</span></div>
  </div>
  <svg width="1080" height="1920" style={{position:'absolute',inset:0,translate:'0 50px'}}>
   <path d="M 540 970 V 1030 M 204 1065 H 876 M 204 1190 H 876 M 204 1315 H 876 M204 1440 H876 M 204 1065 V1440 M372 1065 V1440 M540 1030 V1440 M708 1065 V1440 M876 1065 V1440" fill="none" stroke="#FEC400" strokeWidth="1.5" strokeDasharray="3100" strokeDashoffset={3100*(1-arrive(f,25,65))} opacity=".27"/>
  </svg>
  {Array.from({length:20},(_,i)=>{
   const on=f>28+i*2; const x=138+(i%5)*168; const y=1041+Math.floor(i/5)*125;
   const highlight=on&&(Math.floor((f-65)/9)%20===i||f<70);
   return <div key={i} style={{position:'absolute',left:x,top:y,opacity:arrive(f,14+i*1.7,19),transform:`translateY(${interpolate(f,[14+i*1.7,38+i*1.7],[65,0],smooth)}px)`,filter:highlight?'drop-shadow(0 0 12px #FEC40055)':'none'}}><Venue active={highlight}/></div>;
  })}
  <Caption at={93}>Vivemos o mercado de eventos todos os dias.</Caption>
 </AbsoluteFill>;
};
