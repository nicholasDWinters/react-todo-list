import React from "react";
import { render } from "@testing-library/react";
import EditTodoForm from './EditTodoForm';

const todo = {
    task: 'shop',
    id: 1
}

it("renders without crashing", function () {
    render(<EditTodoForm todo={todo} />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<EditTodoForm todo={todo} />);
    expect(asFragment()).toMatchSnapshot();
});
