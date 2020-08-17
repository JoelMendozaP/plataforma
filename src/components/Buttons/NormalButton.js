import React from 'react'
import Classes from './Button.css'

export default function NormalButton(props) {
  return (
    <button className={Classes.btn}>{props.children}</button>
  )
}
