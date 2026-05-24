import Marquee from "react-fast-marquee";

export function Footer() {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-blue-accent to-blue-dark text-white py-3 overflow-hidden">
        <Marquee gradient={false} speed={50}>
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-lg md:text-xl font-great-vibes italic mx-4 md:mx-8 whitespace-nowrap opacity-90">
              welcome to my portfolio - rhenmeo <span className="text-blue-300 ml-4 md:ml-8">•</span>
            </span>
          ))}
        </Marquee>
      </div>

      <footer className="w-full flex flex-col pt-32 pb-16 bg-blue-accent text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-blue-dark/50 to-blue-accent pointer-events-none z-0"></div>
        
        <div className="w-full max-w-7xl mx-auto px-6 mb-16 relative flex items-center justify-center flex-col min-h-[40vh]">
          <h2 className="text-6xl md:text-[10rem] font-medium leading-none text-white tracking-tighter mix-blend-overlay flex items-center justify-center -mb-8">
            Thank you 
            <span className="text-2xl md:text-4xl ml-8 border-2 border-white rounded-full px-6 py-2 mt-auto font-sans font-light opacity-80">(2026)</span>
          </h2>
        </div>
      </footer>
    </>
  );
}
