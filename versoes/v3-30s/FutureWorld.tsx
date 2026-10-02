import React from 'react';
import {AbsoluteFill, CanvasImage, Easing, interpolate, staticFile, useCurrentFrame} from 'remotion';

export const K={gold:'#FEC400',red:'#DC2D32',white:'#F8F8F5',muted:'#B8B5AC',black:'#0B0B0C'};
export const cl={extrapolateLeft:'clamp',extrapolateRight:'clamp'} as const;
export const smooth={...cl,easing:Easing.bezier(.16,1,.3,1)};
export const arrive=(f:number,start=0,length=25)=>interpolate(f,[start,start+length],[0,1],smooth);
export const vanish=(f:number,start:number,length=12)=>interpolate(f,[start,start+length],[1,0],cl);

export const FutureWorld=()=>{
 const f=useCurrentFrame();
 return <AbsoluteFill style={{background:K.black,overflow:'hidden'}}>
  <AbsoluteFill style={{background:'radial-gradient(ellipse at 50% 59%,#59400e66 0%,#211b1333 33%,transparent 65%)'}}/>
  <AbsoluteFill style={{background:'radial-gradient(ellipse at 93% 79%,#DC2D3218,transparent 40%)'}}/>
  <div style={{position:'absolute',left:175,top:715,width:720,height:840,background:'radial-gradient(ellipse,#FEC40013,transparent 67%)',filter:'blur(25px)',scale:1+Math.sin(f/90)*.08}}/>
  <svg width="1080" height="1920" style={{position:'absolute',inset:0}}>
   <defs><linearGradient id="floorfade" x1="0" y1="0" x2="0" y2="1"><stop stopColor="white" stopOpacity="0"/><stop offset=".35" stopColor="white" stopOpacity=".4"/><stop offset="1" stopColor="white" stopOpacity="0"/></linearGradient><mask id="floorMask"><rect x="0" y="1220" width="1080" height="700" fill="url(#floorfade)"/></mask></defs>
   <g mask="url(#floorMask)" stroke="#b39849" strokeWidth="1" opacity=".18">
    {Array.from({length:15},(_,i)=><line key={i} x1={540+(i-7)*33} y1="1200" x2={540+(i-7)*280} y2="2000"/>)}
    {[1235,1270,1320,1390,1485,1620,1790].map(y=><path key={y} d={`M0 ${y} Q540 ${y+14} 1080 ${y}`} fill="none"/>)}
   </g>
  </svg>
  {Array.from({length:35},(_,i)=><div key={i} style={{position:'absolute',left:74+(i*167)%940,top:580+((i*109-f*.2)%1050+1050)%1050,width:i%7===0?4:2,height:i%7===0?4:2,borderRadius:5,background:i%5===0?K.red:K.gold,opacity:(.1+(i%4)*.08)*(0.7+Math.sin(f/50+i)*.3),boxShadow:i%7===0?'0 0 12px #FEC40088':undefined}}/>)}
  <div style={{position:'absolute',left:83,top:97,display:'flex',alignItems:'center',gap:26}}>
   <CanvasImage src={staticFile('logo-clara.png')} premountFor={30} style={{width:126,height:86,objectFit:'contain'}}/>
   <div style={{width:1,height:37,background:'#ffffff25'}}/>
   <div style={{fontSize:20,letterSpacing:4.2,color:'#B8B5AC'}}>NOSSA HISTÓRIA</div>
  </div>
 </AbsoluteFill>;
};

