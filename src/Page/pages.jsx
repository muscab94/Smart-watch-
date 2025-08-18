function Pages({ show }) {
  return <div className={`absolute left-1/2 -translate-x-1/2 mt-2 transition-all duration-300 ease-in-out ${ show ? "opacity-100 visible" : "opacity-0 invisible" }`}>
      <div className="bg-black text-white w-52 ml-4 mt-5 py-4 rounded-xl px-8">
        <ul className="opacity-85 leading-9">
          <li>Blog</li>
          <li>About</li>
          <li>FAQ</li>
          <li>WishList</li>
          <li>My Account</li>
          <li>Tracking Orders</li>
          <li>Items Compare</li>
          <li>Dropdown</li>
        </ul>
      </div>
    </div>
}

export default Pages;
