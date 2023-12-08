import React from "react";
import TitleLine from "@/components/title_line";
import { DetailsRightReadMore } from "@/components/details_right";
import { DetailsLeftReadMore } from "@/components/details_left";

function Approach() {
  return (
    <div className="mt-28 mb-16 flex flex-col items-center gap-4">
      <TitleLine title="Our Approach" />
      <h1 className="text-3xl font-bold tracking-wide">
        The Services That We Operate For Cyber Security
      </h1>
      <p className="w-1/3 text-sm text-center">
        Source Point Delivers Next Generation Technology Services Designed To
        Optimize Your Business Via Secure & Redundant Cloud-based
        Infrastructure.
      </p>
      <div className="w-2/3">
        <DetailsRightReadMore
          image_up="/bg/services/service_up.png"
          image_down="/bg/services/service_down.png"
          title="Built for your needs"
          header="Cyber Security Application Services"
          slug="People need access to convenient, equitable and affordable care no matter where they live. In this era of personalized and convenient service in industries such as banking or retail, people expect a similar experience from healthcare. This is why 92% of health executives rank delivering a highly personalized experience as a top strategic priority. "
          points={[
            "Patient Experience",
            "Research Acceleration",
            "Healthcare security",
            "Core IT Solutions",
            "Cloud in healthcare",
            "Digital health",
            "Intelligent payer",
            "Data and Automation",
          ]}
        />
        <DetailsLeftReadMore
          image_up="/bg/services/service_up.png"
          image_down="/bg/services/service_down.png"
          title="Built for your needs"
          header="Cyber Security Consulting Services"
          slug="People need access to convenient, equitable and affordable care no matter where they live. In this era of personalized and convenient service in industries such as banking or retail, people expect a similar experience from healthcare. This is why 92% of health executives rank delivering a highly personalized experience as a top strategic priority. "
          points={[
            "Patient Experience",
            "Research Acceleration",
            "Healthcare security",
            "Core IT Solutions",
            "Cloud in healthcare",
            "Digital health",
            "Intelligent payer",
            "Data and Automation",
          ]}
        />
        <DetailsRightReadMore
          image_up="/bg/services/service_up.png"
          image_down="/bg/services/service_down.png"
          title="Built for your needs"
          header="Cyber Security Customer Services"
          slug="People need access to convenient, equitable and affordable care no matter where they live. In this era of personalized and convenient service in industries such as banking or retail, people expect a similar experience from healthcare. This is why 92% of health executives rank delivering a highly personalized experience as a top strategic priority. "
          points={[
            "Patient Experience",
            "Research Acceleration",
            "Healthcare security",
            "Core IT Solutions",
            "Cloud in healthcare",
            "Digital health",
            "Intelligent payer",
            "Data and Automation",
          ]}
        />
        <DetailsLeftReadMore
          image_up="/bg/services/service_up.png"
          image_down="/bg/services/service_down.png"
          title="Built for your needs"
          header="Cyber Security Supply Chain Services"
          slug="People need access to convenient, equitable and affordable care no matter where they live. In this era of personalized and convenient service in industries such as banking or retail, people expect a similar experience from healthcare. This is why 92% of health executives rank delivering a highly personalized experience as a top strategic priority. "
          points={[
            "Patient Experience",
            "Research Acceleration",
            "Healthcare security",
            "Core IT Solutions",
            "Cloud in healthcare",
            "Digital health",
            "Intelligent payer",
            "Data and Automation",
          ]}
        />
      </div>
    </div>
  );
}

export default Approach;
