import logo from "../assets/images/logo-watch-shop.png"
import { FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa'
function Footer() {
  return (
    <footer className='bg-black/10 rounded-t-[50px] sm:p-14  max-sm:p-5  flex gap-5 justify-between 
    max-sm:flex-col'>
        <div className='basis-[44%]'>
            <img src={logo} alt="" className='w-48 mb-5' />
            <p className='text-lg mb-5'>
                A smartwatch is a wearable computer in the form of a watch; modern 
                smartwatches provide a local touchscreen interface for daily use.
            </p>
            <div className='flex gap-4'>
                <FaTwitter   className='w-10 h-10 p-2 bg-black/30 rounded-full grid place-items-center
                hover:text-white hover:bg-blue'/>
                <FaInstagram className='w-10 h-10 p-2 bg-black/30 rounded-full grid place-items-center
                hover:text-white '/>
                <FaPinterest className='w-10 h-10 p-2 bg-black/30 rounded-full grid place-items-center
                hover:text-white hover:bg-red-900'/>
            </div>
        </div>
        <div className='basis-[50%]  sm:flex sm:gap-8 sm:justify-between '>
            <div className='mb-5'>
                <h1 className='font-bold text-2xl mb-3 sm:mb-5'>Menu</h1>
                <ul className='max-sm:flex max-sm:gap-5'>
                    <li><a href="#" className='font-thin sm:text-xl hover:text-blue'>Home</a></li>
                    <li><a href="#" className='font-thin sm:text-xl hover:text-blue'>Books</a></li>
                    <li><a href="#" className='font-thin sm:text-xl hover:text-blue'>Collection</a></li>
                    <li><a href="#" className='font-thin sm:text-xl hover:text-blue'>Categories</a></li>
                </ul>
            </div>
            <div>
                <h1 className='font-bold text-2xl mb-5'>Support</h1>
                 <ul className='max-sm:flex max-sm:gap-5'>
                    <li><a href="#" className='font-thin text-xl hover:text-blue'>FAQs</a></li>
                    <li><a href="#" className='font-thin text-xl hover:text-blue'>Terms & Condition</a></li>
                    <li><a href="#" className='font-thin text-xl hover:text-blue'>Privacy Policy</a></li>
                    <li><a href="#" className='font-thin text-xl hover:text-blue'>Report</a></li>
                </ul>
            </div>
            <div>
                <h1 className='font-bold text-2xl mb-5'>Stay In Touch</h1>
                <form className='space-x-3 sm:flex sm:flex-col sm:gap-3 '>
                    <input className='px-6 py-2 border-2 border-black  rounded-3xl'
                    type="email"  placeholder='enter email'/>
                    <button className='w-40 mt-5 px-7 py-2 bg-black text-white text-xl rounded-3xl'
                    type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </footer>
  )
}

export default Footer