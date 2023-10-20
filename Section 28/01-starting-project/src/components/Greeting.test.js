import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

// testing suite
describe("Greeting component", () => {
  test("renders Hello World! as a text", () => {
    // Arrange
    render(<Greeting />);

    //   Act
    //   ...

    // Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });
});
