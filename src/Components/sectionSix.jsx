import imagebag from "../assets/TopKV_1440x720_desktop-copy-5.avif"
import shape3 from "../assets/shape4.png"
import shape4 from "../assets/shape3.png"


function SectionSix(){
    return <div>
        <div className="py-10 relative">
            <img className='absolute  -bottom-28 ' src={shape3} alt="" />
            <img className='absolute right-0 -bottom-28 ' src={shape4} alt="" />
            <div className="w-[1000px] h-[600px]  rounded-3xl ml-36 bg-gray-100"></div>
            <img className="w-[1150px] h-[500px] rounded-3xl absolute top-24 ml-[70px]" src={imagebag} alt="" />
            <div className="w-[1150px] h-[500px] bg-black opacity-50 rounded-3xl absolute top-24 ml-[70px]"> </div>
            <div className="w-[1150px] h-[500px] rounded-3xl absolute top-24 ml-[70px]">
                <h1 className="text-white text-center pt-24 text-[2.5em] font-extrabold">Nearby Pear-Watch Stores</h1>
                <p className="text-center text-[1.2em]  text-gray-300 opacity-75 leading-8 pt-20">A smartwatch is a wearable computer in the form of a watch; modern smartwatches <br />provide a local touchscreen interface for daily use.</p>
                <div className="flex gap-10 mt-16 ml-[350px]">
                <button className="bg-white hover:text-white hover:bg-blue text-[1.1em] py-3 px-6  rounded-3xl">Purchase Now</button>
                <button className="border-2 border-white  hover:text-black rounded-full  hover:bg-white text-white  py-3 px-12">Find Nearby Stores</button>
                </div>



            </div>
        </div>
    </div>
}
export default SectionSix