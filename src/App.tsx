// App.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost, deletePost } from "./postsSlice";
import { setUser } from "./userSlice";
import { RootState } from "./store";
import { v4 as uuidv4 } from "uuid";
import { users, data } from "./data";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const posts = useSelector((state: RootState) => state.posts);

  const handleUserChange = () => {
    dispatch(setUser(users[Math.floor(Math.random() * users.length)]));
  };

  console.log(posts);

  const handleAddPost = () => {
    console.log("add post");
    dispatch(addPost(data[Math.floor(Math.random() * data.length)]));
  };

  return (
    <div>
      <button onClick={handleUserChange}>Change User</button>
      <button onClick={handleAddPost}>Add Post</button>
      <button
        onClick={() =>
          dispatch(deletePost(data[Math.floor(Math.random() * data.length)]))
        }
      >
        Delete Post
      </button>
      <div>
        User: {user.name}, Age: {user.age}
      </div>
      <div>
        <h3>Posts</h3>
        <ul>
          {posts.map((post) => (
            <li key={uuidv4()}>
              {post.title} {post.content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
