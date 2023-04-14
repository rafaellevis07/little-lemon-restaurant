import Heading from "../sections/homePages/Heading";
import Specials from "../sections/homePages/Specials";
import Testimonials from "../sections/homePages/Testimonials";

const Homepage = () => {
  return (
    <>
      <Heading />
      <main>
        <Specials />
        <Testimonials />
      </main>
    </>
  );
};

export default Homepage;
