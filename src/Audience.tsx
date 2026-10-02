import {interpolate,useCurrentFrame} from 'remotion';
import {arrive,Caption,K,smooth} from './FutureWorld';
import {Head,LinePath,Orb,Scene} from './Graphics';
export const Audience=()=>{const f=useCurrentFrame();return <Scene>
 <Head first="Atrair quem tem" second="potencial de compra." firstSize={80} secondSize={79}/>
 <LinePath d="M260 815L540 1110 M850 900L540 1110 M270 1435L540 1110" at={12} duration={50}/>
 <Orb x={260} y={815} icon="people" size={115} at={5} activeAt={32}/><Orb x={850} y={900} icon="people" size={115} at={17} activeAt={46}/><Orb x={270} y={1435} icon="people" size={115} at={31} activeAt={60}/>
 <svg width="1080" height="1920" style={{position:'absolute',inset:0}}><g style={{transformOrigin:'540px 1110px',transform:`scale(${interpolate(f,[6,38],[.55,1],smooth)})`,opacity:arrive(f,6)}}><circle cx="540" cy="1110" r="228" fill="#171411" stroke="#8c6f36" strokeWidth="2"/><circle cx="540" cy="1110" r="176" fill="none" stroke="#FEC400" strokeWidth="2" opacity=".35"/><circle cx="540" cy="1110" r="116" fill="none" stroke="#FEC400" strokeWidth="5" opacity=".7"/><circle cx="540" cy="1110" r="46" fill={K.red}/><path d="M540 1110L695 955 M656 955H695V994" stroke={K.gold} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="300" strokeDashoffset={300*(1-arrive(f,43,40))}/></g></svg>
 <Caption at={80}>Estratégia para encontrar o público certo.</Caption>
</Scene>};
