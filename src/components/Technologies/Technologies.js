import React from "react";
import {
  DiBootstrap,
  DiFirebase,
  DiNodejs,
  DiReact,
  DiZend,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import { Fade } from "react-reveal";

const Technologies = () => (
  <Fade bottom>
    <Section id="tech">
      <SectionDivider />
      <br />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        Currently focusing on studying web development, especially front-end
        development, using some of these technologies
      </SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Currently learning and building stuff with ReactJS
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiNodejs size="3rem" />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              NodeJS and Databases, MYSQL.
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiBootstrap size="3rem" />
          <ListContainer>
            <ListTitle>Design</ListTitle>
            <ListParagraph>
              Experience with UI/UX Tools, Figma. Web styling, Bootstrap, CSS.
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  </Fade>
);

export default Technologies;
