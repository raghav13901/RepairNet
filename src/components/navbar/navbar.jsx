import React from 'react';
import styles from './navbar.module.css';

function Navbar(props) {
    return (
        <nav class={`navbar navbar-expand-lg navbar-transparent bg-transparent ${styles.navbar}`}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">RepairNet</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;