import { cn } from "../../lib/utils";

export function CaloFix() {
  return (
    <section id="calofix" className="w-full bg-[#EBF0EB] font-sans overflow-hidden">
      
      {/* Top Background & Header */}
      <div className="w-full pt-16 pb-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Project Pill */}
          <div className="flex mb-8">
            <div className="bg-[#B4E33E] text-[#002B00] px-8 py-2 rounded-full font-bold text-lg inline-block">
              project 3
            </div>
          </div>
          
          {/* Giant Logo */}
          <div className="flex justify-center items-center py-12 mb-16">
            <h1 className="text-[8rem] md:text-[14rem] font-bold tracking-tighter text-[#002B00] flex items-center leading-none">
              Cal
              <span className="text-[#FF4A3A] flex items-center justify-center -mx-2 md:-mx-4 mt-2">
                 {/* Tomato O */}
                 <div className="relative w-[100px] h-[100px] md:w-[180px] md:h-[180px]">
                    <div className="absolute inset-0 bg-[#FF4A3A] rounded-full"></div>
                    <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 text-[#002B00] text-4xl md:text-6xl flex justify-center w-full">
                       {/* Stem */}
                       <svg width="48" height="32" viewBox="0 0 48 32" fill="none" className="w-16 md:w-24 h-auto" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24 16C28 10 36 8 44 12C38 18 32 18 24 16Z" fill="#002B00"/>
                          <path d="M24 16C20 10 12 8 4 12C10 18 16 18 24 16Z" fill="#002B00"/>
                          <path d="M24 16C26 8 28 4 28 0H20C20 4 22 8 24 16Z" fill="#002B00"/>
                          <path d="M24 16C24 22 18 28 10 32C18 32 24 28 24 16Z" fill="#B4E33E"/>
                          <path d="M24 16C24 22 30 28 38 32C30 32 24 28 24 16Z" fill="#B4E33E"/>
                       </svg>
                    </div>
                 </div>
              </span>
              Fix
            </h1>
          </div>

          {/* Intro Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 text-[#002B00]">
            <div className="flex flex-col gap-6">
               <h3 className="text-4xl md:text-5xl font-black mb-4">What is Calofix?</h3>
               <p className="text-[17px] font-medium leading-relaxed">
                 Calofix is an app that helps users manage and support their weight loss, fitness, and weight gain journeys.
               </p>
               <p className="text-[17px] font-medium leading-relaxed">
                 Calofix builds personalized meal plans to guide users on the right track, with specific menu guidance and support from nutrition experts, suitable for most general users.
               </p>
               
               <h4 className="font-bold text-xl mt-6">Features & Value Propositions</h4>
               <p className="text-[17px] font-medium leading-relaxed text-[#002B00]/80">
                 Smart Calorie & Macro Tracking Beyond simple meal plans, Calofix integrated an intelligent tracking system that calculates calories and macronutrients (Carbs, Protein, Fat) in real-time. This ensures users stay within their nutritional boundaries while enjoying a diverse range of foods without the stress of manual calculation.
               </p>
            </div>
            
            <div className="flex flex-col gap-6 items-start">
               <div className="bg-[#B4E33E] text-[#002B00] px-6 py-3 rounded-full font-bold shadow-sm">
                  Monitor progress and make adjustments periodically.
               </div>
               <div className="bg-[#B4E33E] text-[#002B00] px-6 py-3 rounded-full font-bold shadow-sm">
                  Allows users to select the primary target.
               </div>
               
               <div className="mt-8 bg-[#002B00] rounded-[2rem] w-full p-12 relative overflow-hidden flex justify-center items-center h-[300px]">
                 <div className="absolute inset-0 right-0 left-0 w-full h-full opacity-20"
                      style={{ backgroundImage: 'linear-gradient(#B4E33E 1px, transparent 1px), linear-gradient(90deg, #B4E33E 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                 </div>
                 
                 <div className="relative z-10 flex flex-col items-center">
                    <h2 className="text-[5rem] lg:text-[7rem] font-bold text-[#E0FE94] flex items-center leading-none">
                       Cal
                       <div className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] bg-[#FF4A3A] rounded-full mx-2 flex flex-col items-center justify-start relative">
                          <div className="absolute top-[-10px] w-6 h-4 bg-[#B4E33E] rounded-full"></div>
                       </div>
                       Fix
                    </h2>
                    <div className="absolute top-0 bottom-0 -left-6 w-[1px] bg-[#B4E33E]/50">
                       <span className="absolute top-1/2 -left-6 -translate-y-1/2 text-[10px] text-[#B4E33E]">9X</span>
                    </div>
                    <div className="absolute top-0 bottom-0 -right-6 w-[1px] bg-[#B4E33E]/50">
                       <span className="absolute top-1/2 -right-6 -translate-y-1/2 text-[10px] text-[#B4E33E]">8X</span>
                    </div>
                    <div className="absolute bottom-[-20px] left-0 right-0 h-[1px] bg-[#B4E33E]/50 flex justify-between px-2">
                       <span className="text-[8px] text-[#B4E33E] mt-1">7X</span>
                       <span className="text-[8px] text-[#B4E33E] mt-1">7X</span>
                       <span className="text-[8px] text-[#B4E33E] mt-1">3X</span>
                       <span className="text-[8px] text-[#B4E33E] mt-1">6X</span>
                       <span className="text-[8px] text-[#B4E33E] mt-1">5X</span>
                       <span className="text-[8px] text-[#B4E33E] mt-1">2X</span>
                       <span className="text-[8px] text-[#B4E33E] mt-1">6X</span>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* App Icon Section */}
      <div className="w-full bg-[#182a17]">
         <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 flex flex-col lg:flex-row gap-16 overflow-hidden">
            
            <div className="lg:w-1/3 flex flex-col pt-12 relative z-10 text-white">
               <h3 className="text-4xl md:text-5xl font-bold italic mb-20 text-[#E0FE94]">App icon -</h3>
               
               <div className="w-[180px] h-[180px] relative mb-16">
                  <div className="absolute inset-[-40px] opacity-20 border border-[#B4E33E] rounded-3xl"
                       style={{ backgroundImage: 'linear-gradient(#B4E33E 1px, transparent 1px), linear-gradient(90deg, #B4E33E 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="relative w-32 h-32 md:w-40 md:h-40">
                      <div className="absolute inset-0 bg-[#FF4A3A] rounded-full border-4 shadow-xl border-transparent"></div>
                      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 text-[#002B00] text-4xl flex justify-center w-full z-20">
                         <svg width="48" height="32" viewBox="0 0 48 32" fill="none" className="w-16 h-auto drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 16C24 22 18 28 10 32C18 32 24 28 24 16Z" fill="#B4E33E"/>
                            <path d="M24 16C24 22 30 28 38 32C30 32 24 28 24 16Z" fill="#B4E33E"/>
                            <path d="M24 16C26 8 28 4 28 0H20C20 4 22 8 24 16Z" fill="#002B00"/>
                         </svg>
                      </div>
                      <div className="absolute inset-0 border border-[#B4E33E] rounded-3xl z-30"></div>
                      <div className="absolute top-0 bottom-0 left-1/2 border-l border-[#B4E33E]"></div>
                      <div className="absolute left-0 right-0 top-1/2 border-t border-[#B4E33E]"></div>
                    </div>
                  </div>
               </div>

               <h4 className="text-[#E0FE94] font-bold text-xl mb-4">Meaning</h4>
               <p className="text-[15px] font-medium text-white/80 leading-relaxed max-w-sm">
                 The logo is a subtle combination of the letter "O" and the image of a tomato, creating a minimalist yet meaningful symbol that both represents written recognition and evokes the image of a fresh, natural product.
               </p>
            </div>

            <div className="lg:w-2/3 flex justify-end relative h-[600px] min-w-[500px]">
               <div className="w-[800px] h-[1200px] absolute right-[-200px] top-[-50px] transform -rotate-[15deg]">
                 <img src="https://placehold.co/1200x1600/000000/FFFFFF?font=montserrat&text=Phone\\nScreen" className="w-[80%] rounded-[4rem] shadow-2xl opacity-10" />
                 
                 <div className="absolute top-[8%] left-[8%] w-[68%] h-[80%] bg-black rounded-[4rem] border-[12px] border-[#333] p-8 flex flex-col justify-start">
                    <div className="w-full flex justify-between items-center text-white px-6 font-bold text-lg mb-16">
                       <span>9:41</span>
                       <div className="flex gap-2">
                         <span className="text-xs">LTE</span>
                         <span className="w-6 h-3 bg-white rounded-sm"></span>
                       </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-x-6 gap-y-12 px-2">
                       <div className="flex flex-col items-center gap-2">
                         <div className="w-[80px] h-[80px] bg-white rounded-3xl relative flex items-center justify-center p-2 shadow-xl">
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full border-2 border-black flex items-center justify-center text-white font-bold text-sm">2</div>
                            <div className="w-14 h-14 bg-[#FF4A3A] rounded-full relative">
                               <div className="absolute top-[-4px] left-1/2 -translate-x-1/2">
                                  <svg width="24" height="16" viewBox="0 0 48 32" fill="none" className="w-8 h-auto" xmlns="http://www.w3.org/2000/svg">
                                     <path d="M24 16C24 22 18 28 10 32C18 32 24 28 24 16Z" fill="#B4E33E"/>
                                     <path d="M24 16C24 22 30 28 38 32C30 32 24 28 24 16Z" fill="#B4E33E"/>
                                  </svg>
                               </div>
                            </div>
                         </div>
                         <span className="text-white font-medium text-xs">CALOFIX</span>
                       </div>
                       <div className="flex flex-col items-center gap-2">
                         <div className="w-[80px] h-[80px] bg-white rounded-3xl flex flex-col items-center justify-center overflow-hidden">
                           <div className="w-full bg-red-500 text-white font-bold text-[10px] text-center pt-1 pb-1">MON</div>
                           <div className="text-3xl text-black font-semibold mt-1">6</div>
                         </div>
                         <span className="text-white font-medium text-xs">Calendar</span>
                       </div>
                       <div className="flex flex-col items-center gap-2">
                         <div className="w-[80px] h-[80px] bg-white rounded-3xl flex items-center justify-center">
                           <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full"></div>
                         </div>
                         <span className="text-white font-medium text-xs">Photos</span>
                       </div>
                       <div className="flex flex-col items-center gap-2">
                         <div className="w-[80px] h-[80px] bg-gray-200 rounded-3xl flex items-center justify-center">
                           <div className="w-10 h-8 bg-gray-900 rounded-lg relative flex items-center justify-center">
                             <div className="w-4 h-4 bg-white rounded-full"></div>
                           </div>
                         </div>
                         <span className="text-white font-medium text-xs">Camera</span>
                       </div>
                       <div className="flex flex-col items-center gap-2">
                         <div className="w-[80px] h-[80px] bg-blue-500 rounded-3xl flex items-center justify-center shadow-lg">
                           <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M0 0H40V24H0V0Z" fill="white"/>
                             <path d="M0 0L20 12L40 0" fill="#3B82F6"/>
                           </svg>
                         </div>
                         <span className="text-white font-medium text-xs">Mail</span>
                       </div>
                       <div className="flex flex-col items-center gap-2">
                         <div className="w-[80px] h-[80px] bg-yellow-100 rounded-3xl flex flex-col justify-start pt-4 shadow-lg overflow-hidden">
                           <div className="w-full border-b border-yellow-300 h-2 mb-2"></div>
                           <div className="w-full border-b border-yellow-300 h-2 mb-2"></div>
                           <div className="w-full border-b border-yellow-300 h-2"></div>
                         </div>
                         <span className="text-white font-medium text-xs">Notes</span>
                       </div>
                       <div className="flex flex-col items-center gap-2">
                         <div className="w-[80px] h-[80px] bg-white rounded-3xl flex flex-col p-3 shadow-lg justify-center gap-2">
                           <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-400"></div><div className="h-2 w-8 bg-gray-300 rounded"></div></div>
                           <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-orange-400"></div><div className="h-2 w-10 bg-gray-300 rounded"></div></div>
                           <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-400"></div><div className="h-2 w-6 bg-gray-300 rounded"></div></div>
                         </div>
                         <span className="text-white font-medium text-xs">Reminders</span>
                       </div>
                       <div className="flex flex-col items-center gap-2">
                         <div className="w-[80px] h-[80px] bg-black rounded-3xl flex items-center justify-center shadow-lg border border-gray-800">
                           <div className="w-14 h-14 bg-white rounded-full relative">
                             <div className="absolute top-1/2 left-1/2 w-1 h-5 bg-black origin-bottom -translate-x-1/2 -mt-5 rounded"></div>
                             <div className="absolute top-1/2 left-1/2 w-1 h-4 bg-black origin-bottom rotate-90 -mt-4 ml-1 rounded"></div>
                             <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-red-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                           </div>
                         </div>
                         <span className="text-white font-medium text-xs">Clock</span>
                       </div>
                       <div className="flex flex-col items-center gap-2 opacity-50">
                         <div className="w-[80px] h-[80px] bg-gray-400 rounded-3xl flex items-center justify-center"></div>
                       </div>
                       <div className="flex flex-col items-center gap-2">
                         <div className="w-[80px] h-[80px] bg-black rounded-3xl flex items-center justify-center border border-gray-800 text-white font-bold text-2xl tracking-tighter">
                           tv
                         </div>
                       </div>
                       <div className="flex flex-col items-center gap-2">
                         <div className="w-[80px] h-[80px] bg-purple-500 rounded-3xl flex items-center justify-center">
                           <div className="w-10 h-10 border-4 border-white rounded-full flex flex-col justify-end items-center relative overflow-hidden">
                             <div className="w-4 h-4 bg-white rounded-full top-2 absolute"></div>
                           </div>
                         </div>
                       </div>
                       <div className="flex flex-col items-center gap-2">
                         <div className="w-[80px] h-[80px] bg-blue-500 rounded-3xl flex items-center justify-center">
                           <span className="text-white font-bold text-4xl">A</span>
                         </div>
                         <span className="text-white font-medium text-xs">store</span>
                       </div>
                    </div>
                 </div>
               </div>
            </div>
         </div>
      </div>

      {/* Onboarding Section */}
      <div className="w-full bg-[#EBF0EB] py-24">
         <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <h3 className="text-4xl md:text-5xl font-bold italic mb-16 text-[#002B00]">on boarding -</h3>
            
            <div className="w-full flex gap-3 md:gap-5 lg:gap-8 overflow-x-auto snap-x justify-center py-4">
               {[1, 2, 3, 4, 5].map((item) => (
                 <div key={item} className="shrink-0 snap-center w-[220px] md:w-[260px] aspect-[1/2.15] bg-black rounded-[2.5rem] border-[6px] border-black overflow-hidden shadow-xl relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[45%] h-[4%] bg-black rounded-b-xl z-20"></div>
                    <img src={`https://placehold.co/400x860/002B00/FFFFFF?font=montserrat&text=Onboarding\\nScreen+${item}`} className="w-full h-full object-cover" />
                 </div>
               ))}
            </div>
         </div>
      </div>

      {/* Home Section */}
      <div className="w-full bg-[#182a17]">
         <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
            <div className="flex justify-end mb-16">
               <h3 className="text-4xl md:text-5xl font-bold italic text-white/50">home -</h3>
            </div>
            
            <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24 min-h-[600px] mt-20 mb-24 px-12 perspective-1000">
               <div className="w-[300px] aspect-[1/2.15] border-[10px] border-black rounded-[3rem] shadow-2xl relative bg-black transform rotate-x-[15deg] rotate-y-[20deg] rotate-z-[-10deg] scale-110">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[45%] h-[4%] bg-black rounded-b-xl z-20"></div>
                  <img src="https://placehold.co/400x860/FFFFFF/000000?font=montserrat&text=Dashboard" className="w-full h-full object-cover rounded-[2rem]" />
               </div>
               
               <div className="w-[300px] aspect-[1/2.15] border-[10px] border-black rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative bg-black transform rotate-x-[10deg] rotate-y-[5deg] rotate-z-[-5deg] scale-125 z-10 -mt-16">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[45%] h-[4%] bg-black rounded-b-xl z-20"></div>
                  <img src="https://placehold.co/400x860/FFFFFF/000000?font=montserrat&text=Calories" className="w-full h-full object-cover rounded-[2rem]" />
               </div>

               <div className="w-[300px] aspect-[1/2.15] border-[10px] border-black rounded-[3rem] shadow-2xl relative bg-black transform rotate-x-[5deg] rotate-y-[-10deg] rotate-z-[5deg] scale-110">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[45%] h-[4%] bg-black rounded-b-xl z-20"></div>
                  <img src="https://placehold.co/400x860/002B00/FFFFFF?font=montserrat&text=Meal\\nLog" className="w-full h-full object-cover rounded-[2rem]" />
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 text-white/80 text-[15px] md:text-[17px] font-medium leading-relaxed max-w-6xl mx-auto mt-20">
               <p>
                 Calofix offers a comprehensive health management ecosystem focused on personalizing nutritional journeys through three core functional pillars. First is the Intuitive Dashboard, allowing users to track calorie intake and essential macros right on the home screen, paired with weight charts to monitor long-term goals. This is complemented by In-depth
               </p>
               <p>
                 Statistics, where data is converted into BMI indicators and detailed micronutrient reports to help users refine their scientific diets. Finally, the Smart Meal Log optimizes user experience with a rich menu library and quick-search features, making daily nutritional tracking simple, accurate, and inspiring.
               </p>
            </div>
         </div>
      </div>

      {/* Typography Section */}
      <div className="w-full bg-[#EBF0EB] py-24">
         <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-[1fr.5fr] gap-x-16 gap-y-12">
            
            <div className="flex flex-col w-full max-w-2xl">
               <h3 className="text-3xl md:text-5xl font-bold italic mb-6 text-[#002B00]">/Typography (Montserrat )</h3>
               <p className="text-[17px] font-medium italic text-[#002B00] leading-relaxed mb-12">
                 Montserrat is a modern, geometric, easy-to-read, and versatile sans-serif font. Designed by Julieta Ulanovsky, it has a high weighting (Thin → Black), making it suitable for both headlines and body text. Its clear, professional style is ideal for app and website interfaces like Calofix.
               </p>
               
               <div className="border border-gray-300 rounded-[2rem] p-8 md:p-12 bg-[#F3F7F3]">
                  <h4 className="font-bold text-3xl mb-8 text-black">Montserrat</h4>
                  <ul className="flex flex-col gap-5 text-[15px] text-[#222]">
                     <li><strong className="font-bold uppercase inline-block w-28">REGULAR:</strong> A, B, C, D, E, F, G, H, I, J, K, L, <br/><span className="pl-28">M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z</span></li>
                     <li><strong className="font-bold uppercase inline-block w-28">MEDIUM:</strong> <span className="font-medium tracking-wide">123456789012344657</span></li>
                     <li><strong className="font-bold uppercase inline-block w-28">SEMIBOLD:</strong> <span className="font-semibold tracking-wider">!@#$$^%%&&**@#!#@$##@%#$^</span></li>
                     <li><strong className="font-bold uppercase inline-block w-28">BOLD:</strong> <span className="font-bold">A, B, C, D, E, F, G, H, I, J, K, L, <br/><span className="pl-28">M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z</span></span></li>
                  </ul>
               </div>
            </div>

            <div className="flex flex-col gap-6 md:pt-4">
               <div className="grid grid-cols-3 gap-4">
                 <div className="aspect-square bg-[#B4E33E] rounded-xl flex flex-col p-4 shadow-sm text-[#002B00]">
                    <span className="font-bold text-sm">#B4E33E</span>
                    <span className="text-xs font-semibold mt-1">C31 M5 Y97 K0</span>
                 </div>
                 <div className="aspect-square bg-[#E0FE94] rounded-xl flex flex-col p-4 shadow-sm text-[#002B00]">
                    <span className="font-bold text-sm">#E0FE94</span>
                    <span className="text-xs font-semibold mt-1">C15 M0 Y54 K0</span>
                 </div>
                 <div className="aspect-square bg-[#002B00] rounded-xl flex flex-col p-4 shadow-sm text-white">
                    <span className="font-bold text-sm">#002B00</span>
                    <span className="text-xs font-semibold mt-1">C71 M56 Y83 K73</span>
                 </div>
               </div>

               <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="aspect-square bg-[#002200] rounded-xl p-4 shadow-sm text-white relative">
                     <span className="bg-[#B4E33E] text-black text-[10px] font-bold px-2 py-0.5 rounded-full absolute top-4 left-4">1.23</span>
                     <div className="absolute top-10 left-4 text-white/50 text-[10px] w-[90%] border-b border-white/20 pb-1">17.09 AAA AAA</div>
                     <div className="absolute bottom-4 left-4 flex flex-col text-[10px]">
                       <span className="font-bold italic text-white">Normal: active</span>
                       <span className="text-white/80">#002200</span>
                       <span className="text-white/80">rgb(0, 34, 0)</span>
                     </div>
                  </div>
                  
                  <div className="aspect-square bg-[#002000] rounded-xl p-4 shadow-sm text-white relative">
                     <span className="bg-[#B4E33E] text-black text-[10px] font-bold px-2 py-0.5 rounded-full absolute top-4 left-4">1.21</span>
                     <div className="absolute top-10 left-4 text-white/50 text-[10px] w-[90%] border-b border-white/20 pb-1">17.40 AAA AAA</div>
                     <div className="absolute bottom-4 left-4 flex flex-col text-[10px]">
                       <span className="font-bold italic text-white">Dark</span>
                       <span className="text-white/80">#002000</span>
                       <span className="text-white/80">rgb(0, 32, 0)</span>
                     </div>
                  </div>

                  <div className="aspect-square bg-[#001a00] rounded-xl p-4 shadow-sm text-white relative">
                     <span className="bg-[#B4E33E] text-black text-[10px] font-bold px-2 py-0.5 rounded-full absolute top-4 left-4">1.15</span>
                     <div className="absolute top-10 left-4 text-white/50 text-[10px] w-[90%] border-b border-white/20 pb-1">18.30 AAA AAA</div>
                     <div className="absolute bottom-4 left-4 flex flex-col text-[10px]">
                       <span className="font-bold italic text-white">Dark: hover</span>
                       <span className="text-white/80">#001a00</span>
                       <span className="text-white/80">rgb(0, 26, 0)</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Footer Mockups */}
      <div className="w-full bg-[#182a17]">
         <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 pb-48 flex flex-col">
            
            <div className="flex justify-between items-start flex-col lg:flex-row gap-16 lg:gap-8 w-full">
               
               <div className="flex flex-col w-full lg:w-1/2">
                  <h3 className="text-3xl md:text-5xl font-bold italic mb-12 text-[#E0FE94]">CALOFIX AI -</h3>
                  <div className="flex gap-6 justify-center">
                    <img src="https://placehold.co/400x860/000000/FFFFFF?font=montserrat&text=AI\\nChat" className="w-[200px] md:w-[260px] aspect-[1/2.15] rounded-[2.5rem] border-[6px] border-black shadow-xl" />
                    <img src="https://placehold.co/400x860/000000/FFFFFF?font=montserrat&text=AI\\nSuggest" className="w-[200px] md:w-[260px] aspect-[1/2.15] rounded-[2.5rem] border-[6px] border-black shadow-xl mt-12" />
                  </div>
               </div>

               <div className="flex flex-col w-full lg:w-1/2 items-end pt-16 lg:pt-32">
                  <div className="flex justify-start w-full lg:w-auto -ml-16 md:ml-0 lg:-ml-24">
                     <div className="flex gap-6 justify-center">
                        <img src="https://placehold.co/400x860/002B00/FFFFFF?font=montserrat&text=Voucher\\nList" className="w-[200px] md:w-[260px] aspect-[1/2.15] rounded-[2.5rem] border-[6px] border-[#001a00] shadow-xl transform rotate-[-5deg]" />
                        <img src="https://placehold.co/400x860/002B00/FFFFFF?font=montserrat&text=Voucher\\nDetail" className="w-[200px] md:w-[260px] aspect-[1/2.15] rounded-[2.5rem] border-[6px] border-[#001a00] shadow-xl mt-16 transform rotate-[5deg]" />
                     </div>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold italic mt-16 text-[#E0FE94] w-full text-right">voucher -</h3>
               </div>

            </div>

         </div>
      </div>

    </section>
  );
}
