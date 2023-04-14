import Heading from "../sections/homePages/Heading";
import Specials from "../sections/homePages/Specials";
import Testimonials from "../sections/homePages/Testimonials";
import About from "../sections/homePages/About";

const Homepage = () => {
  return (
    <>
      <Heading />
      <main>
        <Specials />
        <Testimonials />
        <About />
      </main>
    </>
  );
};

export default Homepage;
