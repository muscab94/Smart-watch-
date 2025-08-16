import bg from "../assets/images/shape2.png";
import watch1 from "../assets/images/slide-watch-1.png";
// import watch2 from "../assets/images/slide-watch-2.png";

function SectionOne(){
    return <div>
          <div className="w-full mt-5">
        <div className="max-w-[90%] mx-auto  flex gap-5 justify-between items-center 
          max-sm:flex-col-reverse ">
          <div className="flex-1/2 font-thin text-2xl p-4 ">
            <h3 className="mb-2">Be Online Always and Every Where </h3>
            <h2 className="mb-2 sm:text-6xl">For All Seasons </h2>
            <h1 className="font-bold sm:text-6xl">Any Circumstences</h1>
            <div className="flex gap-4 sm:gap-1 mt-4 text-white text-lg sm:text-2xl">
              <button
                className="max-sm:px-3 max-sm:py-1 sm:px-6 sm:py-3 border-1 border-black 
                    rounded-2xl bg-blue hover:bg-black"> 
                    purchase Now
              </button>
              <button className="max-sm:px-3 max-sm:py-1 sm:px-6 sm:py-3 border-2 border-black 
              text-black rounded-2xl hover:bg-blue hover:text-white hover:border-blue">
                Watch Vedio
              </button>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${bg})` }}
            className="bg-cover bg-center flex-1/2 grid place-items-center">
            <img className="w-[80%] mb-2" src={watch1} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-white/30">
        
      </div>
    </div>
}
export default SectionOne