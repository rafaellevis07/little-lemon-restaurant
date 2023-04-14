import Carousel from "./SpecialCarousel";
import SpecialCard from "./cardInfo/SpecialCard";
import GreekSalad from "../../../assets/food/greek-salad.webp";
import Bruschetta from "../../../assets/food/bruschetta.jpeg";
import Dessert from "../../../assets/food/lemon-dessert.webp";

const Specials = () => {
  return (
    <section className="specials">
      <article className="specials-topbar">
        <h1>This Week Specials</h1>
        <a
          className="action-button"
          href={require("../../../assets/menu.webp")}
          target="_blank"
          rel="noreferrer"
        >
          Our Menu
        </a>
      </article>

      <section className="specials-cards">
        <SpecialCard
          image={GreekSalad}
          name="Greek Salad"
          price="$12.99"
          description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives.
                 Dressed with salt, hot pepper, and olive oil."
        />
        <SpecialCard
          image={Bruschetta}
          name="Bruschetta"
          price="$16.99"
          description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with
                 salt and olive oil."
        />
        <SpecialCard
          image={Dessert}
          name="Lemon Dessert"
          price="$8.50"
          description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus
          and lemon zest."
        />
      </section>

      <section className="specials-carousel">
        <Carousel />
      </section>
    </section>
  );
};

export default Specials;
