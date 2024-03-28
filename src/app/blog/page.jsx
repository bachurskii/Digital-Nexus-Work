import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import next from "next";



async function getData() {
  const response = await fetch('http://localhost:3000/api/posts',{cache:'no-store'})
 
  if(!response.ok) {
    throw new Error('Failed to fetch data')

  }
  return response.json()
}
const Blog = async() => {
  const data = await getData()
  return (
    <div className={styles.mainContainer}>
 {data.map((elem) => (
  <Link href={`blog/${elem._id}`} className={styles.container} key={elem._id}>
        <div className={styles.imageContainer}>
          <Image
            src={elem.img}
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{elem.title}</h1>
          <p className={styles.desc}>{elem.description}</p>
        </div>
      </Link>
 ))}
   
    </div>
  );
};

export default Blog;
