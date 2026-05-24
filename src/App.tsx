import aboutMeImage from '../img/About me.png';

export default function App() {
  return (
    <main className="min-h-screen bg-white">
      <img
        src={aboutMeImage}
        alt="About me"
        className="block w-full h-auto"
      />
    </main>
  );
}
