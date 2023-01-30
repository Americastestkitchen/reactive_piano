import React from "react";
import FeaturedSection from "./FeaturedSection";
import DishesSection from "./DishesSection";
import SaveNowCTA from "../SaveNowCTA";
import Header from "./Header";
import "./Welcome5.css";

export default function Welcome5() {
  return (
    <>
      <Header />
      <FeaturedSection />
      <DishesSection />
      <SaveNowCTA />
    </>
  );
}
