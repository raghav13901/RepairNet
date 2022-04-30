import React from 'react';
import { FaRegUser } from "react-icons/fa";
import styles from './main.module.css';
import { RiArrowDropDownFill } from "react-icons/ri";

function Main(props) {
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
                <a class="nav-link" aria-current="page" href="/userDashboard/team">Team</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/"><FaRegUser/>Username<RiArrowDropDownFill/></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <h3 className={styles.in}>INPUT</h3>
      <h3 className={styles.out}>OUTPUT</h3>
      <div className={styles.input}>
          <input className={styles.in_btn} type="file" id="image_input" accept="image/png, image/jpeg, image/jpg"></input>
          <div className={styles.display_input_image}></div>
      </div>
      <div className= {styles.middle}>
      <button class="btn btn-outline-primary btn-lg" type="submit">Colorify</button><br/><br/>
      <button class= "btn btn-outline-primary btn-lg" type="submit">Resolify</button><br/><br/>
      <button class="btn btn-outline-primary btn-lg" type="submit">Do Both</button>
      </div>
      <div className={styles.output}>
          <div className={styles.display_output_image}></div>
          <button class="btn"><i class="fa fa-download"></i> Download</button>

      </div>
      
        </>
    );
}

export default Main;


