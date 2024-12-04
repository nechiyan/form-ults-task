import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";  // Adjust the path if necessary

describe("Button Component", () => {
  test("renders the button with default variant and size", () => {
    render(<Button variant="default" size="default">Click Me</Button>);
    
    // Check if the button text is rendered correctly
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
    
    // Check if the button has the correct class for default variant and size
    expect(buttonElement).toHaveClass("bg-primary");
    expect(buttonElement).toHaveClass("h-9");  // Size default
  });

  test("renders a destructive button", () => {
    render(<Button variant="destructive" size="default">Delete</Button>);

    const buttonElement = screen.getByText(/delete/i);
    expect(buttonElement).toBeInTheDocument();
    
    // Check if the button has the correct class for destructive variant
    expect(buttonElement).toHaveClass("bg-destructive");
  });

  test("fires onClick event correctly", () => {
    const mockOnClick = jest.fn();
    render(<Button variant="default" size="default" onClick={mockOnClick}>Click Me</Button>);

    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
