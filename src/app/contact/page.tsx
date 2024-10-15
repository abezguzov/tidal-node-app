import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Data Extraction",
  description: "Get in touch with our team for inquiries, support, or collaboration. We're here to help and look forward to hearing from you.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Have questions or need assistance? Reach out to our friendly team. We're here to help you with any inquiries or support you may need."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
