import styles from './Volume.module.css'
import React from 'react'
import volume from '../../../img/volume.png'
const Volume = (props) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.volume} src={volume} alt="volume" />
      <input
        type='range'
        min='1'
        max='100'
        defaultValue='80'
        className={styles.slider}
        id='myRange'
        onChange={props.onChange}
        style={{
          background: `linear-gradient(90deg, var(--volumeUsed) ${
            props.value * 100
          }%, var(--volumeLeft) ${props.value * 100}%)`
        }}
      />
    </div>
  )
}

export default Volume
