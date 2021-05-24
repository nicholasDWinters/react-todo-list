import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TodoList from './TodoList';

it("renders without crashing", function () {
    render(<TodoList />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it("should add new todo", function () {
    const { queryByText, getByLabelText } = render(<TodoList />);
    const input = getByLabelText("Todo");
    const btn = queryByText("Add Todo");
    expect(queryByText('shop')).not.toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'shop' } });
    fireEvent.click(btn);
    expect(queryByText('shop')).toBeInTheDocument();
})

//not sure how to get this test to pass ????
it("should allow user to edit todo", function () {
    const { queryByText, getByLabelText } = render(<TodoList />);
    const input = getByLabelText("Todo");
    const btn = queryByText("Add Todo");
    fireEvent.change(input, { target: { value: 'shop' } });
    fireEvent.click(btn);
    fireEvent.click(screen.getByRole('button', { name: 'Edit' }));
    const editInput = getByLabelText("Edit");
    const editBtn = queryByText("Edit Todo");
    fireEvent.change(editInput, { target: { value: 'golfing' } });
    fireEvent.click(editBtn);
    expect(queryByText('shop')).not.toBeInTheDocument();
    expect(queryByText('golfing')).toBeInTheDocument();
})
