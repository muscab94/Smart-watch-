import bg from "../assets/images/shape2.png";
import watch1 from "../assets/images/slide-watch-1.png";
// import watch2 from "../assets/images/slide-watch-2.png";

function SectionOne(){
    return <div>
          <div className="w-full">
        <div className="max-w-[90%] mx-auto  flex  justify-center items-center">
          <div className="flex-1/2 font-thin text-2xl p-4">
            <h3 className="mb-2">Be Online Always and Every Where </h3>
            <h2 className="mb-2 text-6xl">For All Seasons </h2>
            <h1 className="font-bold text-5xl">Any Circumstences</h1>
            <div className="flex gap-1 mt-4 text-white text-2xl">
              <button
                className="px-6 py-3 border-1 border-black 
                    ounded-3xl bg-blue rounded-3xl hover:bg-black"> 
                    purchase Now
              </button>
              <button className="px-6 py-3 border-1 border-black text-black rounded-3xl
                        hover:bg-blue hover:text-white ">
                Watch Vedio
              </button>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${bg})` }}
            className="flex-1/2 grid place-items-center">
            <img className="w-[80%] mb-3" src={watch1} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-white/30">
        
      </div>
    </div>
}
export default SectionOne