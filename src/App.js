import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import './App.css';
import PlayList from "./pages/PlayList";
import PlayDetail from "./pages/PlayDetail";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
            <Route path="play">
                <Route index element={<PlayList/>}/>
                <Route path=":mt20id" element={<PlayDetail/>}/>
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
