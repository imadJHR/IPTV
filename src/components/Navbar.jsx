const Navbar = () => {
  return (
    <div className="navbar bg-black text-white shadow-xl  sticky top-0 z-10">
      <div className="flex-1">
        <a className="btn btn-ghost  text-xl">LOGO</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
        <button className="bg-primary px-5 py-1 rounded-md">Free Trial</button>
      </div>
    </div>
  );
};

export default Navbar;
