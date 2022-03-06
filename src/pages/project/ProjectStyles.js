import styled from "styled-components";

export const Title = styled.h1`
  color: white;
  text-align: center;
  font-size: 42px;
  background: -webkit-linear-gradient(-70deg, #a2facf 0%, #64acff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
`;

export const ExternalLinks = styled.a`
  color: #fff;
  font-size: 1.6rem;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0% 0%;
  overflow: hidden;
  border-radius: 8px;
`;

export const BlogCard = styled.div`
  height: 600px;
  border-radius: 8px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 100%;
  margin-top: 15px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const TagList = styled.ul`
  display: flex;
`;

export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
`;

export const StacksIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 20px;
  margin-right: 20px;
`;

export const ProjectDetails = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
  }
`;

export const GithubButton = styled.button`
  color: #fff;
  background: linear-gradient(
      180deg,
      rgba(52, 183, 89, 0.15) 0%,
      rgba(46, 164, 79, 0) 100%
    ),
    #2ea44f !important;
  padding: 0.9rem 1.5rem 1.1rem;

  font-weight: 600;
  line-height: 1;
  color: var(--color-canvas-default);
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  user-select: none;
  border: 0;
  border-radius: 0.375rem;
  transition: box-shadow 0.2s;
  cursor: pointer;
  height: 54px;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 20px;
  }
`;

export const VisitPage = styled.button`
  color: #fff;
  cursor: pointer;
  padding: 0.9rem 1.5rem 1.1rem;
  background: #141829;
  font-weight: 600;
  line-height: 1;
  color: var(--color-canvas-default);
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  user-select: none;
  border: 1px solid #fff;
  border-radius: 0.375rem;
  transition: box-shadow 0.2s;

  height: 54px;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 20px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 20px;
  }
`;
