import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <div className="container">
      <h2 className="display-3 text-center my-3">{type} Post</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <input
            type="text"
            placeholder="Enter title"
            className="form-control"
            required
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
        </p>
        <p>
          <textarea
            placeholder="Enter description"
            className="form-control"
            required
            value={post.description}
            onChange={(e) => setPost({ ...post, description: e.target.value })}
          ></textarea>
        </p>
        <p>
          <input
            type="text"
            placeholder="Enter tags (seperated by comma)"
            className="form-control"
            required
            value={post.tags}
            onChange={(e) => setPost({ ...post, tags: e.target.value })}
          />
        </p>
        <button type="submit" className="btn btn-primary">
          {submitting ? "Submitting" : "Create"}
        </button>{" "}
        <Link href="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default Form;
