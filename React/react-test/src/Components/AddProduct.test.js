import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import AddProduct from "./AddProduct";

jest.mock("fetch", () => ({
  __esModule: true,

  default: {
    get: () => ({
      data: {
        id: 1,
        title: "title",
        description: "description",
        price: "10",
      },
    }),
  },
}));

test("heading should be rendered", () => {
  render(<AddProduct />);
  const headEle = screen.getByTestId("head");
  expect(headEle).toHaveTextContent("Add Product");
});

test("product title element should be rendered", () => {
  render(<AddProduct />);
  const productTitleEle = screen.getByPlaceholderText(/product title/i);
  expect(productTitleEle).toBeInTheDocument();
});

test("product description element should be rendered", () => {
  render(<AddProduct />);
  const productDescEle = screen.getByPlaceholderText(/product description/i);
  expect(productDescEle).toBeInTheDocument();
});

test("product price element should be rendered", () => {
  render(<AddProduct />);
  const productPriceEle = screen.getByPlaceholderText(/product price/i);
  expect(productPriceEle).toBeInTheDocument();
});

test("button element should be rendered", () => {
  render(<AddProduct />);
  const buttonEle = screen.getByRole("button");
  expect(buttonEle).toBeInTheDocument();
});

test("product title element should be empty", () => {
  render(<AddProduct />);
  const productTitleEle = screen.getByPlaceholderText(/product title/i);
  expect(productTitleEle.value).toBe("");
});

test("product description element should be empty", () => {
  render(<AddProduct />);
  const productDescEle = screen.getByPlaceholderText(/product description/i);
  expect(productDescEle.value).toBe("");
});

test("product price element should be empty", () => {
  render(<AddProduct />);
  const productPriceEle = screen.getByPlaceholderText(/product price/i);
  expect(productPriceEle.value).toBe("");
});

test("product title value should be title", () => {
  render(<AddProduct />);
  const productTitleEle = screen.getByPlaceholderText(/product title/i);
  const testData = "title";
  fireEvent.change(productTitleEle, { target: { value: testData } });
  expect(productTitleEle.value).toBe(testData);
});

test("product price value should be 10", () => {
  render(<AddProduct />);
  const productPriceEle = screen.getByPlaceholderText(/product price/i);
  const testData = "10";
  fireEvent.change(productPriceEle, { target: { value: testData } });
  expect(productPriceEle.value).toBe(testData);
});

test("product description value should be description", () => {
  render(<AddProduct />);
  const productDescEle = screen.getByPlaceholderText(/product description/i);
  const testData = "description";
  fireEvent.change(productDescEle, { target: { value: testData } });
  expect(productDescEle.value).toBe(testData);
});

test("add product button should be disabled", () => {
  render(<AddProduct />);
  const buttonEle = screen.getByRole("button");
  expect(buttonEle).toBeDisabled();
});

test("add button value should be enabled if all fields value exists", () => {
  render(<AddProduct />);
  const productTitleEle = screen.getByPlaceholderText(/product title/i);
  const productPriceEle = screen.getByPlaceholderText(/product price/i);
  const productDescEle = screen.getByPlaceholderText(/product description/i);
  const testTitle = "title";
  const testDesc = "description";
  const testPrice = 10;
  fireEvent.change(productTitleEle, { target: { value: testTitle } });
  fireEvent.change(productPriceEle, { target: { value: testPrice } });
  fireEvent.change(productDescEle, { target: { value: testDesc } });
  const buttonEle = screen.getByRole("button");
  expect(buttonEle).toBeEnabled();
});

test("button value should be please wait while fetching", () => {
  render(<AddProduct />);
  const productTitleEle = screen.getByPlaceholderText(/product title/i);
  const productPriceEle = screen.getByPlaceholderText(/product price/i);
  const productDescEle = screen.getByPlaceholderText(/product description/i);
  const testTitle = "title";
  const testDesc = "description";
  const testPrice = 10;
  fireEvent.change(productTitleEle, { target: { value: testTitle } });
  fireEvent.change(productPriceEle, { target: { value: testPrice } });
  fireEvent.change(productDescEle, { target: { value: testDesc } });
  const buttonEle = screen.getByRole("button");
  fireEvent.click(buttonEle);
  expect(buttonEle).toHaveTextContent(/please wait/i);
});

test("button value should be add product after fetching", async () => {
  render(<AddProduct />);
  const productTitleEle = screen.getByPlaceholderText(/product title/i);
  const productPriceEle = screen.getByPlaceholderText(/product price/i);
  const productDescEle = screen.getByPlaceholderText(/product description/i);
  const testValue = "test";
  fireEvent.change(productTitleEle, { target: { value: testValue } });
  fireEvent.change(productPriceEle, { target: { value: testValue } });
  fireEvent.change(productDescEle, { target: { value: testValue } });
  const buttonEle = screen.getByRole("button");
  fireEvent.click(buttonEle);
  await waitFor(() => expect(buttonEle).not.toHaveTextContent(/please wait/i));
});

test("error element should not be visible", () => {
  render(<AddProduct />);
  const errorEle = screen.getByTestId("error");
  expect(errorEle).not.toBeVisible();
});

test("error element should visible", async () => {
  render(<AddProduct />);
  const productTitleEle = screen.getByPlaceholderText(/product title/i);
  const productPriceEle = screen.getByPlaceholderText(/product price/i);
  const productDescEle = screen.getByPlaceholderText(/product description/i);
  const testValue = "test";
  fireEvent.change(productTitleEle, { target: { value: testValue } });
  fireEvent.change(productPriceEle, { target: { value: testValue } });
  fireEvent.change(productDescEle, { target: { value: testValue } });
  const buttonEle = screen.getByRole("button");
  fireEvent.click(buttonEle);
  const errorEle = screen.getByTestId("error");
  expect(errorEle).toBeInTheDocument();
});

test("product title value should visible after fetching", async () => {
  render(<AddProduct />);
  const productTitleEle = screen.getByPlaceholderText(/product title/i);
  const productPriceEle = screen.getByPlaceholderText(/product price/i);
  const productDescEle = screen.getByPlaceholderText(/product description/i);
  const productTitleValue = await screen.findByTestId("productTitle");
  const testValue = "test";
  fireEvent.change(productTitleEle, { target: { value: testValue } });
  fireEvent.change(productPriceEle, { target: { value: testValue } });
  fireEvent.change(productDescEle, { target: { value: testValue } });
  const buttonEle = screen.getByRole("button");
  fireEvent.click(buttonEle);
  expect(productTitleValue).toBeInTheDocument();
});
