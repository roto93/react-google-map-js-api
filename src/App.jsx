import './App.css'
import { Wrapper } from '@googlemaps/react-wrapper'
import Map from './components/Map'
import Marker from './components/Marker'
import { useState } from 'react'
import { useEffect } from 'react'
import { handleKeydown } from './lib/lib'

const center = { lat: 25.002338453763226, lng: 121.51201851318248 }
const zoom = 15

function App() {


  const [position, setPosition] = useState(center);

  const changeLat = (e) => {
    const newPosition = { ...position, lat: Number(e.target.value) }
    setPosition(newPosition)
  }

  const changeLng = (e) => {
    const newPosition = { ...position, lng: Number(e.target.value) }
    setPosition(newPosition)
  }

  const onSubmit = () => {

  }

  const onKeydown = (e) => {
    handleKeydown(e.key, setPosition)
    // console.log(e.key)
  }

  useEffect(() => {
    if (navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude: lat, longitude: lng } = position.coords
        const newPosition = { lat, lng }
        setPosition(newPosition)
      })
      // console.log(navigator.geolocation)
    }
    document.addEventListener('keydown', onKeydown)
    return () => {
      document.removeEventListener('keydown', onKeydown)
    }
  }, [])

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <label >
          lat:
          <input type="number" value={position.lat} onChange={changeLat} step={0.1} />
        </label><br />
        <label>
          lng:
          <input type="number" value={position.lng} onChange={changeLng} step={0.1} />
        </label>
      </form>
      <Wrapper
        apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}
        render={render}
      >
        <Map style={{ width: '90%', height: '80%' }} center={position} zoom={zoom} >
          {/* <Marker position={center} /> */}
          <Marker position={position} />
        </Map>
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
