const Desktop1 = () => {
  return (
    <div className="relative bg-violet-100 w-full h-[1024px] overflow-hidden text-center text-21xl text-black font-baloo-chettan">
      <section className="absolute top-[-46px] left-[427px] rounded-[172px] bg-white w-[1137px] h-[1110px]" />
      <textarea className="bg-white absolute top-[569px] left-[677px] rounded-xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[637px] h-[244px] border-[1px] border-solid border-black" />
      <section className="absolute top-[197px] left-[-548px] text-[70px] font-baloo-chettan text-center inline-block w-[1477px] h-[237px] text-black">
        <span>{`  `}</span>
        <span className="text-white"> HOOK-IFY</span>
      </section>
      <img
        className="absolute top-[813px] left-[296px] w-[262px] h-[229px] object-cover"
        alt=""
        src="/images--2-removebgpreview-1@2x.png"
      />
      <textarea className="bg-white absolute top-[226px] left-[677px] rounded-xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[617px] h-[181px] border-[1px] border-solid border-black" />
      <div className="absolute top-[155px] left-[650px] inline-block w-[535px] h-[62px]">
        WHAT IS YOUR TOPIC?
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-violet-200 absolute top-[467px] left-[860.1px] rounded-3xs w-[282px] h-[57px] [transform:_rotate(0.12deg)] [transform-origin:0_0]" />
      <div className="absolute top-[467px] left-[895px] text-[32px] inline-block w-[211px] h-[13px]">
        GENERATE
      </div>
    </div>
  );
};

export default Desktop1;
