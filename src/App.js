import MainHome from "./Components/Main/pages";
import SubPage from "./Components/Sub/SubPages/Pages"
import Apply from "./Components/Sub/ApplyPage/Apply";
import { Routes, Route } from "react-router-dom";

function App() {
  return (  
      <Routes>
        <Route path="/" element={<MainHome/>}/>
        <Route path="/sub" element={<SubPage/>}/>
        <Route path="/apply" element={<Apply/>}/>
      </Routes>
    // <Apply/>
  );
}

export default App;

// App.js는 상대꺼 주석처리하고 걍 쓰는걸로.