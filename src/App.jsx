import "./App.css";
import Gallery from "./components/Gallery";
import { PhotoDetails } from "./components/PhotoDetails";
// import { ImageCard } from "./components/ImageCard";
import WhatsAppButton from "./components/WhatsAppButton";
import data from "./data.json";
// import {ImageUploader} from "./helpers/ImageUploader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Gallery data={data} />} />
        <Route path="/photo/:id" element={<PhotoDetails data={data}/>} />
        {/* <Gallery data={data} /> */}
        {/* <ImageUploader /> */}
        {/* <ImageCard/> seguir trabajando este componente */}
      </Routes>
      <WhatsAppButton />
    </Router>
  );
}

export default App;
