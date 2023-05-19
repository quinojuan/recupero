import "./App.css";
import Gallery from "./components/Gallery";
import WhatsAppButton from "./components/WhatsAppButton";
import data from "./data.json";
import { ImageUploader } from "./helpers/ImageUploader";

function App() {
  return (
    <>
      <Gallery data={data} />
      {/* <ImageUploader /> */}
      <WhatsAppButton />
    </>
  );
}

export default App;
