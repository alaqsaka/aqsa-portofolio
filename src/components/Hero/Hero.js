import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        19 year old guy, web development and <br />
        technologies enthusiast. <br />
        Currently working for myself and investing in my dreams.
      </SectionTitle>
      <SectionText>Based in Tangerang Selatan, Banten, Indonesia</SectionText>
    </LeftSection>
  </Section>
);

export default Hero;
