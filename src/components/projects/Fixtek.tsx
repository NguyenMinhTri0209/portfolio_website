import { cn } from "../../lib/utils";

export function Fixtek() {
  return (
    <section id="fixtek" className="w-full bg-[#F3F7FF] pt-12 pb-0 font-sans text-[#2768FF] overflow-hidden flex flex-col">
      <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-12">
        {/* Top bar project 1 */}
        <h2 className="text-3xl md:text-5xl font-black lowercase tracking-tighter mb-12">project 1</h2>
        
        {/* Hero Logo */}
        <div className="flex flex-col items-center mb-20 lg:mb-32 mt-4">
          <div className="flex items-center gap-6 md:gap-10 mb-4">
            <svg width="120" height="96" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#2768FF] w-20 md:w-32">
              <path d="M22 35 L78 35 A8 8 0 0 1 86 43 L86 80 L14 80 L14 43 A8 8 0 0 1 22 35 Z" fill="white" stroke="currentColor" strokeWidth="5" />
              <path d="M35 35 L35 20 A5 5 0 0 1 40 15 L60 15 A5 5 0 0 1 65 20 L65 35" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              <rect x="40" y="55" width="20" height="10" rx="4" fill="currentColor" />
            </svg>
            <h1 className="text-[5rem] md:text-[9rem] font-black tracking-tighter leading-none mt-2">FIXTEK</h1>
          </div>
          <p className="text-xl md:text-[1.75rem] leading-snug font-bold text-center max-w-4xl tracking-tight mt-6">
            Design UI/UX system for a smart technology repair application based on a Grab-like model
          </p>
        </div>

        {/* Section 1: Desccription & Icons */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_auto] gap-16 xl:gap-24 items-start mb-24">
          {/* Left Text */}
          <div className="flex flex-col gap-6 text-[15px] md:text-[16px] font-semibold leading-relaxed text-[#2768FF]">
            <p>
              <span className="bg-[#B9D0FF] px-1 font-bold text-[#1F45CC]">FixTek is a mobile application</span> that quickly connects customers with technicians and repair shops specializing in electronic devices, smart technologies, and new hard-to-repair gadgets, operating within Ho Chi Minh City.
            </p>
            <p>
              <span className="bg-[#B9D0FF] px-1 font-bold text-[#1F45CC]">The app follows a Grab-like model,</span> allowing users to easily book repair appointments, track progress, and make online payments. The idea was born from real needs: promoting a green lifestyle, reducing electronic waste by extending product lifecycles, while creating job opportunities for technicians and supporting small repair shops.
            </p>
            <p>
              FixTek not only delivers environmental benefits but also addresses key market issues: finding reliable repair services, transparent pricing, and providing consumers with a convenient experience.
            </p>
          </div>

          {/* Right Icons */}
          <div className="flex flex-col items-center xl:items-start shrink-0">
            <h3 className="text-3xl font-black italic mb-8 tracking-tighter">(Icon app-)</h3>
            <div className="flex gap-8 md:gap-12">
              <div className="flex flex-col items-center gap-4">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-[2rem] border-[3px] border-[#2768FF] flex items-center justify-center shadow-lg">
                  <svg width="60" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#2768FF] md:w-[80px]">
                    <path d="M22 35 L78 35 A8 8 0 0 1 86 43 L86 80 L14 80 L14 43 A8 8 0 0 1 22 35 Z" fill="white" stroke="currentColor" strokeWidth="5" />
                    <path d="M35 35 L35 20 A5 5 0 0 1 40 15 L60 15 A5 5 0 0 1 65 20 L65 35" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                    <rect x="40" y="55" width="20" height="10" rx="4" fill="currentColor" />
                  </svg>
                </div>
                <span className="text-xl font-bold">Original</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-black rounded-[2rem] flex items-center justify-center shadow-lg">
                  <svg width="60" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white md:w-[80px]">
                    <path d="M22 35 L78 35 A8 8 0 0 1 86 43 L86 70 L14 70 L14 43 A8 8 0 0 1 22 35 Z" stroke="currentColor" strokeWidth="5" />
                    <path d="M35 35 L35 20 A5 5 0 0 1 40 15 L60 15 A5 5 0 0 1 65 20 L65 35" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                    <rect x="35" y="47" width="30" height="12" rx="6" fill="currentColor" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-black">Light</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Grid logo */}
        <div className="flex flex-col items-center mb-24 px-0">
           <div className="w-full relative border-[1px] border-[#A9C3FF]/60 bg-white/40 pb-16 pt-24 px-6 md:px-12 mb-12 overflow-hidden [background-image:linear-gradient(#A9C3FF30_1px,transparent_1px),linear-gradient(90deg,#A9C3FF30_1px,transparent_1px)] [background-size:16px_16px]">
              {/* Fake dimension lines */}
              <div className="absolute top-6 left-[10%] text-[#2768FF] text-xs font-bold font-mono">x</div>
              <div className="absolute top-8 left-[10%] w-[20px] h-[1px] bg-[#2768FF]"></div>
              
              <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[#2768FF] text-[15px] font-bold">35.5x</div>
              <div className="absolute top-12 left-[20%] right-[10%] h-[1px] bg-[#2768FF]">
                 <div className="absolute left-0 -top-1 w-[1px] h-2 bg-[#2768FF]"></div>
                 <div className="absolute right-0 -top-1 w-[1px] h-2 bg-[#2768FF]"></div>
              </div>
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#2768FF] text-[15px] font-bold">45.5x</div>
              <div className="absolute bottom-12 left-[10%] right-[5%] h-[1px] bg-[#2768FF]">
                 <div className="absolute left-0 -top-1 w-[1px] h-2 bg-[#2768FF]"></div>
                 <div className="absolute right-0 -top-1 w-[1px] h-2 bg-[#2768FF]"></div>
              </div>

              <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#2768FF] text-[15px] font-bold">8x</div>
              <div className="absolute left-12 top-[25%] bottom-[25%] w-[1px] bg-[#2768FF]">
                 <div className="absolute top-0 -left-1 h-[1px] w-2 bg-[#2768FF]"></div>
                 <div className="absolute bottom-0 -left-1 h-[1px] w-2 bg-[#2768FF]"></div>
              </div>
              
              <div className="absolute right-6 top-1/2 -translate-y-1/2 text-[#2768FF] text-[15px] font-bold">7x</div>
              <div className="absolute right-12 top-[30%] bottom-[30%] w-[1px] bg-[#2768FF]">
                 <div className="absolute top-0 -left-1 h-[1px] w-2 bg-[#2768FF]"></div>
                 <div className="absolute bottom-0 -left-1 h-[1px] w-2 bg-[#2768FF]"></div>
              </div>

              <div className="absolute bottom-[20%] left-[25%] text-[#2768FF] text-[15px] font-bold">2x</div>

              <div className="flex flex-col md:flex-row justify-center items-center gap-6 relative z-10 w-full">
                <svg width="200" height="150" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#2768FF] bg-[#2768FF]/5">
                  <path d="M22 35 L78 35 A8 8 0 0 1 86 43 L86 80 L14 80 L14 43 A8 8 0 0 1 22 35 Z" fill="#D4E1FF" stroke="currentColor" strokeWidth="5" />
                  <path d="M35 35 L35 20 A5 5 0 0 1 40 15 L60 15 A5 5 0 0 1 65 20 L65 35" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                  <rect x="40" y="55" width="20" height="10" rx="3" fill="currentColor" />
                </svg>
                <div className="text-[6rem] md:text-[11rem] font-black tracking-tighter leading-[0.8] bg-[#2768FF]/5 px-4 h-full flex items-center">FIXTEK</div>
              </div>
           </div>
           
           <div className="font-semibold text-[15px] md:text-[16px] leading-relaxed flex flex-col gap-6 w-full text-left">
             <p>
               <span className="font-bold text-[#1F45CC]">About M-O:</span> M-O is a robot from Wall-E whose mission is to clean with precision and meticulous attention to detail, always persistent until the job is done. Small but highly efficient, M-O represents professionalism and optimized technology.
             </p>
             <p>
               <span className="font-bold text-[#1F45CC]">Connection to FixTek:</span> FixTek follows the spirit of M-O by delivering precise, transparent, and reliable repair services, helping extend product lifespan and keeping everything running "to standard," just as M-O fulfills his mission.
             </p>
           </div>
        </div>

        {/* Section 3: Typography */}
        <div className="mb-24 flex flex-col pt-8">
          <h3 className="text-4xl md:text-[3.5rem] font-semibold mb-12">/Typography (Be Vietnam pro)</h3>
          
          <div className="flex flex-col lg:flex-row gap-16 w-full items-center">
            <div className="flex-1 flex flex-col gap-8 w-full">
              {[
                { weight: 'MEDIUM:', fontClass: 'font-medium' },
                { weight: 'SEMIBOLD:', fontClass: 'font-semibold' },
                { weight: 'BOLD:', fontClass: 'font-bold' },
                { weight: 'BLACK:', fontClass: 'font-black' }
              ].map(item => (
                <div key={item.weight} className="flex flex-col md:flex-row gap-4 items-start">
                  <div className="w-32 font-bold text-[14px] shrink-0 mt-1">{item.weight}</div>
                  <div className={cn("text-[16px] md:text-[17px] leading-relaxed flex-1 tracking-wide", item.fontClass)}>
                    Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp<br/>
                    Rr Ss Tt Uu Ww Vv Xx Yy Zz<br/>
                    0123456789 !@#$%&*=?
                  </div>
                </div>
              ))}
            </div>

            <div className="flex-1 flex flex-col items-center justify-end relative w-full pt-10">
               <div className="text-[25rem] leading-[0.7] font-bold tracking-tighter text-[#A9C3FF] absolute top-[-5rem] left-[15%] opacity-50 z-0">A</div>
               <div className="text-[20rem] leading-[0.7] font-semibold tracking-tighter text-[#5286FF] absolute top-[0rem] left-0 z-10 opacity-80">A</div>
               <div className="text-[22rem] leading-[0.7] font-bold tracking-tighter text-[#2768FF] relative z-20 top-8 left-[15%]">a</div>
               
               <div className="flex w-full mt-24 z-30 shadow-sm relative right-[-2rem]">
                 <div className="h-16 flex-1 bg-[#2768FF] text-white flex items-center justify-center p-3 text-[13px] font-bold">#2768FF</div>
                 <div className="h-16 flex-1 bg-[#5286FF] text-white flex items-center justify-center p-3 text-[13px] font-bold">#5286FF</div>
                 <div className="h-16 flex-1 bg-[#A9C3FF] text-white flex items-center justify-center p-3 text-[13px] font-bold">#A9C3FF</div>
                 <div className="h-16 flex-1 bg-[#D4E1FF] text-white flex items-center justify-center p-3 text-[13px] font-bold">#D4E1FF</div>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section 4: Posters / Billboard */}
      <div className="w-full bg-[#1A1A1A] mt-12 mb-0 border-y-8 border-white/10">
         <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            <div className="w-full h-full min-h-[500px] lg:min-h-[700px] border-r-8 border-black/40">
               <img src="https://placehold.co/800x1200/111/FFF?text=CHẠM+1+LẦN" alt="Poster 1" className="w-full h-full object-cover grayscale opacity-80 mix-blend-screen" />
            </div>
            <div className="w-full h-full min-h-[500px] lg:min-h-[700px]">
               <img src="https://placehold.co/800x1200/222/FFF?text=FIXTEK+BILLBOARD" alt="Poster 2" className="w-full h-full object-cover grayscale opacity-80 mix-blend-screen" />
            </div>
         </div>
      </div>
      
      {/* Section 4.5 Description */}
      <div className="w-full bg-[#F3F7FF] py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col gap-4">
           <p className="text-[16px] md:text-[17px] font-medium leading-relaxed max-w-4xl">
              <span className="font-bold text-[#1F45CC]">Goal:</span> To connect urban residents with reliable electronics technicians via a Grab-like model. By simplifying smart device repairs, the project extends product lifecycles and reduces electronic waste, promoting a sustainable lifestyle in Ho Chi Minh City.
           </p>
           <p className="text-[16px] md:text-[17px] font-medium leading-relaxed max-w-4xl">
              <span className="font-bold text-[#1F45CC]">Solution:</span> The design utilizes a professional blue palette <span className="font-bold text-black border-b-[3px] border-[#2768FF] pb-0.5 inline-block leading-none bg-[#D4E1FF]/40">(#2768FF)</span> to convey trust and efficiency. The interface ensures transparency through clear pricing and real-time tracking, while the <span className="font-bold text-[#1F45CC]">"one-tap"</span> experience streamlines the booking process.
           </p>
        </div>
      </div>

      {/* Section 5: Benefits of Fixtek */}
      <div className="w-full bg-[#E5EEFF] py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-center">
           <div className="flex justify-center relative">
              {/* Phone Mockup */}
              <div className="w-[320px] md:w-[350px] aspect-[1/2] bg-white border-[14px] border-[#CEDCFF] rounded-[3.5rem] shadow-[20px_20px_60px_rgba(39,104,255,0.15)] relative overflow-hidden flex flex-col">
                 {/* notch */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-[#CEDCFF] rounded-b-[18px] z-20"></div>
                 <img src="https://placehold.co/400x800/F4F8FF/2768FF?font=montserrat&text=Map\n&\nBooking" alt="Map App" className="w-full h-[50%] object-cover relative z-10 border-b-2 border-dashed border-[#2768FF]/30" />
                 <img src="https://placehold.co/400x800/FFFFFF/333333?font=montserrat&text=Booking+Details\nConfirm" alt="Booking details" className="w-full h-[50%] object-cover relative z-10" />
              </div>
           </div>
           
           <div className="flex flex-col">
              <h3 className="text-5xl md:text-[4rem] font-bold italic mb-10 tracking-tight text-[#2768FF]">Benefits of Fixtek?</h3>
              <p className="text-[18px] font-semibold mb-6 leading-relaxed max-w-2xl text-[#2768FF] opacity-90">
                 FixTek promotes green living by helping users extend the lifespan of their devices and reduce e-waste.
              </p>
              <p className="text-[18px] font-semibold mb-12 leading-relaxed max-w-2xl text-[#2768FF] opacity-90">
                 Instead of replacing products when they break, FixTek encourages repair as a more sustainable and cost-effective choice—especially in a time of rising prices.
              </p>
               
              <div className="flex flex-wrap gap-4">
                {[
                  'Extend product lifespan', 'Reduce e-waste', 'Save costs', 
                  'Promote repair over replacement', 'Create income for technicians', 
                  'Support small repair shops', 'Encourage sustainable consumption', 
                  'Transparent pricing', 'Service warranty', 'Community-driven'
                ].map((benefit, i) => (
                  <div key={i} className="px-6 py-3 bg-white text-[#2768FF] border border-white rounded-full text-[14.5px] font-bold shadow-[0_5px_15px_rgba(39,104,255,0.08)] whitespace-nowrap">
                    {benefit}
                  </div>
                ))}
              </div>
           </div>
        </div>
      </div>

      {/* Section 6: Service (Dark Mode) */}
      <div className="w-full bg-[#1A1A1A] text-white py-32 px-6 overflow-hidden">
         <div className="max-w-[1400px] mx-auto relative flex flex-col lg:px-12">
            <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-12 mb-32 relative z-10 w-full">
               <h3 className="text-4xl md:text-5xl font-bold italic lowercase">service -</h3>
               <p className="text-[17px] font-medium max-w-xl text-left lg:text-right leading-relaxed text-[#A9C3FF]">
                 A comprehensive management system for technicians includes professional profiles, top-up service utilities, real-time notification updates, and transparent income reporting.
               </p>
            </div>
            
            {/* Phone Mockups array */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-16 relative z-10 overflow-visible pt-10">
               {/* Phone 1 */}
               <div className="w-[280px] h-[580px] bg-[#111] border-[4px] border-[#333] rounded-[3rem] overflow-hidden -rotate-[12deg] shadow-[0_20px_50px_rgba(0,0,0,0.8)] transform translate-y-12 shrink-0 p-1 relative box-border">
                  <div className="w-full h-full bg-[#eee] rounded-[2.5rem] overflow-hidden">
                    <img src="https://placehold.co/300x600/EAF2FF/2768FF?font=montserrat&text=Schedule" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#333] rounded-b-[18px]"></div>
               </div>
               
               {/* Phone 2 */}
               <div className="w-[300px] h-[600px] bg-[#111] border-[4px] border-[#333] rounded-[3rem] overflow-hidden rotate-[3deg] shadow-[0_25px_60px_rgba(0,0,0,0.9)] z-20 shrink-0 p-1 relative box-border -mt-10">
                 <div className="w-full h-full bg-[#fff] rounded-[2.5rem] overflow-hidden">
                   <img src="https://placehold.co/300x600/FFFFFF/2768FF?font=montserrat&text=Management" className="w-full h-full object-cover" />
                 </div>
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#333] rounded-b-[18px]"></div>
               </div>
               
               {/* Phone 3 */}
               <div className="w-[280px] h-[580px] bg-[#111] border-[4px] border-[#333] rounded-[3rem] overflow-hidden -rotate-[6deg] shadow-[0_20px_50px_rgba(0,0,0,0.8)] transform translate-y-20 shrink-0 p-1 relative box-border">
                 <div className="w-full h-full bg-[#eee] rounded-[2.5rem] overflow-hidden">
                   <img src="https://placehold.co/300x600/EAF2FF/2768FF?font=montserrat&text=Wallet" className="w-full h-full object-cover" />
                 </div>
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#333] rounded-b-[18px]"></div>
               </div>
            </div>
            
            <p className="text-2xl font-bold italic text-[#A9C3FF] mt-40 text-center relative z-10 tracking-tight">
              Connect users with nearby trusted technicians
            </p>
            
            {/* Ambient glows */}
            <div className="absolute top-[60%] left-1/4 w-[50rem] h-[50rem] bg-[#2768FF] rounded-full blur-[180px] opacity-15 pointer-events-none -translate-y-1/2 -z-0"></div>
         </div>
      </div>

      {/* Section 7: Job Delivered */}
      <div className="w-full bg-[#F3F7FF] py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-center">
           <div className="flex flex-col gap-6 md:pr-10 w-full">
              <h2 className="text-[2.5xl] md:text-[3rem] lg:text-[4rem] leading-[1.1] font-bold italic tracking-tighter text-[#2768FF]">
                – JOB DELIVERED DIRECTLY TO YOUR DOOR: <span className="font-normal block mt-2 tracking-tight">Join the FIXTEK<br/>Technician team today!</span>
              </h2>
              
              <p className="text-xl font-bold mt-6 text-[#2768FF]">
                Are you a skilled phone, laptop, computer, or camera repair technician, but:
              </p>
              
              <div className="flex flex-col gap-4 mt-4 w-full">
                 <div className="bg-white border-[1.5px] border-[#D4E1FF] rounded-full px-8 py-5 font-bold text-[#2768FF] shadow-[0_5px_15px_rgba(39,104,255,0.05)] w-[95%]">
                    Your business is inconsistent, resulting in an unstable income?
                 </div>
                 <div className="bg-white border-[1.5px] border-[#D4E1FF] rounded-full px-8 py-5 font-bold text-[#2768FF] shadow-[0_5px_15px_rgba(39,104,255,0.05)] w-[95%] lg:translate-x-12">
                    Are you dependent on a shop and have limited working hours?
                 </div>
                 <div className="bg-white border-[1.5px] border-[#D4E1FF] rounded-full px-8 py-5 font-bold text-[#2768FF] shadow-[0_5px_15px_rgba(39,104,255,0.05)] w-full">
                    Do you want to be your own boss but don't know where to find customers?
                 </div>
              </div>

              <div className="mt-12 flex flex-col gap-6 font-semibold text-[17px] text-[#2768FF]">
                 <h4 className="font-black uppercase tracking-widest text-[#2768FF] text-[18px]">PRIVILEGES OF JOINING FIXTEK:</h4>
                 <p><span className="font-bold text-[#1F45CC]">Abundant Customers:</span> Orders automatically generated near your location.</p>
                 <p><span className="font-bold text-[#1F45CC]">Absolute Freedom:</span> Open the app and take jobs whenever you're free.</p>
                 <p><span className="font-bold text-[#1F45CC]">Comprehensive Support:</span> Discounts on tools, parts, and uniforms at wholesale prices.</p>
                 <p><span className="font-bold text-[#1F45CC]">Transparency:</span> Track and withdraw your income quickly through the app.</p>
                 
                 <p className="font-bold text-xl mt-6 italic">Download the Fixtek Technician app.</p>
              </div>
           </div>
           
           <div className="flex justify-center h-full xl:w-[480px]">
              <div className="w-full h-full min-h-[600px] border-[16px] border-[#111] rounded-[2rem] overflow-hidden bg-black shadow-2xl relative p-0 flex flex-col">
                 <img src="https://placehold.co/600x1000/EAF2FF/2768FF?font=montserrat&text=FIXTEK\nTechnician\nBillboard" alt="Billboard" className="w-full h-full object-cover" />
                 <div className="absolute bottom-0 w-full h-[50px] bg-gradient-to-t from-black/80 to-transparent"></div>
                 {/* Fake stand */}
                 <div className="w-full h-2 bg-[#222]"></div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
