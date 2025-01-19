import { useEffect, useState } from "react";

export default function useLaptops() {
  const [laptops, setLaptops] = useState([])

  useEffect(() => {
    getLaptops()
  }, [])
  const getLaptops = async () => {
    const res = await fetch('http://192.168.1.12:3000/laptops')
    const data = await res.json()
    console.log(data);
    
    setLaptops(data)
  }
  return {
    laptops
  }
}