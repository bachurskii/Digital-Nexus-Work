import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";
const getData = (categ) => {
  const data =  items[categ]
  if(data) {
    return data
  }
  return []
}
const Category = ({ params }) => {
  const data = getData(params.category)
  return (
    <div className={styles.className}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((elem) => (
       
        <div className={styles.item} key={elem.id}>
        <div className={styles.content}>
          <h1 className={styles.title}>{elem.title}</h1>
          <p className={styles.desc}>{elem.desc}</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src={elem.image}
            alt={elem.title}
          />
        </div>
      </div>
      ))}
     
    </div>
  );
};

export default Category;
