import React from 'react'

const Categories = ({categories}) => {
    return (
        <div className="categories">
            <h1>Categories</h1>
            {
                categories.map(category => <p>{category}</p>)
            }
        </div>
    )
}

export default Categories
