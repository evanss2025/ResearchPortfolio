import "../output.css";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

export default function About() {

  return (
    <div className="w-full h-full justify-center items-center">

      <div className="flex gap-4 min-h-[400px] max-h=[60vh] justify-center items-center">
        <div id="container" className="flex-col sm:flex-row shadow-md h-full w-full sm:w-3/4 flex items-center justify-center rounded-lg">
          <div id="image" className="m-4 sm:w-2/5">
            <img src="public/linkedin.jpg" className="rounded-lg w-full"></img>
          </div>
          <div id="aboutText" className="m-8 w-3/4 text-sm sm:text-md">
            <h1 className="">Sophia is a high school student passionate about STEM and connecting others through computer science. Sophia has taken many STEM courses, including AP CSP, AP Environmental Science, and AP Statistics. Sophia loves to get involved, she is on the teen advisory board at Techgirlz, a nonprofit that has taught coding to over 40,000 middle school girls in 25 countries. Sophia has attended many hackathons, winning prizes such as Best Female Hack, Best Beginner Hack, and Overall 2nd Place. Sophia applied what she learned at hackathons to make her hackathon, NightHacks, which had over 150 participants and raised $1,500 from sponsors. Sophia has continued to be the co-founder of a Girls Who Code club at her school and is currently learning Python while conducting an AI and bio-inspired algorithm research project. She hopes to continue to learn about AI and computer science in college and minor in game design.</h1>
          </div>
  
        </div>

      </div>
    </div>
  );
}
