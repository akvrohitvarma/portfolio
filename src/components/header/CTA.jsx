import RESUME from '../../assets/AKVRV_RESUME.docx'

const CTA = () => {
  return (
    <div className='cta'>        
        <a href={RESUME} download className='btn'>Download Resume</a>
        <a href='#contact' className='btn btn-primary'>Contact</a>
    </div>
  )
}

export default CTA