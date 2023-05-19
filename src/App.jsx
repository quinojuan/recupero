import './App.css'
import Gallery from './components/Gallery'
import WhatsAppButton from './components/WhatsAppButton'
import data from "./data.json"

function App() {

  return (
    <>
      <Gallery data={data}/>
      <WhatsAppButton />
    </>
  )
}

export default App
