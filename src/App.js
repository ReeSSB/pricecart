import "./App.css";
import Card from "./Card.js";
// import { Button } from "react-bootstrap";
// import { useState } from "react";
function App() {

  let free = {
    title:"FREE",
    price:"0",
    user:"Single User",
    userEnabler: true,
    storage:"5 GB Storage",
    storageEnabler: true,
    publicProjects:"Unlimited Public Projects",
    publicProjectsEnabler: true,
    communityAccess:"Community Access",
    communityAccessEnabler: true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler: false,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler: false,
    subdomain:"Free Subdomain",
    subdomainEnabler: false,
    reports:"Monthly Status Reports",
    reportsEnabler: false
  };
  let plus = {
    title:"PLUS",
    price:"9",
    user:"5 Users",
    userEnabler: true,
    storage:"50 GB Storage",
    storageEnabler: true,
    publicProjects:"Unlimited Public Projects",
    publicProjectsEnabler: true,
    communityAccess:"Community Access",
    communityAccessEnabler: true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler: true,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler: true,
    subdomain:"Free Subdomain",
    subdomainEnabler: true,
    reports:"Monthly Status Reports",
    reportsEnabler: false
  };
  let pro = {
    title:"PRO",
    price:"49",
    user:"Unlimited Users",
    userEnabler: true,
    storage:"150 GB Storage",
    storageEnabler: true,
    publicProjects:"Unlimited Public Projects",
    publicProjectsEnabler: true,
    communityAccess:"Community Access",
    communityAccessEnabler: true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler: true,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler: true,
    subdomainPrefix:"Unlimited",
    subdomain:"Free Subdomain",
    subdomainEnabler: true,
    reports:"Monthly Status Reports",
    reportsEnabler: true
  };



  return (
    <>
      <section class="pricing py-5">
        <div class="container">
          <div class="row">
            <Card type={free}/>
            <Card type={plus}/>
            <Card type={pro}/>         
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
