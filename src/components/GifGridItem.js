import React from 'react'
import 'animate.css'
import PropTypes from 'prop-types'

const GifGridItem = ({ title, url }) => {
    return (
        <div className='card animate__animated animate__fadeInUpBig '>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

export default GifGridItem
