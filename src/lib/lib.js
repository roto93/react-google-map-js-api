export const handleKeydown = (key, setPosition) => {
  switch (key) {
    case 'ArrowLeft':
      setPosition(prev => ({ ...prev, lng: roundTo(2, prev.lng - 0.02) }))
      break
    case 'ArrowUp':
      setPosition(prev => ({ ...prev, lat: roundTo(2, prev.lat + 0.02) }))
      break
    case 'ArrowRight':
      setPosition(prev => ({ ...prev, lng: roundTo(2, prev.lng + 0.02) }))
      break
    case 'ArrowDown':
      setPosition(prev => ({ ...prev, lat: roundTo(2, prev.lat - 0.02) }))
      break
    default: return
  }
}

const roundTo = (digit, num) => {
  const temp = 10 ** digit
  return Math.round(num * temp) / temp
}