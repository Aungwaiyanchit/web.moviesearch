import React, { useState } from 'react'
import './styles/SwitchButton.css'

export const SwitchButton = () => {
  let btn = document.getElementById('btn')

  console.log(btn);
  const left = () => {
    btn.style.left = '0'
  }
  const right = () => {
    btn.style.left = '100'
  }
  return (
    <span className="swtich">
      <input type="checkbox" id='switcher'/>
      <label htmlFor='switcher'></label>
		</span>
  )
}
