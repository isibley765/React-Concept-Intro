import React, { Component } from 'react';
import Camera from 'react-camera';
import styles from './Cam_View.css'


export default class CameraView extends Component {

  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
  }

  takePicture() {   // I believe this only works on Macs, maybe Ubuntu. Or possibly just Android
    this.camera.capture()
    .then(blob => {
      this.img.src = URL.createObjectURL(blob);
      this.img.onload = () => { URL.revokeObjectURL(this.src); }
    })
  }

  render() {
    return (
      <div className={styles.container}>
        <Camera
          style={{
              position: 'relative',
              width: 800
          }}
          ref={(cam) => {
            this.camera = cam;
          }}
        >
        </Camera>
        <img
          className={styles.captureImage}
          ref={(img) => {
            this.img = img;
          }}
        />
      </div>
    );
  }
}
