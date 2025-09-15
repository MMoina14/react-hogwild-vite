import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import App from "../App";

describe("Hog App", () => {
  it("renders the app header", () => {
    render(<App />);
    expect(screen.getByText("HogWild")).toBeInTheDocument();
  });

  it("renders all hog cards", () => {
    render(<App />);
    const hogCards = screen.getAllByLabelText("hog card");
    expect(hogCards.length).toBeGreaterThan(0);
  });

  it("allows sorting hogs by name", () => {
    render(<App />);
    const sortBySelect = screen.getByLabelText("Sort By");
    fireEvent.change(sortBySelect, { target: { value: "name" } });

    
    expect(sortBySelect.value).toBe("name");
  });

  it("filters greased hogs only when checkbox checked", () => {
    render(<App />);
    const greasedCheckbox = screen.getByLabelText("Show only greased pigs");

    fireEvent.click(greasedCheckbox);

    expect(greasedCheckbox.checked).toBe(true);
  });

  it("hides a hog when the hide button is clicked", () => {
    render(<App />);

   
    const sortBySelect = screen.getByLabelText("Sort By");
    fireEvent.change(sortBySelect, { target: { value: "name" } });

   
    const babeHog = screen.getByRole("heading", { name: "Babe" }).closest("[aria-label='hog card']");
    expect(babeHog).toBeInTheDocument();

    
    const hideButton = within(babeHog).getByRole("button", { name: /hide me/i });
    fireEvent.click(hideButton);

    
    expect(screen.queryByRole("heading", { name: "Babe" })).not.toBeInTheDocument();
  });
});
