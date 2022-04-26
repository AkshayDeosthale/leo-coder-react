import { Routes, Route } from "react-router-dom";
import InfoArticle from "./InfoArticle";
import Login from "./Login";
import ArticleList from "./ArticleList";
import CreateArticle from "./CreateArticle";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/ArticleList" element={<ArticleList />} />
      <Route path="/InfoArticle/:id" element={<InfoArticle />} />
      <Route path="/CreateArticle" element={<CreateArticle />} />
    </Routes>
  );
}

export default App;
