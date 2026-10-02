import React from 'react';
import {AbsoluteFill,Sequence,useCurrentFrame,staticFile,interpolate} from 'remotion';
import {Audio} from '@remotion/media';
import {FutureWorld,Podium,cl,vanish} from './FutureWorld';
import {FutureOpening} from './FutureOpening';
import {FutureOrigin} from './FutureOrigin';
import {FutureOperation} from './FutureOperation';
import {Network} from './Network';
import {Need} from './Need';
import {Founder} from './Founder';
import {Agencies} from './Agencies';
import {Promises} from './Promises';
import {Reality} from './Reality';
import {Lead} from './Lead';
import {Journey} from './Journey';
import {BrandBirth} from './BrandBirth';
import {Inside} from './Inside';
import {Expansion} from './Expansion';
import {Results} from './Results';
import {Pillars} from './Pillars';
import {Creative} from './Creative';
import {Audience} from './Audience';
import {BeyondLead} from './BeyondLead';
import {Training} from './Training';
import {SalesProcess} from './SalesProcess';
import {Dashboard} from './Dashboard';
import {Meeting} from './Meeting';
import {Integration} from './Integration';
import {Closing} from './Closing';

const End=({at,children}:{at:number;children:React.ReactNode})=>{const f=useCurrentFrame();return <AbsoluteFill style={{opacity:vanish(f,at,15)}}>{children}</AbsoluteFill>};
const World=()=>{const f=useCurrentFrame();return <FutureWorld chapter={f<1797?'NOSSA HISTÓRIA':f<2211?'NOSSO ECOSSISTEMA':f<3687?'MARKETING E VENDAS':'MAIS FESTAS'}/>};
const LightTransitions=()=>{const f=useCurrentFrame();const cuts=[87,170,297,478,606,701,827,885,1110,1166,1441,1537,1804,1978,2218,2509,2685,2828,2925,3154,3315,3694,3939,4093];const active=cuts.find(t=>f>=t-6&&f<=t+11);const opacity=active===undefined?0:interpolate(f,[active-6,active,active+11],[0,.12,0],cl);return <AbsoluteFill style={{pointerEvents:'none',background:'radial-gradient(ellipse at 60% 65%,#fff3ad 0%,#FEC40050 30%,transparent 70%)',opacity}}/>};

export const FullVideo=()=> <AbsoluteFill style={{fontFamily:'MotionSans',fontWeight:500,color:'#F8F8F5',background:'#0B0B0C',overflow:'hidden'}}>
 <World/>
 <Sequence name="Base luminosa" from={0} durationInFrames={310} premountFor={30}><End at={287}><Podium/></End></Sequence>
 <Sequence name="01 · Marca" from={0} durationInFrames={98} premountFor={30}><FutureOpening/></Sequence>
 <Sequence name="02 · Origem" from={80} durationInFrames={99} premountFor={30}><FutureOrigin/></Sequence>
 <Sequence name="03 · Dentro da operação" from={163} durationInFrames={146} premountFor={30}><End at={125}><FutureOperation/></End></Sequence>
 <Sequence name="04 · Mais de 20 unidades" from={291} durationInFrames={186} premountFor={30}><Network/></Sequence>
 <Sequence name="05 · A necessidade" from={471} durationInFrames={135} premountFor={30}><Need/></Sequence>
 <Sequence name="06 · Fernando Fernandes" from={599} durationInFrames={103} premountFor={30}><Founder/></Sequence>
 <Sequence name="07 · Outras assessorias" from={694} durationInFrames={134} premountFor={30}><Agencies/></Sequence>
 <Sequence name="08 · As promessas" from={820} durationInFrames={66} premountFor={30}><End at={51}><Promises/></End></Sequence>
 <Sequence name="09 · Entender como vende" from={878} durationInFrames={233} premountFor={30}><End at={218}><Reality/></End></Sequence>
 <Sequence name="10 · Não basta gerar leads" from={1103} durationInFrames={64} premountFor={30}><End at={49}><Lead/></End></Sequence>
 <Sequence name="11 · Jornada do anúncio à venda" from={1159} durationInFrames={283} premountFor={30}><End at={268}><Journey/></End></Sequence>
 <Sequence name="12 · Nasce a Mais Festas" from={1434} durationInFrames={104} premountFor={30}><End at={89}><BrandBirth/></End></Sequence>
 <Sequence name="13 · De dentro do nicho" from={1530} durationInFrames={275} premountFor={30}><End at={260}><Inside/></End></Sequence>
 <Sequence name="14 · Outros espaços" from={1797} durationInFrames={182} premountFor={30}><End at={167}><Expansion/></End></Sequence>
 <Sequence name="15 · Resultados do ecossistema" from={1971} durationInFrames={248} premountFor={30}><End at={233}><Results/></End></Sequence>
 <Sequence name="16 · Três pilares" from={2211} durationInFrames={299} premountFor={30}><End at={284}><Pillars/></End></Sequence>
 <Sequence name="17 · Conteúdo personalizado" from={2502} durationInFrames={184} premountFor={30}><End at={169}><Creative/></End></Sequence>
 <Sequence name="18 · Potencial de compra" from={2678} durationInFrames={151} premountFor={30}><End at={136}><Audience/></End></Sequence>
 <Sequence name="19 · Depois do lead" from={2821} durationInFrames={105} premountFor={30}><End at={90}><BeyondLead/></End></Sequence>
 <Sequence name="20 · Treinamento comercial" from={2918} durationInFrames={237} premountFor={30}><End at={222}><Training/></End></Sequence>
 <Sequence name="21 · Processo de vendas" from={3147} durationInFrames={169} premountFor={30}><End at={154}><SalesProcess/></End></Sequence>
 <Sequence name="22 · Dashboard de KPI" from={3308} durationInFrames={387} premountFor={30}><End at={372}><Dashboard/></End></Sequence>
 <Sequence name="23 · Reunião com a equipe" from={3687} durationInFrames={253} premountFor={30}><End at={238}><Meeting/></End></Sequence>
 <Sequence name="24 · Uma única operação" from={3932} durationInFrames={162} premountFor={30}><End at={147}><Integration/></End></Sequence>
 <Sequence name="25 · Vivemos esse mercado" from={4086} durationInFrames={294} premountFor={30}><Closing/></Sequence>
 <LightTransitions/>
 <Audio src={staticFile('mix-completa.wav')} premountFor={30}/>
</AbsoluteFill>;
