import React from "react";
import Head from "next/head";

export default function ContainerBlock({ children, ...meta }) {
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <main>
        <div>{children}</div>
      </main>
    </div>
  );
}
