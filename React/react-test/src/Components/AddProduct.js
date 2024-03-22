import { useState } from "react";
const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products/1");
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  return (
    <div>
      <h1 data-testid="head">Add Product</h1>
      <span data-testid="productTitle">{product.title}</span>
      <form>
        <p>
          <input
            type="text"
            placeholder="Enter product title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>
        <p>
          <input
            type="number"
            placeholder="Enter product price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </p>
        <p>
          <textarea
            placeholder="Enter product description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </p>
        <p>
          <button
            disabled={!title || !price || !description}
            onClick={handleSubmit}
          >
            {loading ? "Please Wait..." : "Add Product"}
          </button>
        </p>
        <span
          data-testid="error"
          style={{ visibility: error ? "visible" : "hidden" }}
        >
          Something went wrong
        </span>
      </form>
    </div>
  );
};

export default AddProduct;
