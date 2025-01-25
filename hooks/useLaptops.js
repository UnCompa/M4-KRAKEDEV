import { useEffect, useState } from "react";

export default function useLaptops() {
  const [laptops, setLaptops] = useState([])
  const [status, setStatus] = useState(null)
  const [updateStatus, setUpdateStatus] = useState(null)
  useEffect(() => {
    getLaptops()
  }, [])
  const getLaptops = async () => {
    const endpoint = 'http://192.168.1.13:3000/laptops'
    console.log(endpoint);
    const res = await fetch(endpoint)
    const data = await res.json()
    console.log(data);
    
    setLaptops(data)
  }
  const createLaptop = async (laptopCreate) => {
    console.log('LAPTOPS', laptopCreate);
    
    const res = await fetch('http://192.168.1.13:3000/laptops', {
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
  }
  const updateLaptops = async (id, laptopCreate) => {
    const res = await fetch(`http://192.168.1.13:3000/laptops/${id}`, {
      method: 'PUT',
      body: JSON.stringify(laptopCreate),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    console.log(res.status);
    if (res.status === 200) {
      setUpdateStatus(true)
    } else {
      setUpdateStatus(false)
    }
  }
  const deleteLaptop = async (id) => {
    const res = await fetch(`http://192.168.1.13:3000/laptops/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }
  return {
    laptops,
    createLaptop,
    status,
    updateLaptops,
    updateStatus,
    deleteLaptop
  }
}