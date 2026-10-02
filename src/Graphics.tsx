import React from 'react';
import {AbsoluteFill,interpolate,useCurrentFrame} from 'remotion';
import {arrive,K,smooth} from './FutureWorld';
export type IconName='ad'|'chat'|'visit'|'check'|'people'|'target'|'play'|'chart'|'calendar'|'book'|'building'|'phone';
export const Icon=({name,size=72,color=K.gold}:{name:IconName;size?:number;color?:string})=><svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round">
 {name==='ad'&&<><path d="M19 41H35L75 23V77L35 60H19Z M30 60L37 84H49L43 64 M84 37L92 32 M85 51H95 M84 65L92 71"/></>}
 {name==='chat'&&<><path d="M19 21H82V68H46L25 83V68H19Z"/><path d="M32 36H69 M32 48H62"/></>}
 {name==='visit'&&<><path d="M16 44L50 17L85 44 M25 40V82H76V40 M43 82V58H59V82"/></>}
 {name==='check'&&<path d="M20 50L42 72L82 29" strokeWidth="6"/>}
 {name==='people'&&<><circle cx="50" cy="30" r="13"/><path d="M23 82V73C23 46 77 46 77 73V82 M18 27C3 29 7 51 19 51 M11 63C2 66 4 81 4 81 M82 27C97 29 93 51 81 51 M89 63C98 66 96 81 96 81"/></>}
 {name==='target'&&<><circle cx="50" cy="50" r="35"/><circle cx="50" cy="50" r="23"/><circle cx="50" cy="50" r="9"/><path d="M51 48L87 13 M76 14H87V25"/></>}
 {name==='play'&&<><rect x="11" y="19" width="78" height="63" rx="8"/><path d="M41 34L64 50L41 67Z"/></>}
 {name==='chart'&&<><path d="M18 16V84H86 M31 69V50 M48 69V39 M65 69V23 M25 40L46 24L62 31L84 12"/></>}
 {name==='calendar'&&<><rect x="16" y="24" width="68" height="60" rx="6"/><path d="M16 40H84 M33 15V32 M67 15V32 M30 55H40 M52 55H66 M30 69H40 M52 69H66"/></>}
 {name==='book'&&<><path d="M12 23Q29 14 50 27Q71 14 88 23V80Q66 72 50 83Q30 72 12 80Z M50 27V83 M23 39L39 43 M23 53L39 57 M61 43L77 39 M61 57L77 53"/></>}
 {name==='building'&&<><path d="M16 37H84V84H16Z M12 37L25 18H75L89 37 M38 84V58H60V84 M23 47H31 M68 47H77"/></>}
 {name==='phone'&&<><rect x="28" y="8" width="44" height="84" rx="8"/><path d="M42 18H58 M43 81H57"/></>}
</svg>;
export const Head=({first,second,firstSize=86,secondSize=96}:{first:string;second:string;firstSize?:number;secondSize?:number})=>{const f=useCurrentFrame();return <div style={{position:'absolute',left:86,top:304,width:908,fontWeight:800,letterSpacing:-3.3,lineHeight:1.1,opacity:arrive(f,0,18),transform:`translateY(${interpolate(f,[0,26],[35,0],smooth)}px)`}}><div style={{fontSize:firstSize}}>{first}</div><div style={{fontSize:secondSize,color:K.gold,marginTop:10,opacity:arrive(f,6,18)}}>{second}</div></div>};
export const Scene=({children}:{children:React.ReactNode})=>{const f=useCurrentFrame();return <AbsoluteFill style={{opacity:arrive(f,0,13)}}>{children}</AbsoluteFill>};
export const Orb=({x,y,icon,label,at=0,activeAt=0,size=150}:{x:number;y:number;icon:IconName;label?:string;at?:number;activeAt?:number;size?:number})=>{
 const f=useCurrentFrame();const active=arrive(f,activeAt,16);return <div style={{position:'absolute',left:x-size/2,top:y-size/2,width:size,height:size,opacity:arrive(f,at),transform:`translateY(${interpolate(f,[at,at+24],[42,0],smooth)}px)`}}>
  <div style={{position:'absolute',inset:-13,border:'1px solid #FEC400',borderRadius:'50%',opacity:active*.14,scale:1+.08*Math.sin(Math.max(0,f-activeAt)/15)}}/>
  <div style={{width:size,height:size,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'50%',background:'radial-gradient(circle at 29% 19%,#514328,#181613 67%)',border:`2px solid ${active>.3?'#b99b57':'#4d473b'}`,boxShadow:`9px 12px 18px #0009, inset 0 3px 7px #ffe19b22,0 0 ${active*40}px #FEC4001c`}}><Icon name={icon} size={size*.48} color={active>.3?K.gold:'#a09a8c'}/></div>
  {label&&<div style={{position:'absolute',top:size+21,left:-80,width:size+160,textAlign:'center',fontSize:34,fontWeight:500,color:K.white,whiteSpace:'nowrap'}}>{label}</div>}
 </div>;
};
export const Panel=({children,style={},at=0}:{children:React.ReactNode;style?:React.CSSProperties;at?:number})=>{const f=useCurrentFrame();return <div style={{position:'absolute',background:'linear-gradient(145deg,#333026,#171615 60%,#201b14)',border:'1px solid #a88b4d77',borderRadius:22,boxShadow:'9px 12px 0 #0b0b0c,10px 13px 0 #705d3c55,0 30px 60px #0007',opacity:arrive(f,at),transform:`translateY(${interpolate(f,[at,at+30],[85,0],smooth)}px)`,...style}}>{children}</div>};
export const LinePath=({d,at=0,duration=35,length=2000}:{d:string;at?:number;duration?:number;length?:number})=>{const f=useCurrentFrame();return <svg width="1080" height="1920" style={{position:'absolute',inset:0}}><path d={d} fill="none" stroke="#FEC400" strokeWidth="2" opacity=".5" strokeDasharray={length} strokeDashoffset={length*(1-arrive(f,at,duration))}/></svg>};
