import { fireEvent, render, screen } from "@testing-library/react";
import AddProduct from "./AddProduct";
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
  const testData = 10;
  fireEvent.change(productPriceEle, { target: { value: testData } });
  expect(+productPriceEle.value).toBe(testData);
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
