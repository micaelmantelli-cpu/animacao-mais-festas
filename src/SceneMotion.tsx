import {interpolate,spring,useCurrentFrame} from 'remotion';
import {arrive,cl,K} from './FutureWorld';
import {Icon,IconName} from './Graphics';

export const MotionNode=({x,y,at=0,activeAt=0,label,icon,size=150}:{x:number;y:number;at?:number;activeAt?:number;label:string;icon:IconName|'money';size?:number})=>{
 const f=useCurrentFrame();
 const enter=spring({frame:f-at,fps:30,config:{damping:13,stiffness:108,mass:.7}});
 const active=arrive(f,activeAt,15);
 const pulse=(.5+.5*Math.sin((f-activeAt)/7))*active;
 const bob=Math.sin((f-at)/17)*9*arrive(f,at+20);
 return <div style={{position:'absolute',left:x-size/2,top:y-size/2,opacity:arrive(f,at,10),transform:'translateY('+((1-enter)*110+bob)+'px) scale('+Math.max(.01,enter*(1+active*.018*Math.sin(f/9)))+')'}}>
  <div style={{position:'absolute',inset:-13,borderRadius:'50%',border:'1px solid #FEC400',opacity:active*(.13+pulse*.16),scale:1+pulse*.16}}/>
  <svg width={size+34} height={size+34} style={{position:'absolute',left:-17,top:-17,rotate:(f*1.7+at*4)+'deg',opacity:.3+active*.5}}><circle cx={(size+34)/2} cy={(size+34)/2} r={(size+22)/2} fill="none" stroke={K.gold} strokeWidth="2" strokeDasharray="65 600"/></svg>
  <div style={{width:size,height:size,display:'flex',alignItems:'center',justifyContent:'center',background:'radial-gradient(circle at 29% 18%,#66512d,#1a1713 70%)',borderRadius:'50%',border:'2px solid '+(active>.4?'#d3b364':'#6f603c'),boxShadow:'8px 12px 0 #090908,0 20px 30px #0007,inset 0 3px 8px #ffedb333,0 0 '+(15+pulse*32)+'px #FEC40022',transform:'rotateY('+(Math.sin(f/24+at)*8)+'deg)'}}>
   {icon==='money'?<svg width={size*.52} height={size*.52} viewBox="0 0 100 100" fill="none" stroke={active>.4?K.gold:'#b7a275'} strokeWidth="5" strokeLinecap="round" style={{transform:'rotateY('+(360*(1-arrive(f,activeAt,28)))+'deg)'}}><path d="M74 28C63 11 29 15 29 34C29 53 72 44 72 65C72 86 37 88 24 70 M50 7V94"/></svg>:<Icon name={icon} size={size*.48} color={active>.4?K.gold:'#b7a275'}/>}
  </div>
  <div style={{position:'absolute',top:size+24,left:-90,width:size+180,textAlign:'center',fontSize:33,color:active>.4?'#fff7df':K.muted}}>{label}</div>
 </div>;
};

type Point=[number,number];
export const Circuit=({points,at,duration=40,red=false}:{points:[Point,Point,Point,Point];at:number;duration?:number;red?:boolean})=>{
 const f=useCurrentFrame();
 const draw=interpolate(f,[at,at+duration],[0,1],cl);
 const travel=f<at+duration?draw:((f-at-duration)%52)/52;
 const [a,b,c,d]=points;
 const point=(t:number):Point=>[(1-t)**3*a[0]+3*(1-t)**2*t*b[0]+3*(1-t)*t*t*c[0]+t**3*d[0],(1-t)**3*a[1]+3*(1-t)**2*t*b[1]+3*(1-t)*t*t*c[1]+t**3*d[1]];
 const color=red?K.red:K.gold;
 return <svg width="1080" height="1920" style={{position:'absolute',inset:0,pointerEvents:'none'}}>
  <path d={'M'+a.join(' ')+' C'+b.join(' ')+' '+c.join(' ')+' '+d.join(' ')} pathLength="1" fill="none" stroke={color} strokeWidth="2" strokeDasharray="1" strokeDashoffset={1-draw} opacity=".4"/>
  <g opacity={arrive(f,at,8)}>
   {[0,1,2,3,4].map(i=>{const p=point(Math.max(0,travel-i*.018));return <circle key={i} cx={p[0]} cy={p[1]} r={i===0?6:4} fill={i===0?'#fff1b4':color} opacity={1-i*.18}/>;})}
   <circle cx={point(travel)[0]} cy={point(travel)[1]} r="14" fill={color} opacity=".18"/>
  </g>
 </svg>;
};
