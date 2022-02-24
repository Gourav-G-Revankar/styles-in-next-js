import styles from '../styles/Demo.module.css'
import styleSCSS from '../styles/Demo.module.scss'

function Demo(){
  return(
    <div className={styles.container}>
      <h1 className={styleSCSS.heading}>Demo Heading</h1>
      <p style={{color: 'green'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore nostrum porro rem ullam laborum repellat fuga saepe consequuntur placeat eos repellendus consectetur blanditiis repudiandae iste exercitationem, laudantium ipsa temporibus. Tempora!</p>
      <button className='btn btn-primary'>Start</button>
    </div>
  )
}

export default Demo