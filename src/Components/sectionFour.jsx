import watch1 from ".././assets/watch-1-600x600.png"
import watch2 from ".././assets/watch-2-600x600.png"
import watch3 from ".././assets/gold-watch-600x600.png"
import watch4 from ".././assets/black-watch-600x600.png"

function SectionFour(){
    return <div>
        <div className="py-20 bg-gray-50">
            <div className="relative">
            <div className="bg-gray-200 w-[550px] h-5 ml-[370px] rounded-full"></div>
            <h1 className="font-extrabold absolute -top-10 left-[420px] text-[2.7em] text-center"><span className="text-blue">Pear-Watch</span> Products</h1>
            </div>

            <p className="text-center pt-10 text-[1.2em] text-gray-600">A smartwatch is a wearable computer in the form of a watch; modern smartwatches <br /> provide a local touchscreen interface for daily use.</p>

            <div className="flex justify-center gap-7 pt-10">
                    <div className="bg-white w-[270px] rounded-3xl shadow-2xl py-7 mt-10 h-[500px]">
                        <img className="w-52 bg-gray-100 rounded-full ml-8  " src={watch1} alt="" />
                        <h1 className="font-medium pt-5 text-[1.2em] text-center">Chrome watch</h1>
                        <p className="text-center text-gray-600 py-2">Modern</p>
                        <i class="fa-solid fa-star text-orange text-[0.8em] ml-[100px]"></i>
                        <i class="fa-solid fa-star text-orange text-[0.8em]"></i>
                        <i class="fa-solid fa-star text-orange text-[0.8em]"></i>
                        <i class="fa-solid fa-star text-orange text-[0.8em]"></i>
                        <i class="fa-solid fa-star text-orange text-[0.8em]"></i>
                        <h1 className="text-center pt-5 font-medium text-[1.2em]">$399</h1>
                        <button className="bg-blue text-white py-2 rounded-2xl px-10 ml-10 mt-7 hover:bg-black"><i class="fa-solid fa-cart-shopping"></i> Add To Cart</button>




                    </div>

                       <div className="bg-white w-[270px] rounded-3xl shadow-2xl py-7 mt-10 h-[500px]">
                        <img className="w-52 bg-gray-100 rounded-full ml-8  " src={watch2} alt="" />
                        <h1 className="font-medium pt-5 text-[1.2em] text-center">Classic watch</h1>
                        <p className="text-center text-gray-600 py-2">Classic</p>
                        <i class="fa-solid fa-star text-orange text-[0.8em] ml-[100px]"></i>
                        <i class="fa-solid fa-star text-orange text-[0.8em]"></i>
                        <i class="fa-solid fa-star text-orange text-[0.8em]"></i>
                        <i class="fa-solid fa-star text-orange text-[0.8em]"></i>
                        <i class="fa-solid fa-star text-[0.8em]"></i>
                        <h1 className="text-center pt-5 font-medium text-[1.2em]"> <del className="text-gray-400 text-[0.7em] pr-2">$499</del>$399</h1>
                        <button className="bg-blue text-white py-2 rounded-2xl px-10 ml-10 mt-7 hover:bg-black"><i class="fa-solid fa-cart-shopping"></i> Add To Cart</button>




                    </div>

                       <div className="bg-white w-[270px] rounded-3xl shadow-2xl py-7 mt-10 h-[500px]">
                        <img className="w-52 bg-gray-100 rounded-full ml-8  " src={watch3} alt="" />
                        <h1 className="font-medium pt-5 text-[1.2em] text-center">Gold watch</h1>
                        <p className="text-center text-gray-600 py-2">Bestsellers</p>
                        <i class="fa-solid fa-star text-orange text-[0.8em] ml-[100px]"></i>
                        <i class="fa-solid fa-star text-orange text-[0.8em]"></i>
                        <i class="fa-solid fa-star text-orange text-[0.8em]"></i>
                        <i class="fa-solid fa-star text-orange text-[0.8em]"></i>
                        <i class="fa-solid fa-star text-orange text-[0.8em]"></i>
                        <h1 className="text-center pt-5 font-medium text-[1.2em]">$699</h1>
                        <button className="bg-blue text-white py-2 rounded-2xl px-10 ml-10 mt-7 hover:bg-black"><i class="fa-solid fa-cart-shopping"></i> Add To Cart</button>




                    </div>

                       <div className="bg-white w-[270px] rounded-3xl shadow-2xl py-7 mt-10 h-[500px]">
                        <img className="w-52 bg-gray-100 rounded-full ml-8  " src={watch3} alt="" />
                        <h1 className="font-medium pt-5 text-[1.2em] text-center">Black watch</h1>
                        <p className="text-center text-gray-600 py-2">Classic</p>
                        <i class="fa-solid fa-star text-orange text-[0.8em] ml-[100px]"></i>
                        <i class="fa-solid fa-star text-orange text-[0.8em]"></i>
                        <i class="fa-solid fa-star text-orange text-[0.8em]"></i>
                        <i class="fa-solid fa-star text-orange text-[0.8em]"></i>
                        <i class="fa-solid fa-star text-orange text-[0.8em]"></i>
                        <h1 className="text-center pt-5 font-medium text-[1.2em]">$599</h1>
                        <button className="bg-blue text-white py-2 rounded-2xl px-10 ml-10 mt-7 hover:bg-black"><i class="fa-solid fa-cart-shopping"></i> Add To Cart</button>




                    </div>

                    

                    
            </div>
            <div className="pt-28">
                <h1 className="font-bold"><i class="fa-solid fa-arrow-right bg-black text-white rounded-full py-2 px-2 text-center pr-6 ml-[550px] "></i> Discover More</h1>            
                </div>
        </div>
    </div>
}
export default SectionFour