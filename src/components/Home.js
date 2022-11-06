import React, { useContext } from 'react'
import { userAuthContext } from "../Context/userAuthContext";




const Home = () => {
    const { username } =
useContext(userAuthContext);

  return (
    <section className="first-section">
        <div className='first-section-left'>
            <h1>
               Welcome Back {username} join our happy customers download our app
            </h1>
            <p>
                Give all your customers global freedom with just a tap of their cards
            </p>
            <img src='' alt='download-img' className='doenload-img'></img>

        </div>
        <div className='first-section-right'>
            <img src='' alt='logo' className='bg-img'></img>

        </div>

    </section>

    
    //     <div className="first-section-right">
    //         <img src="img/image1.jpeg" alt="logo" className="bg-img"> 
    //     </div>
    // </section>
  )
}

export default Home