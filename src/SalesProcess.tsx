import {Caption} from './FutureWorld';
import {Head,LinePath,Orb,Scene} from './Graphics';
export const SalesProcess=()=> <Scene>
 <Head first="Do atendimento" second="ao fechamento."/>
 <LinePath d="M239 759V1460" at={5} duration={105} length={750}/>
 <Orb x={239} y={759} icon="chat" size={98} label={undefined} at={0} activeAt={4}/>
 <Orb x={239} y={923} icon="calendar" size={98} at={17} activeAt={22}/>
 <Orb x={239} y={1087} icon="visit" size={98} at={38} activeAt={49}/>
 <Orb x={239} y={1251} icon="phone" size={98} at={61} activeAt={70}/>
 <Orb x={239} y={1415} icon="check" size={98} at={83} activeAt={98}/>
 <SalesLabel at={4} top={730}>Atendimento</SalesLabel>
 <SalesLabel at={22} top={894}>Agendamento</SalesLabel>
 <SalesLabel at={49} top={1058}>Visita</SalesLabel>
 <SalesLabel at={70} top={1222}>Follow-up</SalesLabel>
 <SalesLabel at={98} top={1386}>Fechamento</SalesLabel>
 <Caption at={113}>Um processo comercial completo.</Caption>
</Scene>;
import React from 'react';
import {useCurrentFrame,interpolate} from 'remotion';
import {arrive,smooth} from './FutureWorld';
const SalesLabel=({children,top,at}:{children:React.ReactNode;top:number;at:number})=>{const f=useCurrentFrame();return <div style={{position:'absolute',left:347,top,fontSize:44,fontWeight:800,opacity:arrive(f,at),transform:`translateX(${interpolate(f,[at,at+23],[30,0],smooth)}px)`}}>{children}</div>};
