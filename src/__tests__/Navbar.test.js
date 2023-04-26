import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../components/Navbar";
import "@testing-library/jest-dom";

describe("NavBar", () => {
  test("renders correctly with logo, title and user image", () => {
    render(<Navbar />);
    const logo = screen.getByAltText("Logo");
    const title = screen.getByText("LocateMe");
    const userImage = screen.getByAltText("Imagem do usuário");
    expect(logo).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(userImage).toBeInTheDocument();
  });

  test("clicking user image redirects to profile page", () => {
    const { container } = render(<Navbar />);
    const userImage = screen.getByAltText("Imagem do usuário");
    fireEvent.click(userImage);
    expect("/profile").toContain("/profile");
  });
});