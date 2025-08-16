import location from ".././assets/drop.png"
import alarm from ".././assets/alarm.png"
import battery from ".././assets/battery.png"
import cloudy from ".././assets/cloudy.png"


function SectionThree(){
    return <div>
        <div className="py-10 relative">
            <div className="w-[1000px] h-[600px]  rounded-3xl ml-36 bg-gray-100"></div>
            <img className="w-[1150px] h-[500px] rounded-3xl absolute top-24 ml-[70px]" src="https://healthtechmagazine.net/sites/healthtechmagazine.net/files/styles/cdw_article_hero/public/articles/%5Bcdw_tech_site%3Afield_site_shortname%5D/202403/wearable%20trends.jpg.webp?itok=-7ozqrbu" alt="" />
            <div className="w-[1150px] h-[500px] bg-black opacity-70 rounded-3xl absolute top-24 ml-[70px]"> </div>
            <div className="w-[1150px] h-[500px] rounded-3xl absolute top-24 ml-[70px]">
                <h1 className="text-white text-center pt-10 text-[2.5em] font-extrabold">Gadget XTRA WordPress Theme </h1>
                <p className="text-center  text-white pt-20">A smartwatch is a wearable computer in the form of a watch; modern smartwatches provide a local touchscreen <br /> interface for daily use, while an associated smartphone app provides for management and telemetry (such as long- <br /> term biomonitoring)</p>

                <div className="flex justify-center gap-20 pt-16">
                   <div className=" relative ">
                    <div className="bg-white  rounded-full py-12 px-12 "></div>
                     <img className="absolute top-5 left-7 " src={location} alt="" />
                     <h1 className="text-white pt-4">Water proof</h1>
                   </div>

                   <div className="relative">
                    <div className="bg-white  rounded-full py-12 px-12"></div>
                     <img className="absolute top-5 left-8 " src={battery} alt="" />
                     <h1 className="text-white pt-4 pl-3">Battery life</h1>
                   </div>

                   <div className=" relative ">
                    <div className="bg-white  rounded-full py-12 px-12"></div>
                     <img className="absolute top-6 left-6 "  src={alarm} alt="" />
                     <h1 className="text-white pt-4 pl-6">Alarm</h1>
                     
                   </div>

                   <div className="relative">
                    <div className="bg-white  rounded-full py-12 px-12"></div>
                     <img className="absolute top-5 left-4 " src={cloudy} alt="" />
                     <h1 className="text-white pt-4 pl-5">Weather</h1>
                   </div>
                </div>
            </div>
        </div>
    </div>
}
export default SectionThree