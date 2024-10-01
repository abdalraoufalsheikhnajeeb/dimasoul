import Image from "next/image";

const QuoteSection = async () => {
  return (
    <section className="relative flex h-[300px] w-screen items-center justify-center overflow-hidden text-center md:h-[400px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/leafs.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className=""
        />
      </div>

      {/* Quote Text */}
      <div className="sec relative z-10 p-6">
        <div className="text-2xl font-bold leading-relaxed text-white md:text-5xl">
          <span className="text-7xl font-bold md:text-8xl">“</span>
          Self-care is not a luxury. It’s a necessity. Without it, we cannot be
          our best selves, mentally, emotionally, or physically.
          <span className="text-7xl font-bold md:text-8xl">”</span>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
