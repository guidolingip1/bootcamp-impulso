import { rest } from "msw";
import { setupServer } from "msw/node";

import { getQuote } from "./quotesService";


const response = {test: 'testing'};
const response2 = {test: 'testing2'};

const server = setupServer(
    rest.get('http://127.0.0.1:3000', (req, res, ctx) => {
        return res(ctx.json(response))
    })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close())

test("Transform json response into object", () => {
    const quote = await getQuote();

    expect(quote).toStrictEqual(response);
})
