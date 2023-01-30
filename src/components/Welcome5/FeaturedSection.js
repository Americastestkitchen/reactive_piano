import React from "react";

export default function FeaturedSection() {
  return (
    <section className="pn_featured_sec" data-document-title="welcome5">
      <div className="pn_featured-wrapper">
        <div className="pn_featured-desc">
          <h1 className="pn_desc-headline">
            Proven Recipes, Tested to Perfection
          </h1>
          <h2 className="pn_desc-subheadline">
            Save 50% when you sign up today for Digital All Access!
          </h2>
          <div className="pn_featured-img-mobile">
            <img
              alt="this is an alt text example"
              className="pn_featured-img"
              src="https://res.cloudinary.com/hksqkdlah/image/upload/f_auto,q_auto:low,w_500,dpr_2.0,fl_lossy/ATK-S20_20190513_14-25-08_42184_zcsw4a.jpg"
            />
            <i className="pn_featured-img-text">As Seen on Public Television</i>
          </div>
          <span className="pn_list-desc">
            Exclusive membership benefits include:
          </span>
          <ul className="pn_desc-my-list">
            <li className="pn_desc-list-el">
              Full access to the <em>America’s Test Kitchen</em>,{" "}
              <em>Cook's Country</em>, and <em>Cook's Illustrated</em> libraries
              of foolproof recipes, taste tests, and equipment reviews
            </li>
            <li className="pn_desc-list-el">
              ATK App to find recipes and ratings easily on the go
            </li>
            <li className="pn_desc-list-el">FREE Shipping in our store</li>
            <li className="pn_desc-list-el">
              Stream all of our episodes & exclusive content
            </li>
          </ul>
          <a href="/order?mdc=APP020MA1A" className="pn_desc-cta">
            SAVE NOW
          </a>
        </div>
        <div className="pn_featured-img-wrapper">
          <img
            alt="this is an alt text example"
            className="pn_featured-img"
            src="https://res.cloudinary.com/hksqkdlah/image/upload/f_auto,q_auto:low,w_500,dpr_2.0,fl_lossy/ATK-S20_20190513_14-25-08_42184_zcsw4a.jpg"
          />
          <i className="pn_featured-img-text">As Seen on Public Television</i>
        </div>
      </div>
    </section>
  );
}
