import { render } from "@testing-library/react";
import NavbarHome from "../components/NavbarHome";
import "@testing-library/jest-dom";

describe("NavbarHome", () => {
  it("should render logo and title correctly", () => {
    const { getByAltText, getByText } = render(<NavbarHome />);

    const userImage = screen.getByAltText("Logo2");
    expect(userImage).toBeInTheDocument();
    const title = getByText("LocateMe");
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass("text-5xl");
    expect(title).toHaveClass("text-gray-700");
    expect(title).toHaveClass("font-bold");
  });

  it("should render hero image correctly", () => {
    const { getByAltText } = render(<NavbarHome />);

    const hero = getByAltText("Hero");
    expect(hero).toBeInTheDocument();
    expect(hero.getAttribute("src")).toBe("/circle.png");
    expect(hero.getAttribute("width")).toBe("150");
    expect(hero.getAttribute("height")).toBe("150");
  });
});
