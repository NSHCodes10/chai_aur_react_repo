import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     Children: 'Click me to visit google'
// }

const AnotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
);

const anotheruser = "chai aur react"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank' },
  'click me to Visit Google',
  anotheruser
);  

createRoot(document.getElementById('root')).render(

    reactElement
 
);
