import testmonial1 from "../assets/testimonial-3.jpg";
import man from "../assets/man-airpods.jpg";
import shape1 from "../assets/shape1.png";
import shape2 from "../assets/shape2.png";
import watchFront from "../assets/watch-front-home.png";

function SectionFive() {
  return (
    <div className="max-w-[90%] mx-auto flex justify-between px-10 py-20">
      <div className="relative">
        <img
          className="absolute -left-20 -top-10 w-[500px]"
          src={shape1}
          alt=""
        />
        <h1 className="text-blue py-5 text-[1.4em]">Testimonials</h1>

        <div className="relative z-10">
          <h1 className="absolute left-[480px] top-16 text-[5em] opacity-10 z-0">
            <i className="fa-solid fa-quote-right"></i>
          </h1>

          <p className="text-[2em] font-extrabold pl-10 ">
            This watch is amazing! <br /> affordable price.
          </p>
          <p className="text-[1.2em] text-gray-500 pt-5 pl-10 leading-10">
            "I don't always clop, but when I do, it's because of pear watch.{" "}
            <br /> Pear watch has really helped me. I STRONGLY recommend.{" "}
            <br /> Pear watch to EVERYONE interested in fashion & tech! This is{" "}
            <br /> simply unbelievable!"
          </p>

          <div className="flex items-center justify-between">
            <div className="flex gap-5 pt-5 items-center ml-8">
              <img className="rounded-full w-20" src={testmonial1} alt="" />
              <div>
                <h1 className="font-bold text-[1.3em]">John Carter</h1>
                <h1 className="text-gray-400">UX Designer</h1>
              </div>
            </div>
            <div className="pr-16 flex gap-10 text-[1.5em]">
              <i className="fa-solid fa-arrow-left opacity-25 hover:opacity-100"></i>
              <i className="fa-solid fa-arrow-right opacity-25 hover:opacity-100"></i>
            </div>
          </div>
        </div>
      </div>


      <div className="relative">
        <img
          className="w-[400px] rounded-xl mt-8 relative z-10"
          src={man}
          alt=""
        />

        <img src={watchFront} alt="watch front"  className="w-[250px] h-[200px] rounded-3xl absolute right-[270px] top-[310px] z-20 animate-anima" />

        <img className="absolute left-20 top-16 z-0" src={shape2} alt="" />
      </div>
    </div>
  );
}

export default SectionFive;
