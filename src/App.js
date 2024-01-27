import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { LoadingTriangle } from "./components/loadingTriangle/loadingTriangle";
const Home = lazy(() => import("./pages/home/home"));
const Tech = lazy(() => import("./pages/tech/tech"));
const Cult = lazy(() => import("./pages/cult/cult"));
const Sports = lazy(() => import("./pages/sports/sports"));
const Mess = lazy(() => import("./pages/mess/mess"));
const Council = lazy(() => import("./pages/council/council"));
const LoginCouncil = lazy(() => import("./pages/council/login/login"));
const CreatePost = lazy(() => import("./pages/council/createPost/createPost"));
const DeletePost = lazy(() => import("./pages/council/deletePost/deletePost"));
const EditPost = lazy(() => import("./pages/council/editPost/editPost"));
// import Home from "./pages/home/home";
// import Tech from "./pages/tech/tech";
// import Cult from "./pages/cult/cult";
// import Sports from "./pages/sports/sports";
// import Mess from "./pages/mess/mess";
// import Council from "./pages/council/council";
// import LoginCouncil from "./pages/council/login/login";
// import CreatePost from "./pages/council/createPost/createPost";
// import DeletePost from "./pages/council/deletePost/deletePost";
// import EditPost from "./pages/council/editPost/editPost";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div id="universalNavbarPadding"></div>
        <Suspense fallback={LoadingTriangle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/cult" element={<Cult />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/mess" element={<Mess />} />
            <Route path="/council">
              <Route path="" element={<Council />} />
              <Route path="login" element={<LoginCouncil />} />
              <Route path="createPost" element={<CreatePost />} />
              <Route path="deletePost" element={<DeletePost />} />
              <Route path="editPost" element={<EditPost />} />
              <Route
                path="editPost/:division/:postType/:id"
                Component={EditPost}
              />
            </Route>
          </Routes>
        </Suspense>
      </Router>
      <div id="universalFooterPadding"></div>
    </div>
  );
}

export default App;
