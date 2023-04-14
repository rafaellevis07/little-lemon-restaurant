import Star from "../../../../assets/star.png";

const TestimonialCard = (props) => {
  return (
    <article className="testimonial-card">
      <img src={Star} alt="Testimonial Icon" />
      <h3>{props.name}</h3>
      <p>{props.review}</p>
    </article>
  );
};

export default TestimonialCard;
