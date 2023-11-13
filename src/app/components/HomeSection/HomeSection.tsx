import AnimatedMouse from '../AnimatedMouse/AnimatedMouse';

function HomeSection() {
  return (
    <div className="bg-red-500 h-screen flex flex-col justify-center items-center gap-2">
      <div className="bg-green-100 flex items-center justify-center flex flex-col gap-1.5 xl:gap-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl">Ignacio Kruchowski</h1>
        <h2 className="text-md sm:text-lg md:text-xl xl:text-3xl">Frontend Developer</h2>
      </div>
      <div className="bg-yellow-200 p-2 rounded mt-6 hover:bg-yellow-300">
        <button>Download CV</button>
      </div>
      <AnimatedMouse />
    </div>
  );
}

export default HomeSection;
