import HeroPic from "../../../assets/food/food4.webp";

const Heading = () => {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={HeroPic}
        alt="Restaurant Ingredients"
      />
      <div className="reserve-header-text">
        <h1>Reserve a Table</h1>
      </div>
    </header>
  );
};

export default Heading;
