import { cn } from "../../lib/utils";

export function PhenCha() {
  return (
    <section id="phencha" className="w-full bg-[#EAEBE5] overflow-hidden font-sans pb-0">
      {/* 1. Top Bar */}
      <div className="w-full py-16 flex justify-center">
        <h2 className="text-xl md:text-2xl font-bold tracking-widest text-[#212121]">project <span className="font-light">4</span></h2>
      </div>

      {/* 2. Hero Section */}
      <div className="w-full relative">
        <div className="w-full bg-[#707E5B] pb-40 md:min-h-screen flex flex-col justify-between">
           <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12 xl:pt-24 text-[#EAEBE5]">
              {/* Left Column - Image */}
              <div className="relative flex justify-center lg:justify-start">
                 <img src="https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=1000&auto=format&fit=crop" alt="Matcha Lifestyle" className="w-full max-w-[500px] rounded-[2rem] object-cover aspect-[3/4] shadow-2xl" />
              </div>
              {/* Right Column - Text */}
              <div className="flex flex-col justify-center pt-10 md:pt-0 pb-20">
                <p className="text-lg md:text-xl font-medium leading-relaxed mb-6 w-full lg:w-5/6">
                  Amidst the hustle and bustle of life, have you ever wondered what color peace is? At Phencha, we believe that peace is a pristine green — the green of premium tea leaves, meticulously cared for from the highlands to your cup.
                </p>
                <p className="text-lg md:text-xl font-medium leading-relaxed mb-16 w-full lg:w-5/6">
                  More than just a beverage, each sip of matcha at Phencha is a moment of tranquil serenity, where you can rediscover inner peace. Precisely handcrafted and filled with passion, Phencha proudly offers a premium tea experience that awakens all your senses.
                </p>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-2 tracking-tight text-white">WEB MATCHA</h1>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-16 tracking-tight text-white flex items-baseline gap-4">PREMIUM <span className="text-2xl md:text-3xl font-light font-serif">(S/026)</span></h1>
                
                <div className="flex items-center justify-between border-t border-[#EAEBE5]/30 pt-8 w-full max-w-lg">
                 	<p className="text-lg md:text-xl font-medium uppercase tracking-wider">Discover matcha powder<br/>- HERE</p>
                 	<p className="text-2xl uppercase tracking-widest transform -rotate-90 origin-center text-white/50 -mt-8 -mr-8">(S/026)</p>
                </div>
              </div>
           </div>
           
           {/* Huge Phen Cha Text Overlapping */}
           <div className="w-full overflow-hidden mt-10 relative z-10 flex justify-center items-end">
              <h2 className="text-[12rem] md:text-[20rem] lg:text-[28rem] leading-[0.75] font-black text-[#566345] tracking-tighter mix-blend-color-burn opacity-80 whitespace-nowrap pb-8">Phen Cha</h2>
           </div>
        </div>
        
        {/* Laptop Mockup Positioned to overlap */}
        <div className="w-full flex justify-center -mt-24 md:-mt-48 relative z-20 px-6">
           <div className="w-full max-w-5xl bg-white rounded-t-3xl rounded-b-xl shadow-2xl border-[16px] md:border-[24px] border-[#2C3127] flex flex-col overflow-hidden">
               {/* Browser UI Bar */}
               <div className="h-8 md:h-10 bg-gray-100 border-b flex items-center px-4 gap-2">
                   <div className="flex gap-2">
                       <div className="w-3 h-3 rounded-full bg-red-400"></div>
                       <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                       <div className="w-3 h-3 rounded-full bg-green-400"></div>
                   </div>
               </div>
               {/* Fake Screen Img */}
               <div className="relative w-full aspect-[16/10] bg-[#EAEBE5] flex items-center justify-center overflow-hidden p-8 md:p-16">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#707E5B] to-transparent"></div>
                  <div className="z-10 text-center max-w-md">
                     <h3 className="text-2xl md:text-4xl font-bold text-[#59664C] mb-4">Phen Cha</h3>
                     <h1 className="text-4xl md:text-5xl font-serif italic text-black mb-8">Hành trình đi tìm <br/> 'sắc xanh' hoàn hảo</h1>
                     <div className="bg-[#59664C] text-white px-8 py-3 rounded-full inline-block font-medium uppercase tracking-wider text-sm shadow-xl">Premium Tea</div>
                  </div>
                  <img src="https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?q=80&w=800&auto=format&fit=crop" className="absolute -bottom-20 -right-20 w-[60%] md:w-[70%] object-cover rounded-tl-[4rem] shadow-2xl mix-blend-multiply" />
               </div>
               {/* Bottom lip of laptop */}
               <div className="h-4 md:h-6 bg-gray-300 w-full rounded-b-xl border-t border-gray-400"></div>
           </div>
        </div>
      </div>

      {/* 3. Who is it? Section */}
      <div className="max-w-[1200px] mx-auto px-6 mt-32 md:mt-48 pb-32">
         <h2 className="text-4xl md:text-6xl font-serif text-center mb-24 italic text-[#2C3127]">Who is it? <span className="font-sans font-black not-italic text-[#4A5540]">Phencha</span></h2>
         
         {/* Row 1 */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
            <div className="text-[#3A4033]">
               <p className="text-lg md:text-xl leading-relaxed mb-8 font-serif italic text-gray-700">Welcome to Phencha! We are passionate about bringing you premium Matcha powders and specialized brewing kits to elevate your tea-drinking experience. Phencha's journey began with a pure love for the art of tea and a mission to share that refined value with tea lovers worldwide.</p>
               <p className="text-lg md:text-xl leading-relaxed font-serif italic text-gray-700">Every product we offer is meticulously selected to ensure the highest quality and sustainability. From freshly ground Matcha tea leaves to premium brewing kits, Phencha is always there to make your tea-drinking moments more special than ever.</p>
            </div>
            <div className="flex justify-center md:justify-end">
               <img src="https://images.unsplash.com/photo-1582787042571-0814ee6b6851?q=80&w=800&auto=format&fit=crop" alt="Matcha Whisking" className="rounded-3xl md:rounded-[4rem] w-full max-w-[400px] h-[500px] object-cover shadow-2xl" />
            </div>
         </div>
         
         {/* Row 2 */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32 flex-col-reverse md:flex-row">
            <div className="flex justify-center md:justify-start">
               <img src="https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?q=80&w=800&auto=format&fit=crop" alt="Matcha Preparation" className="rounded-full w-full max-w-[450px] aspect-[4/3] object-cover shadow-xl border-[16px] border-[#F4F4EE]" />
            </div>
            <div className="text-[#3A4033] flex flex-col justify-center">
               <h3 className="text-3xl md:text-4xl font-bold mb-8 text-[#2C3127]">A simpler Matcha experience</h3>
               <p className="text-lg leading-relaxed mb-6 font-serif italic text-gray-700">At Phencha, we believe that enjoying a delicious cup of tea doesn't have to be complicated. Our mission is to simplify the Matcha brewing experience for everyone, from beginners to seasoned tea connoisseurs.</p>
               <p className="text-lg leading-relaxed mb-6 font-serif italic text-gray-700">By providing cleverly designed kits, high-quality tea powder, and detailed instructions, we aim for every cup of tea you brew to be a complete joy.</p>
               <p className="text-lg leading-relaxed mb-6 font-serif italic text-gray-700">Whether you're perfecting your Chasen whisking technique or simply want to enjoy a quick Matcha Latte, Phencha is committed to making the process enjoyable and easy. Because at the core of Phencha: Delicious tea should be approachable and refined.</p>
            </div>
         </div>
         
         {/* Row 3 */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
            <div className="text-[#3A4033] flex flex-col justify-center order-2 md:order-1">
               <h3 className="text-3xl md:text-4xl font-bold mb-8 text-[#2C3127]">Enjoy authentic tea at home</h3>
               <p className="text-lg leading-relaxed mb-6 font-serif italic text-gray-700">We understand the desire for a perfect cup of Matcha at home. However, brewing it yourself isn't always as easy as it seems, with tons of confusing information and tools, yet the flavor still isn't quite right.</p>
               <p className="text-lg leading-relaxed mb-6 font-serif italic text-gray-700">That's why Phencha was created. With the most essential tools, we bring the taste of high-class tea ceremony right to your kitchen. Phencha provides the best tools and knowledge so anyone can become their own "tea master."</p>
            </div>
            <div className="flex justify-center md:justify-end order-1 md:order-2">
               <img src="https://images.unsplash.com/photo-1558402529-d26388cb0715?q=80&w=800&auto=format&fit=crop" alt="Matcha Cake" className="rounded-full w-full max-w-[400px] object-cover aspect-square shadow-2xl" />
            </div>
         </div>
         
         {/* Row 4 */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32 flex-col-reverse md:flex-row">
            <div className="flex justify-center md:justify-start">
               <img src="https://images.unsplash.com/photo-1542617631-f40c74f51e06?q=80&w=800&auto=format&fit=crop" alt="Matcha Drinks" className="rounded-t-full rounded-b-3xl w-full max-w-[350px] object-cover aspect-[3/4] shadow-2xl" />
            </div>
            <div className="text-[#3A4033] flex flex-col justify-center">
               <h3 className="text-3xl md:text-4xl font-bold mb-8 text-[#2C3127]">Reaching Everyone</h3>
               <p className="text-lg leading-relaxed mb-6 font-serif italic text-gray-700">We place special emphasis on product development to deliver the best quality at an accessible price. Phencha strives to diversity its product lines to suit every individual brewing need.</p>
               <p className="text-lg leading-relaxed mb-6 font-serif italic text-gray-700">Of course, we are always up-to-date with the latest brewing trends and techniques to support the tea-loving community at home. The Phencha team is always ready to answer questions and share inspiration every day with the most sincere advice!</p>
            </div>
         </div>
         
         {/* Row 5 */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="text-[#3A4033] flex flex-col justify-center order-2 md:order-1">
               <h3 className="text-3xl md:text-4xl font-bold mb-8 text-[#2C3127]">Product Development</h3>
               <p className="text-lg leading-relaxed mb-6 font-serif italic text-gray-700">At Phencha, we research and develop our own unique tea set designs to provide the perfect balance of price and quality for tea lovers at home.</p>
               <p className="text-lg leading-relaxed mb-6 font-serif italic text-gray-700">Every process begins with selecting the most basic tools, then we refine the design based on your feedback and consultation with experts. This is how Phencha continuously upgrades and perfects its product ecosystem.</p>
               <p className="text-lg leading-relaxed mb-6 font-serif italic text-gray-700">For example, we have completely revamped our traditional accessories to offer a more modern and minimalist look. Look forward to the transformation of our Chawan tea bowls, Chasen bamboo whisks, tea scoops, and exquisite tea filters from Phencha!</p>
            </div>
            <div className="flex justify-center md:justify-end order-1 md:order-2">
               <img src="https://images.unsplash.com/photo-1595914619934-2e21010cbf8b?q=80&w=800&auto=format&fit=crop" alt="Latte Art" className="rounded-3xl md:rounded-[4rem] w-full max-w-[450px] object-cover aspect-[4/3] md:aspect-[4/5] shadow-2xl" />
            </div>
         </div>
      </div>

      {/* 4. App / Social Collage */}
      <div className="w-full bg-[#E5ECEACC] pt-32 pb-48 px-6 overflow-hidden relative border-y border-[#D6DFD9]">
         {/* Background overlapping text */}
         <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[20rem] text-[#6C804F]/5 font-black italic tracking-tighter w-max text-center pointer-events-none z-0 select-none">
            -Crafted Crafted-
         </h1>
         
         <div className="max-w-[1200px] mx-auto relative h-[700px] flex items-center justify-center">
            {/* Left Card */}
            <div className="absolute left-0 md:left-[10%] transform -rotate-[15deg] bg-[#F7F8F4] p-4 rounded-3xl shadow-2xl z-10 w-[240px] md:w-[320px] transition-transform hover:-translate-y-4 hover:rotate-[-5deg] duration-500">
               <div className="flex items-center justify-between px-2 mb-3">
                  <div className="font-serif italic font-bold text-gray-800 text-lg text-center w-full">mat cha</div>
               </div>
               <img src="https://images.unsplash.com/photo-1596484552835-1818eb2860b0?q=80&w=400&auto=format&fit=crop" className="w-full h-auto aspect-square object-cover rounded-2xl mb-4" />
               <div className="px-2 pb-2">
                   <div className="text-xs font-bold text-gray-500 mb-1 uppercase tracking-widest">Recipe</div>
                   <div className="font-bold text-2xl uppercase tracking-tighter text-[#4A5540]">Half refreshing</div>
               </div>
            </div>
            
            {/* Center Phone */}
            <div className="absolute z-30 w-[280px] md:w-[360px] bg-gray-900 rounded-[3rem] shadow-2xl p-2 border-4 border-gray-800 hover:-translate-y-6 transition-transform duration-500">
               <div className="w-full h-[550px] md:h-[700px] rounded-[2.5rem] overflow-hidden bg-white relative">
                  <div className="absolute top-0 w-full h-[30px] bg-black rounded-b-3xl">
                     <div className="w-[100px] h-[30px] bg-black mx-auto rounded-b-[20px] flex items-center justify-center">
                        <div className="w-16 h-4 bg-gray-800 rounded-full"></div>
                     </div>
                  </div>
                  {/* Phone Content */}
                  <div className="h-full w-full bg-[#EAEBE5] px-4 pt-12 pb-6 flex flex-col">
                     <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-gray-300 border border-gray-400"></div>
                        <div className="flex-1">
                           <div className="font-bold text-sm">phencha</div>
                           <div className="text-xs text-gray-500">Sponsored</div>
                        </div>
                     </div>
                     <div className="w-full aspect-square rounded-3xl overflow-hidden mb-6 relative">
                        <img src="https://images.unsplash.com/photo-1582787042571-0814ee6b6851?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" />
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                           <div className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold">1/3</div>
                           <div className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold">Shop now</div>
                        </div>
                     </div>
                     <div className="flex-1 bg-white rounded-3xl p-5 shadow-sm space-y-2 border border-gray-100 flex flex-col justify-center">
                        <h2 className="text-2xl font-black italic tracking-tight leading-none text-[#2C3127]">Drink your matcha</h2>
                        <h2 className="text-2xl font-black italic tracking-tight leading-none text-[#88C472]">-Keep your peace</h2>
                     </div>
                  </div>
               </div>
            </div>
            
            {/* Right Card */}
            <div className="absolute right-0 md:right-[15%] transform rotate-[15deg] bg-[#F7F8F4] p-4 rounded-3xl shadow-2xl z-20 w-[240px] md:w-[320px] transition-transform hover:-translate-y-4 hover:rotate-[5deg] duration-500">
               <div className="flex items-center justify-between px-2 mb-3">
                  <div className="font-serif italic font-bold text-[#88C472] text-lg text-center w-full">mat cha</div>
               </div>
               <img src="https://images.unsplash.com/photo-1558402529-d26388cb0715?q=80&w=400&auto=format&fit=crop" className="w-full h-auto aspect-square object-cover rounded-2xl mb-4" />
               <div className="px-2 pb-2">
                   <div className="font-bold text-3xl uppercase tracking-tighter text-[#2C3127]">Daily</div>
                   <div className="font-bold text-4xl uppercase tracking-tighter text-[#88C472] italic">Matcha</div>
               </div>
            </div>
            
         </div>
      </div>

      {/* 5. Huge Images Grid Section */}
      <div className="w-full bg-[#181D14]">
         {/* Top Image Full Width */}
         <div className="h-[60vh] md:h-[80vh] w-full overflow-hidden">
            <img src="https://images.unsplash.com/photo-1627998687707-c465d6cffbf0?q=80&w=2000&auto=format&fit=crop" alt="Green Tile Setting" className="w-full h-full object-cover mix-blend-luminosity opacity-80" />
         </div>
         
         {/* Bottom Split Images */}
         <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="aspect-square md:aspect-auto md:h-[80vh] overflow-hidden relative group">
               <img src="https://images.unsplash.com/photo-1596484552835-1818eb2860b0?q=80&w=1200&auto=format&fit=crop" alt="Matcha Drink" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
               <div className="absolute bottom-10 left-10 text-white mix-blend-overlay opacity-90">
                  <h2 className="text-4xl md:text-5xl font-bold">Phen Cha <span className="text-xl align-top">©</span></h2>
                  <p className="text-lg italic">(matcha)</p>
               </div>
            </div>
            <div className="aspect-square md:aspect-auto md:h-[80vh] overflow-hidden relative group bg-[#384A2A]">
               <img src="https://images.unsplash.com/photo-1596644026857-bf98ccbc7433?q=80&w=1200&auto=format&fit=crop" alt="Phen Cha Tote" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/90 text-center drop-shadow-2xl">
                  <h2 className="text-5xl md:text-7xl font-bold">Phen Cha <span className="text-3xl align-top">©</span></h2>
                  <p className="text-2xl md:text-3xl italic font-serif mt-2">(matcha)</p>
               </div>
            </div>
         </div>
      </div>

      {/* A-frame Sign Recreation using CSS */}
      <div className="w-full relative py-32 md:py-48 flex items-center justify-center bg-[#EAEBE5] overflow-hidden">
          {/* Subtle background details */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-gray-200 to-transparent"></div>
          
          <div className="relative group perspective-[1500px] z-10 scale-100 md:scale-125">
             {/* The Sign Body */}
             <div className="w-[300px] sm:w-[350px] md:w-[400px] bg-white border-[16px] md:border-[20px] border-[#59664C] rounded-t-2xl shadow-2xl transform rotateY(-12deg) rotateX(8deg) flex flex-col items-center p-8 transition-transform duration-700 ease-out origin-bottom relative z-20 hover:rotateY(-5deg) hover:rotateX(5deg)">
                 <h2 className="text-[#59664C] text-4xl md:text-5xl font-black mt-4 mb-2 text-center leading-none tracking-tighter">Phen Cha<sup className="text-lg md:text-xl font-medium ml-1">©</sup></h2>
                 <p className="text-[#59664C] text-lg italic mb-12 font-serif">(matcha)</p>
                 
                 <div className="border-[3px] border-[#59664C] rounded-[3rem] px-10 pt-4 pb-3 mb-6 shadow-sm">
                    <p className="text-[#59664C] font-black tracking-[0.2em] uppercase text-2xl">OPEN</p>
                 </div>
                 <p className="text-[#59664C] font-medium tracking-wide text-lg">from 8:00 to 22:30</p>
                 
                 <div className="w-full text-left text-xs text-[#59664C]/70 space-y-1 border-t-2 border-[#59664C] pt-6 mt-20 md:mt-24">
                    <p className="font-bold">Since 2014 ©</p>
                    <p>Fresh from Japan.</p>
                    <p className="italic">100% Matcha design / 0% stress</p>
                 </div>
             </div>
             
             {/* The Sign Shadow */}
             <div className="absolute -bottom-10 md:-bottom-16 -right-10 w-[120%] h-24 bg-gray-400/40 blur-2xl transform rotate-12 -z-10 origin-bottom-left skew-x-12"></div>
             {/* The Sign back leg (simplified) */}
             <div className="absolute top-10 right-4 w-full h-full bg-[#3C4533] border-[16px] border-[#3C4533] rounded-t-2xl shadow-xl transform rotateY(20deg) rotateZ(10deg) origin-top -z-20"></div>
          </div>
      </div>

      {/* 6. Typography & Colors */}
      <div className="w-full bg-[#59664C] text-[#EFEFE9] py-32 md:py-48 px-6">
         <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl md:text-5xl font-medium mb-32 italic font-serif">/typography</h2>
            
            <div className="flex flex-col lg:flex-row justify-between mb-32 items-end border-b border-[#EFEFE9]/20 pb-20">
               <div className="flex flex-col w-full lg:w-1/2">
                  <h1 className="text-6xl md:text-[6rem] font-bold tracking-tight mb-8">Be Vietnam</h1>
                  <div className="flex flex-wrap gap-x-8 gap-y-4 text-xl mb-12">
                     <span className="font-normal">Regular</span>
                     <span className="font-medium">Medium</span>
                     <span className="font-bold">Bold</span>
                     <span className="italic font-medium">Medium Italic</span>
                  </div>
                  <p className="text-lg lg:text-xl opacity-90 leading-relaxed border-l-4 border-[#EFEFE9]/40 pl-6 py-2 font-serif italic text-[#EFEFE9]/80">
                     "Lorem ipsum dolor sit amet consectetur adipiscing elit at erat consectetur ultrices sapien facilisis vulputate duis mauris a sed quam aliquet dui eros sit lacus vitae ut viverra at praesent."
                  </p>
               </div>
               <div className="text-[12rem] md:text-[20rem] leading-[0.8] font-bold mt-20 lg:mt-0 font-sans tracking-tighter opacity-90">
                  Aa
               </div>
            </div>
            
            {/* Color Palette */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16">
               {/* Primary */}
               <div>
                  <h3 className="text-xl font-bold mb-8 opacity-90">Primary</h3>
                  <div className="space-y-0 text-sm overflow-hidden rounded-2xl border border-[#EFEFE9]/20 shadow-2xl">
                     <div className="flex bg-[#EEF8E9] text-gray-800 p-5 justify-between font-mono font-medium"><span>P50</span><span>#EEF8E9</span></div>
                     <div className="flex bg-[#D4EDCA] text-gray-800 p-5 justify-between font-mono font-medium"><span>P75</span><span>#D4EDCA</span></div>
                     <div className="flex bg-[#BADFAD] text-gray-800 p-5 justify-between font-mono font-medium"><span>P100</span><span>#BADFAD</span></div>
                     <div className="flex bg-[#88C472] text-gray-800 p-5 justify-between font-mono font-medium"><span>P200</span><span>#88C472</span></div>
                     <div className="flex bg-[#65A94E] text-white p-5 justify-between font-mono font-medium"><span>P300</span><span>#65A94E</span></div>
                     <div className="flex bg-[#4B9234] text-white p-5 justify-between font-mono font-medium"><span>P400</span><span>#4B9234</span></div>
                     <div className="flex bg-[#397A22] text-white p-5 justify-between font-mono font-medium"><span>P500</span><span>#397A22</span></div>
                  </div>
               </div>
               {/* Secondary */}
               <div>
                  <h3 className="text-xl font-bold mb-8 opacity-90">Secondary</h3>
                  <div className="space-y-0 text-sm overflow-hidden rounded-2xl border border-[#EFEFE9]/20 shadow-2xl">
                     <div className="flex bg-[#ECF7EE] text-gray-800 p-5 justify-between font-mono font-medium"><span>S50</span><span>#ECF7EE</span></div>
                     <div className="flex bg-[#C3E9C9] text-gray-800 p-5 justify-between font-mono font-medium"><span>S75</span><span>#C3E9C9</span></div>
                     <div className="flex bg-[#99DAA3] text-gray-800 p-5 justify-between font-mono font-medium"><span>S100</span><span>#99DAA3</span></div>
                     <div className="flex bg-[#4DC15C] text-gray-800 p-5 justify-between font-mono font-medium"><span>S200</span><span>#4DC15C</span></div>
                     <div className="flex bg-[#2EB03F] text-white p-5 justify-between font-mono font-medium"><span>S300</span><span>#2EB03F</span></div>
                     <div className="flex bg-[#219932] text-white p-5 justify-between font-mono font-medium"><span>S400</span><span>#219932</span></div>
                     <div className="flex bg-[#1B7F2A] text-white p-5 justify-between font-mono font-medium"><span>S500</span><span>#1B7F2A</span></div>
                  </div>
               </div>
               {/* Warning */}
               <div>
                  <h3 className="text-xl font-bold mb-8 opacity-90">Warning</h3>
                  <div className="space-y-0 text-sm overflow-hidden rounded-2xl border border-[#EFEFE9]/20 shadow-2xl">
                     <div className="flex bg-[#FEF2E8] text-gray-800 p-5 justify-between font-mono font-medium"><span>W50</span><span>#FEF2E8</span></div>
                     <div className="flex bg-[#FADABC] text-gray-800 p-5 justify-between font-mono font-medium"><span>W75</span><span>#FADABC</span></div>
                     <div className="flex bg-[#F5C28F] text-gray-800 p-5 justify-between font-mono font-medium"><span>W100</span><span>#F5C28F</span></div>
                     <div className="flex bg-[#F19340] text-white p-5 justify-between font-mono font-medium"><span>W200</span><span>#F19340</span></div>
                     <div className="flex bg-[#D97621] text-white p-5 justify-between font-mono font-medium"><span>W300</span><span>#D97621</span></div>
                     <div className="flex bg-[#B95A11] text-white p-5 justify-between font-mono font-medium"><span>W400</span><span>#B95A11</span></div>
                     <div className="flex bg-[#99470D] text-white p-5 justify-between font-mono font-medium"><span>W500</span><span>#99470D</span></div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* 7. Website mockups */}
      <div className="w-full bg-[#EAEBE5] pt-32 pb-48 px-6">
         <h2 className="text-4xl md:text-6xl font-medium mb-32 italic text-center text-[#59664C] font-serif">(-Website)</h2>
         
         <div className="max-w-[1000px] mx-auto space-y-24">
            
            {/* Homepage mockup */}
            <div className="w-full aspect-auto md:aspect-[4/3] bg-white rounded-3xl md:rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col group">
               <div className="w-full h-10 bg-gray-50 flex items-center px-6 gap-2 border-b border-gray-100">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-400"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-400"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-green-400"></div>
               </div>
               <div className="flex-1 px-8 py-12 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 bg-white relative">
                  <div className="absolute top-10 right-10 w-full h-[60%] bg-[#EEF8E9] rounded-l-full translate-x-1/3 opacity-50 pointer-events-none"></div>
                  <div className="space-y-6 pt-12 relative z-10">
                     <div className="h-6 bg-gray-100 rounded-md w-1/4"></div>
                     <div className="h-14 bg-[#59664C] rounded-md w-4/5"></div>
                     <div className="flex flex-col gap-3 mt-6">
                         <div className="h-3 bg-gray-100 rounded-md w-full"></div>
                         <div className="h-3 bg-gray-100 rounded-md w-full"></div>
                         <div className="h-3 bg-gray-100 rounded-md w-5/6"></div>
                     </div>
                     <div className="h-12 bg-[#2C3127] rounded-full w-1/3 mt-12 mb-8"></div>
                     <div className="grid grid-cols-3 gap-4 pt-12 border-t border-gray-100">
                         <div className="aspect-square bg-gray-100 rounded-2xl"></div>
                         <div className="aspect-square bg-gray-100 rounded-2xl"></div>
                         <div className="aspect-square bg-gray-100 rounded-2xl"></div>
                     </div>
                  </div>
                  <div className="bg-[#EAEBE5] rounded-full aspect-square flex items-center justify-center p-6 md:p-10 overflow-hidden transform rotate-6 border-[8px] md:border-[16px] border-white shadow-2xl relative z-10 self-center">
                     <img src="https://images.unsplash.com/photo-1596484552835-1818eb2860b0?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover rounded-full mix-blend-multiply" />
                  </div>
               </div>
            </div>
            
            {/* Products Page mockup */}
            <div className="w-full min-h-[500px] bg-white rounded-3xl md:rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden pt-8 px-6 md:px-12 pb-0 flex flex-col">
                <div className="w-full h-8 mb-8 flex items-center justify-between">
                     <div className="font-serif font-black text-2xl text-[#2C3127] italic w-40">Phen Cha</div>
                     <div className="flex gap-4">
                         <div className="h-4 w-16 bg-gray-100 rounded-md"></div>
                         <div className="h-4 w-16 bg-gray-100 rounded-md"></div>
                         <div className="h-4 w-16 bg-gray-100 rounded-md"></div>
                     </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-12">
                   {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                     <div key={i} className="flex flex-col gap-3 group">
                        <div className="bg-[#F7F8F4] flex-1 rounded-[2rem] overflow-hidden p-3 aspect-[4/5] relative">
                           <img src={i % 2 === 0 ? "https://images.unsplash.com/photo-1582787042571-0814ee6b6851?q=80&w=400&auto=format&fit=crop" : "https://images.unsplash.com/photo-1542617631-f40c74f51e06?q=80&w=400&auto=format&fit=crop"} className="w-full h-full object-cover rounded-[1.5rem] group-hover:scale-105 transition-transform duration-700" />
                           <div className="absolute top-6 right-6 w-8 h-8 bg-white/80 rounded-full"></div>
                        </div>
                        <div className="h-4 bg-gray-200 rounded-md w-3/4 mb-1"></div>
                        <div className="h-4 bg-[#88C472] rounded-md w-1/3 mb-4"></div>
                     </div>
                   ))}
                </div>
            </div>
            
            {/* Contact / Article Page mockup */}
            <div className="w-full bg-[#FAFAFC] rounded-3xl md:rounded-[2.5rem] shadow-2xl border border-gray-100 p-8 md:p-20 overflow-hidden relative">
               <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-[#EEF8E9] rounded-l-[5rem]"></div>
               <div className="max-w-[800px] text-center space-y-6 relative z-10 mx-auto">
                  <div className="font-serif italic font-bold text-4xl md:text-5xl text-[#59664C] mb-4">Liên hệ với chúng tôi!</div>
                  <p className="text-gray-500 mb-12 max-w-md mx-auto line-clamp-2 leading-relaxed">Let us brew some magic together. Don't hesitate to reach out for business inquiries or simple matcha chats.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mt-16">
                     <div className="space-y-6">
                        <div className="h-12 bg-white shadow-sm border border-gray-100 rounded-2xl w-full"></div>
                        <div className="h-12 bg-white shadow-sm border border-gray-100 rounded-2xl w-full"></div>
                        <div className="h-32 bg-white shadow-sm border border-gray-100 rounded-2xl w-full"></div>
                        <div className="h-14 bg-[#2C3127] rounded-full w-[150px] shadow-lg"></div>
                     </div>
                     <div className="space-y-8 flex flex-col justify-center">
                        <div className="flex gap-4 items-center">
                            <div className="w-12 h-12 rounded-full bg-[#EAEBE5] flex items-center justify-center"></div>
                            <div className="space-y-2">
                                <div className="h-3 w-20 bg-gray-300 rounded"></div>
                                <div className="h-3 w-40 bg-gray-200 rounded"></div>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="w-12 h-12 rounded-full bg-[#EAEBE5] flex items-center justify-center"></div>
                            <div className="space-y-2">
                                <div className="h-3 w-20 bg-gray-300 rounded"></div>
                                <div className="h-3 w-40 bg-gray-200 rounded"></div>
                            </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         
         {/* Footer text area */}
         <div className="max-w-[900px] mx-auto mt-40 space-y-12 text-center md:text-left px-4">
             <p className="text-xl md:text-[1.4rem] font-medium text-[#212121] leading-relaxed font-serif text-justify md:text-left text-justify-last-center">
               The quest for the perfect "green" of premium matcha powder continues, but this time Phencha appears in a completely new digital space: bolder, more minimalist, and uniquely artistic.
             </p>
             <p className="text-xl md:text-[1.4rem] font-medium text-[#212121] leading-relaxed font-serif text-justify md:text-left text-justify-last-center">
               Completely eliminating unnecessary details, the new website interface uses a high-contrast color scheme (black and white) combined with large-scale typography art. Images of the handcrafted tea-making process are presented through black and white macro photography, highlighting the absolute focus on product quality.
             </p>
             <p className="text-xl md:text-[1.4rem] font-medium text-[#212121] leading-relaxed font-serif text-justify md:text-left text-justify-last-center">
               Capture every moment of tranquility and subtlety.
             </p>
             <p className="text-xl md:text-[1.4rem] font-medium text-[#212121] leading-relaxed font-serif mb-32 text-justify md:text-left text-justify-last-center">
               Join Phencha in exploring the inspiring journey from simple green tea leaves to their harmonious blend with handcrafted brewing tools. This collection of images perfectly captures the meticulous attention to detail in every step: from the gentle touch of the chasen whisk, the soft, hazy mist, to the smooth green hue of premium matcha powder.
             </p>
             
             <h2 className="text-3xl md:text-5xl font-black italic text-[#59664C] mt-40 leading-snug lg:leading-tight text-center pb-24 drop-shadow-sm">
               (It's not just a brewing process;<br/> it's an art of peaceful, slow living)
             </h2>
         </div>
         
      </div>
    </section>
  );
}
