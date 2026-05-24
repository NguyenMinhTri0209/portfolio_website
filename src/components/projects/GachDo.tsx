import { cn } from "../../lib/utils";

export function GachDo() {
  return (
    <section id="gachdo" className="w-full bg-[#FEF3DF] text-[#66171D] font-sans overflow-hidden flex flex-col">
      {/* Marquee Banner */}
      <div className="w-full py-3 border-b border-[#66171D]/10 flex whitespace-nowrap overflow-hidden text-[12px] font-bold uppercase tracking-widest text-[#66171D]/70 bg-[#FEF3DF] shrink-0">
        <div className="animate-marquee flex gap-2">
          {Array(20).fill("- gach do - gach do - gach do -").map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full relative flex flex-col">
        {/* Dark Red Top Background */}
        <div className="w-full bg-[#66171D] h-[350px] md:h-[500px] relative z-0">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        </div>
        
        {/* Beige Bottom Background */}
        <div className="w-full bg-[#FEF3DF] h-[200px] md:h-[350px] relative z-0 pt-0 flex items-end md:items-center px-6 lg:px-12 max-w-[1400px] mx-auto">
          {/* Project 2 Text */}
          <h2 className="text-[5rem] md:text-[10rem] font-bold italic tracking-tighter text-[#66171D] opacity-90 leading-[0.8] mb-[-1rem] md:mb-0 relative z-20 mix-blend-multiply">project 2</h2>
        </div>

        {/* Laptop Mockup Overlapping */}
        <div className="absolute top-[150px] md:top-[200px] left-1/2 -translate-x-1/2 z-10 w-[90%] md:w-[800px] aspect-video bg-white rounded-t-2xl rounded-b-xl border-[12px] border-[#222] shadow-[0_30px_60px_rgba(102,23,29,0.3)] flex flex-col overflow-hidden">
           <img src="https://placehold.co/1200x800/FEF3DF/66171D?font=montserrat&text=GACH+DO+%5CnHomepage" alt="Laptop Preview" className="w-full h-full object-cover" />
           <div className="h-4 bg-[#111] border-t border-[#333] w-full mt-auto relative z-20"></div>
           {/* Mockup Base */}
           <div className="h-6 bg-[#cacaca] w-[110%] -left-[5%] absolute bottom-[-24px] rounded-b-xl shadow-xl z-10"></div>
        </div>
      </div>

      {/* Goal & Solution & Logo */}
      <div className="w-full bg-[#FEF3DF] py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="flex flex-col gap-8 text-[16px] md:text-[17px] font-medium leading-relaxed max-w-xl">
            <p>
              <span className="font-bold text-[#66171D] text-lg">Goal:</span> Create a warm yet modern e-commerce platform that celebrates the value of handcrafted healthy food, optimizes the ordering process, and inspires a green lifestyle within the community.
            </p>
            <p>
              <span className="font-bold text-[#66171D] text-lg">Solution:</span> The design utilizes a neutral palette featuring earthy beige tones paired with a signature brick red to evoke appetite and rustic charm. The layout is organized into clean, distinct blocks with high-quality product imagery at the center, complemented by a minimalist checkout interface to enhance conversion rates and ensure a seamless shopping experience.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center shrink-0">
            <div className="text-[6rem] md:text-[8rem] font-black leading-[0.85] tracking-tighter uppercase text-[#66171D] font-serif text-center relative">
               GẠCH<br/>ĐỎ
               <div className="absolute top-[48%] left-1/2 -translate-x-1/2 w-[80%] h-2 bg-[#66171D]/10"></div>
            </div>
            <p className="text-xl md:text-2xl font-bold mt-6 text-[#66171D] tracking-tight text-center italic">
              Ăn lành mạnh, sống trọn vẹn!
            </p>
          </div>
        </div>
      </div>

      {/* Website - Showcase */}
      <div className="w-full bg-[#FEF3DF] pb-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 border-t border-[#66171D]/20 pt-20">
          <h3 className="text-4xl md:text-[4rem] font-bold italic mb-16 tracking-tighter">(Website - )</h3>
          
          <div className="w-full border border-[#66171D]/10 bg-[#f7ecd9] p-4 rounded-3xl shadow-inner mb-12 overflow-hidden h-[600px] md:h-[800px] relative">
             <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 overflow-y-auto">
                <img src="https://placehold.co/400x1200/FFFFFF/66171D?font=montserrat&text=Homepage%5CnScroll" className="w-full h-auto object-cover rounded-xl shadow-lg border border-[#66171D]/10" />
                <img src="https://placehold.co/400x1600/FFFFFF/66171D?font=montserrat&text=About%5CnBiscotti" className="w-full h-auto object-cover rounded-xl shadow-lg border border-[#66171D]/10 mt-12" />
                <img src="https://placehold.co/400x1000/FFFFFF/66171D?font=montserrat&text=Product%5CnDetail" className="w-full h-auto object-cover rounded-xl shadow-lg border border-[#66171D]/10 hidden md:block" />
                <img src="https://placehold.co/400x1400/FFFFFF/66171D?font=montserrat&text=Checkout%5CnProcess" className="w-full h-auto object-cover rounded-xl shadow-lg border border-[#66171D]/10 mt-8 hidden lg:block" />
             </div>
          </div>
          
          <div className="flex flex-col gap-6 md:w-1/2 lg:w-1/3 text-[16px] leading-relaxed">
            <p>
              <span className="font-bold text-xl block mb-1">Core Values:</span> Authenticity, Wellness, and Craftsmanship.
            </p>
            <p>
              <span className="font-bold text-xl block mb-1">Visual Identity:</span> A harmonious blend of organic textures and a grounded color palette. By focusing on "Natural Minimalism," the design allows the premium quality of the biscotti to speak for itself.
            </p>
          </div>
        </div>
      </div>

      {/* App - Showcase */}
      <div className="w-full bg-[#FEF3DF] py-20 border-t border-[#66171D]/20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col">
          <h3 className="text-4xl md:text-[4rem] font-bold italic mb-16 tracking-tighter">(App - )</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center mb-24 relative">
             <div className="flex flex-col gap-12 lg:pr-8 z-10 w-full xl:w-4/5">
                <div>
                   <h4 className="text-2xl font-bold mb-3 text-[#66171D]">Seamless Onboarding & Personalization</h4>
                   <p className="font-medium text-[15px] opacity-80">User-Centric Login: A professional welcome screen allowing users to quickly log in or create an account to save purchase history and access exclusive rewards. Profile Management: Easily manage personal information, saved addresses, and track order status directly from the navigation bar.</p>
                </div>
                <div>
                   <h4 className="text-2xl font-bold mb-3 text-[#66171D]">Flexible Cart Management</h4>
                   <p className="font-medium text-[15px] opacity-80">Real-time Quantity Adjustment: Users can modify item quantities (e.g., Mix Fruit Combos) using (+/-) toggles directly within the list without leaving the page.</p>
                </div>
             </div>
             
             <div className="flex justify-center items-center relative h-[400px] md:h-[600px] w-full z-0 lg:-mx-12">
               <div className="w-[80%] max-w-[400px] aspect-[1/2] bg-[#333] border-8 border-black rounded-[3rem] shadow-2xl overflow-hidden rotate-[15deg]">
                 <img src="https://placehold.co/400x800/66171D/FFFFFF?font=montserrat&text=App%5CnHome" className="w-full h-full object-cover" />
               </div>
               <div className="w-[75%] max-w-[360px] aspect-[1/2] bg-white border-8 border-black rounded-[3rem] shadow-xl overflow-hidden -rotate-[5deg] absolute left-10 bottom-10 z-10">
                 <img src="https://placehold.co/400x800/FFFFFF/66171D?font=montserrat&text=Product%5CnList" className="w-full h-full object-cover" />
               </div>
             </div>
             
             <div className="flex flex-col gap-12 lg:pl-12 z-10 w-full ml-auto xl:w-4/5 text-right lg:text-left justify-end lg:mt-[50%]">
                <div>
                   <h4 className="text-2xl font-bold mb-3 text-[#66171D]">Smart Shopping Experience</h4>
                   <p className="font-medium text-[15px] opacity-80">Daily Highlights: A dedicated "Products of the Day" section featuring hot items and special combos right at the top for instant discovery.</p>
                </div>
                <div>
                   <h4 className="text-2xl font-bold mb-3 text-[#66171D]">Optimized Visual UI/UX</h4>
                   <p className="font-medium text-[15px] opacity-80">Natural Minimalist Interface: Warm beige and brick-red tones create a rustic, clean aesthetic that aligns with the brand's "Healthy Food" spirit. Visual-First Layout: The design prioritizes high-quality product photography to evoke appetite and enhance the digital shopping experience.</p>
                </div>
             </div>
          </div>
        </div>

        <div className="w-full bg-[#66171D] text-[#FEF3DF] py-16 md:py-24">
           <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-12 items-start justify-between">
              <div className="md:w-1/3">
                 <p className="text-[14px] md:text-[15px] font-medium leading-relaxed opacity-90 max-w-sm">
                   <strong className="font-bold text-[#FFD6A0]">Gạch Đỏ</strong> is a specialized food shopping app for those pursuing a healthy lifestyle, distinguished by its minimalist and sophisticated interface. The app offers a diverse product catalog ranging from Biscotti cookies (Matcha, Cocoa, Vanilla flavors), brown rice crackers, peanut butter to nutritious Granola varieties like Choco-Bana.
                 </p>
              </div>
              <div className="md:w-2/3 flex gap-4 overflow-x-auto pb-8 snap-x w-full">
                 {[1, 2, 3].map((item) => (
                   <div key={item} className="shrink-0 snap-center w-[250px] aspect-[1/2.1] bg-white rounded-[2.5rem] border-[6px] border-[#333] overflow-hidden shadow-2xl relative">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[24px] bg-[#333] rounded-b-xl z-20"></div>
                      <img src={`https://placehold.co/400x800/FFFFFF/66171D?font=montserrat&text=App%5CnScreen+${item}`} className="w-full h-full object-cover" />
                   </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="w-full bg-[#FEF3DF] pt-16 md:pt-24 border-b border-[#66171D]/10">
           <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-center pb-24">
              <div className="flex gap-6 overflow-x-auto w-full md:justify-center snap-x pb-8">
                 {[4, 5, 6, 7].map((item) => (
                   <div key={item} className="shrink-0 snap-center w-[250px] aspect-[1/2.1] bg-white rounded-[2.5rem] border-[6px] border-[#333] overflow-hidden shadow-2xl relative">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[24px] bg-[#333] rounded-b-xl z-20"></div>
                      <img src={`https://placehold.co/400x840/FFFFFF/66171D?font=montserrat&text=Checkout%5Cn${item}`} className="w-full h-full object-cover" />
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>

      {/* Typography & Colors */}
      <div className="w-full bg-[#FEF3DF] py-24 border-t border-[#66171D]/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col">
          <h3 className="text-4xl md:text-[4rem] font-bold italic mb-16 tracking-tighter">(TYPOGRAPHY - )</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
             <div className="flex flex-col gap-4 text-[15px] md:text-[17px] font-medium uppercase tracking-wide leading-relaxed">
               <p><span className="font-bold">REGULAR:</span> A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z</p>
               <p><span className="font-bold">MEDIUM:</span> 1234567890123244657</p>
               <p><span className="font-bold">SEMIBOLD:</span> @#@$#^%^&^*@*@#!#@$##@%#$^</p>
               <p><span className="font-black">BOLD: A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z</span></p>
               <p><span className="font-black tracking-wider text-xl">EXTRABOLD: 12334567899024354356</span></p>
               <p><span className="font-black tracking-widest text-xl">BLACK: A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z</span></p>
             </div>
             
             <div className="flex flex-col gap-12 w-full lg:w-4/5 ml-auto">
               <div className="flex gap-4 md:gap-8 w-full justify-between">
                  <div className="flex-1 aspect-[4/3] bg-[#66171D] rounded-xl text-white font-bold text-sm p-4 relative shadow-sm">
                    <span className="absolute top-4 left-4">#66171D</span>
                  </div>
                  <div className="flex-1 aspect-[4/3] bg-[#FEF3DF] rounded-xl text-[#66171D] border border-[#66171D]/10 font-bold text-sm p-4 relative shadow-sm">
                    <span className="absolute top-4 left-4">#FEF3DF</span>
                  </div>
                  <div className="flex-1 aspect-[4/3] bg-[#FFD6A0] rounded-xl text-[#66171D] font-bold text-sm p-4 relative shadow-sm">
                    <span className="absolute top-4 left-4">#FFD6A0</span>
                  </div>
               </div>
               
               <div className="text-[5rem] md:text-[8rem] font-bold tracking-tighter leading-[0.8] text-[#66171D] relative -ml-4 md:ml-0 overflow-hidden py-4">
                  Monts<span className="opacity-0">e</span><br className="md:hidden"/>ra<sup className="text-4xl md:text-6xl text-[#66171D]">t</sup>
                  <span className="absolute top-[-2%] right-[5%] text-[4rem] md:text-[6rem] rotate-12">e</span>
                  <span className="absolute top-[30%] right-[30%] text-[24px] md:text-[32px] border-2 border-[#66171D] rounded-full w-10 h-10 md:w-16 md:h-16 flex items-center justify-center rotate-45 font-medium italic">r</span>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* Version logo */}
      <div className="w-full bg-[#FEF3DF] py-20 border-t border-[#66171D]/10">
         <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col">
            <h3 className="text-4xl md:text-[4rem] font-bold italic mb-16 tracking-tighter">(Version logo) -</h3>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
               <h2 className="text-[5rem] md:text-[7rem] font-black tracking-tighter text-[#66171D]">GẠCH ĐỎ</h2>
               <h2 className="text-[5rem] md:text-[7rem] font-black tracking-tighter text-transparent" style={{ WebkitTextStroke: '2px #FFD6A0' }}>GẠCH ĐỎ</h2>
            </div>
         </div>
      </div>

      {/* Social Media */}
      <div className="w-full bg-[#FEF3DF] py-24 border-t border-[#66171D]/10">
         <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col items-center">
            <h3 className="text-4xl md:text-[5rem] font-bold italic mb-4 tracking-tighter text-center">(Social media);</h3>
            <p className="text-[16px] md:text-[18px] font-medium uppercase tracking-widest text-[#66171D]/80 mb-20 text-center">
              'GACH DO' project was completed in two months.
            </p>
            
            <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-center">
               <div className="w-full bg-white/50 border border-[#66171D]/10 rounded-3xl p-6 shadow-inner relative h-[600px] overflow-hidden flex justify-center items-center">
                  <div className="absolute transform -rotate-6 shadow-xl border border-gray-100 bg-white rounded-xl overflow-hidden w-[400px] z-10 left-10">
                     <img src="https://placehold.co/400x500/FFFFFF/66171D?font=montserrat&text=Facebook%5CnPost" className="w-full object-cover" />
                  </div>
                  <div className="absolute transform rotate-3 shadow-xl border border-gray-100 bg-white rounded-xl overflow-hidden w-[400px] z-20 right-10 top-20">
                     <img src="https://placehold.co/400x600/FFFFFF/66171D?font=montserrat&text=Facebook%5CnPage" className="w-full object-cover" />
                  </div>
               </div>
               
               <div className="flex flex-col items-center gap-8 w-full">
                 <div className="w-[300px] aspect-[1/2] rounded-[3rem] border-8 border-black bg-black overflow-hidden shadow-2xl relative">
                    <img src="https://placehold.co/400x800/222222/FFFFFF?font=montserrat&text=TikTok%5CnVideo" className="w-full h-full object-cover opacity-80" />
                    <div className="absolute bottom-10 left-4">
                       <span className="font-bold text-white text-lg">@gachdo</span>
                    </div>
                 </div>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mt-16 text-[15px] md:text-[16px] font-medium leading-relaxed">
               <p>
                 <strong className="font-bold text-[#66171D]">Gạch Đỏ</strong> has established itself as a specialized platform for healthy foods (Biscotti, Granola) with extremely impressive user reach metrics across multiple platforms:
               </p>
               <div className="flex flex-col gap-6">
                 <p>
                   <strong className="font-bold text-[#66171D]">Visual appeal on the App:</strong> The shopping interface is optimized with sharp macro images, leading to higher conversion rates thanks to transparent nutritional information.
                 </p>
                 <p>
                   <strong className="font-bold text-[#66171D]">Explosive growth on TikTok:</strong> Gạch Đỏ's TikTok channel has seen strong growth with videos reaching between 2,085 and 2,204 views per clip, creating a young and dynamic follower community.
                 </p>
                 <p>
                   <strong className="font-bold text-[#66171D]">Payment ecosystem:</strong> Integrates a diverse range of options from bank transfers to e-wallets (ShopeePay, GoPay), optimizing customer experience and retaining loyal users.
                 </p>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
}
