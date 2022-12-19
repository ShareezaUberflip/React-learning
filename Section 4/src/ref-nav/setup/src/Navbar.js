import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'
const Navbar = () => {
  const [showLinks, setShowlinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linkHeight = linksRef.current.getBoundingClientRect().height;
    if(showLinks) {
      linksContainerRef.current.style.height = `${linkHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [showLinks])
  
 
  return <div className='nav-center'>
        <div className='nav-header'>
        <img alt='logo' src={logo}></img>
        <button className='nav-toggle' onClick={ () => setShowlinks(!showLinks)}>
          <FaBars/>
        </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
        <ul className='links' ref={linksRef}>
          {links.map((link, index) => {
            const {url, id, text} = link;
            return (
            <li key={id}><a href={url}>{text}</a></li>
            )
          })

          }
          <li>
            <a href='#'>Home</a>
          </li>
        </ul>
        </div>
        <ul className='social-icons'>
        {social.map((socialLink, index) => { 
          const {id, url, icon } = socialLink;
          return (
            <li key={id}>
            <a href={url}>
              {icon}
            </a>
          </li>
          )
        })
      }
        </ul>
        
  </div>
}

export default Navbar
