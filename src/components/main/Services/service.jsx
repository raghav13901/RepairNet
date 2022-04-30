import React from 'react';
import { FaRegUser } from "react-icons/fa";
import Baby from "../Assets/baby.jpeg";
import Girl from "../Assets/girl.jpg";
import styles from './service.module.css';
import { RiArrowDropDownFill } from "react-icons/ri";

function Service(props) {
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
      <center><h2 className={styles.in}>Services We Provide</h2></center>
      <div className={`${styles.Container}`}>
          <div className={`${styles.Element1}`}>
              <img src={Baby} height={320} width={500} className={`${styles.img1}`}></img>
              <div className={`${styles.para1}`}>
              Based on the AI technology, we train the system to colourize the black and white photos in only a few seconds.No PhotoShop skills required to colourize black and white photos. Upload your old photos and leave the pixel job to our picture colorizer.All uploaded items will be cleared every 24 hours. No photos will be stored and used for other purposes without your permission.
              <br/><br/><button class="btn btn-outline-primary btn-lg" type="submit">Resolify</button>
              </div>   
          </div>
          <div className={`${styles.Element2}`}>
              <img src={Girl} height={320} width={550} className={`${styles.img2}`}></img>
              <div className={`${styles.para2}`}>
              If you found your old photos out-of-focus and motion blurred, then you can use our services for unblurring your photos and making them crystal clear. Based on the AI technology, we train the system to enhance the photos in only a few seconds.No PhotoShop skills required to fix the blurry pictures and convert the low-definition family photo to high-definition.
              <br/><br/><button class="btn btn-outline-primary btn-lg" type="submit">Colorify</button>
              </div>
          </div>
      </div>
      </>
    );
}

export default Service;


