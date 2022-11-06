import React, { useContext } from 'react'
import { userAuthContext } from "../Context/userAuthContext";
import display from '../images/people.jpeg'
import download from '../images/download.jpeg'
import ball from '../images/ball.png'
import phonie from '../images/phonie.jpeg'




const Home = () => {
    const { username } =
useContext(userAuthContext);

  return (
    <section >
        <section className="first-section">
        <div className='first-section-left'>
            <h1>
               Welcome Back <span> {username}</span> <br/> Join <span>our</span> happy customers download our <span> app!!</span>
            </h1>
            <p>
                Give all your customers global freedom with just a tap of their cards
            </p>
            <img src={download} alt='download-img' className='download-img'></img>

        </div>
        <div className='first-section-right'>
            <img src={display} alt='logo' className='bg-img'></img>

        </div>
        </section>

        <section className='second-section'>
            <div className='second-section-left'>
                <img src={ball} alt='ball-img' className='ball-img'></img>

            </div>
            <div className='second-section-right'>
                <h1> We make savings easy,<br/> we have a lock savings<br/> feature</h1>
                <p>The best customer experience you are going to have, features <br/>that suit your business savings plan and savepro is also for all<br/> age group</p>
                <button className='second-section-btn'> Learn more</button>

            </div>

        </section>
        <section className='third-section'>
            <div className='third-section-left'>
                <h1>How to use <span>Savepro</span></h1>
                <ul>
                <li>Go to google playstore or apple store</li>
                   <li>Download savepro</li>
                   <li>Register your datails</li>
                   <li>And thats it!!!</li>
                </ul>
                <img src={download} alt='download-img' className='download-img'></img>

            </div>
            <div className='third-section-right'>
                <img src={phonie} alt='phone-img' className='phone-img'></img>

            </div>

        </section>

     
      
       

    </section>

 
  )
}

export default Home