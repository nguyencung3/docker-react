import { getByText, render, screen } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = getByText("learn react");
//   expect(linkElement).toBeInTheDocument();
// });
test("everything is a node", () => {
  const Foo = () => <div>Hello</div>;
  render(<Foo />);
  expect(screen.getByText("Hello")).toBeInstanceOf(Node);
});
