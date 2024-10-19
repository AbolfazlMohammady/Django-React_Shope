import Container from "../container/Container";
import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

interface NavbarLiItemsProps {
  nameItem: string;
}

function Navbar() {
  return (
    <div className="h-10 border-b shadow flex items-center">
      <Container>
        <div className="flex  flex-row-reverse items-center">
          <ul className="w-full md:w-[70%] px-2 flex gap-3 justify-end items-center flex-row">
            <NavbarLiItems nameItem="پوشاک" />
            <NavbarLiItems nameItem="لوازم آرایشی" />
            <NavbarLiItems nameItem="سلامت" />
            <NavbarLiItems nameItem="فروشگاه" />
            <NavbarLiItems nameItem="لوازم خانگی" />
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;

function NavbarLiItems({ nameItem }: NavbarLiItemsProps) {
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseOver = () => {
    setShowPopup(true);
  };

  const handleMouseOut = () => {
    setShowPopup(false);
  };

  return (
    <li
      className=" flex items-center relative"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <span>
        <FaCaretDown
          className="text-lg mt-[6px] "
          style={{
            transform: showPopup ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.5s ease-in-out",
          }}
        />
      </span>
      <a>{nameItem}</a>
      {showPopup && (
        <ul className="absolute z-10 mt-52 bg-white shadow-md p-2 w-max rounded-lg ">
          <li className="py-2 hover:bg-gray-100">
            <a>Sub-item 1</a>
          </li>
          <li className="py-2 hover:bg-gray-100">
            <a>Sub-item 2</a>
          </li>
          <li className="py-2 hover:bg-gray-100">
            <a>Sub-item 3</a>
          </li>
          <li className="py-2 hover:bg-gray-100">
            <a>Sub-item 4</a>
          </li>
        </ul>
      )}
    </li>
  );
}
