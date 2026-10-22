'use client';
import Link from 'next/link';
import {useEffect,useRef,useState} from 'react';

const works=[
{title:'THE ART OF PRESENCE',type:'WOMEN / MAINBOARD',year:'01',image:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=85',href:'/models/women'},
{title:'BEYOND THE FRAME',type:'MEN / MAINBOARD',year:'02',image:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1400&q=85',href:'/models/men'},
{title:'THE NEXT GENERATION',type:'DISCOVERY / NEXT FACE',year:'03',image:'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1400&q=85',href:'/models/kids'},
{title:'CREATIVE WORLDS',type:'PRODUCTION / PARTNERSHIPS',year:'04',image:'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=85',href:'/nude-media'}
];
const services=[
{title:'MODEL MANAGEMENT',detail:'Carefully curated representation for emerging and established talent across India and Sri Lanka.',href:'/models/women'},
{title:'CREATIVE PRODUCTION',detail:'Casting, image-making and production collaborations with The Nude Media Agency.',href:'/nude-media'},
{title:'TALENT DEVELOPMENT',detail:'Mentorship, career guidance and international opportunities for distinctive new faces.',href:'/apply'}
];
export default function NewHome(){
const root=useRef<HTMLDivElement>(null);
const [service,setService]=useState(0);
useEffect(()=>{
 const node=root.current;if(!node)return;
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const revealNodes=Array.from(node.querySelectorAll<HTMLElement>('.nh-reveal'));
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in');observer.unobserve(entry.target)}}),{threshold:.08,rootMargin:'0px 0px -35px 0px'});
 revealNodes.forEach(el=>observer.observe(el));
 const animated=Array.from(node.querySelectorAll<HTMLElement>('[data-scroll-motion]'));
 let raf=0;
 const update=()=>{
  raf=0;const viewport=window.innerHeight;
  const hero=node.querySelector<HTMLElement>('.nh-hero');
  const heroProgress=hero?Math.max(0,Math.min(1,-hero.getBoundingClientRect().top/Math.max(1,hero.offsetHeight))):0;
  node.style.setProperty('--nh-hero-y',reduced?'0px':(heroProgress*95).toFixed(1)+'px');
  node.style.setProperty('--nh-hero-text-y',reduced?'0px':(-heroProgress*45).toFixed(1)+'px');
  animated.forEach(el=>{
   const rect=el.getBoundingClientRect();
   const progress=Math.max(0,Math.min(1,(viewport-rect.top)/(viewport+rect.height)));
   const amount=Number(el.dataset.scrollMotion||30);
   el.style.setProperty('--motion-y',reduced?'0px':((.5-progress)*amount*2).toFixed(1)+'px');
   el.style.setProperty('--motion-scale',reduced?'1':(1.07-progress*.07).toFixed(3));
  });
 };
 const schedule=()=>{if(!raf)raf=window.requestAnimationFrame(update)};
 schedule();window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule);
 if(reduced)revealNodes.forEach(el=>el.classList.add('in'));
 return()=>{observer.disconnect();window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);if(raf)cancelAnimationFrame(raf)}
},[]);
return <div className="nh" ref={root}>
<style>{`
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap');
.nh{--paper:#e9e9e5;--ink:#20211f;background:var(--paper);color:var(--ink);font-family:'DM Sans',sans-serif;overflow:hidden}.nh *{box-sizing:border-box}.nh h1,.nh h2,.nh h3,.nh button{font-style:normal}.nh .display{font-family:'Barlow Condensed','Arial Narrow',Impact,sans-serif;font-weight:800;letter-spacing:-.025em;line-height:.83;text-transform:uppercase}.nh .label{font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase}.nh .nh-button{display:inline-flex;gap:35px;align-items:center;border:1px solid currentColor;padding:13px 20px;font-size:10px;font-weight:700;letter-spacing:.13em;transition:background .3s,color .3s}.nh .nh-button:hover{background:var(--ink);color:#fff}.nh .nh-hero{position:relative;min-height:720px;height:min(86svh,980px);padding:35px 4% 45px;display:grid;grid-template-columns:1fr 1fr;align-items:end;overflow:hidden}.nh .hero-ghost{position:absolute;z-index:0;top:3%;left:-1%;font-size:clamp(210px,31vw,600px);color:#dcdcd8;white-space:nowrap;line-height:.8;pointer-events:none}.nh .hero-photo{position:absolute;z-index:1;left:29%;top:7%;height:87%;width:42%;overflow:hidden;clip-path:inset(0 0 0 0)}.nh .hero-photo img{width:100%;height:110%;object-fit:cover;object-position:center 28%;filter:grayscale(.85);transform:translateY(var(--hero-shift,0px)) scale(1.04)}.nh .hero-copy{position:relative;z-index:3;align-self:end;padding-bottom:4vh}.nh .hero-copy h1{font-size:clamp(105px,14vw,255px);margin:15px 0 25px;mix-blend-mode:multiply}.nh .hero-copy p{font-size:12px;line-height:1.7;max-width:285px}.nh .hero-side{position:relative;z-index:3;justify-self:end;align-self:start;text-align:right;display:flex;flex-direction:column;gap:12px;align-items:end}.nh .hero-side .label{line-height:1.8}.nh .hero-index{position:absolute;right:4%;bottom:35px;z-index:3;display:flex;align-items:center;gap:20px}.nh .hero-index strong{font-size:11px}.nh .hero-index .line{width:65px;height:1px;background:#333}.nh .nh-ticker{background:#222;color:white;overflow:hidden;padding:13px 0}.nh .ticker-track{display:flex;width:max-content;animation:nh-marquee 27s linear infinite}.nh .ticker-track span{flex:none;font-family:'Barlow Condensed',Impact,sans-serif;font-weight:700;font-size:clamp(25px,3vw,45px);letter-spacing:.03em;white-space:nowrap;padding-right:30px}.nh .ticker-track i{font-style:normal;color:#a9a9a3;padding:0 24px}@keyframes nh-marquee{to{transform:translateX(-50%)}}.nh .section-pad{padding:100px 4%}.nh .nh-intro{position:relative;display:grid;grid-template-columns:28% 1fr;gap:4%;padding-top:110px;padding-bottom:120px}.nh .nh-intro h2{font-size:clamp(57px,8vw,135px);margin:0 0 30px}.nh .nh-intro .intro-body{display:flex;justify-content:space-between;gap:35px;align-items:end}.nh .nh-intro p{max-width:460px;font-size:15px;line-height:1.85}.nh .nh-intro .intro-tag{writing-mode:vertical-rl;font-size:11px;letter-spacing:.2em}.nh .nh-work{background:#d8d8d4;padding-top:80px}.nh .section-heading{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:32px}.nh .section-heading h2{font-size:clamp(80px,12vw,195px);margin:12px 0 0}.nh .section-heading p{font-size:12px;line-height:1.7;max-width:240px}.nh .work-list{position:relative;display:flex;flex-direction:column;gap:9px}.nh .work-item{height:170px;position:relative;overflow:hidden;cursor:pointer;background:#a9aaa5;transition:height .6s cubic-bezier(.2,.7,.2,1)}.nh .work-item.active{height:380px}.nh .work-item img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 35%;filter:grayscale(.65) brightness(.65);transition:transform 1s,filter .6s}.nh .work-item:hover img,.nh .work-item.active img{transform:scale(1.035);filter:grayscale(.25) brightness(.58)}.nh .work-item .work-top{position:absolute;inset:0;z-index:2;display:flex;flex-direction:column;justify-content:space-between;padding:20px 26px;color:white}.nh .work-item .work-meta{display:flex;justify-content:space-between}.nh .work-item .work-bottom{display:flex;align-items:end;justify-content:space-between;gap:20px}.nh .work-item h3{font-size:clamp(38px,6vw,105px);margin:0}.nh .work-item .work-arrow{font-size:28px}.nh .work-item .work-action{font-size:10px;letter-spacing:.15em;border-bottom:1px solid white;padding-bottom:8px;white-space:nowrap}.nh .nh-services{position:relative;min-height:680px;display:grid;grid-template-columns:1fr 1fr;gap:5%;align-items:center}.nh .nh-services h2{font-size:clamp(75px,10vw,160px);margin:10px 0 25px}.nh .service-list{border-top:1px solid #aaa}.nh .service-row{width:100%;text-align:left;border:0;border-bottom:1px solid #aaa;padding:19px 0;display:flex;justify-content:space-between;align-items:center;background:transparent;color:#777;font-family:'Barlow Condensed',Impact,sans-serif;font-size:clamp(27px,3.1vw,51px);font-weight:700;letter-spacing:0;transition:color .2s}.nh .service-row.selected,.nh .service-row:hover{color:#20211f}.nh .service-row span{font-family:'DM Sans',sans-serif;font-size:12px}.nh .service-visual{position:relative;min-height:500px;display:flex;align-items:center;justify-content:center}.nh .service-visual img{width:80%;height:460px;object-fit:cover;filter:grayscale(.6);transform:rotate(-4deg);box-shadow:20px 20px 0 #d5d5d1;transition:transform .6s}.nh .service-visual:hover img{transform:rotate(0)}.nh .service-description{position:absolute;bottom:0;left:0;right:0;max-width:330px;background:var(--paper);padding:16px 15px;font-size:13px;line-height:1.7}.nh .nh-quote{background:#242424;color:#f4f4f0;padding:90px 4%;position:relative;overflow:hidden}.nh .nh-quote .ghost{position:absolute;font-size:clamp(230px,33vw,600px);top:-20px;right:-20px;color:#303030;pointer-events:none}.nh .nh-quote h2{position:relative;font-size:clamp(60px,8vw,140px);max-width:1100px;margin:65px 0 40px}.nh .nh-quote p{position:relative;font-size:12px;letter-spacing:.14em}.nh .nh-quote img{position:relative;display:block;width:clamp(180px,22vw,340px);height:clamp(210px,26vw,380px);object-fit:cover;margin-left:auto;filter:grayscale(.65)}.nh .nh-collage .collage-grid{display:grid;grid-template-columns:1.1fr .8fr 1fr;gap:12px;margin-top:45px;align-items:start}.nh .nh-collage img{width:100%;object-fit:cover;filter:grayscale(.5);transition:transform .6s,filter .6s}.nh .nh-collage a{display:block;overflow:hidden}.nh .nh-collage a:hover img{transform:scale(1.045);filter:grayscale(0)}.nh .nh-collage .collage-grid a:nth-child(1) img{height:450px}.nh .nh-collage .collage-grid a:nth-child(2){margin-top:85px}.nh .nh-collage .collage-grid a:nth-child(2) img{height:320px}.nh .nh-collage .collage-grid a:nth-child(3){margin-top:35px}.nh .nh-collage .collage-grid a:nth-child(3) img{height:395px}.nh .nh-collage .collage-grid strong{display:block;font-size:10px;letter-spacing:.12em;margin-top:12px}.nh .nh-end{background:#222;color:white;padding:90px 4%;display:flex;align-items:end;justify-content:space-between;gap:30px}.nh .nh-end h2{font-size:clamp(85px,13vw,210px);margin:15px 0 0}.nh .nh-end .nh-button:hover{background:white;color:#222}.nh .nh-reveal{opacity:0;transform:translateY(45px);transition:opacity .9s,transform .9s}.nh .nh-reveal.in{opacity:1;transform:translateY(0)}
@media(max-width:850px){.nh .nh-hero{min-height:650px}.nh .hero-photo{left:25%;width:52%}.nh .hero-copy h1{font-size:clamp(90px,16vw,160px)}.nh .nh-intro{grid-template-columns:1fr}.nh .nh-services{grid-template-columns:1fr}.nh .service-visual{min-height:400px}.nh .service-visual img{height:340px;width:65%}}
@media(max-width:600px){.nh .nh-hero{height:690px;min-height:0;padding:25px 5% 30px;display:block}.nh .hero-ghost{top:5%;font-size:58vw}.nh .hero-photo{left:18%;top:12%;width:76%;height:62%}.nh .hero-copy{position:absolute;bottom:55px;left:5%;right:5%;padding:0}.nh .hero-copy h1{font-size:clamp(82px,23vw,125px);margin:10px 0 18px}.nh .hero-copy p{font-size:11px;max-width:230px}.nh .hero-side{position:relative;align-items:start;text-align:left}.nh .hero-side .label{font-size:9px}.nh .hero-index{bottom:23px;right:5%}.nh .section-pad{padding:65px 5%}.nh .nh-intro h2{font-size:clamp(54px,13vw,80px)}.nh .nh-intro .intro-body{flex-direction:column;align-items:start}.nh .nh-intro .intro-tag{display:none}.nh .section-heading{align-items:start;flex-direction:column}.nh .section-heading h2{font-size:clamp(65px,17vw,105px)}.nh .work-item{height:135px}.nh .work-item.active{height:300px}.nh .work-item .work-top{padding:16px}.nh .work-item h3{font-size:clamp(36px,9vw,60px)}.nh .work-item .work-action{font-size:9px}.nh .nh-services h2{font-size:85px}.nh .service-row{font-size:32px}.nh .service-visual img{width:75%;height:350px}.nh .nh-quote{padding:65px 5%}.nh .nh-quote h2{font-size:clamp(52px,12vw,80px)}.nh .nh-quote img{margin-top:30px}.nh .nh-collage .collage-grid{grid-template-columns:1fr 1fr;gap:12px}.nh .nh-collage .collage-grid a:nth-child(1) img{height:290px}.nh .nh-collage .collage-grid a:nth-child(2){margin-top:50px}.nh .nh-collage .collage-grid a:nth-child(2) img{height:240px}.nh .nh-collage .collage-grid a:nth-child(3){grid-column:1/-1;margin-top:5px}.nh .nh-collage .collage-grid a:nth-child(3) img{height:330px}.nh .nh-end{padding:65px 5%;flex-direction:column;align-items:start}.nh .nh-end h2{font-size:95px}}

/* Scroll-driven editorial motion, calculated with requestAnimationFrame. */
.nh .hero-photo img{transform:translate3d(0,var(--nh-hero-y,0px),0) scale(1.12);will-change:transform}
.nh .hero-copy{transform:translate3d(0,var(--nh-hero-text-y,0px),0);will-change:transform}
.nh .nh-motion-section{position:relative}
.nh .nh-heading-motion{transition:letter-spacing .7s ease}
.nh .nh-reveal{opacity:0;transform:translate3d(0,65px,0);filter:blur(7px);transition:opacity 1s cubic-bezier(.2,.7,.2,1),transform 1s cubic-bezier(.2,.7,.2,1),filter 1s ease}
.nh .nh-reveal.in{opacity:1;transform:translate3d(0,0,0);filter:blur(0)}
.nh .nh-collage .collage-grid img[data-scroll-motion]{transform:translate3d(0,var(--motion-y,0px),0) scale(var(--motion-scale,1.07));will-change:transform}
.nh .nh-collage .collage-grid a:hover img[data-scroll-motion]{filter:grayscale(0)}
.nh .nh-quote img{transition:transform .8s ease}
.nh .nh-quote img:hover{transform:rotate(3deg) scale(1.025)}
.nh .nh-ticker:hover .ticker-track{animation-play-state:paused}

/* Scroll-stacking full-height editorial panels. Root must not create a scroll container. */
.nh{overflow:clip}
.nh .nh-work{overflow:visible;position:relative}
.nh .work-list{display:block;position:relative;isolation:isolate}
.nh .work-item,.nh .work-item.active{position:sticky;top:clamp(72px,10vh,110px);height:min(74vh,800px);min-height:490px;margin:0 0 24vh;overflow:hidden;transition:none;box-shadow:0 10px 30px rgba(0,0,0,.13);cursor:default}
.nh .work-item:last-child{margin-bottom:0}
.nh .work-item img{object-position:center 32%}
.nh .work-item .work-top{padding:clamp(20px,3vw,42px)}
.nh .work-item .work-bottom{align-items:end}
.nh .work-item .work-action{position:relative;z-index:4}
@media(max-width:600px){.nh .work-item,.nh .work-item.active{top:74px;height:65svh;min-height:390px;margin-bottom:17svh}.nh .work-item:last-child{margin-bottom:0}.nh .work-item .work-top{padding:18px}.nh .work-item h3{font-size:clamp(38px,10vw,68px);line-height:.95}.nh .work-item .work-bottom{align-items:end;gap:10px}.nh .work-item .work-action{font-size:9px}}

/* Transparent model cutout layered between the masthead and the headline. */
.nh .nh-hero{isolation:isolate}
.nh .hero-photo{left:24%;top:3%;width:52%;height:97%;overflow:visible;clip-path:none;display:flex;align-items:flex-end;justify-content:center;pointer-events:none;z-index:1}
.nh .hero-photo img{display:block;width:100%;height:100%;object-fit:contain;object-position:center bottom;filter:none;transform:translate3d(0,var(--nh-hero-y,0px),0) scale(1.04);transform-origin:center bottom}
.nh .hero-ghost{z-index:0}
.nh .hero-copy{z-index:2}
.nh .hero-copy h1{position:relative;z-index:2}
@media(max-width:850px){.nh .hero-photo{left:11%;width:78%;top:7%;height:83%}.nh .hero-photo img{object-fit:contain;object-position:center bottom}}
@media(max-width:600px){.nh .hero-photo{left:0;width:100%;top:10%;height:70%}.nh .hero-photo img{object-fit:contain;object-position:center bottom}.nh .hero-copy{z-index:3}.nh .hero-side{z-index:3}}

/* Hero legibility and mobile composition refinements */
.nh .nh-hero{min-height:760px}
.nh .hero-side{position:absolute;top:32px;left:4%;right:4%;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start;text-align:left;gap:24px;z-index:5;pointer-events:none}
.nh .hero-side .label{max-width:240px;line-height:1.5;font-size:10px;color:#262626;letter-spacing:.12em}
.nh .hero-copy{grid-column:2;justify-self:end;width:min(100%,670px);padding-bottom:7vh;z-index:4;transform:translate3d(0,var(--nh-hero-text-y,0px),0)}
.nh .hero-copy>span.label{display:block;color:#242424;background:rgba(239,239,235,.94);width:max-content;max-width:100%;padding:7px 10px;font-size:10px;letter-spacing:.11em}
.nh .hero-copy h1{font-size:clamp(96px,11vw,200px);line-height:.82;margin:24px 0 22px;letter-spacing:-.025em}
.nh .hero-copy p{color:#242424;background:rgba(239,239,235,.96);padding:10px 12px;max-width:360px;font-size:13px;line-height:1.55;position:relative;z-index:5}
.nh .hero-copy .nh-button{position:relative;z-index:5;background:#efefeb;color:#1f1f1f;border:1px solid #1f1f1f;margin-top:12px}
.nh .hero-copy .nh-button:hover{background:#1f1f1f;color:#fff}
.nh .hero-photo{left:21%;width:57%;top:9%;height:91%;z-index:2}
.nh .hero-photo img{transform:translate3d(0,var(--nh-hero-y,0px),0) scale(1);object-position:center bottom}
.nh .hero-index{z-index:5}
@media(max-width:850px){.nh .nh-hero{min-height:760px;height:820px}.nh .hero-photo{left:9%;width:82%;top:14%;height:68%}.nh .hero-copy{width:60%;padding-bottom:6vh}.nh .hero-copy h1{font-size:clamp(75px,12vw,120px)}}
@media(max-width:600px){
.nh .nh-hero{height:780px;min-height:780px;padding:0 5% 28px;display:block;overflow:hidden}
.nh .hero-ghost{top:9%;left:-3%;font-size:55vw;line-height:.8}
.nh .hero-side{top:17px;left:5%;right:5%;flex-direction:column;gap:4px;align-items:flex-start;text-align:left}
.nh .hero-side .label{font-size:8px;line-height:1.3;max-width:none;letter-spacing:.09em}
.nh .hero-photo{left:-3%;top:13%;width:106%;height:49%;align-items:flex-end}
.nh .hero-photo img{object-fit:contain;object-position:center bottom;transform:translate3d(0,var(--nh-hero-y,0px),0) scale(1)}
.nh .hero-copy{position:absolute;left:5%;right:5%;bottom:64px;width:auto;padding:0;transform:none!important}
.nh .hero-copy>span.label{font-size:8px;padding:6px 8px;margin-bottom:8px}
.nh .hero-copy h1{font-size:clamp(72px,19.2vw,112px);line-height:.83;margin:0 0 18px;letter-spacing:-.025em;overflow-wrap:normal}
.nh .hero-copy p{background:none;padding:0;font-size:12px;line-height:1.55;max-width:310px;margin:0 0 13px}
.nh .hero-copy .nh-button{margin-top:0;background:#efefeb}
.nh .hero-index{bottom:20px;right:5%}
}
@media(max-width:390px){.nh .hero-copy h1{font-size:18.7vw}.nh .hero-photo{top:15%;height:45%}}
@media(prefers-reduced-motion:reduce){.nh .nh-reveal{opacity:1;transform:none;filter:none;transition:none}.nh .hero-copy,.nh .hero-photo img,.nh .nh-collage .collage-grid img[data-scroll-motion]{transform:none!important;will-change:auto}.nh .nh-ticker .ticker-track{animation:none}}
@media(prefers-reduced-motion:reduce){.nh .nh-reveal{opacity:1;transform:none;transition:none}.nh .ticker-track{animation:none}.nh .hero-photo img{transform:none!important}.nh .work-item,.nh .work-item img{transition:none}}
`}</style>
<section className="nh-hero"><div className="hero-ghost display" aria-hidden="true">TFAI</div><div className="hero-photo"><img src="/hero/hero-model.png" alt="TFAI fashion model in an editorial pose" data-scroll-motion="35"/></div><div className="hero-side"><span className="label">INDEPENDENT MODEL MANAGEMENT</span><span className="label">INDIA / SRI LANKA / WORLDWIDE</span></div><div className="hero-copy"><span className="label">WORLD OF TFAI — A DIFFERENT PERSPECTIVE</span><h1 className="display nh-heading-motion">BEYOND<br/>THE FACE.</h1><p>We discover individuality, nurture talent and create connections that move fashion forward.</p><Link className="nh-button" href="/about">EXPLORE THE AGENCY <span>↗</span></Link></div><div className="hero-index"><strong>01 / 04</strong><span className="line"/></div></section>
<div className="nh-ticker" aria-label="Talent, vision and individuality"><div className="ticker-track">{Array.from({length:4},(_,i)=><span key={i}>TALENT <i>✳</i> INDIVIDUALITY <i>✳</i> VISION <i>✳</i> WORLD OF TFAI <i>✳</i></span>)}</div></div>
<section className="nh-intro section-pad nh-motion-section"><div className="label nh-reveal">01 / THE AGENCY<br/>OUR POINT OF VIEW</div><div className="nh-reveal"><h2 className="display nh-heading-motion">NOT JUST<br/>ANOTHER<br/>AGENCY.</h2><div className="intro-body"><p>TFAI is a boutique model management agency representing local and international talent. We build careers with intention, connecting distinctive individuals to brands, photographers and creative partners around the world.</p><Link className="nh-button" href="/about">OUR STORY <span>↗</span></Link><span className="intro-tag">INDIA · SRI LANKA · GLOBAL</span></div></div></section>
<section className="nh-work section-pad nh-motion-section"><div className="section-heading nh-reveal"><div><span className="label">02 / SELECTED WORLDS</span><h2 className="display nh-heading-motion">IN FOCUS.</h2></div><p>Explore the faces and creative stories that define the world of TFAI. Scroll to explore the stories as each image layers over the previous one.</p></div><div className="work-list">{works.map((w,i)=><div className="work-item" key={w.title} style={{zIndex:i+1}}><img src={w.image} alt={w.title+' fashion editorial'} loading="lazy"/><div className="work-top"><div className="work-meta label"><span>{w.type}</span><span>{w.year} / 04</span></div><div className="work-bottom"><h3 className="display nh-heading-motion">{w.title}</h3><Link className="work-action" href={w.href} onClick={e=>e.stopPropagation()}>EXPLORE ↗</Link></div></div></div>)}</div></section>
<section className="nh-services section-pad nh-motion-section"><div className="nh-reveal"><span className="label">03 / WHAT WE DO</span><h2 className="display nh-heading-motion">WE MAKE<br/>IT HAPPEN.</h2><div className="service-list">{services.map((item,i)=><button key={item.title} type="button" className={'service-row'+(service===i?' selected':'')} onMouseEnter={()=>setService(i)} onFocus={()=>setService(i)} onClick={()=>setService(i)} aria-pressed={service===i}>{item.title}<span>↗</span></button>)}</div><p style={{fontSize:12,lineHeight:1.7,maxWidth:380,marginTop:24}}>{services[service].detail}</p><Link href={services[service].href} className="nh-button">LEARN MORE <span>↗</span></Link></div><div className="service-visual nh-reveal"><img key={service} src={[ 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=85','https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=85','https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=85'][service]} alt={services[service].title}/><div className="service-description"><span className="label">OUR EXPERTISE / 0{service+1}</span><br/>{services[service].detail}</div></div></section>
<section className="nh-quote nh-motion-section"><span className="ghost display" aria-hidden="true">VISION</span><div className="nh-reveal"><span className="label">04 / THE TFAI PHILOSOPHY</span><h2 className="display nh-heading-motion">EVERY FACE HAS<br/>A STORY WORTH<br/>TELLING.</h2><p>REPRESENTATION WITH PURPOSE. CREATIVITY WITHOUT BORDERS.</p><img src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=800&q=85" alt="Fashion portrait in TFAI editorial style" loading="lazy"/></div></section>
<section className="nh-collage section-pad nh-motion-section"><div className="section-heading nh-reveal"><div><span className="label">05 / THE WORLD AROUND US</span><h2 className="display nh-heading-motion">BE CURIOUS.</h2></div><p>Discover the people, collaborations and opportunities that make up our creative world.</p></div><div className="collage-grid"><Link href="/models/women" className="nh-reveal"><img data-scroll-motion="28" src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85" alt="Women's fashion editorial" loading="lazy"/><strong>01 / DISCOVER OUR WOMEN ↗</strong></Link><Link href="/nude-media" className="nh-reveal"><img data-scroll-motion="32" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=85" alt="Fashion production still life" loading="lazy"/><strong>02 / THE NUDE MEDIA AGENCY ↗</strong></Link><Link href="/apply" className="nh-reveal"><img data-scroll-motion="26" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85" alt="Emerging fashion model" loading="lazy"/><strong>03 / BECOME A MODEL ↗</strong></Link></div></section>
<section className="nh-end nh-motion-section"><div><span className="label">YOUR NEXT CHAPTER STARTS HERE</span><h2 className="display nh-heading-motion">LET'S MAKE<br/>AN IMPACT.</h2></div><Link href="/contact" className="nh-button">GET IN TOUCH <span>↗</span></Link></section>
</div>}
