import React from 'react'

// FC stands for 'functional component', generic type.
const Todos: React.FC<{customProps: string[]}> = (props) => {
  return (
    <ul>
      {props.customProps.map(customItem => <li key={customItem}>{customItem}</li>)}
    </ul>
  )
}

export default Todos
