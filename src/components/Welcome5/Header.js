import React from "react";

export default function Header() {
  return (
    <header className="pn_header">
      <div className="pn_header-wrapper">
        <div className="pn_header-logos">
          <a
            rel="noreferrer"
            href="https://www.americastestkitchen.com/?incode=MAFLDA2L0"
            target="_blank"
          >
            <img
              alt="this is an alt text example"
              className="pn_header-imgs"
              src="https://res.cloudinary.com/hksqkdlah/image/upload/v1581716943/logo_htxvor.png"
            />
          </a>
          <a
            rel="noreferrer"
            href="https://www.cooksillustrated.com/?extcode=MAFLDC2L0"
            target="_blank"
          >
            <img
              alt="this is an alt text example"
              className="pn_header-imgs"
              src="https://res.cloudinary.com/hksqkdlah/image/upload/v1581716966/cio_fbfdon.png"
            />
          </a>
          <a
            rel="noreferrer"
            href="https://www.cookscountry.com/?extcode=MAFLDK2L0"
            target="_blank"
          >
            <img
              alt="this is an alt text example"
              className="pn_header-imgs"
              src="https://res.cloudinary.com/hksqkdlah/image/upload/v1581716986/Cooks-Country-Logo_q83van.png"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
