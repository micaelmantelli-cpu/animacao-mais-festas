import {AbsoluteFill,interpolate,spring,useCurrentFrame} from 'remotion';
import {arrive,Caption,cl,K,Title,vanish} from './FutureWorld';
import {Circuit,MotionNode} from './SceneMotion';
export const Need=()=>{
 const f=useCurrentFrame();
 const enter=spring({frame:f-12,fps:30,config:{damping:14,stiffness:110,mass:.8}});
 const beat=Math.max(...[51,79,107].map(at=>f<at?0:Math.exp(-(f-at)/8)));
 return <AbsoluteFill style={{opacity:arrive(f,0,14)*vanish(f,123,12)}}>
  <Title first="Da operação," second="uma necessidade."/>
  <Circuit points={[[280,850],[430,815],[540,925],[540,1120]]} at={12} duration={39}/>
  <Circuit points={[[800,875],[625,870],[552,980],[540,1120]]} at={32} duration={47}/>
  <Circuit points={[[310,1365],[485,1390],[525,1270],[540,1120]]} at={54} duration={53}/>
  <MotionNode x={280} y={850} icon="calendar" label="Agenda" at={3} activeAt={11} size={158}/>
  <MotionNode x={800} y={875} icon="people" label="Clientes" at={20} activeAt={31} size={158}/>
  <MotionNode x={310} y={1365} icon="building" label="Festas" at={37} activeAt={53} size={158}/>
  <svg width="1080" height="1920" style={{position:'absolute',inset:0,pointerEvents:'none'}}>
   <defs><radialGradient id="needmetal" cx="30%" cy="20%" r="85%"><stop stopColor="#80622f"/><stop offset=".35" stopColor="#372a1c"/><stop offset="1" stopColor="#141211"/></radialGradient><filter id="needlight" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="10"/></filter></defs>
   <g opacity={arrive(f,17)} transform={'rotate('+(-20+f*.4)+' 540 1120)'}>
    <ellipse cx="540" cy="1120" rx="237" ry="207" fill="none" stroke={K.gold} opacity=".14"/>
    <ellipse cx="540" cy="1120" rx="237" ry="207" fill="none" stroke={K.gold} strokeWidth="3" strokeDasharray="95 1340" strokeDashoffset={-f*4} opacity=".75"/>
   </g>
   {[51,79,107].map(at=>{const p=interpolate(f,[at,at+29],[0,1],cl);return <circle key={at} cx="540" cy="1120" r={183+p*118} fill="none" stroke={at===79?K.red:K.gold} strokeWidth={2.8-p*2} opacity={f>=at?(1-p)*.55:0}/>;})}
   <g transform={'translate(540 1120) scale('+Math.max(.01,enter*(1+beat*.065))+') rotate('+(Math.sin(f/17)*2.5)+')'} opacity={arrive(f,12,12)}>
    <circle r="192" fill={K.gold} filter="url(#needlight)" opacity={.08+beat*.17}/>
    <circle cx="8" cy="13" r="177" fill="#090807" stroke="#785d2b" strokeWidth="2"/>
    <circle r="177" fill="url(#needmetal)" stroke="#c8a655" strokeWidth="2"/>
    <circle r="163" fill="none" stroke="#fff0bb" opacity=".13"/>
    <circle r="183" fill="none" stroke={K.gold} strokeWidth="3" strokeDasharray="105 1044" transform={'rotate('+(-110+f*1.8)+')'} opacity=".85"/>
    <path d="M0 -77V19" fill="none" stroke={K.gold} strokeWidth="16" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset={1-arrive(f,26,19)}/>
    <path d="M0 -77V19" fill="none" stroke={K.gold} strokeWidth="20" strokeLinecap="round" filter="url(#needlight)" opacity={(.15+beat*.65)*arrive(f,26,19)}/>
    <circle cy="67" r={11+beat*3} fill={K.red} opacity={arrive(f,36,12)}/>
   </g>
  </svg>
  <Caption at={76}>Uma necessidade de quem vive o setor.</Caption>
 </AbsoluteFill>;
};
