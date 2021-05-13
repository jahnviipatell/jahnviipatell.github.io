import React, { useState } from 'react'
import LinkedIn from './assets/pngaaa.com-158429.png'
import Mail from './assets/PikPng.com_email-png_581646.png'
import GitHub from './assets/pngjoy.com_telegram-icon-github-icon-png-white-png-download_1164606.png'

const Footer = () => {

  const [copySuccess, setCopySuccess] = useState('')

  const copyToClipBoard = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe)
      setCopySuccess('Copied to Clipboard!')
    } catch (err) {
      setCopySuccess('Failed to copy!')
    }
  }

  return (
    <div className="icons">
      <div className="mail-group">
        <div className="copied">
          {copySuccess}
        </div>
        <button onClick={() => copyToClipBoard('jahnvi18patel@email.com')}>
          <img src={Mail} alt="mail" className="icon" />
        </button>
      </div>
      <a href="http://www.linkedin.com/in/jahnviipatell" >
        <img src={LinkedIn} alt="linkedIn" className="icon" />
      </a>
      <a href="https://github.com/jahnviipatell">
        <img src={GitHub} alt="gitHub" className="icon" />
      </a>
    </div>
  )
}

export default Footer
