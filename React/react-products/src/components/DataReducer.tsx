import { useState, useReducer, ChangeEvent, MouseEvent } from "react";
import { v4 as uuidv4 } from "uuid";
const DataReducer = () => {
  type UsersDetails = {
    id: number;
    username: string;
    age: number;
    isAdmin: boolean;
  }[];

  type ActionObject = {
    type: string;
    payload: any;
  };

  type UserObj = {
    id: number;
    username: string;
    age: number;
    isAdmin: boolean;
  };
  const initialValue = [
    { id: 10001, username: "Robert", age: 23, isAdmin: false },
    { id: 10002, username: "Jack", age: 20, isAdmin: true },
    { id: 10003, username: "Mary", age: 21, isAdmin: false },
  ];
  function userReducer(users: UsersDetails, action: ActionObject) {
    // {type:..., payload:...}
    console.log(users);
    switch (action.type) {
      case "ADD_USER":
        return [...users, action.payload];
      case "DELETE_USER":
        return users.filter((user: UserObj) => user.id !== +action.payload);
      case "UPDATE_USER":
        return users.map((user: UserObj) =>
          user.id === +action.payload.id ? action.payload : user
        );
      default:
        return users;
    }
  }
  const [users, dispatchUser] = useReducer(userReducer, initialValue);
  const [newUser, setNewUser] = useState({
    id: "",
    username: "",
    age: 0,
    isAdmin: false,
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    console.log(e);
    console.log(e.target.name);
    console.log(e.target.value);
    const { name, value, checked } = e.target; // { name: "username", value: "hello" }
    setNewUser(
      (current: {
        id: string;
        username: string;
        age: number;
        isAdmin: boolean;
      }) => {
        console.log(current);
        if (e.target.type === "checkbox") {
          return {
            ...current, // {id:..., username:..., age:...}
            isAdmin: checked,
          };
        } else {
          return {
            ...current, // {id: .., age:.., isAdmin:...}
            [name]: value, // username : "John"
          };
        }
      }
    );
  }

  function handleSubmit() {
    // e.preventDefault();
    // console.log({ ...newUser, id: uuidv4() });

    console.log(newUser);
    dispatchUser({ type: "ADD_USER", payload: { ...newUser, id: uuidv4() } });
  }

  return (
    <div>
      <h2>UseReducer Form</h2>
      <form>
        <p>
          <input
            type="text"
            placeholder="Enter username"
            name="username"
            value={newUser.username}
            onChange={handleChange}
          />
        </p>
        <p>
          <input
            type="number"
            placeholder="Enter user age"
            name="age"
            value={newUser.age}
            onChange={handleChange}
          />
        </p>
        <p>
          isAdmin?:{" "}
          <input
            type="checkbox"
            name="isAdmin"
            onChange={handleChange}
            checked={newUser.isAdmin}
            value={String(newUser.isAdmin)}
          />
        </p>
        <p>
          <button
            onClick={(e: MouseEvent) => {
              e.preventDefault();
              dispatchUser({ type: "UPDATE_USER", payload: newUser });
              // console.log(newUser);
            }}
          >
            Update
          </button>
          <button type="button" onClick={handleSubmit}>
            Add
          </button>
        </p>
      </form>
      <hr />
      {users.map(
        (user: {
          id: string;
          username: string;
          age: number;
          isAdmin: boolean;
        }) => {
          return (
            <div key={user.id}>
              <h2>Name: {user.username}</h2>
              <p>Age: {user.age}</p>
              <p>isAdmin?: {user.isAdmin ? "Yes" : "No"}</p>
              <p>
                <button onClick={() => setNewUser(user)}>Update</button>
                <button
                  onClick={() => {
                    if (confirm("Are you sure to delete the user?")) {
                      dispatchUser({ type: "DELETE_USER", payload: user.id });
                    }
                  }}
                >
                  Delete
                </button>
              </p>
              <hr />
            </div>
          );
        }
      )}
    </div>
  );
};

export default DataReducer;
