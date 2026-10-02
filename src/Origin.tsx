import {interpolate,useCurrentFrame} from 'remotion';
import {Base,C,ease,enter,Footer,Line,Photo} from './Shared';
export const Origin=()=>{
 const f=useCurrentFrame();
 return <Base dark>
 <div style={{position:'absolute',left:84,top:270}}><Line at={-4} size={98} color={C.white}>De onde</Line><Line at={4} size={112} color={C.yellow}>surgimos?</Line></div>
 <div style={{position:'absolute',left:840,top:560,width:90,height:90,borderRadius:'50%',border:'2px solid #FEC40080',scale:1+Math.sin(f/14)*.1,opacity:enter(f,10)}}><div style={{position:'absolute',inset:18,borderRadius:'50%',border:'2px solid #FEC400'}}/></div>
 <svg width="1080" height="1920" style={{position:'absolute',inset:0}}><path d="M 135 600 L 135 685 Q 135 735 190 735 L 400 735" fill="none" stroke={C.yellow} strokeWidth="3" strokeDasharray="430" strokeDashoffset={430*(1-enter(f,7,34))}/><circle cx="135" cy="600" r="8" fill={C.red}/></svg>
 <div style={{position:'absolute',inset:0,perspective:1600}}>
 <div style={{position:'absolute',left:200,top:780,width:700,height:710,border:'2px solid #ffffff22',transform:'rotateY(-12deg) rotateZ(5deg)',opacity:enter(f,10)}}/>
 <Photo file="origem.jpeg" width={760} height={650} caption="CASTELO DOS SONHOS · O INÍCIO" style={{left:145,top:760,opacity:enter(f,7),transform:`translateY(${interpolate(f,[7,35],[270,0],ease)}px) rotateY(${interpolate(f,[7,40],[-38,-9],ease)}deg) rotateZ(${interpolate(f,[7,40],[-10,-3],ease)}deg)`}}/>
 </div>
 <Footer step="02" dark label="TODA HISTÓRIA TEM UMA ORIGEM"/>
 </Base>;
};
