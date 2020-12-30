import React from 'react'
import './ListItem.css'
import Button from '../Button/Button'


function ListItem({itemDetail}) {
    return(
        <div >   
             <div className = 'item_block'>
                 <h1>{itemDetail.title}</h1>
                 <div className= 'item_info'>
                    <img src={itemDetail.img} alt="Cats" width="200" height="200"></img>
                     <p className ='item_description'>{itemDetail.description}</p>
                 </div>
                 <Button />
             </div>
        </div>
    )
}

export default ListItem;