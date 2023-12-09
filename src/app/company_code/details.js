import React from "react";
import TitleLine from "@/components/title_line";
import { DetailsRight } from "@/components/details_right";
import { DetailsLeft } from "@/components/details_left";

function Details() {
  return (
    <div className="mt-28 mb-16 flex flex-col items-center gap-4">
      <TitleLine title="Company & Code" />
      <h1 className="text-3xl font-bold tracking-wide">
        We are Providing Cyber Security to Help
      </h1>
      <p className="w-1/3 text-sm text-center">
        Source Point Delivers Next Generation Technology Services Designed To
        Optimize Your Business Via Secure & Redundant Cloud-based
        Infrastructure.
      </p>
      <div className="w-2/3">
        <DetailsRight
          image="/bg/company/company.png"
          title="Built for your needs"
          header="Cyber Security Customer Services"
          description="People need access to convenient, equitable and affordable care no matter where they live. In this era of personalized and convenient service in industries such as banking or retail, people expect a similar experience from healthcare. This is why 92% of health executives rank delivering a highly personalized experience as a top strategic priority. "
        />
        <DetailsLeft
          image="/bg/company/company.png"
          title="Built for your needs"
          header="Cyber Security Customer Services"
          description="People need access to convenient, equitable and affordable care no matter where they live. In this era of personalized and convenient service in industries such as banking or retail, people expect a similar experience from healthcare. This is why 92% of health executives rank delivering a highly personalized experience as a top strategic priority. "
        />
        <DetailsRight
          image="/bg/company/company.png"
          title="Built for your needs"
          header="Cyber Security Customer Services"
          description="People need access to convenient, equitable and affordable care no matter where they live. In this era of personalized and convenient service in industries such as banking or retail, people expect a similar experience from healthcare. This is why 92% of health executives rank delivering a highly personalized experience as a top strategic priority. "
        />
        <DetailsLeft
          image="/bg/company/company.png"
          title="Built for your needs"
          header="Cyber Security Customer Services"
          description="People need access to convenient, equitable and affordable care no matter where they live. In this era of personalized and convenient service in industries such as banking or retail, people expect a similar experience from healthcare. This is why 92% of health executives rank delivering a highly personalized experience as a top strategic priority. "
        />
      </div>
    </div>
  );
}

export default Details;
