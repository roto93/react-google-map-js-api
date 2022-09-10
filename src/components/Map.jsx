import { useEffect, useRef, useState } from "react"
import useDeepCompareEffect from 'use-deep-compare-effect'
import React from 'react'

const Map = ({
  onClick,
  onIdle,
  children,
  style,
  center,
  zoom,
  ...options
}) => {
  const ref = useRef(null);
  const [map, setMap] = useState({});

  useDeepCompareEffect(() => {
    if (!isEmptyObj(map)) {
      map.setOptions(options);
    }
  }, [map, options]);

  useEffect(() => {
    if (ref.current && isEmptyObj(map)) {
      setMap(new window.google.maps.Map(ref.current, { center, zoom, }))
    }
  }, [ref, map]);

  return (<>
    <div ref={ref} style={style} />
    {React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        // set the map prop on the child component
        return React.cloneElement(child, { map });
      }
    })}
  </>)
}

export default Map

const isEmptyObj = (obj) => Object.keys(obj).length === 0  
