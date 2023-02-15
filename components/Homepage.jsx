import React from 'react'
import styles from '../styles/homepage.module.css'
import Typewriter from "typewriter-effect"

const Homepage = () => {
  return (
    <div  className={`h-screen w-full  bg-slate-900 ${styles.anim}`}  id='Homepage'>
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24  flex flex-col md:flex-row justify-center items-center">  

          <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-center space-y-20 max-[770px]:items-center">
                  <div className='flex flex-row'>
                  <h1 className={styles.prenom}>Riad.</h1> 
                  <h1 className={styles.name} data-text="Benosmane">Benosmane</h1>
                  
                  </div> 
                  <div className={styles.text}>
                      <Typewriter
                        options={{
                          autoStart:true,
                          loop:true,
                          delay:100,
                          strings:[
                            "Computer programming student",
                            "Welcome to my portfolio, thank you for visiting!",
                            "Hope you find something you like!",
                          ],
                        }}
                      />
                  </div>
           </div>

          <div className="m-20">
              <div className={styles.contain}>
                <div className={styles.ring}></div>
                <div className={styles.ring}></div>
                <div className={styles.ring}></div>         
              </div>
          </div>

      </div>
       <div className={styles.box}>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>                  

    </div>
  )
}

export default Homepage