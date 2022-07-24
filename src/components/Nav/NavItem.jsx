import React from "react";

const NavItem = ({ item }) => {
  const { title, icon, active } = item;
  return (
    <li
      className={`flex items-center justify-end py-2 pr-3 my-2 hover:cursor-pointer ${
        active ? " bg-primary text-white" : ""
      } `}
    >
      <h5 className="pr-2">{title}</h5>
      <span className="text-2xl flex items-center"> {icon}</span>
    </li>
  );
};

export default NavItem;