export const Podium=()=>{
 const f=useCurrentFrame(); const p=arrive(f,-5,35);
 const angle=f*.011;
 return <svg width="1080" height="650" viewBox="0 0 1080 650" style={{position:'absolute',top:1070,left:0,opacity:p,transform:`translateY(${(1-p)*75}px)`}}>
  <defs>
   <radialGradient id="halo"><stop stopColor="#FEC400" stopOpacity=".25"/><stop offset="1" stopColor="#FEC400" stopOpacity="0"/></radialGradient>
   <linearGradient id="metal" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#252426"/><stop offset=".18" stopColor="#4a4536"/><stop offset=".3" stopColor="#151516"/><stop offset=".75" stopColor="#1f1e1b"/><stop offset=".9" stopColor="#665123"/><stop offset="1" stopColor="#181819"/></linearGradient>
   <radialGradient id="top"><stop stopColor="#373022"/><stop offset=".65" stopColor="#1e1c18"/><stop offset="1" stopColor="#373122"/></radialGradient>
   <linearGradient id="rim"><stop stopColor="#58400e"/><stop offset=".3" stopColor="#FEC400"/><stop offset=".53" stopColor="#fff2ab"/><stop offset=".72" stopColor="#FEC400"/><stop offset="1" stopColor="#534111"/></linearGradient>
   <filter id="glow"><feGaussianBlur stdDeviation="6"/></filter>
  </defs>
  <ellipse cx="540" cy="410" rx="500" ry="135" fill="url(#halo)"/>
  <ellipse cx="540" cy="392" rx="354" ry="93" fill="#000" opacity=".6"/>
  <path d="M170 280 A370 98 0 0 0 910 280 L910 335 A370 98 0 0 1 170 335 Z" fill="url(#metal)" stroke="#7a693933" strokeWidth="2"/>
  <ellipse cx="540" cy="335" rx="369" ry="98" fill="none" stroke="#FEC400" strokeWidth="2" opacity=".15"/>
  <ellipse cx="540" cy="280" rx="370" ry="98" fill="url(#top)" stroke="url(#rim)" strokeWidth="3"/>
  <ellipse cx="540" cy="280" rx="331" ry="82" fill="none" stroke="#e6b63633" strokeWidth="1"/>
  <ellipse cx="540" cy="280" rx="350" ry="90" fill="none" stroke="#FEC400" strokeWidth="5" filter="url(#glow)" opacity=".4"/>
  <ellipse cx="540" cy="280" rx="426" ry="121" fill="none" stroke="#FEC400" strokeWidth="1.5" opacity=".3"/>
  <ellipse cx="540" cy="280" rx="467" ry="135" fill="none" stroke="#ffffff" strokeWidth="1" opacity=".07"/>
  <path d={`M${540+426*Math.cos(angle)} ${280+121*Math.sin(angle)} a1 1 0 1 0 .1 .1`} stroke="#fff2aa" strokeWidth="7" strokeLinecap="round"/>
  <circle cx={540+426*Math.cos(angle)} cy={280+121*Math.sin(angle)} r="15" fill="#FEC400" filter="url(#glow)" opacity=".7"/>
  <circle cx={540+426*Math.cos(angle+Math.PI)} cy={280+121*Math.sin(angle+Math.PI)} r="4" fill={K.red}/>
 </svg>;
};

export const Title=({first,second,delay=0}:{first:string;second:string;delay?:number})=>{
 const f=useCurrentFrame();
 return <div style={{position:'absolute',left:86,top:304,width:910,fontFamily:'MotionSans',fontWeight:800,letterSpacing:-3.5,lineHeight:1.08}}>
  <div style={{fontSize:86,opacity:arrive(f,delay,15),transform:`translateY(${interpolate(f,[delay,delay+24],[38,0],smooth)}px)`,filter:`blur(${interpolate(f,[delay,delay+14],[5,0],cl)}px)`}}>{first}</div>
  <div style={{fontSize:96,marginTop:9,color:K.gold,opacity:arrive(f,delay+6,17),transform:`translateY(${interpolate(f,[delay+6,delay+30],[40,0],smooth)}px)`}}>{second}</div>
 </div>;
};
export const Caption=({children,at=0}:{children:React.ReactNode;at?:number})=>{const f=useCurrentFrame();return <div style={{position:'absolute',left:90,top:1640,width:900,textAlign:'center',fontSize:35,lineHeight:1.3,color:K.muted,opacity:arrive(f,at),transform:`translateY(${interpolate(f,[at,at+25],[18,0],smooth)}px)`}}>{children}</div>};

export const PhotoPanel=({src,width,height,style={}}:{src:string;width:number;height:number;style?:React.CSSProperties})=><div style={{position:'absolute',width,height,background:'#1c1b18',borderRadius:17,padding:7,boxShadow:'9px 12px 0 #131211, 10px 13px 0 #a27b2833, 0 35px 90px #000a, 0 0 45px #FEC40010',border:'1px solid #c5a35a88',...style}}>
 <div style={{position:'relative',width:'100%',height:'100%',overflow:'hidden',borderRadius:10}}><CanvasImage src={staticFile(src)} premountFor={30} style={{width:'100%',height:'100%',objectFit:'cover'}}/><div style={{position:'absolute',inset:0,background:'linear-gradient(125deg,#ffffff19,transparent 35%,transparent 65%,#FEC4000c)'}}/></div>
 <div style={{position:'absolute',top:0,left:32,right:32,height:2,background:'linear-gradient(90deg,transparent,#fff3c0,transparent)',boxShadow:'0 0 12px #FEC40055'}}/>
</div>;
