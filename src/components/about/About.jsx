import './about.css';
import ME from '../../assets/avatar.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { useScramble } from 'use-scramble';


const About = () => {

  const { ref } = useScramble({
    text: 'I am a highly skilled web developer with expertise in front-end and back-end development, as well as a knowledgeable cybersecurity professional with a focus on network security and ethical hacking. I am a Certified Ethical Hacker (CEH Certified) and have won many CTF Challenges. Currently I&apos;m learning Reverse Engineering and Digital Forensics. As an IoT professional I made several working solutions to real life problems addressing social issues and won many awards for the same. I give attention to detail, I can work with a team and as a individual, I am very flexible and do not take stress easily, I&apos;m very patient and will work until I achieve the desired results.',
    tick: 2,
    step: 3,
    scramble: 10,
    overdrive: false,
  });

  return (
    <section id='about'>
      <h5>Come, get to know</h5>
      <h2>About me</h2>


      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About"></img>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>
                2+ years of Experience
                <br />

              </small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>Clients from Web and IoT backgrounds</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>
                20+ projects including
                <br />
                Corporate & Private
              </small>
            </article>
          </div>

          {/* <p>
            I am a highly skilled web developer with expertise in front-end and back-end development, as well
            as a knowledgeable cybersecurity professional with a focus on network security and ethical
            hacking. I am a Certified Ethical Hacker <a href='https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/' target='_blank'>(CEH Certified) </a> 
            and won many CTF Challenges. Currently I&apos;m learning Reverse Engineering and Digital Forensics. As an IoT professional I made several working solutions to real life problems addressing
            social issues and won many awards for the same. I give attention to detail, I can work with a team
            and as a individual, I am very flexible and do not take stress easily, I&apos;m very patient and will work
            until I achieve the desired results.
          </p> */}

          <p ref={ref}/>

          <a href='#contact' className='btn btn-primary'>Get in touch</a>
        </div>
      </div>
    </section>
  )
}

export default About