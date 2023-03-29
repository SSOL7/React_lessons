import React from 'react'

const Lita = ({lita}) => {
    console.log(lita)
  return (
    <div className='person'>
        {lita.map((item)=> {
            return (
                <ul key={item.id}>
                    <h1>{item.name}</h1>
                    <h2>{item.age}</h2>
                    <h3>{item.belt}</h3>
                </ul>
                    )
                }
            )
        } 
    </div>
  )
}

export default Lita