import React from 'react'
import profile from "../passport.jpeg"

const Body = () => {
  return (
    <div className='container-fluid'>
        <div className='text modal-body row-fluid' id='about'>
          <h2 className='about-me'>About me</h2>
            <hr class="w-50 mx-auto pb-5"></hr>
          <div className='row'>
            <div class="col-lg-6">
              <img src={profile} className='img-row-fluid rounded-circle' alt=''/>
            </div>

            <div class="col-lg-6">
              <p className=''>I am an ICT graduate with experience in both front end and backend software development. My passion for software development s driven by the urge to create solutions to our day to day problems.
              Also, I take pride in helping customers turn their ideas into reality.</p>
            </div>
            </div>
              
        </div>
    </div>
  )
}

export default Body;