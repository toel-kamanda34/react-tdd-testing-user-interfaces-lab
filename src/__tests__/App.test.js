import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    // Arrange
    render(<App />);

    // Act
   const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
    });

    // Assert
    expect(topLevelHeading).toBeInTheDocument();
  });

  test("displays an image of yourself with alt text identifying the content of the image", () => {
    // Arrange
    render(<App />);

    // Act
   const image = screen.getByAltText("Profile Photo");

    // Assert
    expect(image).toHaveAttribute("src");
  });

  test("displays a second-level heading with the text About Me", () => {
    // Arrange
    render(<App />);

    // Act
   const secondLevel = screen.getByRole("heading", {
    name: /About Me/i,
    exact: false,
    level: 2,
    });

    // Assert
    expect(secondLevel).toBeInTheDocument();
  });

  test("displays a paragraph for your biography", () => {
    // Arrange
    render(<App />);

    // Act
   const paragraph = screen.getByText(/I /i)

    // Assert
    expect(paragraph).toBeInTheDocument();
  });

  test("displays a paragraph for your biography", () => {
    // Arrange
    render(<App />);

    // Act
   const githubLink= screen.getByRole("link",{name:/github/i,})

   const linkedinLink = screen.getByRole("link",{name:/linked/i})

    // Assert
    expect(githubLink).toHaveAttribute(
        "href",
        expect.stringContaining("https://github.com")
      );

      expect(linkedinLink).toHaveAttribute(
        "href",
        expect.stringContaining("https://linkedin.com")
      );
  });