import { render, screen, fireEvent  } from "@testing-library/react";
import ButtonProfile from "../components/ButtonProfile";
import "@testing-library/jest-dom";


jest.mock("next/link", () => {
  return ({ children, href }) => {
    return <a href={href}>{children}</a>;
  };
});

describe("ButtonProfile", () => {
  test("renders two buttons with correct text and links", () => {
    render(<ButtonProfile />);
    const signInButton = screen.getByRole("button", { name: "Entrar" });
    const createProfileButton = screen.getByRole("button", {
      name: "Criar perfil",
    });
    const signInLink = screen.getByRole("link", { name: "Entrar" });
    const createProfileLink = screen.getByRole("link", {
      name: "Criar perfil",
    });
    expect(signInButton).toBeInTheDocument();
    expect(createProfileButton).toBeInTheDocument();
    expect(signInButton.closest("a")).toBe(signInLink);
    expect(createProfileButton.closest("a")).toBe(createProfileLink);
    expect(signInLink).toHaveAttribute("href", "./authi/signInPage");
    expect(createProfileLink).toHaveAttribute("href", "./authi/signupPage");

    
  });
});
describe("ButtonProfile", () => {
    test("clicking on Entrar button changes URL to ./authi/signInPage", () => {
      const { getByRole } = render(<ButtonProfile />);
      const entrarButton = getByRole("button", { name: "Entrar" });
  
      fireEvent.click(entrarButton);
  
      expect("http://localhost/authi/signInPage").toBe("http://localhost/authi/signInPage");
    });
  });
  describe("ButtonProfile", () => {
    test("clicking on Entrar button changes URL to ./authi/signupPage", () => {
      const { getByRole } = render(<ButtonProfile />);
      const createProfileButton = getByRole("button", { name: "Entrar" });
  
      fireEvent.click(createProfileButton);
  
      expect("http://localhost/authi/signupPage").toBe("http://localhost/authi/signupPage");
    });
  });