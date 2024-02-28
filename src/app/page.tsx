// src/page.tsx

import React from "react";
import Layout from "./layout";
import AboutMe from "./components/AboutMe";
import Projects from "./components/projects";

const Page = () => {
  return (
    <div>
      <Layout children={undefined} />
      <AboutMe />
      <Projects />
    </div>
  );
};

export default Page;
