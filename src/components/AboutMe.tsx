import { Mail, Phone, MapPin, Globe } from "lucide-react";
import vectorBackground from "../../img/Vector.png";
import vector1Background from "../../img/Vector1.png";
import image7 from "../../img/image 7.png";
import image8 from "../../img/image 8.png";
import image9 from "../../img/image 9.png";
import image10 from "../../img/image 10.png";
import image12 from "../../img/image 12.png";

export function AboutMe() {
  return (
    <section
      id="about-me"
      className="relative w-full bg-white py-12 font-sans overflow-hidden"
    >
      <div className="absolute -left-[30%] top-[-12%] w-[1605px] h-[1000px] bg-[#2455bb]/[0.26] mix-blend-hard-light opacity-60 blur-[168px] -z-10 -scale-x-100 rotate-[17deg]" />
      <div className="absolute -left-[25%] top-[30%] w-[1605px] h-[1000px] bg-[#2455bb]/[0.5] mix-blend-hard-light opacity-60 blur-[168px] -z-10 -scale-x-100 rotate-[17deg]" />
      <div className="absolute left-[-10.43%] right-[-11.86%] top-[5.32%] bottom-[61.46%] bg-[#285ce3]/[0.13] -z-10" />
      <img
        src={vectorBackground}
        alt=""
        aria-hidden="true"
        className="about-me-vector absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none z-0"
      />
      <img
        src={vector1Background}
        alt=""
        aria-hidden="true"
        className="about-me-vector-1 absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none z-0 mix-blend-multiply"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Column: Photo & Contact */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-gray-200">
              <img
                src="https://placehold.co/600x800/e2e8f0/64748b?text=Portrait"
                alt="Portrait"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg">
                <span className="font-display italic text-2xl text-blue-accent pr-4 border-r border-gray-300 mr-4">thuy.</span>
                <span className="font-semibold text-lg uppercase tracking-wider text-blue-dark">ngoc quyen mai</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
              <h3 className="font-bold text-lg text-blue-dark mb-2">contact_</h3>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Globe className="w-4 h-4 text-blue-accent" />
                <span>behance.net/ngoquyenmai</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Phone className="w-4 h-4 text-blue-accent" />
                <span>0304383834</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-blue-accent" />
                <span>Thu Duc, HCM City</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Mail className="w-4 h-4 text-blue-accent" />
                <span>maiqnguyennn@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right Column: Intro, Education, Skills */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            <div className="flex flex-col items-start gap-6">
              <div className="bg-[#4271FF] text-white px-6 py-2 rounded-[1.25rem] rounded-bl-sm font-bold italic text-lg tracking-wide shadow-sm" style={{ transform: 'skewX(-8deg)'}}>
                <div style={{ transform: 'skewX(8deg)'}}>Hi, I'm here</div>
              </div>
              <div className="space-y-5 lg:pr-12">
                <p className="text-[16px] md:text-[17px] leading-[1.7] font-medium text-[#1A3FB0]">
                  Welcome to my portfolio. <span className="bg-[#C8DBFF]/60 px-1 py-0.5 rounded">Graphic Design student with a focus on Branding and UI/UX.</span> I specialize in turning concepts into emotional visual universes. With a passion for visual storytelling and technical detail, I am always seeking design solutions where functionality meets intuition, focused on creating designs that are not only visually appealing but also meaningful and functional. Through practical experience and continuous learning,
                </p>
                <p className="text-[16px] md:text-[17px] leading-[1.7] font-medium text-[#1A3FB0]">
                  I combine creativity with strategy to <span className="bg-[#C8DBFF]/60 px-1 py-0.5 rounded">deliver effective solutions.</span> This portfolio showcases my design philosophy and the value I bring to each project.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <h3 className="font-display italic text-3xl text-blue-accent border-b border-gray-200 pb-2">Education</h3>
                <div className="mt-2 text-gray-600">
                  <p className="font-medium text-sm text-gray-500 mb-1">// 2021 - 2025</p>
                  <p className="font-bold text-lg text-blue-dark mb-1">FPT UNIVERSITY - Vietnam</p>
                  <p className="text-sm">Bachelor's Degree in Graphic Design<br/>Major in Branding and UI/UX Design</p>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="font-display italic text-3xl text-blue-accent border-b border-gray-200 pb-2 mb-4">Personal skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Creative', 'Adaptability', 'Teamwork', 'Proactive', 'Time management', 'Problem-solving', 'Communication', 'Collaboration'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-xs font-medium border border-blue-100">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-display italic text-3xl text-blue-accent border-b border-gray-200 pb-2 mb-4">Software skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {[image7, image8, image9, image10, image12].map((icon, index) => (
                      <div key={index} className="w-10 h-10 rounded-lg overflow-hidden bg-white border border-gray-200 flex items-center justify-center">
                        <img src={icon} alt={`software icon ${index + 1}`} className="w-full h-full object-contain" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
