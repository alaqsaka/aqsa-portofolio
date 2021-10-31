import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import { Fade } from "react-reveal";

const Home = () => {
  return (
    <Layout>
      <Fade bottom duration={1500}>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
      </Fade>
      <Fade bottom duration={2000}>
        <Projects />
      </Fade>
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
