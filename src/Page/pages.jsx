import { NavLink } from "react-router-dom";

function Pages({ show }) {
  return <div className={`absolute left-1/2 -translate-x-1/2 mt-2 transition-all duration-300 ease-in-out ${ show ? "opacity-100 visible" : "opacity-0 invisible" }`}>
      <div className="bg-black text-white w-52 ml-4 mt-5 py-4 rounded-xl px-8">
        <ul className="opacity-85 leading-9">
          <NavLink to= "/Blog"><li>Blog</li></NavLink>
          <NavLink to= "/About"><li>About</li></NavLink>
          <NavLink to= "/FAQ"><li>FAQ</li></NavLink>
          <NavLink to= "/WishList"><li>WishList</li></NavLink>
          <NavLink to= "/MyAccount"><li>My Account</li></NavLink>
          <NavLink to= "Tracking-Orders"><li>Tracking Orders</li></NavLink>
          <NavLink to= "/Items-Compare"><li>Items Compare</li></NavLink>
          <NavLink to= "/Dropdown"><li>Dropdown</li></NavLink>
        </ul>
      </div>
    </div>
}

export default Pages;
