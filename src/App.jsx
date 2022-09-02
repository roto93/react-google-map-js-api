import './App.css'
import { Wrapper } from '@googlemaps/react-wrapper'
import Map from './components/Map'

const center = { lat: 25.002338453763226, lng: 121.51201851318248 }
const zoom = 15

function App() {

  return (
    <div className="App">
      <Wrapper
        apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}
        render={render}
      >
        <Map style={{ width: 500, height: '50%' }} center={center} zoom={zoom} />
      </Wrapper>
    </div>
  )
}

export default App


const render = (status) => {
  console.log(status)
  return (
    <div>{status}</div>
  )
}
