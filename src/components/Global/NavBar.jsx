import React from "react";

export const NavBar = () => {
  return (
    <nav>
      <div className="option">
        <div className="img-wrap">
          <img
            src="https://res.cloudinary.com/dz9smi3nc/image/upload/w_30/v1685961759/shop-mugs/navSvgs/hamburg_ga0nwq.png"
            alt="options"
          />
        </div>
      </div>
      <div className="full-name">FACUNDO ALVAREZ</div>
      <div className="img-wrap">
        <img
          src="https://res.cloudinary.com/dz9smi3nc/image/upload/w_60/v1685960976/shop-mugs/foto_pnz78h.jpg"
          alt="photo-profile"
        />
      </div>
    </nav>
  );
};
