import React from "react";

const Navbar = () => {
  return <>
    <nav>
      <div className="nav-wrapper cyan darken-4" style={{ paddingLeft: 1 + 'em', paddingRight: 1 + 'em' }}>
        <a onClick={() => { }} className="brand-logo">TODO-APP</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a>Sass</a></li>
          <li><a>Components</a></li>
          <li><a>JavaScript</a></li>
        </ul>
      </div>
    </nav>
  </>;
}

export default Navbar;