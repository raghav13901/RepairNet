import React from "react";
import styles from './home.module.css';
import HomeIcon from '../assets/2.jpg';

function Home(props) {
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
                <a class="nav-link" aria-current="page" href="/">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/login">Login/SignUp</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={styles.imgPos}>
      <p className={styles.txt}>Wanna color old photos?</p>
      <p className={styles.txtcontent}>If you are one of them who is very much irritated from all those highly paid applications available on the Internet and their services like watermark they put in the output then you have landed the best website which can color old black and white photos and it can also change the resolution of the images</p><br/><br/>
      <center><button class="btn btn-outline-dark btn-lg" type="submit">Login</button></center>
      </div>
        <img src={HomeIcon} width="100%" height="735px"/>
    </>
  );
}

export default Home;
