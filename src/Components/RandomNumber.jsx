import React from 'react'

export const RandomNumber = (props) => {
  const min = props.min
  const max = props.max
  const random = Math.floor(Math.random() * (max - min)) + min

  return (
    <div>
      <h2>{ props.title }</h2>
      <p><strong>Valor mínimo: </strong> { min }</p>
      <p><strong>Valor máximo: </strong> { max }</p>
      <p><strong>Valor escolhido entre {min} e {max} é: </strong> { random }</p>
    </div>
  )
}