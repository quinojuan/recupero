import "./App.css";
import Gallery from "./components/Gallery";
// import { ImageCard } from "./components/ImageCard";
import WhatsAppButton from "./components/WhatsAppButton";
import data from "./data.json";
// import {ImageUploader} from "./helpers/ImageUploader";

function App() {
  return (
    <>
      <Gallery data={data} />
      {/* <ImageUploader /> */}
      {/* <ImageCard/> seguir trabajando este componente */}
      <WhatsAppButton />
      
    </>
  );
}

export default App;
