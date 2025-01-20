import { useEffect, useState } from "react";

export default function useLaptops() {
  const [laptops, setLaptops] = useState([])
  const [status, setStatus] = useState(null)
  useEffect(() => {
    getLaptops()
  }, [])
  const getLaptops = async () => {
    const res = await fetch('http://192.168.1.12:3000/laptops')
    const data = await res.json()
    console.log(data);
    
    setLaptops(data)
  }
  const createLaptop = async (laptopCreate) => {
    console.log('LAPTOPS', laptopCreate);
    
    const res = await fetch('http://192.168.1.12:3000/laptops', {
      method: 'POST',
      body: JSON.stringify(laptopCreate),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    console.log(res.status);
    if (res.status === 200) {
      setStatus(true)
    } else {
      setStatus(false)
    }
    //const data = await res.json()
  }
  return {
    laptops,
    createLaptop,
    status,
  }
}