import React from "react";
import { Featured, Hero, Mission, Newsletter } from "../components";

export default function Home() {
  return (
    <section>
      <Hero />
      <Featured />
      <Mission />
      {/* <Newsletter /> */}
    </section>
  );
}
