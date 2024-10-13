import React from "react";
import Container from "../container/Container";

function Navbar() {
  return (
    <div className="h-14 border-b shadow flex items-center">
      <Container>
        <div className="flex justify-between flex-row-reverse items-center">
          <ul className="flex flex-row-reverse">
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
