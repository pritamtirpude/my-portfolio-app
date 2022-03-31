import styled from "styled-components";
import { motion } from "framer-motion";
import ProfileImage from "../../assets/profile-pic.png";
import { titleAnim, photoAnim } from "../../animation";
import ResumeFrontend from "../../assets/Resume.pdf";

const AboutComponent = () => {
  return (
    <AboutSection>
      <AboutContent>
        <Hide>
          <motion.h2 variants={titleAnim}>Pritam Tirpude</motion.h2>
        </Hide>
        <Hide>
          <motion.h3 variants={titleAnim}>Frontend Developer</motion.h3>
        </Hide>
        <Hide>
          <motion.p variants={titleAnim}>
            Abiltiy to turn web design into reality.
          </motion.p>
        </Hide>
        <ButtonHide>
          <motion.a
            variants={titleAnim}
            href={ResumeFrontend}
            download="ResumeFrontend.pdf"
          >
            Download Resume
          </motion.a>
        </ButtonHide>
      </AboutContent>
      <AboutImage>
        <motion.img
          variants={photoAnim}
          src={ProfileImage}
          alt="Pritam Tirpude"
        />
      </AboutImage>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  min-height: 100vh;
  overflow: hidden;
  gap: 10rem;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: space-evenly;
    padding: 5rem 2rem;
  }
`;

const AboutContent = styled.div`
  @media screen and (max-width: 768px) {
    text-align: center;
  }
  h2 {
    font-size: 8rem;
    color: var(--color-accent);
    letter-spacing: 0.2rem;

    @media screen and (max-width: 768px) {
      font-size: 4rem;
    }
  }

  h3 {
    font-size: 3rem;
    color: var(--color-text);
    letter-spacing: 0.2rem;
    font-weight: lighter;
    margin-top: 1rem;

    @media screen and (max-width: 768px) {
      font-size: 3rem;
    }
  }

  p {
    color: var(--color-text);
    margin-top: 1rem;
    letter-spacing: 0.2rem;
  }

  a {
    padding: 2rem 2rem;
    border-radius: 3rem;
    background-color: var(--color-headings);
    cursor: pointer;
    color: var(--color-white);
    transition: all 0.5s ease;

    &:hover {
      background-color: var(--color-accent);
    }
  }
`;

const AboutImage = styled.div`
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 50vh;
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const ButtonHide = styled.div`
  margin-top: 1rem;
  padding: 3rem 0rem;
  overflow: hidden;
`;

export default AboutComponent;
