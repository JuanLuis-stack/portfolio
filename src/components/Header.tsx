function Header() {
  return (
    <header className="w-screen relative px-5 h-screen overflow-hidden flex justify-center items-center">
      <img
        className="w-full absolute z-1"
        src="Professional Portrait in Warm Gradient.png"
        alt=""
      />
      <div className="relative px-5 mr-4 w-full h-full">
        <div className="flex items-center gap-1.5 absolute w-10 left-3 top-2 z-2">
          <img
            src="Interwoven White JR Monogram on Black.png"
            className="w-8 rounded-xl"
            alt=""
          />
          <p className="font-light whitespace-nowrap text-white">
            Juan Luis stack
          </p>
        </div>
        <div
          dir="rtl"
          className="absolute flex flex-col justify-end items-start right-0 text-sm ltr z-2 max-w-xl top-40"
        >
          <button
            dir="ltr"
            className="border uppercase tracking-widest text-white/50 rounded-2xl px-2 py-0.5 mb-2 text-[11px] flex items-center gap-2"
          >
            Avaliable for hire{" "}
            <button className="w-1 h-1 rounded-full bg-green-600"></button>
          </button>
          <p dir="ltr" className="text-white text-6xl font-semibold flex pb-1">
            Hi, I'm
            <p className="pl-3 text-orange-400 italic">Juan Luis.</p>
          </p>
          <p className="tracking-widest text-white/45 font-light pb-5">
            Full Stack Software Developer
          </p>
          <p className="ltr max-w-md">
            I'm a self-driven developer passionate about solving problems,
            writing clean code, and continuously learning. I focus on
            understanding the why behind every solution and turning knowledge
            into real-world applications.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
