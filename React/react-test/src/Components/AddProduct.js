import { useState } from "react";
const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  return (
    <div>
      <h1 data-testid="head">Add Product</h1>
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
        <button disabled={!title || !price || !description}>Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
