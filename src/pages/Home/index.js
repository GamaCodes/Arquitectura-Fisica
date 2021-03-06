import React from "react";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Experience from "../../components/Experience";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import { Center } from "@chakra-ui/react";

export default function index() {
  return (
    <>
      <Center bg="white" boxShadow="2xl" py={4}>
        <svg
          width="62"
          height="52"
          viewBox="0 0 124 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M80.6002 7.38827e-06H41.5376L26.0176 38.6213H66.0056L80.6002 7.38827e-06Z"
            fill="#2F2E2E"
          />
          <path
            d="M0 103.368H41.5373L57.3573 61.5051L4.91867 91.1291L0 103.368Z"
            fill="#2F2E2E"
          />
          <path
            d="M62.6217 58.5305L52.1217 85.7638L108.006 63.0438L83.6604 3.9758L70.299 38.6211H97.8657L62.6217 58.5305Z"
            fill="#F5AB0D"
          />
          <path
            d="M19.2468 42.5124L0.808105 88.9844L83.0708 42.5124H19.2468Z"
            fill="#2F2E2E"
          />
          <path
            d="M75.5867 80.4615L109.08 66.9762L123.051 103.368H85.0787L75.5867 80.4615Z"
            fill="#2F2E2E"
          />
        </svg>
      </Center>
      <Hero />
      <About />
      <Experience />
      <Carousel />
      <Footer />
    </>
  );
}
