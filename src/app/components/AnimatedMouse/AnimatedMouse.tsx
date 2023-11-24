function AnimatedMouse() {
  return (
    <div className="w-6 h-10 border-black border-2 rounded-full">
      <div className="bg-black w-1 h-1 rounded-full mx-auto my-1 animate-[fingerScroll_1s_ease-in-out_infinite]"></div>
    </div>
  );
}

export default AnimatedMouse;
