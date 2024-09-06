'use client'
import { useState, useEffect } from "react";
import styles from "./SplashScreen.module.css";

export const SplashScreen = () => {
 


  return (
    <div className={styles.splashScreen}>
      <div className={styles.brandName}>
        <h1  >MOYO</h1>
      </div>
  
        <div className={styles.tagline}>
          <h2  >Everyone deserves the best</h2>
        </div>
    
    </div>
  );
};

