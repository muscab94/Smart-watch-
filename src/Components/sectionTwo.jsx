import imagesec2 from ".././assets/features.jpg"

function SectionTwo(){
    return <div>
        <div className="flex py-10 mt-20 justify-center gap-5 ">
            <div>
                <div className="text-right relative text-[1.2em] mt-10">
                <img className="absolute right-5 " src="https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/dashboard.png" alt="" />
                <h1 className="font-extrabold text-[1em] pt-16">Extraordinery Performance</h1>
                <p className="w-80 text-gray-400">A smartwatch is a wearable computer in the form of a watch</p>
                </div>

                <div className="text-right relative text-[1.2em]">
                <img className="absolute right-5 pt-10" src="https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/batteryv.png" alt="" />
                <h1 className="font-extrabold text-[1em] pt-20">Excellent battery life</h1>
                <p className="w-64 ml-14 text-gray-400">A smartwatch is a wearable computer in the form of a watch.</p>
                </div>

                <div className="text-right relative text-[1.2em]">
                <img className="absolute -right-5 pt-5" src="https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/link.png" alt="" />
                <h1 className="font-extrabold text-[1em] pt-20">Connectable to android/iOS</h1>
                <p className="w-80  text-gray-400">A smartwatch is a wearable computer in the form of a watch.</p>
                </div>
            </div>
            <div>
                <img className="w-[500px] pt-10" src={imagesec2} alt="" />
            </div>
            <div>
                <div className="text-left relative text-[1.2em]">
                <img className="mt-10 ml-4" src="https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/calendar.png" alt="" />
                <h1 className="font-extrabold text-[1em] pt-6 ">Shows time & date</h1>
                <p className="w-80 text-gray-400 ">A smartwatch is a wearable computer in the form of a watch.</p>
                </div>

                <div className="text-left pl-10 relative text-[1.2em]">
                <img className="pt-5 ml-5" src="https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/price-tag.png" alt="" />
                <h1 className="font-extrabold text-[1em] pt-6 ">Affordable price</h1>
                <p className="w-64 text-gray-400">A smartwatch is a wearable computer in the form of a watch.</p>
                </div>

                <div className="text-left -mt-5  relative text-[1.2em]"></div>
                <img className="pt-8 ml-" src="https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/smartwatch-app.png" alt="" />
                <h1 className="font-extrabold text-[1em]  pt-5">Best Quality and design</h1>
                <p className="w-80 text-gray-400">A smartwatch is a wearable computer in the form of a watch.</p>
            </div>

        </div>
    </div>
}
export default SectionTwo