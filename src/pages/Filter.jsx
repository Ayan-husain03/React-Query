import React, { useState } from 'react'
import data from "../api/data.json"

export const Filter = () => {
    const [items, setItems] = useState(data)
    let filters = ["All", "Bags", "Shoes","Watches","Electronics", "Headphones"]
    const handleFilter = (category) => {
        if (category === "All") {
            setItems(data)
        } else {
            const filterItem = data.filter((item)=> item.category === category)
            setItems(filterItem)
        }
    }
  return (
    <div className='p-20'>
        <div className='mb-10 grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3  gap-10'>
            {filters.map((item, i) => (
                <span key={i} className='border border-red-500 px-10 py-3 rounded-md cursor-pointer' onClick={()=> handleFilter(item)}>{item}</span>
            ))}
        </div>
        <ul className='grid md:grid-cols-4 sm:grid-cols-2 gap-5'>
            {items.map((item, i)=> (
                <li key={i} className= 'border border-blue-500 p-5 rounded-lg'>
                    <p className='font-semibold text-xl'>{item.name}</p>
                    <p>{item.category}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}
