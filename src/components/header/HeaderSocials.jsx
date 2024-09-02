import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/rohit-varma-070526219/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/akvrohitvarma' target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href='https://www.instagram.com/i_rohit_varma/' target="_blank" rel="noreferrer"><BsInstagram/></a>
        <a href='https://twitter.com/the_only_varma' target="_blank" rel="noreferrer"><FaTwitter/></a>
        <a href='https://www.youtube.com/@circuitjet3609' target="_blank" rel="noreferrer"><BsYoutube/></a>

    </div>
  )
}

export default HeaderSocials