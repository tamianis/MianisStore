import React from 'react'
import Item from './Item';

const ItemList = ({products}) => {
  return (
    <div className='flex flex-wrap justify-evenly gap-5 m-5'>
      {
        products.map(product => <Item key={product.id} {...product}/>)
      }
    </div>
  )
}

export default ItemList