import { rest } from "msw";
import { setupServer } from "msw/node";

import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

const response = { speaker: "test speaker", quote: "test quote" };

const server = setupServer(
  rest.get("http://127.0.0.1:3000", (req, res, ctx) => {
    return res(ctx.json(response));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders the app with a button, a quote and a paragraph", () => {
  render(<App />);

  const buttonEl = screen.getByRole("button");
  const imageEl = screen.getByRole("img");

  expect(buttonEl).toBeInTheDocument();
  expect(imageEl).toBeInTheDocument();
});

test("Calls api on button click", () => {
  render(<App />);

  const buttonEl = screen.getByRole("button");
  fireEvent.click(buttonEl);

  const quoteEl = await screen.findByText(response.quote);

  expect(quoteEl).toBeInTheDocument();
});
