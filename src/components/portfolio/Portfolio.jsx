import './portfolio.css'
import IMG1 from '../../assets/ronee.png'
import IMG2 from '../../assets/shidex.jpeg'
import IMG3 from '../../assets/portfolio.png'
import IMG4 from '../../assets/watchwithdoge.png'
import IMG5 from '../../assets/3rdeye.png'
import IMG6 from '../../assets/gitammarksscraper.png'
import IMG7 from '../../assets/weather.png'
import IMG8 from '../../assets/coursera.png'
import IMG9 from '../../assets/youtubechannel.png'
import IMG10 from '../../assets/smartbin.png'
import IMG11 from '../../assets/quote.jpg'

const data = [
  {
    id: 1, 
    image: IMG1,
    title: 'RONEE - GUI Security Tool',
    github: 'https://github.com/akvrohitvarma/RONEE/blob/gh-pages/index.md',
  },
  {
    id: 2, 
    image: IMG2,
    title: 'SHIDEX - GUI Steganographer',
    github: 'https://github.com/akvrohitvarma/SHIDEX/tree/master',
  },
  {
    id: 3, 
    image: IMG3,
    title: 'Personal Portfolio',
    github: 'https://www.akvrv.com',
  },
  {
    id: 4, 
    image: IMG4,
    title: 'Watch with Doge',
    github: 'https://watch-with-doge.netlify.app/',
  },
  {
    id: 5, 
    image: IMG5,
    title: '3rd Eye',
    github: 'https://www.instagram.com/reel/CyDcZxCu3VP/',
  },
  {
    id: 6, 
    image: IMG6,
    title: 'University Result Scraper',
    github: 'https://github.com/akvrohitvarma/gitam-marks-scraper',
  },  
  {
    id: 7, 
    image: IMG7,
    title: 'Weather App',
    github: 'https://www.akvrv.com',
  },
  {
    id: 8, 
    image: IMG8,
    title: 'Coursera Certificate Validator',
    github: 'https://github.com/akvrohitvarma/coursera-certificate-validator',
  },
  {
    id: 9, 
    image: IMG9,
    title: 'Youtube Channel',
    github: 'https://www.youtube.com/@circuitjet3609/',
  },
  {
    id: 10, 
    image: IMG10,
    title: 'Smart Bin for Data Analysis',
    github: 'https://www.youtube.com/watch?v=-OQVhKR5ieQ',
  },
  {
    id: 11, 
    image: IMG11,
    title: 'And Many more to add',
  },
  // {
  //   id: 12, 
  //   image: IMG9,
  //   title: 'To-Do List with Angular',
  //   github: 'https://github.com/Mardoqueu/todo-list-angular',
  //   demo: 'https://todo-list-angular-kz9o.vercel.app/',
  // },
  // {
  //   id: 13, 
  //   image: IMG8,
  //   title: 'Sistema de ordens de serviço (REST APIs)',
  //   github: 'https://github.com/Mardoqueu/os-api',
  //   demo: 'https://os-api.herokuapp.com/',
  // },
  // {
  //   id: 14, 
  //   image: IMG9,
  //   title: 'Angular Shopping',
  //   github: 'https://github.com/Mardoqueu/shopping-angular',
  //   demo: 'https://shoppingangular.vercel.app/products',
  // },  
  // {
  //   id: 15, 
  //   image: IMG10,
  //   title: 'Angular E-commerce V2',
  //   github: 'https://github.com/Mardoqueu/ecommerce-angular',
  //   demo: 'https://ecommerce-angular-lju81yguv-mardoqueu.vercel.app/',
  // }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
          {
            data.map(({id, image, title, github}) =>{
              return(
            <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
            <img src={image} alt={title}></img>
            </div>
                <h3 className='title'>{title}</h3>
                <div className='portfolio__item-cta'>
                <a href={github} className='btn btn-primary link' target='_blank'>Link</a>
                {/* <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
                </div>
          </article>
              )
            })
          }
      </div>
    </section>
  )
}

export default Portfolio