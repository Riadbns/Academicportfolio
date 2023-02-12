import React from 'react'
import Link from "next/link";
import {
    faGithub,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
    const links = [
        {
          id: 1,
          link: "Home",
        },
        {
          id: 2,
          link: "Projects",
        },
      ];
    const socials = [
        {
          icon: faGithub,
          url: "https://github.com/Riadbns",
        },
        {
          icon: faLinkedin,
          url: "https://www.linkedin.com/in/riad-benosmane",
        },
      ];
  return (
    <div className="w-full h-20 z-10 fixed bg-slate-900 text-slate-200 duration-300 ease-in">
        <div className="flex flex-col justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4 md:flex-row max-[600px]:space-y-10 ">
            <div className="flex space-x-20 " >
                <Link href="/#home">
                <h1 className="text-3xl lg:text-4xl  font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-stone-200 to-yellow-400" onClick={handleClick("Homepage")}>
                    RB
                </h1>
                </Link>
                <div className="flex space-x-10">
                    {
                        socials.map((social) => {
                        return(
                        <a className="cursor-pointer duration-200 ease-out hover:scale-105" href={social.url} key={social.url} rel="noreferrer" target='_blank' >
                        <FontAwesomeIcon icon={social.icon} size="2x" key={social.url}/>
                        </a>
                        );
                        })
                    }
                </div>
            </div>
            <div>
                <div className="flex">
                {
                <a href="#Home" onClick={handleClick("Homepage")} className="max-[600px]:text-sm max-[200px]:text-sm max-[600px]:m-3 ml-10 text-md uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                Home
                </a>
              }
              {
                <a href="#projects" onClick={handleClick("Projects")} className="max-[600px]:text-sm max-[200px]:text-sm max-[600px]:m-3 ml-10 text-md uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                Projects
                </a>
              }
                 </div>
            </div>
        </div>
    </div>
  )
}
export default Navbar;
