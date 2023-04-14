import React from "react";
import { Carousel } from "react-responsive-carousel";
import TestimonialCard from "./cardInfo/TestimonialCard";

const TestimonialCarousel = () => {
  return (
    <Carousel
      infiniteLoop={true}
      autoPlay={true}
      Interval={5000}
      showStatus={false}
    >
      <TestimonialCard
        name="Alana Reyes"
        review="I love their kids menu. It is not only healthy but delicious!"
      />
      <TestimonialCard
        name="Brian Spinos"
        review="I've never experienced food like this! This is incredible!"
      />
      <TestimonialCard
        name="Dean Huffines"
        review="This is the restaurant that we choose to celebrate our best moments."
      />
      <TestimonialCard
        name="Jeff Tyler"
        review="The food was fire! It was the best I've had in years."
      />
      <TestimonialCard
        name="Mauro Icardi"
        review="What a perfect experience. Service is great, food even better."
      />
      <TestimonialCard
        name="Jen Lopez"
        review="This is the best Mediterranean food I've ever had!"
      />
      <TestimonialCard
        name="George Manfredi"
        review="Their desserts are drops from heaven, that's all I am going to say!"
      />
      <TestimonialCard
        name="Hannah Montrel"
        review="The food was really refreshing. After work this is my placer to go!"
      />
    </Carousel>
  );
};

export default TestimonialCarousel;
