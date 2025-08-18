import smartWatch1 from "../assets/smartwatch-1.png";
import smartWatch2 from "../assets/smartwatch-2.png";
import smartWatch3 from "../assets/smartwatch-3.png";
import smartWatch4 from "../assets/smartwatch-4.png";
import smartWatch5 from "../assets/smartwatch.png";

function Collection({ show }) {
  return <div className={`absolute ml-[105px] -translate-x-1/2 mt-2 transition-all duration-300 ease-in-out ${ show ? "opacity-100 visible" : "opacity-0 invisible"}`} >
      <div className="flex justify-center py-7 px-10 pb-14 bg-black rounded-3xl gap-5">
        
        <div className="bg-white w-[220px] h-[220px] rounded-xl relative">
          <img className="w-20 ml-[80px] mt-12" src={smartWatch1} alt="" />
          <h1 className="font-bold text-center hover:text-blue text-[1.3em] pt-5 pb-3"> Classic watch </h1>
          <button className="bg-blue text-white py-1 px-5 rounded-3xl absolute right-14 -bottom-4"> Check Now </button>
        </div>

       
        <div className="bg-white w-[220px] h-[220px] rounded-xl relative">
          <img className="w-20 ml-[80px] mt-12" src={smartWatch2} alt="" />
          <h1 className="font-bold text-center hover:text-blue text-[1.3em] pt-5 pb-3"> Custom watch </h1>
          <button className="bg-blue text-white py-1 px-5 rounded-3xl absolute right-14 -bottom-4">Check Now </button>
        </div>

     
        <div className="bg-white w-[220px] h-[220px] rounded-xl relative">
          <img className="w-20 ml-[80px] mt-12" src={smartWatch3} alt="" />
          <h1 className="font-bold text-center hover:text-blue text-[1.3em] pt-5 pb-3"> Sports watch </h1>
          <button className="bg-blue text-white py-1 px-5 rounded-3xl absolute right-14 -bottom-4"> Check Now </button>
        </div>

    
        <div className="bg-white w-[220px] h-[220px] rounded-xl relative">
          <img className="w-20 ml-[70px] mt-12" src={smartWatch4} alt="" />
          <h1 className="font-bold text-center hover:text-blue text-[1.3em] pt-5 pb-3"> Modern watch </h1>
          <button className="bg-blue text-white py-1 px-5 rounded-3xl absolute right-14 -bottom-4"> Check Now </button>
        </div>

        <div className="bg-white w-[220px] h-[220px] rounded-xl relative">
          <img className="w-20 ml-[60px] mt-12" src={smartWatch5} alt="" />
          <h1 className="font-bold text-center hover:text-blue text-[1.3em] pt-5 pb-3"> Bestsellers </h1>
          <button className="bg-blue text-white py-1 px-5 rounded-3xl absolute right-12 -bottom-4"> Check Now </button>
        </div>
      </div>
    </div>

}

export default Collection;
