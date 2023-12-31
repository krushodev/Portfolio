function ScrollDownIndicator() {
  const circleStyle = 'bg-[#c0bcb1] rounded-full absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] origin-[0%]';

  return (
    <div className="w-[75px] h-[75px] s:w-[100px] s:h-[100px] relative">
      <div className={`${circleStyle} w-[35px] h-[65px] z-0 top-[0px] animate-blobOne s:w-[41px] s:h-[33px]`}></div>
      <div className={`${circleStyle}  w-full h-full`}></div>
      <div className={`${circleStyle}  w-[35px] h-[20px] z-0 bottom-[0px] animate-blobTwo s:w-[41px] s:h-[33px]`}></div>
      <svg className="z-50 relative" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 612 612" xmlSpace="preserve">
        <defs>
          <clipPath id="cut-off-arrow">
            <circle cx="306" cy="306" r="287" />
          </clipPath>

          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
        <path
          className="fill-black animate-scrollY perspective-[9000px] translate-z-0 origin-bottom"
          d="M317.5,487.6c0.3-0.3,0.4-0.7,0.7-1.1l112.6-112.6c6.3-6.3,6.3-16.5,0-22.7c-6.3-6.3-16.5-6.3-22.7,0
          l-86,86V136.1c0-8.9-7.3-16.2-16.2-16.2c-8.9,0-16.2,7.3-16.2,16.2v301.1l-86-86c-6.3-6.3-16.5-6.3-22.7,0
          c-6.3,6.3-6.3,16.5,0,22.7l112.7,112.7c0.3,0.3,0.4,0.7,0.7,1c0.5,0.5,1.2,0.5,1.7,0.9c1.7,1.4,3.6,2.3,5.6,2.9
          c0.8,0.2,1.5,0.4,2.3,0.4C308.8,492.6,313.8,491.3,317.5,487.6z"
        />
      </svg>
    </div>
  );
}

export default ScrollDownIndicator;
