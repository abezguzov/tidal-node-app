import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About TidalNode | Automated Invoice Data Extraction",
  description: "Learn about TidalNode, the startup that helps companies extract data from invoices, reducing manual work and errors.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About TidalNode"
        description="Revolutionizing invoice processing with algorithmic data extraction, saving time and reducing errors for businesses of all sizes."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
