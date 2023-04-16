import { render, screen } from "@testing-library/react";
import BookingForm from "../src/components/pages/BookingPage";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Additional Comments");
  expect(headingElement).toBeInTheDocument();
});
