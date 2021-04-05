import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifGetterApp = () => {
    // const categories = ['landscape', 'cityscape', 'urbanscape']
    const [categories, setCategories] = useState(['starwars'])

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
