import Container from "../container/Container";
import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

interface NavbarLiItemsProps {
  nameItem: string;
}

function Navbar() {
  return (
    <div className="h-14 border-b shadow flex items-center">
      <Container>
        <div className="flex  flex-row-reverse items-center">
          <ul className="w-full flex justify-evenly flex-row-reverse">
            <NavbarLiItems nameItem="پوشاک" />
            <NavbarLiItems nameItem="لوازم آرایشی" />
            <NavbarLiItems nameItem="لوازم خانگی" />
            <NavbarLiItems nameItem="سلامت" />
            <NavbarLiItems nameItem="فروشگاه" />
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
      className="ml-4 flex items-center relative"
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
        <ul className="absolute z-10 mt-60 bg-white shadow-md p-4 w-40">
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
