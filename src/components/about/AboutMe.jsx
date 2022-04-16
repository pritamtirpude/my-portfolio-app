import ProfileImage from "../../assets/profile.jpg";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "../custom hook/UseScroll";
import { scrollReveal } from "../../animation";

const AboutMe = () => {
  const [element, controls] = useScroll();

  return (
    <AboutMeSection
      variants={scrollReveal}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <h1>About Me</h1>
      <AboutContent>
        <AboutDescription>
          <p>
            Hello 👋, I am a Fornt-end Developer with 1 year experience. Have my
            graduation in Computer Science and Engineering. Always eager to
            learn new technologies to hone my skills.
          </p>
          <br></br>
          <p>
            Good human being 🙂, not loquacious. Like watching TV series and
            movies.
          </p>
          <br></br>
          <p>
            I like turning figma design or psd templates into web pages also
            have interest in animations. In the process of becoming a full stack
            developer.
          </p>
        </AboutDescription>
        <AboutImage>
          <img src={ProfileImage} alt="Pritam Tirpude" />
          <div className="border-line"></div>
        </AboutImage>
      </AboutContent>
    </AboutMeSection>
  );
};

const AboutMeSection = styled(motion.div)`
  padding: 5rem 10rem;
  min-height: 100vh;

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
      content: "About Me";
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

const AboutContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-top: 5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 5rem;
  }
`;

const AboutDescription = styled(motion.div)`
  overflow: hidden;

  p {
    color: var(--color-text);
    line-height: 2rem;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    display: block;
    text-align: center;
  }
`;

const AboutImage = styled(motion.div)`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;

  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }

  img {
    width: 30%;
    height: 100%;
    object-fit: cover;
    filter: sepia(100%);
    transition: all 0.5s ease;

    @media screen and (max-width: 768px) {
      width: 50%;
    }

    &:hover {
      filter: sepia(0%);
    }
  }

  .border-line {
    position: absolute;
    top: 5%;
    right: 5%;
    width: 30%;
    height: 100%;
    z-index: -1;
    border: 5px solid var(--color-headings);
    filter: opacity(20%);

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export default AboutMe;
