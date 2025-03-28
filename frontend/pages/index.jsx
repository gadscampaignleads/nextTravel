import React from "react";
import Layout from "../components/Layout";
import Hero from "@/components/Hero";
import Destination from "@/components/Destination";
import About from "@/components/About";
import Steps from "@/components/Steps";
import Why from "@/components/Why";


export default function Home() {
  return (
    <Layout
      title="Cheap Tickets: Flights, Hotels and Packages – Traveloways" description="Welcome to Traveloways">
      <div >
        <main >
          <Hero />
          <Destination />
          <About />
          <Steps />
          <Why />
        </main>
      </div>
    </Layout>
  );
}