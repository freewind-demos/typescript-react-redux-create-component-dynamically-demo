import React from 'react';

export type HelloStateProps = {
  title: string,
  fruits: string[]
}

export type HelloDispatchProps = {
  deleteFruit: (fruitName: string) => void
}

type Props = HelloStateProps & HelloDispatchProps;

export default function Hello({title, fruits, deleteFruit}: Props) {
  return <div>
    <h1>{title}</h1>
    <ul>
      {
        fruits.map(name => <li key={name}>
          {name}
          <button title="delete" onClick={() => deleteFruit(name)}>x</button>
        </li>)
      }
    </ul>
  </div>
}
