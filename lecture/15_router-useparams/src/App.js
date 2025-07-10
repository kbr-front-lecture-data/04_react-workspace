import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigator from "./components/Navigator";
import Home from "./pages/Home";
import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";
import UserList from "./pages/UserList";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigator />
        <main style={{padding: '20px'}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/posts/:category/:postId" element={<PostDetail />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:userId" element={<UserProfile />} />          
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
