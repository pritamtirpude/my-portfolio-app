import styled from "styled-components";
import { ProjectCard } from "../../components";

const ProjectList = ({ projects }) => {
  return (
    <ProjectListStyle>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </ProjectListStyle>
  );
};

const ProjectListStyle = styled.div`
  padding: 5rem 0rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default ProjectList;
