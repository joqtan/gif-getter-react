import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifGetterApp = ({ defaultCategories = [] }) => {
    const [categories, setCategories] = useState(defaultCategories)

    return (
        <>
            <h2>Gif Getter</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))}
            </ol>
        </>
    )
}

export default GifGetterApp
