import React from 'react'

const MenuCategories = ({categories, filterItems, activeValue, setActiveValue}) => {
    return <div className="category-btn">
        {categories.map((category,index) => {
            return <button type='button'  className={`filter-category-btn ${activeValue === index && 'active-btn'}`} key={index}
            onClick={()=> {
                filterItems(category)
                setActiveValue(index)
                }}>
            {category}
            </button>
        })}
    </div>
}

export default MenuCategories
