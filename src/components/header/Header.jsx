import './header.css'
import CTA from './CTA'
import ME from '../../assets/avatar.jpg'
import HeaderSocials from './HeaderSocials'
import { useScramble } from 'use-scramble'


const Header = () => {

  const { ref } = useScramble({
    text: 'Ethical Hacker, Web Developer, IoT Engineer & a Tech Geek',
    sleep: 0.50,
    tick: 5,
    step: 5,
    scramble: 5,
    overdrive: false,
  });

  return (
    <header>
      <div className='container header__container'>
        <h5>Hello, I&apos;m</h5>

        <h1><a href='/'>Alluru Kumara Venkata Rohit Varma</a></h1>
        <h5 className='text-light'><p ref={ref} onFocus={ref} /></h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img className='photo' src={ME} alt='Personal Photo' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll to Bottom</a>
      </div>
    </header>
  )
}

export default Header