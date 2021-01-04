import React, {useState} from 'react';
import Menu from './Menu';
import MenuCategories from './MenuCategories'
import items from '../../assets/data/data'

const allCategories = ['all', ...new Set(items.map((item)=> item.category))]

const FullMenu = () => {
    const [menuItems, setMenuItems] = useState(items)

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
                <h2>Menu Favorites</h2>
            </div>
            <MenuCategories categories={allCategories} filterItems={filterItems}/>
            <Menu items={menuItems} />
        </section>
}

export default FullMenu