import React from 'react'
// import barbecue from '../../assets/images/barbecue.jpg'

const Menu = ({items}) => {
    return <div className="menu-center">
        {items.map((item) => {
            const {id, title, img, desc, price} = item

            return <article key={id} className="menu-item">
                <img src={img} alt={title} className="menu-photo"/>
                <div className="item-info">
                    <header>
                        <h4>{title}</h4>
                        <h4 className="price">${price}</h4>
                    </header>
                    <p className='menu-item-text'>{desc}</p>
                </div>
            </article>
        })}
    </div>
}

export default Menu
