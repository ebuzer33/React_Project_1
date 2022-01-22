import React from "react";
import { ButtonGroup, Button } from "reactstrap";

function Navbar() {
  return (
    <div>
      <div className="navBar">
        <ButtonGroup>
          <Button id="navBtn">ABOUT US</Button>
          <Button id="navBtn">FOR YOU</Button>
          <Button id="navBtn">SERVICES</Button>
          <Button id="navBtn">BLOG</Button>
          <Button id="navBtn">VLOG</Button>
          <Button id="navBtn">CONTACT</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
export default Navbar;
