import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiDiscordLine} from 'react-icons/ri'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react'

const Contact = () => {
  const form = useRef();

  return (
    <section id='contact'>
      <h5>Let&apos;s Talk</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
          <div className='contact__options'>
            <article className='contact__option'>
              <HiOutlineMail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>rohitvarmaalluri009@gmail.com</h5>
              <a href='mailto:rohitvarmaalluri009@gmail.com' target="_blank">Send a mail</a>
            </article>

            <article className='contact__option'>
              <RiDiscordLine className='contact__option-icon'/>
              <h4>Discord</h4>
              <h5>REMIXXX</h5>
              <a href='https://discordapp.com/users/361882811344486401' target="_blank">Message Me</a>
            </article>

            <article className='contact__option'>
              <AiOutlineWhatsApp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+1 (571) 310-9772</h5>
              <a href='https://api.whatsapp.com/send?phone=15713109772' target="_blank">Drop a Text Message!</a>
            </article>
          </div>
          {/* END OF CONTACT OPTIONS*/}
          <form ref={form}> {/*onSubmit={sendEmail}> */}
            <input type='text' name='name' placeholder='Name' required></input>
            <input type='email' name='email' placeholder='E-mail' required></input>
            <textarea name='message' rows='7' placeholder='Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Mail</button>
          </form>
      </div>
    </section>
  )
}

export default Contact