import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  {
    date: "July 2021",
    text: "Menjadi Front-End Web Developer Expert by Dicoding Indonesia",
  },
  {
    date: "May 2021",
    text: "Belajar Membuat Aplikasi Back-End untuk Pemula by Dicoding Indonesia",
  },
  {
    date: "May 2021",
    text: "Belajar dasar pemrograman Javascript by Dicoding Indonesia",
  },
  {
    date: "April 2021",
    text: "Belajar Fundamental Front-End Web Development by Dicoding Indonesia",
  },
  {
    date: "February 2021",
    text: "Path Pengembangan Web(Node.js) and Kursus React by Progate",
  },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>My Certifications</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box ket={index}>
          <BoxNum>{card.date}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
