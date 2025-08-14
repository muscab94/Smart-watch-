export default function TopHeader() {
  return (
    <div className="bg-black text-white text-sm py-3 px-4 flex justify-between items-center">
        <div className="w-48">
            <img src="https://public-assets.envato-static.com/assets/logos/envato_market-dd390ae860330996644c1c109912d2bf63885fc075b87215ace9b5b4bdc71cc8.svg" alt="" />
        </div>
      <p className="text-center text-[1.3em] w-full md:w-auto md:flex-1 md:text-center">
        Limited time offer, Buy XTRA WordPress theme only <span className="font-bold">$37</span>
      </p>
      <button className="bg-primaryColor text-black font-medium px-6 py-1.5 rounded ml-4">
        Download XTRA Theme
      </button>
    </div>
  );
}
