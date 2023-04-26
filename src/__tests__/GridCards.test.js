import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import GridCards from "../components/GridCards";

describe("GridCards component", () => {
  test("displays two cards with correct images and text", () => {
    render(<GridCards />);

    const firstCardImage = screen.getByAltText("Logo1");
    expect(firstCardImage.src).toContain("%2Fimage_1.png");

    const secondCardImage = screen.getByAltText("Logo2");
    expect(secondCardImage.src).toContain("%2Fimage_2.png");

    const firstCardTitle = screen.getByText("find lost objects");
    expect(firstCardTitle).toBeInTheDocument();

    const secondCardTitle = screen.getByText(/Ache objetos perdidos/i);
    expect(secondCardTitle).toBeInTheDocument();
    const firstCardText = screen.getByText(/Posting information about lost objects in public places/i);
    expect(firstCardText).toBeInTheDocument();

    const secondCardText = screen.getByText(/Postar informações sobre objetos perdidos em locais públicos/i);
    expect(secondCardText).toBeInTheDocument();
    
  });

});
