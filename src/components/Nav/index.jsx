import React, { useState } from "react";
import NavItem from "./NavItem";

const Item = [
  {
    title: "Home",
    icon: <ion-icon name="home-outline"></ion-icon>,
    active: true,
  },
  {
    title: "Movies",
    icon: <ion-icon name="videocam-outline"></ion-icon>,
    active: false,
  },
  {
    title: "About",
    icon: <ion-icon name="alert-circle-outline"></ion-icon>,
    active: false,
  },
];

function Nav() {
  const [isNavMenuMobileOpen, setIsNavMenuMobileOpen] = useState(false);
  const handleOpenNavItem = () => {
    setIsNavMenuMobileOpen(!isNavMenuMobileOpen);
  };
  return (
    <nav className="col-span-1 bg-cyan-200">
      <div className="mx-4 flex justify-between items-center md:block">
        <h4 className="uppercase text-primary text-right py-4 border-b border-primary">
          Phimmoi.net
        </h4>
        <div
          className="text-2xl cursor-pointer md:hidden"
          onClick={handleOpenNavItem}
        >
          <ion-icon name="list-outline"></ion-icon>
        </div>
      </div>
      <ul
        className={`mx-4 my-2 text-right ${
          isNavMenuMobileOpen ? "block" : "hidden"
        } md:block`}
      >
        {Item.map((item, index) => (
          <NavItem item={item} key={index} />
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
