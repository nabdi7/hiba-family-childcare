import React from "react";
import AboutPage from "@/components/about/AboutPage";

export const metadata = {
  title: "About Us | Hiba Family Childcare - Seattle's Trusted Home Childcare",
  description:
    "Learn about Hiba Family Childcare's commitment to providing loving, nurturing care for infants and toddlers in Seattle. Discover our safe home environment and dedicated approach to childcare.",
  openGraph: {
    title: "About Us | Hiba Family Childcare - Seattle's Trusted Home Childcare",
    description:
      "Meet the caring team behind Hiba Family Childcare in Seattle. We provide loving, attentive care for infants and toddlers in a warm home environment. Licensed and experienced in creating a safe, nurturing space for your little ones.",
    type: "website",
    url: "https://hibafamilychildcare.com/about",
  },
  twitter: {
    title: "About Us | Hiba Family Childcare - Seattle's Trusted Home Childcare",
    description:
      "Meet the caring team behind Hiba Family Childcare in Seattle. We provide loving, attentive care for infants and toddlers in a warm home environment. Licensed and experienced in creating a safe, nurturing space for your little ones.",
  },
};

const page = () => {
  return (
    <div>
      <AboutPage />
    </div>
  );
};

export default page;