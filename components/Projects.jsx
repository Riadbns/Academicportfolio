import React from "react";
import styles from "../styles/project.module.css";

const Projects = () => {
  return (
    <div
      id='Projects'
      className=" w-full bg-slate-900 items-center  content-center place-content-center"
    >
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left items-center justify-center content-center">
        <div className={styles.name} >Projects</div>
        <div className={styles.container}>
          <div className={`${styles.card} ${styles.card1}`}>
            {/* <div className={styles.img1}></div>  */}
            <div className={styles.overlay}>
              <div className={styles.items}></div>
                <p className={`${styles.items} ${styles.head}`}>Arcade Game</p>
             
              <p className={`${styles.items} ${styles.text}`}>Developing an arcade game using JS, HTML and CSS, accessible via web browser, players explore a dungeon, find treasures, avoid traps, accumulate points and try not to run out of energy.</p>
              
              <div className={`${styles.items} ${styles.cart}`}>
                <div className='grow w-full flex flex-row justify-evenly'>
                  <button type="button" className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">
                  Live Preview
                    </button>                     
                  <button type="button" className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">
                  code source
                    </button>                     
              </div>
              </div>
            </div>
          </div>

          <div className={`${styles.card} ${styles.card2}`}>
          {/* <div className={styles.img2}></div>  */}
            <div className={styles.overlay}>
              <div className={styles.items}></div>
                <p className={`${styles.items} ${styles.head}`}>IT training center</p>
             
              <p className={`${styles.items} ${styles.text}`}>developed using Js, HTML, CSS, Sqlite bdd, Node.Js, Handlebars that allows users to authenticate and enroll in courses, an admin section to view activities, subscribed users and add activities.</p>
              
              <div className={`${styles.items} ${styles.cart}`}>
                <div className='grow w-full flex flex-row justify-evenly '>
                  <button type="button" className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">
                  Live Preview
                    </button>                     
                  <button type="button" className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">
                  code source
                    </button>                     
              </div>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
