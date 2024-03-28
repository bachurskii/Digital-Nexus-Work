"use client";
import { useContext } from "react";
import styles from "./darkModel.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";
const DarkModel = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>
        <Image src="/sun.png" alt="img" width={15} height={15}></Image>
      </div>
      <div className={styles.icon}>
        {" "}
        <Image src="/moon.png" alt="img" width={20} height={20}></Image>{" "}
      </div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "3px" } : { right: "4px" }}
      ></div>
    </div>
  );
};

export default DarkModel;
