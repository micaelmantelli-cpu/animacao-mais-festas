import {CanvasImage, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {Base,C,ease,enter,Footer,Line} from './Shared';
export const Opening=()=>{
 const f=useCurrentFrame();
 return <Base>
 <div style={{position:'absolute',left:84,top:270}}><Line at={-12} size={91}>Antes de</Line><Line at={0} size={112}>explicar...</Line><div style={{height:13,marginTop:23,background:C.yellow,width:interpolate(f,[9,29],[0,620],ease)}}/></div>
 <div style={{position:'absolute',left:54,top:690,width:972,height:680,perspective:1200}}>
 <div style={{position:'absolute',left:80,top:25,width:740,height:600,border:'2px solid #e6c357',rotate:`${-9+Math.sin(f/45)*2}deg`,scale:interpolate(f,[0,30],[.8,1],ease),opacity:enter(f,5)}}/>
 <div style={{position:'absolute',left:115,top:0,width:710,height:650,background:C.yellow,rotate:`${5-Math.sin(f/40)*2}deg`,translate:`0 ${Math.sin(f/18)*7}px`,opacity:enter(f,4)}}/>
 <div style={{position:'absolute',left:25,top:45,width:870,height:620,background:'#fff',boxShadow:'0 30px 65px #16161622',border:'1px solid #eee',translate:`0 ${interpolate(f,[3,29],[150,0],ease)}px`,opacity:enter(f,3),scale:interpolate(f,[3,32],[.86,1],ease)}}>
 <CanvasImage src={staticFile('logo.png')} premountFor={30} style={{width:'100%',height:'100%',objectFit:'contain'}}/>
 </div>
 <div style={{position:'absolute',right:1,top:-35,width:100,height:100,borderRadius:100,background:C.red,color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontSize:57,boxShadow:'0 12px 28px #DC2D3240',scale:enter(f,22),rotate:`${interpolate(f,[22,50],[-35,0],ease)}deg`}}>↗</div>
 </div>
 <div style={{position:'absolute',left:84,top:1470,fontSize:43,color:C.gray,opacity:enter(f,44),translate:`0 ${interpolate(f,[44,63],[30,0],ease)}px`}}>Conheça a nossa história.</div>
 <Footer step="01" label="NOSSA HISTÓRIA"/>
 </Base>;
};
