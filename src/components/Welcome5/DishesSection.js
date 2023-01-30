import React from "react";

export default function DishesSection() {
  return (
    <section className="pn_dishes-sec">
      <div className="pn_dishes-wrapper">
        <h2 className="pn_dishes-headline">
          Easily Cook & Enjoy Dishes Such As:
        </h2>
        <br />
        <div className="pn_dishes-toprow">
          <div className="pn_dish-el">
            <img
              alt="this is an alt text example"
              className="pn_dish-img"
              src="https://res.cloudinary.com/hksqkdlah/image/upload/f_auto,q_auto:low,w_300,dpr_2.0,fl_lossy/32486_sfs-millionaires-shortbread-47"
            />
            <p className="pn_dish-desc">Millionaire’s Shortbread</p>
          </div>
          <div className="pn_dish-el">
            <img
              alt="this is an alt text example"
              className="pn_dish-img"
              src="https://res.cloudinary.com/hksqkdlah/image/upload/f_auto,q_auto:low,w_300,dpr_2.0,fl_lossy/39837_sfs-beef-tenderloin-with-smoky-potatoes-and-persillade-relish-13"
            />
            <p className="pn_dish-desc">
              Beef Tenderloin with Smoky Potatoes & Persillade Relish
            </p>
          </div>
          <div className="pn_dish-el">
            <img
              alt="this is an alt text example"
              className="pn_dish-img"
              src="https://res.cloudinary.com/hksqkdlah/image/upload/f_auto,q_auto:low,w_300,dpr_2.0,fl_lossy/39911_sfs-morrocan-chickpeas-lentil-soup-42-1"
            />
            <p className="pn_dish-desc">
              Moroccan Lentil & Chickpea Soup (Harira){" "}
            </p>
          </div>
          <div className="pn_dish-lastel">
            <img
              alt="this is an alt text example"
              className="pn_dish-img"
              src="https://res.cloudinary.com/hksqkdlah/image/upload/f_auto,q_auto:low,w_300,dpr_2.0,fl_lossy/41844-sfs-chicken-vesuvio-22"
            />
            <p className="pn_dish-desc">Chicken Vesuvio</p>
          </div>
        </div>
        <div className="pn_dishes-row">
          <div className="pn_dish-el">
            <img
              alt="this is an alt text example"
              className="pn_dish-img"
              src="https://res.cloudinary.com/hksqkdlah/image/upload/f_auto,q_auto:low,w_300,dpr_2.0,fl_lossy/33945_sfs-simple-stovetop-macaroni-and-cheese-169"
            />
            <p className="pn_dish-desc">Simple Stovetop Macaroni & Cheese</p>
          </div>
          <div className="pn_dish-el">
            <img
              alt="this is an alt text example"
              className="pn_dish-img"
              src="https://res.cloudinary.com/hksqkdlah/image/upload/f_auto,q_auto:low,w_300,dpr_2.0,fl_lossy/41519-sfs-tacos-dorado-126"
            />
            <p className="pn_dish-desc">Crispy Tacos (Tacos Dorados)</p>
          </div>
          <div className="pn_dish-el">
            <img
              alt="this is an alt text example"
              className="pn_dish-img"
              src="https://res.cloudinary.com/hksqkdlah/image/upload/f_auto,q_auto:low,w_300,dpr_2.0,fl_lossy/28299_sfs-chocolate-chip-cookie-75"
            />
            <p className="pn_dish-desc">Perfect Chocolate Chip Cookies</p>
          </div>
          <div className="pn_dish-lastel">
            <img
              alt="this is an alt text example"
              className="pn_dish-img"
              src="https://res.cloudinary.com/hksqkdlah/image/upload/f_auto,q_auto:low,w_300,dpr_2.0,fl_lossy/24786_sfs-flaky-buttermilk-biscuits-50"
            />
            <p className="pn_dish-desc">Ultimate Flaky Buttermilk Biscuits</p>
          </div>
        </div>
      </div>
    </section>
  );
}
