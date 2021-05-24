import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Todo from './Todo';

it("renders without crashing", function () {
    render(<Todo />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<Todo />);
    expect(asFragment()).toMatchSnapshot();
});

it("should display edit form on click", function () {
    const { queryByText, getByLabelText } = render(<Todo />);
    const btn = screen.getByRole('button', { name: 'Edit' });
    fireEvent.click(btn);
    const input = getByLabelText("Edit");
    const editBtn = queryByText("Edit Todo");
    expect(input).toBeInTheDocument();
    expect(editBtn).toBeInTheDocument();
})
