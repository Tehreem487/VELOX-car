import React, {useEffect, useState} from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Menu, X, Sparkles, ShieldCheck, CarFront, Droplets,
  Check, Star, MapPin, Clock3, Phone, Mail, ChevronRight
} from "lucide-react";
import "./styles.css";

const services = [
  {icon: <Sparkles />, num:"01", title:"Signature Detail", text:"A complete exterior and interior reset for daily drivers and weekend cars."},
  {icon: <ShieldCheck />, num:"02", title:"Ceramic Coating", text:"Long-lasting gloss and protection with professional surface preparation."},
  {icon: <CarFront />, num:"03", title:"Paint Correction", text:"Restore clarity, depth and gloss by refining light swirls and defects."},
  {icon: <Droplets />, num:"04", title:"Interior Detail", text:"Deep-clean carpets, leather, plastics and every hard-to-reach surface."}
];

const packages = [
  {name:"ESSENTIAL", price:"£95", time:"2–3 hrs", items:["Exterior hand wash","Wheel & tyre clean","Interior vacuum","Glass clean"]},
  {name:"SIGNATURE", price:"£175", time:"4–5 hrs", popular:true, items:["Everything in Essential","Full interior detail","Paint decontamination","6-month protection"]},
  {name:"ULTIMATE", price:"£395", time:"1–2 days", items:["Everything in Signature","Single-stage paint correction","Ceramic coating","12-month protection"]}
];

const gallery = [
  {title:"Midnight Finish", type:"PORSCHE 911"},
  {title:"Deep Gloss", type:"BMW M4"},
  {title:"Clean Lines", type:"RANGE ROVER"},
  {title:"After Correction", type:"AUDI RS6"}
];

