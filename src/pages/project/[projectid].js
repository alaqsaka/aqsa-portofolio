import fs from "fs";
import path from "path";
import { Layout } from "../../layout/Layout";
import { Section } from "../../styles/GlobalComponents";
import {
  Title,
  BlogCard,
  Img,
  TagList,
  Tag,
  StacksIcon,
  ProjectDetails,
  GithubButton,
  VisitPage,
  Buttons,
  ExternalLinks,
} from "../../components/Project/ProjectStyles";
import Link from "next/link";

function getProjectIdDetails(props) {
  const { projectDetails } = props;

  if (!projectDetails) {
    return <p>Loading ...</p>;
  }

  return (
    <Layout>
      <Section>
        <div>
          <Title>{props.projectDetails.title}</Title>
          <BlogCard key={props.projectDetails.id}>
            <Img src={props.projectDetails.image} />
          </BlogCard>

          <ProjectDetails>
            <div>
              <h2>Project Description</h2>
              <br />
              <p>{props.projectDetails.description}</p>
              <br />
              <h2>Tech Stacks</h2>
              <TagList>
                {props.projectDetails.tags.map((tag, i) => (
                  <StacksIcon src={`/images/${tag}.svg`} />
                ))}
              </TagList>
            </div>
            <Buttons>
              <Link href={props.projectDetails.visit}>
                <ExternalLinks
                  target="_blank"
                  href={props.projectDetails.visit}
                >
                  <VisitPage>View Page</VisitPage>
                </ExternalLinks>
              </Link>

              <Link href={props.projectDetails.source}>
                <ExternalLinks
                  target="_blank"
                  href={props.projectDetails.source}
                >
                  <GithubButton>View Github Repository</GithubButton>
                </ExternalLinks>
              </Link>
            </Buttons>
          </ProjectDetails>
        </div>
      </Section>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const projectId = params.projectid;
  const fileToRead = path.join(
    process.cwd(),
    "/src/pages/project/project_details.json"
  );
  const data = JSON.parse(await fs.readFileSync(fileToRead));
  const project = data.projects.find((project) => project.id === projectId);
  return {
    props: {
      projectDetails: project,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { projectid: "1" } }],
    fallback: true,
  };
}

export default getProjectIdDetails;
