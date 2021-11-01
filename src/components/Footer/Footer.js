import React from "react";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { Fade } from "react-reveal";

const Footer = () => {
  return (
    <Fade bottom>
      <FooterWrapper>
        <LinkList>
          <LinkColumn>
            <LinkTitle>Call</LinkTitle>
            <LinkItem href="tel:082110106746">082110106746</LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href="mailto:aqsaabidin15@gmail.com">
              aqsaabidin15@gmail.com
            </LinkItem>
          </LinkColumn>
        </LinkList>

        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>
              Do a little bit of work, a lil bit of studying every day
            </Slogan>
          </CompanyContainer>
          <SocialContainer>
            <SocialIcons href="https://github.com">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://linkedin.com">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://twitter.com">
              <AiFillTwitterSquare size="3rem" />
            </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>
      </FooterWrapper>
    </Fade>
  );
};

export default Footer;
