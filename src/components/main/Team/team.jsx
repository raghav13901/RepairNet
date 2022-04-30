import React from 'react';
import { FaRegUser } from "react-icons/fa";
import Side from './flwer.png';
import Adarsh from './Assets/Adarsh.png';
import Ankit from './Assets/Ankit.png';
import Raghav from './Assets/Raghav.png';
import Sashrika from './Assets/Sashrika.png';
import Devansh from './Assets/Devansh.png';
import Rishikesh from './Assets/Rishikesh.png';
import styles from './team.module.css';
import { RiArrowDropDownFill } from "react-icons/ri";

function Team(props) {
    return (
        <>
         <nav class={`navbar navbar-expand-lg navbar-transparent bg-transparent ${styles.navbar}`}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">RepairNet</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/userDashboard/services">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/userDashBoard/team">Team</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/"><FaRegUser/>Username<RiArrowDropDownFill/></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <h3 className={styles.in}>Meet the Team</h3>
      <img src={Side} className={styles.img1}></img>
      <div class={`container ${styles.divel}`}>
      <div class={`row ${styles.rows}`}>
        <div class="col-4">
          <div class={`card ${styles.element}`}>
              <center>
              <img src={Rishikesh} height={300} width={300}>
              </img>
              <br/>
              <br/>
              <h5>Rishikesh Sivakumar</h5>
              <h6>3rd Year CSE, SRMIST</h6>
              </center>        
          </div>
        </div>
        <div class="col-4">
          <div class={`card ${styles.element}`}>
          <center>
              <img src={Sashrika} height={300} width={300}>
              </img>
              <br/>
              <br/>
              <h5>Sashrika Surya</h5>
              <h6>3rd Year CSE-BD, SRMIST</h6>
              </center>
          </div>
        </div>
        <div class="col-4">
          <div class={`card ${styles.element}`}>
          <center>
          <img src={Raghav} height={300} width={300}>
              </img>
              <br/>
              <br/>
              <h5>Raghav Khatoria</h5>
              <h6>3rd Year CSE-AIML, SRMIST</h6>
              </center>
          </div>
        </div>
      </div>
      <div class={`row ${styles.rows}`}>
        <div class="col-4">
          <div class={`card ${styles.element}`}>
          <center>
              <img src={Devansh} height={300} width={300}>
              </img>
              <br/>
              <br/>
              <h5>Devansh Pratap Singh</h5>
              <h6>3rd Year CSE, SRMIST</h6>
              </center>
          </div>
        </div>
        <div class="col-4">
          <div class={`card ${styles.element}`}>
          <center>
              <img src={Adarsh} height={300} width={300}>
              </img>
              <br/>
              <br/>
              <h5>Adarsh Srivastava</h5>
              <h6>3rd Year CSE-AIML, SRMIST</h6>
              </center>
          </div>
        </div>
        <div class="col-4">
          <div class={`card ${styles.element}`}>
          <center>
              <img src={Ankit} height={300} width={300}>
              </img>
              <br/>
              <br/>
              <h5>Ankit Mathur</h5>
              <h6>3rd Year CSE-AIML, SRMIST</h6>
              </center>
          </div>
        </div>
      </div>
    </div>    
        </>
    );
}

export default Team;


