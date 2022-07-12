import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Hello World!</h1>
        <h2>Welcome to Next JS Tutorial!</h2>
        <h3>Inexture Solutions</h3>
      </main>
    </div>
  );
}
