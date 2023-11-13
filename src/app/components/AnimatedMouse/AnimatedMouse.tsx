function AnimatedMouse() {
  return (
    <div className="hidden lg:block w-6 h-10 border-white border-2 rounded-full mt-10 absolute bottom-24">
      <div className="bg-white w-1 h-1 rounded-full mx-auto my-1 animate-[fingerScroll_1s_ease-in-out_infinite]"></div>
    </div>
  );
}

export default AnimatedMouse;
