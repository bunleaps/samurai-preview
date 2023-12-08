import React from "react";
import { DetailsRightContact } from "@/components/details_right";
import { DetailsLeftContact } from "@/components/details_left";

function Info() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-2/3">
        <DetailsRightContact
          image="/bg/industries/indus_101.png"
          title="High Tech"
          header="High Tech Industries "
          slug="We help our clients meet the essential expectations that every person has of the healthcare system: access, experience and outcomes."
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
          description="People need access to convenient, equitable and affordable care no matter where they live. In this era of personalized and convenient service in industries such as banking or retail, people expect a similar experience from healthcare. This is why 92% of health executives rank delivering a highly personalized experience as a top strategic priority. "
        />
        <DetailsLeftContact
          image="/bg/industries/indus_101.png"
          title="High Tech"
          header="Global Service Provider "
          slug="We help our clients meet the essential expectations that every person has of the healthcare system: access, experience and outcomes."
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
          description="People need access to convenient, equitable and affordable care no matter where they live. In this era of personalized and convenient service in industries such as banking or retail, people expect a similar experience from healthcare. This is why 92% of health executives rank delivering a highly personalized experience as a top strategic priority. "
        />
        <DetailsRightContact
          image="/bg/industries/indus_101.png"
          title="Oil & Gas"
          header="Oil & Gas Industries"
          slug="We help our clients meet the essential expectations that every person has of the healthcare system: access, experience and outcomes."
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
          description="People need access to convenient, equitable and affordable care no matter where they live. In this era of personalized and convenient service in industries such as banking or retail, people expect a similar experience from healthcare. This is why 92% of health executives rank delivering a highly personalized experience as a top strategic priority. "
        />
      </div>
    </div>
  );
}

export default Info;
