import React from 'react';
import styles from './style';
import { Navbar,Hero , Stat,Business,Billing ,CardDeal,Client ,CTA ,Footer, Testimonials} from './components';

const App = () => 
   (
    <div className=' bg-primary w-full overflow-hidden'>
         <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}> 
            <Navbar/> 
          </div>
        </div>

      <div className={`bg-primary ${styles.flexStart }`}>
      <div className={`${styles.boxWidth}`}>
            <Hero/>
      </div>
   </div>

   <div className={`bg-primary  ${styles.paddingX} ${styles.flexStart }`}>
      <div className={`${styles.boxWidth}`}>
            <Stat/>
            <Business/>
            <Billing/> 
            <CardDeal/> 
            <Testimonials/> 
            <Client/> 
            <CTA/> 
            <Footer/> 
      </div>
   </div>

    </div>
  )


export default App