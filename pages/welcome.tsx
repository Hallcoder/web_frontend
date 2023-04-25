import React from "react";
import SEO from "components/seo";
import WelcomeContainer from "containers/welcome/welcome";
import WelcomeHero from "components/welcomeHero/welcomeHero";
import WelcomeFeatures from "components/welcomeFeatures/welcomeFeatures";
import WelcomeCard from "components/welcomeCard/welcomeCard";
import WhyChooseUs from "components/whyChooseUs/whyChooseUs";
import { useQuery } from "react-query";
import useLocale from "hooks/useLocale";
import blogService from "services/blog";
import WelcomeBlog from "components/welcomeBlog/welcomeBlog";

type Props = {};

export default function Welcome({}: Props) {
  const { locale } = useLocale();
  const { data } = useQuery(["blog", locale], () =>
    blogService.getAll({ active: 1 })
  );

  return (
    <>
      <SEO />
      <WelcomeContainer>
        <WelcomeHero />
        <WelcomeCard />
        <div style={{ height: 30 }}></div>
        <WelcomeFeatures />
        <WhyChooseUs />
        <WelcomeBlog data={data?.data[0]} />
      </WelcomeContainer>
    </>
  );
}
