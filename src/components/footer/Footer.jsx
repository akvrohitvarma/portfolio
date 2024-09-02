import './footer.css';
import { FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6';
import { FiInstagram, FiTwitter } from 'react-icons/fi'


const Nav = () => {
  return (
    <footer>
        <a href='#' className='footer__logo'>Alluru Kumara Venkata Rohit Varma</a>

        <ul className='permalinks'>
          <li><a href='#'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#contact'>Contact Me</a></li>
        </ul>

        <div className='footer__socials'>
          <a href='https://www.linkedin.com/in/rohit-varma-070526219/' target="_blank" rel="noreferrer"><FaLinkedinIn/></a>
          <a href='https://github.com/akvrohitvarma' target="_blank" rel="noreferrer"><FaGithub/></a>
          <a href='https://www.youtube.com/@circuitjet3609' target="_blank" rel="noreferrer"><FaYoutube/></a>
          <a href='https://www.instagram.com/i_rohit_varma/'><FiInstagram/></a>
          <a href='https://twitter.com/the_only_varma' target="_blank" rel="noreferrer"><FiTwitter/></a>
        </div>

        <div className='footer__copyright'>
          <small>Copyright&copy; 2024 AKVRV. All rights reserved</small>
        </div>
    </footer>
  )
}

export default Nav