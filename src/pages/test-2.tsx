import { useEffect } from "react";
import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Test2() {
  useEffect(() => {
    if (!!document.getElementById("iframe-container")?.childNodes.length) {
      return;
    }

    // Create iframe
    const iframe = document.createElement("iframe");
    iframe.name = "my_iframe";
    iframe.src = "about:blank";

    // Append iframe to div
    const div = document.getElementById("iframe-container");
    div?.appendChild(iframe);

    // Create a form
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "http://127.0.0.1:3001/api/show-card-data";
    // form.action = "/api/show-card-data";
    form.target = "my_iframe";
    form.style.visibility = "hidden";

    // Create an input
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "token";
    input.value = "abcdef";
    form.appendChild(input);

    document.body.appendChild(form);

    // Submit form
    form.submit();
    form.remove();
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div id="iframe-container" />
      </main>
    </>
  );
}
