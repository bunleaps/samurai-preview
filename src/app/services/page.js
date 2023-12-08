import React from "react";
import Hero from "./hero";
import ServicesInfo from "./services";
import Approach from "./approach";
import Solutions from "../solutions";
import TrustedPartners from "@/components/trusted_partners_no_bg";

function Services() {
  return (
    <div>
      <Hero />
      <ServicesInfo />
      <Approach />
      <Solutions />
      <TrustedPartners />
    </div>
  );
}

export default Services;
