import React from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Layout from "../../components/Layout/Layout";
import Info from "@/components/Home/Info";
import Project from "@/components/Home/Project";
import Skill from "@/components/Home/Skill";

const Home = () => {
  return (
    <>
      <Header />
      <Layout>
        <Info />
        <Skill />
        <Project />
      </Layout>
      <Footer />
    </>
  );
};

export default Home;
