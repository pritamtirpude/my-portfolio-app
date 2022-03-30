import { useState } from "react";
import styled from "styled-components";
import { projectsData } from "../../data";
import { ProjectList } from "../../components";

const ProjectComponent = () => {
  const [projects, setProjects] = useState(projectsData);

  return (
    <ProjectStyle>
      <h1>Projects</h1>
      <ProjectList projects={projects} />
    </ProjectStyle>
  );
};

const ProjectStyle = styled.div`
  padding: 5rem 10rem;

  @media screen and (max-width: 768px) {
    padding: 5rem 2rem;
  }
  h1 {
    text-align: center;
    font-size: 5rem;
    color: var(--color-headings);
    letter-spacing: 0.2rem;
    position: relative;
    text-transform: uppercase;
    padding: 2rem 0rem;

    &::after {
      content: "Projects";
      position: absolute;
      top: 0%;
      left: 0;
      width: 100%;
      height: 100%;
      font-size: 10rem;
      z-index: -1;
      filter: opacity(20%);

      @media screen and (max-width: 768px) {
        font-size: 6rem;
      }
    }
  }
`;

export default ProjectComponent;
