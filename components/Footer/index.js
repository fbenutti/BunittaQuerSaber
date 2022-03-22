import React from "react";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div className="bg-verde-escuro pb-4">
      <div className="text-center">
        <img className="inline pt-4" src='footer_bqs.png' />
      </div>
      <div className="bg-verde-escuro font-body text-lg container mx-auto text-center font-bold text-white">
        Site desenvolvido por Felipe Benutti: &nbsp;
        {/* <a className='hover:underline' href="https://www.felipebenutti.com.br" target='blank'>Felipe Benutti</a> /&nbsp; */}
        <a className='hover:underline' href="https://www.linkedin.com/in/felipe-benutti" target='blank'>
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a> /&nbsp;
        <a className='hover:underline' href="https://www.github.com/pelpsrox" target='blank'>
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
      </div>
    </div>
  )
}

export default Footer