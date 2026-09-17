import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowRight, CalendarDays, CheckCircle2, Clock3, Mail, MapPin, Menu, Phone, X} from 'lucide-react';
import './style.css';

const services=[['Headaches & Vertigo','Gentle, personalized care to support balance, mobility and everyday comfort.'],['Cervical Problems','Focused care for neck stiffness, posture concerns and cervical discomfort.'],['Shoulder & Back Pain','Movement-focused support for better mobility and a more active life.'],['Scoliosis & Sciatica','Individual assessment and guided care plans for spinal and nerve-related concerns.'],['Knee Pain','Practical rehabilitation support for strength, stability and confidence.'],['Neurological Problems','Holistic, patient-centered support alongside your ongoing care.']];
const batches = [
  { label: "Batch 1", images: [
    "/images/batch-1/first batch1.jpeg",
    "/images/batch-1/first batch10.jpeg",
    "/images/batch-1/first batch11.jpeg",
    "/images/batch-1/first batch12.jpeg",
    "/images/batch-1/first batch13.jpeg",
    "/images/batch-1/first batch14.jpeg",
    "/images/batch-1/first batch15.jpeg",
    "/images/batch-1/first batch16.jpeg",
    "/images/batch-1/first batch17.jpeg",
    "/images/batch-1/first batch18.jpeg",
    "/images/batch-1/first batch19.jpeg",
    "/images/batch-1/first batch2.jpeg",
    "/images/batch-1/first batch3.jpeg",
    "/images/batch-1/first batch4.jpeg",
    "/images/batch-1/first batch5.jpeg",
    "/images/batch-1/first batch6.jpeg",
    "/images/batch-1/first batch7.jpeg",
    "/images/batch-1/first batch8.jpeg",
    "/images/batch-1/first batch9.jpeg",
  ] },
  { label: "Batch 2", images: [
    "/images/batch-2/WhatsApp Image 2026-09-17 at 5.11.27 AM.jpeg",
    "/images/batch-2/WhatsApp Image 2026-09-17 at 5.21.20 AM.jpeg",
    "/images/batch-2/WhatsApp Image 2026-09-17 at 5.21.22 AM (1).jpeg",
    "/images/batch-2/WhatsApp Image 2026-09-17 at 5.21.22 AM.jpeg",
    "/images/batch-2/WhatsApp Image 2026-09-17 at 5.21.23 AM (2).jpeg",
    "/images/batch-2/WhatsApp Image 2026-09-17 at 5.21.25 AM (1).jpeg",
    "/images/batch-2/WhatsApp Image 2026-09-17 at 5.21.25 AM (2).jpeg",
    "/images/batch-2/WhatsApp Image 2026-09-17 at 5.21.25 AM.jpeg",
    "/images/batch-2/WhatsApp Image 2026-09-17 at 5.21.26 AM (1).jpeg",
    "/images/batch-2/WhatsApp Image 2026-09-17 at 5.21.26 AM.jpeg",
    "/images/batch-2/WhatsApp Image 2026-09-17 at 5.21.27 AM (1).jpeg",
    "/images/batch-2/WhatsApp Image 2026-09-17 at 5.21.27 AM.jpeg",
    "/images/batch-2/WhatsApp Image 2026-09-17 at 5.21.28 AM (1).jpeg",
    "/images/batch-2/WhatsApp Image 2026-09-17 at 5.21.28 AM.jpeg",
    "/images/batch-2/WhatsApp Image 2026-09-17 at 5.21.30 AM (1).jpeg",
    "/images/batch-2/WhatsApp Image 2026-09-17 at 5.21.30 AM.jpeg",
    "/images/batch-2/WhatsApp Image 2026-09-17 at 5.21.31 AM (1).jpeg",
    "/images/batch-2/WhatsApp Image 2026-09-17 at 5.21.31 AM (2).jpeg",
    "/images/batch-2/WhatsApp Image 2026-09-17 at 5.21.31 AM.jpeg",
    "/images/batch-2/WhatsApp Image 2026-09-17 at 5.21.32 AM (1).jpeg",
    "/images/batch-2/WhatsApp Image 2026-09-17 at 5.21.32 AM (2).jpeg",
    "/images/batch-2/WhatsApp Image 2026-09-17 at 5.21.32 AM.jpeg",
    "/images/batch-2/WhatsApp Image 2026-09-17 at 5.21.33 AM (1).jpeg",
    "/images/batch-2/WhatsApp Image 2026-09-17 at 5.21.34 AM (1).jpeg",
    "/images/batch-2/WhatsApp Image 2026-09-17 at 5.21.34 AM.jpeg",
  ] },
  { label: "Batch 3", images: [
    "/images/batch-3/WhatsApp Image 2026-09-17 at 5.07.56 AM.jpeg",
    "/images/batch-3/WhatsApp Image 2026-09-17 at 5.07.57 AM.jpeg",
    "/images/batch-3/WhatsApp Image 2026-09-17 at 5.07.58 AM.jpeg",
    "/images/batch-3/WhatsApp Image 2026-09-17 at 5.08.00 AM (1).jpeg",
    "/images/batch-3/WhatsApp Image 2026-09-17 at 5.08.05 AM (2).jpeg",
    "/images/batch-3/WhatsApp Image 2026-09-17 at 5.08.06 AM.jpeg",
    "/images/batch-3/WhatsApp Image 2026-09-17 at 5.08.10 AM (1).jpeg",
    "/images/batch-3/WhatsApp Image 2026-09-17 at 5.08.10 AM (3).jpeg",
    "/images/batch-3/WhatsApp Image 2026-09-17 at 5.08.12 AM (2).jpeg",
    "/images/batch-3/WhatsApp Image 2026-09-17 at 5.08.13 AM.jpeg",
    "/images/batch-3/WhatsApp Image 2026-09-17 at 5.08.16 AM (1).jpeg",
    "/images/batch-3/WhatsApp Image 2026-09-17 at 5.08.17 AM.jpeg",
    "/images/batch-3/WhatsApp Image 2026-09-17 at 5.08.25 AM (2).jpeg",
    "/images/batch-3/WhatsApp Image 2026-09-17 at 5.08.31 AM (1).jpeg",
  ] },
  { label: "Batch 4", images: [
    "/images/batch-4/WhatsApp Image 2026-09-17 at 5.07.40 AM.jpeg",
    "/images/batch-4/WhatsApp Image 2026-09-17 at 5.07.41 AM.jpeg",
    "/images/batch-4/WhatsApp Image 2026-09-17 at 5.07.42 AM (1).jpeg",
    "/images/batch-4/WhatsApp Image 2026-09-17 at 5.07.43 AM.jpeg",
    "/images/batch-4/WhatsApp Image 2026-09-17 at 5.07.45 AM (1).jpeg",
    "/images/batch-4/WhatsApp Image 2026-09-17 at 5.07.46 AM (1).jpeg",
    "/images/batch-4/WhatsApp Image 2026-09-17 at 5.07.46 AM.jpeg",
    "/images/batch-4/WhatsApp Image 2026-09-17 at 5.07.47 AM.jpeg",
    "/images/batch-4/WhatsApp Image 2026-09-17 at 5.07.49 AM (1).jpeg",
    "/images/batch-4/WhatsApp Image 2026-09-17 at 5.07.52 AM.jpeg",
    "/images/batch-4/WhatsApp Image 2026-09-17 at 5.07.54 AM.jpeg",
  ] },
  { label: "Batch 5", images: [
    "/images/batch-5/WhatsApp Image 2026-09-17 at 5.07.13 AM.jpeg",
    "/images/batch-5/WhatsApp Image 2026-09-17 at 5.07.15 AM (1).jpeg",
    "/images/batch-5/WhatsApp Image 2026-09-17 at 5.07.16 AM (1).jpeg",
    "/images/batch-5/WhatsApp Image 2026-09-17 at 5.07.16 AM.jpeg",
    "/images/batch-5/WhatsApp Image 2026-09-17 at 5.07.18 AM (1).jpeg",
    "/images/batch-5/WhatsApp Image 2026-09-17 at 5.07.18 AM.jpeg",
    "/images/batch-5/WhatsApp Image 2026-09-17 at 5.07.20 AM (1).jpeg",
    "/images/batch-5/WhatsApp Image 2026-09-17 at 5.07.20 AM.jpeg",
    "/images/batch-5/WhatsApp Image 2026-09-17 at 5.07.21 AM.jpeg",
    "/images/batch-5/WhatsApp Image 2026-09-17 at 5.07.22 AM (1).jpeg",
  ] },
];
function App(){const [open,setOpen]=useState(false); const [activeBatch,setActiveBatch]=useState(0);
 return <div><header className="top"><div className="container topin"><span><Phone size={14}/> Appointment desk: <a href="tel:+919944227002">09944227002</a></span><span><Mail size={14}/> karthic73@gmail.com</span></div></header>
 <nav className="nav"><div className="container navin"><a className="brand" href="#home"><img src="/images/RKS_Logo.png"/><span>R.K.S.<small>Traditional Medicine & Bone Setting<br/>Research Center</small></span></a><button className="menubtn" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button><div className={`links ${open?'show':''}`}>{['Home','About','Services','Classes','Gallery','Contact'].map(x=><a key={x} href={'#'+x.toLowerCase()} onClick={()=>setOpen(false)}>{x}</a>)}<a className="navcta" href="#contact">Book Appointment <ArrowRight size={16}/></a></div></div></nav>
 <main>
 <section id="home" className="hero"><div className="container heroin"><div className="heroCopy"><p className="eyebrow">HOLISTIC CARE • MOVEMENT • WELLNESS</p><h1>
  Chiropractor Tamil Nadu<br />
  <em>Move better. Live with confidence.</em>
</h1><p className="lead">Personalized chiropractic and physiotherapy care with a holistic approach to your health, comfort and long-term wellbeing.</p><div className="actions"><a className="btn primary" href="#contact">Book an appointment <ArrowRight size={18}/></a><a className="textbtn" href="#services">Explore services <ArrowRight size={18}/></a></div><div className="trust"><CheckCircle2/> Patient-focused care <span/> <CheckCircle2/> Individual guidance</div></div><div className="heroVisual"><div className="heroCard"><span>R.K.S. Research Center</span><strong>Care that starts<br/>with listening.</strong><p>Helping clients maintain a balanced and healthy lifestyle.</p></div><img src="/images/doctor.png" alt="Dr. Karthikeyan"/></div></div></section>
 <section className="stats"><div className="container statgrid"><div><strong>Holistic</strong><span>Approach to care</span></div><div><strong>Personalized</strong><span>Guidance for every client</span></div><div><strong>Professional</strong><span>Classes & certification</span></div><div><strong>Patient-first</strong><span>Support and education</span></div></div></section>
 <section id="about" className="section about"><div className="container twocol"><div className="photoStack"><img src="/images/doctor1.png"/><div className="floating"><span>Meet your doctor</span><strong>Dr. Karthikeyan</strong></div></div><div><p className="eyebrow">ABOUT THE CENTER</p><h2>Care for the whole person, not just the symptom.</h2><p>Dr. Karthikeyan’s primary focus is holistic health and helping clients maintain a balanced and healthy lifestyle. At R.K.S. Traditional Medicine and Bone Setting Research Center, every consultation begins with understanding your concerns and your goals.</p><p>Our approach brings together thoughtful assessment, practical guidance and patient education to support better movement and everyday wellbeing.</p><a className="textbtn" href="#contact">Speak with our team <ArrowRight size={18}/></a></div></div></section>
 <section id="services" className="section services"><div className="container"><div className="sectionHead"><div><p className="eyebrow">WHAT WE HELP WITH</p><h2>Support for your movement and wellbeing.</h2></div><p>Explore our focus areas and connect with the center for guidance tailored to your needs.</p></div><div className="servicegrid">{services.map(([t,d],i)=><article className="service" key={t}><div className="number">0{i+1}</div><h3>{t}</h3><p>{d}</p><a href="#contact">Learn more <ArrowRight size={16}/></a></article>)}</div></div></section>
 <section id="classes" className="section class"><div className="container classin"><div><p className="eyebrow">CLASSES & CERTIFICATION</p><h2>Learn. Practice. Grow.</h2><p>Interested in our contacting classes with certification? Send an enquiry to receive upcoming batch details, eligibility, schedule and registration information.</p><a className="btn light" href="#contact">Enquire about classes <ArrowRight size={18}/></a></div><img src="/images/first batch19.jpeg"/></div></section>
 <section id="gallery" className="section"><div className="container"><div className="sectionHead"><div><p className="eyebrow">BATCHES & MOMENTS</p><h2>Our learning community.</h2></div><p>View memories from our training batches and center activities.</p></div><div className="batchFilters">{batches.map((b,i)=><button key={b.label} className={activeBatch===i?"active":""} onClick={()=>setActiveBatch(i)}>{b.label}</button>)}</div><div className="gallery">{batches[activeBatch].images.map((g,i)=><img key={g} src={g} alt={`${batches[activeBatch].label} image ${i+1}`}/>)}</div></div></section>
 <section id="contact" className="section contact"><div className="container contactgrid"><div><p className="eyebrow">GET IN TOUCH</p><h2>Let’s plan your next step.</h2><p>For appointments, class enquiries and general questions, send us a message. Your enquiry will be prepared for email to our team.</p><div className="contactitems"><div><MapPin/><span><strong>Visit the center</strong><a href="https://maps.app.goo.gl/YS9hTo5aK4Lb3cNz744" target="_blank" rel="noreferrer">Plot 65, G.S.T Road, VB Nagaram, Melavalampettai, Maduranthakam, Tamil Nadu 603303</a></span></div><div><Phone/><span><strong>Phone</strong><a href="tel:+919944227002">09944227002</a></span></div><div><Mail/><span><strong>Email</strong><a href="mailto:karthic73@gmail.com">karthic73@gmail.com</a></span></div><div><Clock3/><span><strong>Appointments</strong><span>By prior enquiry / confirmation</span></span></div></div></div><form action="https://formsubmit.co/karthic73@gmail.com" method="POST"><input type="hidden" name="_subject" value="New Appointment / Class Enquiry - chiropractortamilnadu.com"/><input type="hidden" name="_captcha" value="false"/><input type="hidden" name="_template" value="table"/><input type="hidden" name="_next" value="https://chiropractortamilnadu.com/"/><h3>Appointment / class enquiry</h3><label>Name<input name="name" required placeholder="Your name"/></label><label>Phone<input name="phone" required placeholder="Your phone number"/></label><label>Preferred date<input name="date" type="date"/></label><label>Enquiry type<select name="enquiry_type" required><option value="Appointment">Appointment</option><option value="Class / Certification">Class / Certification</option><option value="General enquiry">General enquiry</option></select></label><label>Message<textarea name="message" required placeholder="Tell us how we can help"></textarea></label><button className="btn primary" type="submit">Send enquiry <ArrowRight size={18}/></button><small>After your first submission, FormSubmit may ask you to confirm the receiving email address.</small></form></div></section>
 </main><footer><div className="container foot"><div className="brand footbrand"><img src="/images/RKS_Logo.png"/><span>R.K.S.<small>Traditional Medicine & Bone Setting Research Center</small></span></div><p>© {new Date().getFullYear()} chiropractortamilnadu.com. All rights reserved.</p></div></footer></div>}
createRoot(document.getElementById('root')).render(<App/>);
