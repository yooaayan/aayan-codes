 import Link from 'next/link';
import React from 'react'
//nav
//aside
//header
//footer
 
 const HomePage = () => {
   return (
     <div>
       <ul> 
       <h1>
                     Information About Apple Latest Iphone </h1>
                     <p> To find the latest features and information about the latest iphone click on the about page</p>
                 
           

            <li>
                    
                    <Link href ="/About" target ="_blank">About</Link> </li>
                <li> 
                  <p> For booking of the iphone click on the contact us Page</p></li>
                  
                  <li>
                    <Link href="./Contacts"> Contact-us</Link>
                  </li>

                  <p> there is a web-development page linked in the service page where there is a detailed information about IOS </p>

                    <li>
                         <Link href = "/service" target = "_blank"> Service</Link></li></ul>
            
               
                 
                 </div>
   )
 }
 
 export default HomePage;

 //}

 //import Header from "./components/header/header";

 //const HomePage =() => {
   // return(
     //   <div> <a href =" /About"> this is a about page</a>
       //   <Header taimoor ="Hello Taimoor" abc= {25} isboolean={true}></Header>
         //   <h1 className = "green"> HomePage</h1>
           // <h2 className="green"> This is a homepage</h2>
        //</div>
    //)
 //}
 //export default HomePage;

 //when a prop is passed in a component it means u want it to pass a  dyanmic data
        

 
           










 

//export default Homepage


