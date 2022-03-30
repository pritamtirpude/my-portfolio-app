import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { motion } from "framer-motion";

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const { name, email, subject, message } = formData;

  const formRef = useRef();

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hppaduw",
        "template_bh05ige",
        formRef.current,
        "EVuUKY56gp-ixg1yk"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setFormData({
      name: "",
      subject: "",
      email: "",
      message: "",
    });
  };

  return (
    <ContactSection>
      <h1>Contact</h1>
      <FormControl>
        {success && (
          <motion.h2
            key={formRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
          >
            Thank You...
          </motion.h2>
        )}
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleChange}
            placeholder="Name"
            name="name"
          />
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={handleChange}
            placeholder="Subject"
            name="subject"
          />
          <input
            type="email"
            value={email}
            id="email"
            onChange={handleChange}
            placeholder="Email"
            name="email"
          />
          <textarea
            rows="5"
            id="message"
            value={message}
            onChange={handleChange}
            placeholder="Message"
            name="message"
          />
          <button type="submit">Submit</button>
        </form>
      </FormControl>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  padding: 5rem 10rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding: 5rem 2rem;
  }

  h1 {
    font-size: 5rem;
    color: var(--color-headings);
    letter-spacing: 0.2rem;
    position: relative;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
    padding: 2rem 0rem;

    &::after {
      content: "Contact";
      position: absolute;
      top: 0%;
      left: 0%;
      width: 100%;
      height: 100%;
      font-size: 10rem;
      z-index: -1;
      filter: opacity(20%);

      @media screen and (max-width: 768px) {
        font-size: 5rem;
      }
    }
  }
`;

const FormControl = styled.div`
  margin-top: 5rem;
  width: 50rem;
  @media screen and (max-width: 768px) {
    width: 100%;
  }

  h2 {
    text-align: center;
    padding: 1rem 0rem;
    color: var(--color-text);
  }

  form {
    display: flex;
    flex-direction: column;

    input,
    textarea {
      width: 100%;
      padding: 2rem 2rem;
      margin: 1rem 0rem;
      font-size: 1.8rem;
      background: #4e4e4e;
      color: white;
      letter-spacing: 0.2rem;
      font-family: inherit;

      &:focus {
        outline: none;
      }

      &::placeholder {
        color: white;
      }
    }
  }

  button {
    padding: 2rem 2rem;
    font-size: 1.8rem;
    border-radius: 3rem;
    margin-top: 1rem;
    background: var(--color-accent);
    color: white;

    &:hover {
      filter: brightness(120%);
    }
  }
`;

export default ContactComponent;
