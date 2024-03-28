"use client";

import { signIn, useSession } from "next-auth/react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading</p>;
  }
  if (session.status === "authenticated") {
    router.push("/dashboard");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (result?.ok) {
      router.push("/dashboard");
    } else {
      console.error("Ошибка аутентификации");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
      </form>

      <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
  );
};

export default Login;
