export default function TopHeader() {
  return (
    <div className="bg-gray-900 text-white text-sm py-2 px-4 flex justify-between items-center">
        <div className="w-48">
            <img src="https://public-assets.envato-static.com/assets/logos/envato_market-dd390ae860330996644c1c109912d2bf63885fc075b87215ace9b5b4bdc71cc8.svg" alt="" />
        </div>
      <p className="text-center w-full md:w-auto md:flex-1 md:text-center">
        Limited time offer, Buy XTRA WordPress theme only <span className="font-bold">$37</span>
      </p>
      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded ml-4">
        Download XTRA Theme
      </button>
    </div>
  );
}
