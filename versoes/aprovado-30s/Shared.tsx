import React from 'react';
import {AbsoluteFill, CanvasImage, Easing, interpolate, staticFile, useCurrentFrame} from 'remotion';
export const C={white:'#FFFFFF',ink:'#161616',yellow:'#FEC400',red:'#DC2D32',gray:'#595959',light:'#F5F5F5'};
export const ease={extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:Easing.bezier(.16,1,.3,1)} as const;
export const enter=(f:number,at=0,d=20)=>interpolate(f,[at,at+d],[0,1],ease);
export const Base=({dark=false,children}:{dark?:boolean;children?:React.ReactNode})=><AbsoluteFill style={{background:dark?C.ink:C.white,color:dark?C.white:C.ink,fontFamily:'DejaVu, sans-serif',overflow:'hidden'}}>
 <AbsoluteFill style={{background:dark?'radial-gradient(ellipse at 60% 60%,#3a3218 0%,transparent 65%)':'radial-gradient(ellipse at 90% 70%,#fff2c8 0%,transparent 58%)'}}/>
 <div style={{position:'absolute',left:82,right:82,top:110,display:'flex',alignItems:'center',gap:18}}><div style={{width:12,height:12,background:C.red}}/><span style={{fontSize:22,letterSpacing:4.6,color:dark?'#dddddd':C.gray}}>MAIS FESTAS</span><div style={{height:1,flex:1,background:dark?'#555':'#dedede'}}/></div>
 {children}
</AbsoluteFill>;
export const Line=({children,at=0,size=100,color=C.ink,style={}}:{children:React.ReactNode;at?:number;size?:number;color?:string;style?:React.CSSProperties})=>{
 const f=useCurrentFrame();return <div style={{overflow:'hidden',paddingBottom:12,marginBottom:-12,...style}}><div style={{fontSize:size,fontWeight:700,lineHeight:1.12,letterSpacing:-4,color,translate:`0 ${interpolate(f,[at,at+20],[120,0],ease)}px`,opacity:enter(f,at,12)}}>{children}</div></div>;
};
export const Footer=({step,dark=false,label}:{step:string;dark?:boolean;label:string})=><div style={{position:'absolute',left:84,right:84,bottom:215}}><div style={{height:2,background:dark?'#ffffff30':'#16161620',marginBottom:24}}/><div style={{display:'flex',justifyContent:'space-between',fontSize:23,letterSpacing:2,color:dark?'#d0d0d0':C.gray}}><span>{label}</span><span>{step} / 03</span></div></div>;
export const Photo=({file,width,height,caption,style={}}:{file:string;width:number;height:number;caption:string;style?:React.CSSProperties})=><div style={{position:'absolute',width,padding:15,background:'#fff',boxShadow:'5px 5px 0 #ccc, 10px 10px 0 #999, 0 35px 70px #00000030',...style}}><div style={{height,overflow:'hidden'}}><CanvasImage src={staticFile(file)} premountFor={30} style={{width:'100%',height:'100%',objectFit:'cover'}}/></div><div style={{padding:'24px 15px 15px',fontSize:24,letterSpacing:2,color:C.ink}}>{caption}</div></div>;
