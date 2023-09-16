import './App.css';
import React from "react";
import emailIcon from './assets/icons/email.png';
import facebookIcon from './assets/icons/facebook.png';
import githubIcon from './assets/icons/github.png';
import linkedInIcon from './assets/icons/linkedin.png';
import resumeIcon from './assets/icons/resume.png';
import myself from './assets/myself.png';

function App() {
  return (
    <div className="App">
      <header className="App-header py-20 pl-20">
        <div className='flex flex-row'>
          <div className='flex flex-col justify-center ml-12'>
            <div className='flex flex-col text-start'>
              <h1 className="text-5xl text-primaryText font-MontserratSemiBold mb-6">
                Hello World! I'm Carol!
              </h1>
              <h2 className='text-3xl text-primaryText font-MontserratSemiBold mb-3'>
                I am a programmer and a creater 🚀 
              </h2>
              <p className='text-xl text-primaryText font-MontserratMedium mb-3'>
                I work as a full-stack developer specializing in React Native and React.js. with a knack for turning coffee into code and debugging into an art form. I'm just an email away. Reach out and let's chat!
              </p>
            </div>
            <div className='flex flex-row justify-start w-full'>
              <img src={resumeIcon} onClick={() => {window.open('https://drive.google.com/file/d/1RdRATEy3eyS6HXnd7_b5Ok-RtwXBCPQ3/view?usp=sharing', '_blank');}} className='my-3 mr-3 hover:cursor-pointer'/>
              <img src={githubIcon} onClick={() => {window.open('https://github.com/CarolFYGuo', '_blank');}} className='m-3 hover:cursor-pointer'/>
              <img src={linkedInIcon} onClick={() => {window.open('https://www.linkedin.com/in/carol-guo-59229a231/', '_blank');}} className='m-3 hover:cursor-pointer'/>
              <img src={emailIcon} onClick={() => {window.open('https://outlook.live.com/mail/0/deeplink/compose?mailtouri=mailto%3Acarolguounsw%40gmail.com', '_blank');}} className='m-3 hover:cursor-pointer'/>
              <img src={facebookIcon} onClick={() => {window.open('https://www.facebook.com/lilylilylilyguo', '_blank');}} className='m-3 hover:cursor-pointer'/>
            </div>
          </div>
          <img src={myself} className='h-[80vh]'/>
        </div>
      </header>
    </div>
  );
}

export default App;
