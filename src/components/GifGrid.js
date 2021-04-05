// import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import useFetchGif from '../hooks/useFetchGif'
import GifGridItem from './GifGridItem'

const GifGrid = ({ category }) => {
    const { data, loading } = useFetchGif(category)

    return (
        <>
            <h3 className='animate__animated animate__jello'>{category}</h3>
            {loading && <p>loading data...</p>}
            <div className='card-grid'>
                {data.map((img) => (
                    <GifGridItem key={img.id} {...img} />
                ))}
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string,
}

export default GifGrid
