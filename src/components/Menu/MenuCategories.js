import React from 'react'

const MenuCategories = ({categories, filterItems}) => {
    return <div className="category-btn">
        {categories.map((category,index) => {
            return <button type='button' className="filter-category-btn" key={index}
            onClick={()=> filterItems(category)}>
            {category}
            </button>
        })}
    </div>
}

export default MenuCategories
