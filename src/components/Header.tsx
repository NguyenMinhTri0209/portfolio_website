import Marquee from "react-fast-marquee";
import headerImage from "../../img/header.png";

export function Header() {
  return (
    <header className="w-full flex flex-col">
      <div className="w-full overflow-hidden shadow-2xl">
        <img
          src={headerImage}
          alt="Portfolio header"
          className="w-full h-[420px] md:h-[560px] object-cover"
        />
      </div>

      {/* Blue gradient banner background */}
      <div className="w-full bg-gradient-to-r from-blue-accent to-blue-dark text-white py-3 overflow-hidden my-0">
        <Marquee gradient={false} speed={50}>
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-lg md:text-xl font-great-vibes italic mx-4 md:mx-8 whitespace-nowrap opacity-90">
              welcome to my portfolio - rhenmeo <span className="text-blue-300 ml-4 md:ml-8">•</span>
            </span>
          ))}
        </Marquee>
      </div>
    </header>
  );
}
