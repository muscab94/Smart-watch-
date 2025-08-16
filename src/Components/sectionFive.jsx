import testmonial1 from ".././assets/testimonial-3.jpg"
import man from ".././assets/man-airpods.jpg"
import shape1 from "../assets/shape1.png"
import shape2 from "../assets/shape2.png"
import watchFront from "../assets/watch-front-home.png"



function SectionFive(){
    return <div>
        <div className="flex justify-between px-10 py-20">
            <div className="relative">
                <img className="absolute -left-60 -top-16 w-[500px]" src={shape1} alt="" />
                 <h1 className="text-blue py-5 text-[1.4em]">Testimonials</h1>                
               
                <div  className="relative z-10">
              <h1 className="absolute left-[480px] top-16 text-[5em] opacity-10 z-0"><i class="fa-solid fa-quote-right"></i></h1>

                <p className="text-[2em] font-extrabold pl-10 ">This watch is amazing! <br /> affordable price.</p>
                <p className="text-[1.2em] text-gray-500 pt-5 pl-10 leading-10">"I don't always clop, but when i do, it's because of pear watch. <br /> pear watch has really heappened me. I SRTONGLY recomended. <br /> pear watch to EVERTONE interested in fashion & tech! thi is <br />  simply unbeleivable!"</p>


                <div className="flex  items-center justify-between">
                    <div className="flex gap-5 pt-5 items-center ml-8" >
                    <img className="rounded-full w-20" src={testmonial1} alt="" />
                    <div>
                        <h1 className="font-bold text-[1.3em]">John Carter</h1>
                        <h1 className="text-gray-400">UX Designer</h1>
                    </div>
                    </div>
                    <div className="-pt-16 flex gap-10 text-[1.5em] opacity-25">
                        <i class="fa-solid fa-arrow-left"></i>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
                </div>

                {/* testmonial 2 */}

                <div  className="relative z-10 hidden">
              <h1 className="absolute left-[480px] top-16 text-[5em] opacity-10 z-0"><i class="fa-solid fa-quote-right"></i></h1>

                <p className="text-[2em] font-extrabold pl-10 ">This watch is amazing! <br /> affordable price.</p>
                <p className="text-[1.2em] text-gray-500 pt-5 pl-10 leading-10">"I don't always clop, but when i do, it's because of pear watch. <br /> pear watch has really heappened me. I SRTONGLY recomended. <br /> pear watch to EVERTONE interested in fashion & tech! thi is <br />  simply unbeleivable!"</p>


                <div className="flex  items-center justify-between">
                    <div className="flex gap-5 pt-5 items-center ml-8" >
                    <img className="rounded-full w-20" src={testmonial1} alt="" />
                    <div>
                        <h1 className="font-bold text-[1.3em]">John Carter</h1>
                        <h1 className="text-gray-400">UX Designer</h1>
                    </div>
                    </div>
                    <div className="-pt-16 flex gap-10 text-[1.5em] opacity-25">
                        <i class="fa-solid fa-arrow-left"></i>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
                </div>
             </div>


                    <div className="relative">
                    <img className="w-[420px] rounded-xl mt-8 relative z-10" src={man} alt="" />
                    <img className=" w-[320px]     rounded-3xl absolute right-[270px] top-[230px] z-20 h-[350px]" src={watchFront} alt="" />
                    <img className="absolute right-20  top-11 z-0" src={shape2} alt="" />
                    </div>
        </div>

        
    </div>
}
export default SectionFive