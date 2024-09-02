import './services.css'
import { BsCheck2 } from 'react-icons/bs'

const Services = () => {
    return (
        <section id='services'>
            <h5>What do I offer?</h5>
            <h2>Services</h2>
            <div className='container service__container'>
                <article className='service'>
                    <div className='service__head'>
                        <h3>Qualifications</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                            <p><BsCheck2 className='service__list-icon' /> Graduated in Computer Science Engineering with specialization in Cybersecurity</p>
                        </li>
                    </ul>
                    <ul className='service_list'>
                        <li>
                            <p><BsCheck2 className='service__list-icon' /> CEH V12 Certified</p>
                        </li>
                    </ul>
                    <ul className='service_list'>
                        <li>
                            <p><BsCheck2 className='service__list-icon' /> Experience in Web Development </p>
                        </li>
                    </ul>
                    <ul className='service_list'>
                        <li>
                            <p><BsCheck2 className='service__list-icon' /> Experience in designing solutions for IoT</p>
                        </li>
                    </ul>
                    <ul className='service_list'>
                        <li>
                            <p><BsCheck2 className='service__list-icon' /> Data Structures, Concurrency & Parallelism </p>
                        </li>
                    </ul>
                    <ul className='service_list'>
                        <li>
                            <p><BsCheck2 className='service__list-icon' /> DBMS, AWS S3 and MongoDB </p>
                        </li>
                    </ul>
                    <ul className='service_list'>
                        <li>
                            <p><BsCheck2 className='service__list-icon' /> Cryptography & Network Security </p>
                        </li>
                    </ul>
                </article>

                {/*End of this column*/}
                <article className='service'>
                    <div className='service__head'>
                        <h3>How can I collaborate? </h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                            <p><BsCheck2 className='service__list-icon' /> Help develop new features according to the product/customer roadmap </p></li>
                    </ul>
                    <ul className='service_list'>
                        <li>
                            <p><BsCheck2 className='service__list-icon' /> Find solutions to system problems </p></li>
                    </ul>
                    <ul className='service_list'>
                        <li>
                            <p><BsCheck2 className='service__list-icon' /> Develop and maintain systems</p></li>
                    </ul>
                    <ul className='service_list'>
                        <li>
                            <p><BsCheck2 className='service__list-icon' /> Vulnerability Assessment with automation</p></li>
                    </ul>
                    <ul className='service_list'>
                        <li>
                            <p><BsCheck2 className='service__list-icon' /> Quality Analysis and Debugging</p></li>
                    </ul>
                    <ul className='service_list'>
                        <li>
                            <p><BsCheck2 className='service__list-icon' /> Optimization and Scaling </p></li>
                    </ul>
                    <ul className='service_list'>
                        <li>
                            <p><BsCheck2 className='service__list-icon' /> Backend System Engineering</p></li>
                    </ul>
                    <ul className='service_list'>
                        <li>
                            <p><BsCheck2 className='service__list-icon' /> Mitigating Attack vectors and Safeguarding Systems</p></li>
                    </ul>
                </article>
                {/*End of this column*/}

                <article className='service'>
                    <div className='service__head'>
                        <h3>Additionally</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                            <p><BsCheck2 className='service__list-icon' />  Strong communication skills with the ability to discuss any issue with a wide variety of individuals and groups</p></li>
                    </ul>
                    <ul className='service_list'>
                        <li>
                            <p><BsCheck2 className='service__list-icon' /> Ability to remain professional in stressful situations/disputes</p></li>
                    </ul>
                    <ul className='service_list'>
                        <li>
                            <p><BsCheck2 className='service__list-icon' /> Experienced in working with a team, acting as a Lead</p></li>
                    </ul>
                    <ul className='service_list'>
                        <li>
                            <p><BsCheck2 className='service__list-icon' /> Ability to think Practically and apply Creative Intelligence</p></li>
                    </ul>
                    <ul className='service_list'>
                        <li>
                            <p><BsCheck2 className='service__list-icon' /> Strong Co-ordination and Coaching skills </p></li>
                    </ul>
                    <ul className='service_list'>
                        <li>
                            <p><BsCheck2 className='service__list-icon' /> Excellent discipline, focus and attention to detail.</p></li>
                    </ul>

                </article>
                {/*End of this column*/}

            </div>


        </section>
    )
}

export default Services