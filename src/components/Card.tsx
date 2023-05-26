import React from 'react'

interface data {
    items: {
        name: string,
        title: string,
        description: string,
        image: string
    }
}

function Card(props: data) {
  return (
    <div>
      <img src={props.items.image} alt='image' />
      <div>
        <h3>{props.items.title}</h3>
        <p>{props.items.name}</p>
      </div>
    </div>
  )
}

export default Card;