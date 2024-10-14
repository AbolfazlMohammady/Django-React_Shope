import Container from "../container/Container";
import React from "react";
function Navbar() {
  return (
    <div className="h-14 border-b shadow flex items-center">
      <Container>
        <div className="flex  flex-row-reverse items-center">
          <ul className="w-full flex justify-evenly flex-row-reverse">
            <li className="ml-4">
              <a>خانه</a>
            </li>
            <li className="ml-4">
              <a>فروشگاه</a>
            </li>
            <li className="ml-4">
              <a>لوازم خانگی</a>
            </li>
            <li className="ml-4">
              <a>پوشاک</a>
            </li>
            <li className="ml-4">
              <a>خانه</a>
            </li>
            <li className="ml-4">
              <a>فروشگاه</a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
