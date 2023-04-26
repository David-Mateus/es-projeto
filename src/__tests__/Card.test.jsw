import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../components/Card";
// error - 
describe("Card component", () => {
    test("renders card with correct props", () => {
        const props = {
            name: "John Doe",
            time: "10:00",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            imagemUrl: "https://picsum.photos/id/1027/150/150",
            phone: "11999999999",
        }
        render(<Card {...props} />);

        const nameElement = screen.getByText(props.name);
        expect(nameElement).toBeInTheDocument();

        const timeElement = screen.getByText(props.time);
        expect(timeElement).toBeInTheDocument();

        const textElement = screen.getByText(props.text);
        expect(textElement).toBeInTheDocument();

        const imageElement = screen.getByAltText("imagem-url");
        const expectedSrc = `https://picsum.photos/id/1027/150/150`
        expect(imageElement).toHaveAttribute('src', expectedSrc);

        const gmailLink = screen.getByRole("link", { name: /gmail/i });
        expect(gmailLink).toHaveAttribute("href",'');

        const whatsappLink = screen.getByRole('link', { name: 'WhatsApp' });
  expect(whatsappLink).toHaveAttribute('href', `https://wa.me/55${props.phone}`);
    });
})