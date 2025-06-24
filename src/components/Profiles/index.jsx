import React, { useMemo } from 'react';
import ProfileCard from './ProfileCard.jsx';
import {profileData} from "../../datas/profile.js";
import styles from './Profiles.module.scss';

const Profiles = () => {

  const clickLearnMore = (e) => {
    e.preventDefault();
  }

  function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  const shuffledProfiles = useMemo(() => shuffleArray(profileData), []);

  return (
    <section className={styles.section}>
      <h1>Snap photos and share like<br/>never before</h1>
      <div className={styles.profiles}>
        {shuffledProfiles.map(({ image, name, description }, idx) => (
          <ProfileCard
            key={idx}
            image={image}
            name={name}
            description={description}
            onLearnMore={clickLearnMore}
          />
        ))}
      </div>
    </section>
  )
}
export default Profiles;