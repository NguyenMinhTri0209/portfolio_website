import vectorBackground from "../../img/Vector.png";
import vector1Background from "../../img/Vector1.png";
import group7Icon from "../../img/Group 7.png";
import group5Icon from "../../img/Group 5.png";
import group58Icon from "../../img/Group 58.png";
import group141Icon from "../../img/Group 141.png";
import group112Title from "../../img/Group 112.png";
import portraitFrame from "../../img/Frame 1000004040.png";
import objectsIcon from "../../img/OBJECTS.png";
import sparkleIcon from "../../img/13.png";
import image7 from "../../img/image 7.png";
import image8 from "../../img/image 8.png";
import image9 from "../../img/image 9.png";
import image10 from "../../img/image 10.png";
import image12 from "../../img/image 12.png";

export function AboutMe() {
  const personalSkills = ['Creative', 'Adaptability', 'Teamwork', 'Proactive', 'Time management', 'Problem-solving', 'Communication', 'Collaboration'];
  const technicalSkills = ['Branding', 'SocialPost', 'UX-Research', 'UI-Research', 'Layoutdesign', 'Ilustrator'];

  return (
    <section
      id="about-me"
      className="relative w-full bg-white py-12 font-sans overflow-hidden"
    >
      <div className="absolute -left-[30%] top-[-12%] w-[1605px] h-[1000px] bg-[#2455bb]/[0.26] mix-blend-hard-light opacity-60 blur-[168px] -z-10 -scale-x-100 rotate-[17deg]" />
      <div className="absolute -left-[25%] top-[30%] w-[1605px] h-[1000px] bg-[#2455bb]/[0.5] mix-blend-hard-light opacity-60 blur-[168px] -z-10 -scale-x-100 rotate-[17deg]" />
      <div className="absolute left-[-10.43%] right-[-11.86%] top-[5.32%] bottom-[61.46%] bg-[#285CE3]/[0.13] -z-10" />
      <img
        src={vector1Background}
        alt=""
        aria-hidden="true"
        className="about-me-vector-1 absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none z-0 mix-blend-multiply"
      />
      <img
        src={vectorBackground}
        alt=""
        aria-hidden="true"
        className="about-me-vector absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none z-0"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Column: Photo & Contact */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden">
              <img
                src={portraitFrame}
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 flex flex-col gap-4 text-[#285CE3]">
              <h3 className="font-bold text-lg mb-2">contact*</h3>
              <div className="flex items-center gap-3 text-sm">
                <img src={group7Icon} alt="" aria-hidden="true" className="w-5 h-5 object-contain" />
                <span>behance.net/ngoquyenmai</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                 <img src={group5Icon} alt="" aria-hidden="true" className="w-5 h-5 object-contain" />
                <span>0304383834</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <img src={group141Icon} alt="" aria-hidden="true" className="w-5 h-5 object-contain" />
                <span>Thu Duc, HCM City</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <img src={group58Icon} alt="" aria-hidden="true" className="w-5 h-5 object-contain" />
                <span>maiqnguyennn@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right Column: Intro, Education, Skills */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            <div className="flex flex-col items-start gap-6">
              <div className="bg-[#285CE3] text-white px-6 py-2 rounded-[1.25rem] rounded-bl-sm font-bold italic text-lg tracking-wide shadow-sm" style={{ transform: 'skewX(-8deg)'}}>
                <div style={{ transform: 'skewX(8deg)'}}>Hi, I'm here</div>
              </div>
              <div className="space-y-5 lg:pr-12">
                <p className="text-[16px] md:text-[17px] leading-[1.7] font-medium text-[#285CE3]">
                  Welcome to my portfolio. <span className="bg-[#C8DBFF]/60 px-1 py-0.5 rounded">Graphic Design student with a focus on Branding and UI/UX.</span> I specialize in turning concepts into emotional visual universes. With a passion for visual storytelling and technical detail, I am always seeking design solutions where functionality meets intuition, focused on creating designs that are not only visually appealing but also meaningful and functional. Through practical experience and continuous learning,
                </p>
                <p className="text-[16px] md:text-[17px] leading-[1.7] font-medium text-[#285CE3]">
                  I combine creativity with strategy to <span className="bg-[#C8DBFF]/60 px-1 py-0.5 rounded">deliver effective solutions.</span> This portfolio showcases my design philosophy and the value I bring to each project.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="flex flex-col gap-4">
                <div className="border-b border-gray-200 pb-2">
                  <img src={group112Title} alt="Education" className="h-20 w-auto object-contain" />
                </div>
                <div className="text-gray-600">
                  <p className="mb-1 flex items-center gap-2 text-sm font-extrabold text-blue-dark">
                    <img src={objectsIcon} alt="" aria-hidden="true" className="h-3 w-auto object-contain" />
                    <span>2021 - 2026</span>
                  </p>
                  <p className="font-extrabold text-lg text-blue-dark mb-1">FPT UNIVERSITY - Vietnam</p>
                  <p className="text-sm">Bachelor's Degree in Graphic Design<br/>Major in Branding and UI/UX Design</p>
                </div>
              </div>
              <div className="h-[152px] w-[265px] overflow-hidden">
                <h3 className="font-display font-bold text-[28px] leading-none text-blue-dark border-b border-gray-200 pb-2 mb-3">technical skills</h3>
                <div className="flex flex-wrap gap-1.5">
                  {technicalSkills.map(skill => (
                    <span key={skill} className="relative inline-flex whitespace-nowrap px-2.5 py-1 bg-[#285CE3] text-white rounded-full text-xs font-medium border border-[#285CE3]">
                      {skill}
                      {skill === 'UI-Research'}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-[178px] w-[292px] overflow-hidden">
                <h3 className="font-display font-bold text-[28px] leading-none text-blue-dark border-b border-gray-200 pb-2 mb-3">personal skills</h3>
                <div className="flex flex-wrap gap-1.5">
                  {personalSkills.map(skill => (
                    <span key={skill} className="whitespace-nowrap px-2.5 py-1 bg-white text-[#285CE3] rounded-full text-xs font-medium border border-blue-dark">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display font-bold text-3xl text-blue-dark border-b border-gray-200 pb-2 mb-4">software skills</h3>
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
    </section>
  );
}
