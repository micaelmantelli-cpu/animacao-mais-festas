import {CanvasImage,staticFile,useCurrentFrame} from 'remotion';
import {arrive,Caption} from './FutureWorld';
import {Head,LinePath,Orb,Scene} from './Graphics';
export const Integration=()=>{const f=useCurrentFrame();return <Scene>
 <Head first="Tudo conectado." second="Uma só operação." secondSize={89}/>
 <LinePath d="M265 837L535 1110 M816 890L535 1110 M540 1420L535 1110" at={20} duration={80}/>
 <Orb x={265} y={837} icon="ad" label="Marketing" at={0} activeAt={24} size={152}/>
 <Orb x={816} y={890} icon="people" label="Demanda" at={23} activeAt={51} size={152}/>
 <Orb x={540} y={1420} icon="chart" label="Vendas" at={44} activeAt={70} size={152}/>
 <div style={{position:'absolute',left:363,top:1028,width:350,height:249,borderRadius:28,background:'radial-gradient(ellipse,#6b5324,#191512 75%)',border:'1px solid #9c8045',boxShadow:'0 0 55px #FEC4001a',display:'flex',alignItems:'center',justifyContent:'center',opacity:arrive(f,74),scale:.8+.2*arrive(f,74)}}><CanvasImage src={staticFile('logo-clara.png')} premountFor={30} style={{width:284,height:194,objectFit:'contain'}}/></div>
 <Caption at={104}>Marketing, demanda e vendas.</Caption>
</Scene>};
