import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://img.freepik.com/free-photo/paper-people-chain-on-green-grass-unity-concept_632805-35.jpg?w=1380&t=st=1685890833~exp=1685891433~hmac=46f15c2161ca525e238313ec9dc0812864411c64035b664d7abecd75e33494e1"
          alt="img"
          fill={true}
          className={styles.img}
        />
      </div>
      <div className={styles.imgText}>
        <h1 className={styles.imgTitle}>
          Artificial intelligence: a revolution in technology and life
        </h1>
        <h2 className={styles.imgDesc}>
          How AI is changing industries, education and everyday life
        </h2>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            We are a team of enthusiasts united by a passion for innovation and
            a desire for progress. Our mission is to harness the power of
            technology to create solutions that make the world smarter, safer
            and more accessible for everyone. Inspired by the latest advances in
            artificial intelligence, we strive to transform the future by
            working on projects that make a real difference.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p>
            In our work, we focus on developing cutting-edge artificial
            intelligence solutions that cover a wide range of applications:
            <br />
            - Development of intelligent systems for data analysis.
            <br />
            - Creating innovative applications to improve everyday life.
            <br />
            - Providing consulting services on the implementation of AI in
            business processes.
            <br />
            - Development and training of machine models for automation and
            optimization of work processes.
            <br />
            Our goal is not just to follow trends, but to shape the future by
            providing technologies that are capable of real change. We believe
            in the power of innovation and strive to ensure that our solutions
            contribute to sustainable development and the well-being of society.
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
