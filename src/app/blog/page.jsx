import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => { 
    const data = await getData()
  return (
    <div className={styles.mainContainer}>
      {
        data?.map(item => <div><Link href={`/blog/${item._id}`}>{item.title}</Link></div>)
      }
    </div>
  );
};

export default Blog;