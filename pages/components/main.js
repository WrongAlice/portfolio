import Card from './card'
import styles from '../../styles/Home.module.css'
import Footer from '../components/footer'
import Image from 'next/image'


function Main() {
    
  return (
    <div className="App">
    
       <div className='Card-container'>
       <Card />
      
   <Footer />
       
       </div>
       
      
       
    </div>
  );
}

export default Main;
