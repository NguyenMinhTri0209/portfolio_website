export function TableOfContent() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-20 text-center font-sans">
      <div className="inline-block relative mb-12 group">
        <h2 className="text-5xl md:text-7xl font-bold text-blue-accent px-12 py-4 border-4 border-blue-accent rounded-full bg-white relative z-10 transition-transform group-hover:-translate-y-2">
          Tab <span className="font-light italic font-display">of content</span> <span className="text-3xl md:text-5xl border-2 border-blue-accent rounded-full px-4 py-1 ml-2 inline-block -translate-y-2">2026</span>
        </h2>
        <div className="absolute inset-0 bg-blue-100 rounded-full translate-y-3 translate-x-3 z-0"></div>
      </div>
      
      <p className="text-xl md:text-3xl font-medium text-gray-700 leading-relaxed max-w-4xl mx-auto text-balance mb-12">
        Encapsulating a creative universe from <span className="bg-blue-accent text-white px-3 py-1 rounded-lg">UI-UX</span> and <span className="bg-blue-accent text-white px-3 py-1 rounded-lg">Brand Identity</span> to Social Media<span className="text-blue-accent animate-pulse">_</span>
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {[
          { id: 'fixtek', name: 'FIXTEK', title: 'UI/UX Smart Repair' },
          { id: 'gachdo', name: 'GẠCH ĐỎ', title: 'Healthy Food E-com' },
          { id: 'calofix', name: 'CaloFix', title: 'Fitness Tracker' },
          { id: 'phencha', name: 'Phen Cha', title: 'Matcha Premium' }
        ].map((proj, i) => (
          <button 
            key={i}
            onClick={() => scrollTo(proj.id)}
            className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-2xl hover:border-blue-accent hover:shadow-lg transition-all group min-w-[200px]"
          >
            <span className="text-sm font-bold text-gray-400 group-hover:text-blue-accent mb-1 transition-colors">PROJECT 0{i + 1}</span>
            <span className="text-xl font-black text-gray-900 group-hover:text-blue-dark">{proj.name}</span>
            <span className="text-xs text-gray-500 mt-2 font-medium">{proj.title}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
