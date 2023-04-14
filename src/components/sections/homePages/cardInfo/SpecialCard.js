import { Link } from "react-router-dom";

const SpecialCard = (props) => {
  return (
    <article className="menu-card">
      <img src={props.image} alt="Special Menu" />
      <section className="menu-card-content">
        <div className="name-price-container">
          <h1>{props.name}</h1>
          <h2 className="price">{props.price}</h2>
        </div>
        <p>{props.description}</p>
        <Link className="special-button" to="/">
          Order for Delivery
        </Link>
      </section>
    </article>
  );
};

export default SpecialCard;