function App(){
  const [open,setOpen]=useState(false);
  const [toast,setToast]=useState(false);

  useEffect(()=>{
    const els=document.querySelectorAll(".reveal");
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")});
    },{threshold:.12});
    els.forEach(el=>observer.observe(el));
    return ()=>observer.disconnect();
  },[]);

  const submit=(e)=>{
    e.preventDefault();
    setToast(true);
    e.currentTarget.reset();
    setTimeout(()=>setToast(false),3500);
  };

  const scrollTo=(id)=>{
    document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
    setOpen(false);
  };

  return <div className="site">
    <header className="nav">
      <div className="nav-inner">
        <button className="logo" onClick={()=>scrollTo("home")}>VÉLOX<span>.</span></button>
        <nav className={open?"nav-links mobile-open":"nav-links"}>
          {["services","work","packages","about","contact"].map(x=><button key={x} onClick={()=>scrollTo(x)}>{x}</button>)}
          <button className="nav-cta" onClick={()=>scrollTo("contact")}>Book a Detail <ArrowUpRight size={16}/></button>
        </nav>
        <button className="menu" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button>
      </div>
    </header>

    <main>
      <section id="home" className="hero">
        <div className="hero-glow"></div>
        <div className="hero-content">
          <p className="eyebrow reveal">PREMIUM AUTO DETAILING · UK</p>
          <h1 className="reveal">DETAILING<br/><em>WITHOUT</em><br/>COMPROMISE.</h1>
          <p className="hero-copy reveal">Precision detailing for people who care about every reflection. From deep cleans to ceramic protection, your car leaves VÉLOX looking its absolute best.</p>
          <div className="hero-actions reveal">
            <button className="primary" onClick={()=>scrollTo("contact")}>Book your detail <ArrowUpRight/></button>
            <button className="ghost" onClick={()=>scrollTo("work")}>View our work <ChevronRight/></button>
          </div>
          <div className="hero-meta reveal">
            <span><span className="dot"></span> Accepting bookings</span>
            <span>Greater London & surrounding areas</span>
          </div>
        </div>
        <div className="hero-car">
          <div className="car-card">
            <span>01 / 04</span>
            <strong>PORSCHE 911</strong>
            <small>PAINT CORRECTION + CERAMIC</small>
          </div>
        </div>
        <div className="scroll">SCROLL <span></span></div>
      </section>

      <section id="services" className="section services">
        <div className="section-head reveal"><p className="eyebrow">WHAT WE DO</p><h2>BUILT FOR THE<br/><em>OBSESSED.</em></h2><p>Professional detailing, careful preparation and protection that lasts.</p></div>
        <div className="service-grid">
          {services.map(s=><article className="service reveal" key={s.num}><div className="service-top"><span>{s.num}</span>{s.icon}</div><h3>{s.title}</h3><p>{s.text}</p><a href="#contact" onClick={()=>scrollTo("contact")}>Explore service <ArrowUpRight size={16}/></a></article>)}
        </div>
      </section>

      <section id="work" className="section work">
        <div className="section-head row reveal"><div><p className="eyebrow">RECENT WORK</p><h2>THE <em>FINISH.</em></h2></div><p>Every panel. Every wheel. Every detail.<br/>Nothing gets rushed.</p></div>
        <div className="gallery">
          {gallery.map((g,i)=><div className={"gallery-item g"+i} key={g.title}><div className="gallery-overlay"><span>{g.type}</span><h3>{g.title}</h3><ArrowUpRight/></div></div>)}
        </div>
      </section>

      <section id="packages" className="section packages">
        <div className="section-head reveal"><p className="eyebrow">PACKAGES</p><h2>CHOOSE YOUR<br/><em>LEVEL.</em></h2></div>
        <div className="package-grid">
          {packages.map(p=><article className={"package reveal "+(p.popular?"featured":"")} key={p.name}>
            {p.popular&&<div className="popular">MOST POPULAR</div>}
            <p className="package-name">{p.name}</p><div className="price">{p.price}<small> / from</small></div><p className="time"><Clock3 size={15}/> {p.time}</p>
            <div className="line"></div><ul>{p.items.map(x=><li key={x}><Check size={16}/>{x}</li>)}</ul>
            <button className="package-btn" onClick={()=>scrollTo("contact")}>Choose package <ArrowUpRight size={16}/></button>
          </article>)}
        </div>
      </section>

      <section id="about" className="statement">
        <div className="statement-inner reveal"><p className="eyebrow">THE VÉLOX STANDARD</p><h2>WE DON'T JUST<br/><em>CLEAN CARS.</em><br/>WE RESTORE THEM.</h2><p>We believe great detailing is a craft. That means proper preparation, quality products and the patience to get the finish right.</p></div>
      </section>

      <section className="reviews section">
        <div className="section-head reveal"><p className="eyebrow">CLIENTS</p><h2>WORDS FROM<br/><em>THE GARAGE.</em></h2></div>
        <div className="review-grid">
          {[
            ["“The car looked better than the day I picked it up.”","James R.","London"],
            ["“Incredible attention to detail. The ceramic finish is unreal.”","Daniel M.","Hertfordshire"],
            ["“Professional from booking to collection. Highly recommend.”","Sophie T.","Essex"]
          ].map(r=><article className="review reveal" key={r[1]}><div className="stars">{[1,2,3,4,5].map(x=><Star key={x} size={15} fill="currentColor"/>)}</div><blockquote>{r[0]}</blockquote><strong>{r[1]}</strong><small>{r[2]}</small></article>)}
        </div>
      </section>

      <section id="contact" className="contact section">
        <div className="contact-copy reveal"><p className="eyebrow">GET IN TOUCH</p><h2>READY FOR A<br/><em>BETTER FINISH?</em></h2><p>Tell us about your car and what you want to achieve. We'll get back to you with availability and a tailored quote.</p>
          <div className="contact-details"><span><Phone/> +44 20 7946 0182</span><span><Mail/> hello@veloxdetailing.co.uk</span><span><MapPin/> Greater London, UK</span></div>
        </div>
        <form className="booking-form reveal" onSubmit={submit}>
          <div className="form-row"><label>NAME<input required placeholder="Your name"/></label><label>EMAIL<input required type="email" placeholder="you@example.com"/></label></div>
          <div className="form-row"><label>VEHICLE<input required placeholder="e.g. BMW M4"/></label><label>SERVICE<select defaultValue=""><option value="" disabled>Select a service</option><option>Signature Detail</option><option>Ceramic Coating</option><option>Paint Correction</option><option>Interior Detail</option></select></label></div>
          <label>MESSAGE<textarea rows="5" placeholder="Tell us about your car..."></textarea></label>
          <button className="primary submit" type="submit">Request a quote <ArrowUpRight/></button>
          <small className="form-note">Demo form — connect this to your backend/email service when deploying.</small>
        </form>
      </section>
    </main>

    <footer><div className="footer-top"><button className="logo" onClick={()=>scrollTo("home")}>VÉLOX<span>.</span></button><p>Premium auto detailing<br/>for the detail obsessed.</p><button className="back" onClick={()=>scrollTo("home")}>Back to top ↑</button></div><div className="footer-bottom"><span>© 2026 VÉLOX Auto Detailing</span><span>Greater London · UK</span><span>Instagram · Facebook</span></div></footer>
    {toast&&<div className="toast">Thanks! Your enquiry has been received. <X size={15} onClick={()=>setToast(false)}/></div>}
  </div>
}

createRoot(document.getElementById("root")).render(<App/>);