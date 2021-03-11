import React, {useState} from 'react';
import Menu from './Menu';
import MenuCategories from './MenuCategories'
import items from '../../assets/data/data'
import pdf from '../../assets/menu.pdf'

const allCategories = ['all', ...new Set(items.map((item)=> item.category))]

const FullMenu = () => {
    const [menuItems, setMenuItems] = useState(items)
    const [activeValue, setActiveValue] = useState(0)

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
                <a href={pdf}>Click to view full menu!</a>
            </div>
            <MenuCategories activeValue={activeValue} setActiveValue={setActiveValue} categories={allCategories} filterItems={filterItems}/>
            <Menu items={menuItems} />
        </section>
}

export default FullMenu