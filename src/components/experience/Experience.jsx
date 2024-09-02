import './experience.css'
import { AiFillCheckCircle } from 'react-icons/ai'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <AiFillCheckCircle class='experience_details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle class='experience_details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle class='experience_details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle class='experience_details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle class='experience_details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle class='experience_details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/*End of Frontend*/}

        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <AiFillCheckCircle class='experience_details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle class='experience_details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle class='experience_details-icon' />
              <div>
                <h4>C & C++</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle class='experience_details-icon' />
              <div>
                <h4>Firebase</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle class='experience_details-icon' />
              <div>
                <h4>Docker</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle class='experience_details-icon' />
              <div>
                <h4>Hasura & GraphQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* End of Experience Backend */}

        <div className='experience__hacking'>
          <h3>Ethical Hacking Experience</h3>
          <div className='experience__content'>
              <article className='experience__details'>
                <AiFillCheckCircle class='experience_details-icon' />
                <div>
                  <h4>Kali Linux</h4>
                  <small className='text-light'>Advanced</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle class='experience_details-icon' />
                <div>
                  <h4>Virtual Box & VMWare</h4>
                  <small className='text-light'>Advanced</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle class='experience_details-icon' />
                <div>
                  <h4>Metasploit</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle class='experience_details-icon' />
                <div>
                  <h4>NMAP</h4>
                  <small className='text-light'>Advanced</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle class='experience_details-icon' />
                <div>
                  <h4>Network Security</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle class='experience_details-icon' />
                <div>
                  <h4>Web Application Pentesting</h4>
                  <small className='text-light'>Basic</small>
                </div>
              </article>
            </div>
          </div>

          <div className='experience__hacking'>
            <h3>IoT Experience</h3>
            <div className='experience__content'>
              <article className='experience__details'>
                <AiFillCheckCircle class='experience_details-icon' />
                <div>
                  <h4>Arduino</h4>
                  <small className='text-light'>Advanced</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle class='experience_details-icon' />
                <div>
                  <h4>Raspberry Pi</h4>
                  <small className='text-light'>Advanced</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle class='experience_details-icon' />
                <div>
                  <h4>Micropython</h4>
                  <small className='text-light'>Advanced</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle class='experience_details-icon' />
                <div>
                  <h4>Electronics & Circuits</h4>
                  <small className='text-light'>Advanced</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle class='experience_details-icon' />
                <div>
                  <h4>Sensor Integration</h4>
                  <small className='text-light'>Advanced</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle class='experience_details-icon' />
                <div>
                  <h4>Project Automation</h4>
                  <small className='text-light'>Advanced</small>
                </div>
              </article>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Experience