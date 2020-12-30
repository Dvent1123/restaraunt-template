import React, {useState} from 'react';
import Menu from './Menu';
import MenuCategories from './MenuCategories'
import items from './data'

const allCategories = ['all', ...new Set(items.map((item)=> item.category))]

const FullMenu = () => {
    const [menuItems, setMenuItems] = useState(items)
    const[categories, setCategories] = useState(allCategories)

    const filterItems = (category) => {
        if(category === 'all') {
            setMenuItems(items)
            return
        }

        const newItems = items.filter((item) => item.category === category)
        setMenuItems(newItems)
    }

    return<section className="menu-section" id='menu'>
            <div className="menu-title">
                <h2>Menu</h2>
            </div>
            <MenuCategories categories={categories} filterItems={filterItems}/>
            <Menu items={menuItems} />
        </section>
}

export default FullMenu