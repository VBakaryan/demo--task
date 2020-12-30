import React from 'react';
import ListItem from '../../components/ListItem/ListItem'

function List({products}) {
    return products.map((product) => {
        return (<ListItem itemDetail={product} /> );
    })
};

export default List;