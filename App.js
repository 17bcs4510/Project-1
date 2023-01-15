import React from 'react';
import './App.css';
//Importing bootstrap and other modules
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component {
 
  render() {
    const handleClick=()=>{
      alert('button click catched');
    }

    const handleShoot=()=>{
      alert('button click catched');
    }

   
    return (
     
      <div className="maincontainer">
       <section>
          <div class="container py-5">

            
            <header class="text-center mb-5 text-white">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <h1 className='title'><b>PRICING SECTION</b></h1>
                  {/* <p>Easily create a classy pricing table in Bootstrap 4.<br /> <a href="#" class="text-reset">Reactjs Bootstrap snippet by Jassa</a></p> */}
                </div>
              </div>
              <div class="text-style">
                <h3 className='head'>Membership</h3>
                <p className='para-graph'><b>From Punch Pass to monthly or Annual</b></p>
                <p className='para'>At Gym Base we offer a wide range of membership with options to suit every budget. 
                  Everything from one day pass, punch pass to monthly or annual prepaid memberships.
                   Whats more, we wont lie you into a long term contract giving you greater flexibility.</p>
                
              </div>
            </header>
           



            <div class="row text-center align-items-end">
             
              <div class="col-lg-4 mb-5 mb-lg-0">
                <div class="bg-white p-5 rounded-lg shadow">
                  <h1 class="h6 text-uppercase font-weight-bold mb-4">Day pass</h1>
                  <h2 class="h1 font-weight-bold">$20<span class="text-small font-weight-normal ml-2">/ Pass</span></h2>

                  <div class="custom-separator my-4 mx-auto bg-primary"></div>

                  <ul class="list-unstyled my-5 text-small text-left">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> <li>1 Day Pass</li></li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> <li>Free Gym Access</li></li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> <li>24 Hours Access</li></li>
                    {/* <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <del>Nam libero tempore</del>
                    </li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <del>Sed ut perspiciatis</del>
                    </li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <del>Sed ut perspiciatis</del>
                    </li> */}
                  </ul>
                  {/* <a href="#" class="btn btn-primary btn-block p-2 shadow rounded-pill">Get Started</a> */}
                  <button onClick={handleClick}>Get started</button>
                </div>
              </div>
             
              <div class="col-lg-4 mb-5 mb-lg-0">
                <div class="bg-white p-5 rounded-lg shadow">
                  <h1 class="h6 text-uppercase font-weight-bold mb-4">Month to Month</h1>
                  <h2 class="h1 font-weight-bold">$90<span class="text-small font-weight-normal ml-2">/ month</span></h2>

                  <div class="custom-separator my-4 mx-auto bg-primary"></div>

                  <ul class="list-unstyled my-5 text-small text-left font-weight-normal">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i><li>$99 joining fee</li></li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i><li>No contact</li></li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> <li>Free gym Access</li></li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> <li>1 Group Class Included</li> </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> <li>24 Hour Access</li></li>
                    {/* <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <del>Sed ut perspiciatis</del>
                    </li> */}
                  </ul>
                  {/* <a href="#" class="btn btn-primary btn-block p-2 shadow rounded-pill">Get Started </a> */}
                  <button onClick={handleShoot}>Get started</button>
                </div>
              </div>
             
              {/* <div class="col-lg-4">
                <div class="bg-white p-5 rounded-lg shadow"> */}
                  {/* <h1 class="h6 text-uppercase font-weight-bold mb-4">Enterprise</h1>
                  <h2 class="h1 font-weight-bold">$899<span class="text-small font-weight-normal ml-2">/ month</span></h2>

                  <div class="custom-separator my-4 mx-auto bg-primary"></div>

                  <ul class="list-unstyled my-5 text-small text-left font-weight-normal">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Lorem ipsum dolor sit amet</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> At vero eos et accusamus</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Nam libero tempore</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis</li>
                  </ul> */}
                  {/* <a href="#" class="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</a> */}
                {/* </div>
                
              </div> */}
             
             
            </div>
          </div>
        </section>
      </div>
     
      
           )
     };
  }

export default Home;