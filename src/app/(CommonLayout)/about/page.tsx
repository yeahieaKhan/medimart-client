import AboutBanner from "@/components/shared/Banner/AboutBanner";
import CoreValue from "@/components/shared/CoreValue";
import OurMission from "@/components/shared/OurMission";
import OurTeam from "@/components/shared/OurTeam";
import OurVision from "@/components/shared/OurVision";
import React from "react";

const page = () => {
  return (
    <div>
      <AboutBanner></AboutBanner>
      <OurMission></OurMission>
      <CoreValue></CoreValue>
      <OurTeam></OurTeam>
      <OurVision></OurVision>
    </div>
  );
};

export default page;
