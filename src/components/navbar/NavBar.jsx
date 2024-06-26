"use client"
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import DarkModel from "../darkModel/DarkModel";
import { signOut, useSession } from "next-auth/react";
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];
const NavBar = () => {
  const session = useSession()
  return (
    <nav className={styles.container}>
      <Link href="/" className={styles.logo}>
      Digital Nexus Network
      </Link>
      <div className={styles.links}>
        <DarkModel />
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        {session.status == 'authenticated' && 
        <button className={styles.logout} onClick={signOut}>Logout</button>}
      </div>
    </nav>
  );
};

export default NavBar;
