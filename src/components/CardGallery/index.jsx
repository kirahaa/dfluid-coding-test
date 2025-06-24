import {useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';

import {landmarkData} from "../../datas/landmark.js";
import {CONTINENTS, YEARANGE} from "../../constants/filters.js";

import LandmarkCard from "./LandmarkCard.jsx";

import styles from './CardGallery.module.scss';

const CardGallery = () => {
  const [continentFilter, setContinentFilter] = useState(CONTINENTS.ALL);
  const [yearFilter, setYearFilter] = useState(YEARANGE[YEARANGE.length - 1]);

  const filteredData = landmarkData.filter(card => {
    const continentMatch = continentFilter === CONTINENTS.ALL || card.continent === continentFilter;
    const yearMatch = card.year <= yearFilter.end;
    return continentMatch && yearMatch;
  });

  return (
    <section className={styles.section}>
      <h2>Duis tincidunt ut ligula vitae mollis.</h2>
      <div>
        <div className={styles.tabContainer}>
          <div className={styles.continentTab}>
            {Object.values(CONTINENTS).map(continent => (
              <button
                key={continent}
                onClick={() => setContinentFilter(continent)}
                className={`${styles.tab} ${continentFilter === continent ? styles.active : ''}`}
              >
                {continent}
              </button>
            ))}
          </div>

          <div className={styles.yearTab} role="radiogroup" aria-label="Year Range">
            {YEARANGE.map(range => (
              <label key={range.end} className={`${styles.tab} ${range.end <= yearFilter.end ? styles.active : ''}`}>
                <input
                  type="radio"
                  name="year"
                  value={range.end}
                  checked={yearFilter.end === range.end}
                  onChange={() => setYearFilter(range)}
                  className={styles.hiddenRadio}
                  />
                {range.end}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.cardContainer}>
          {filteredData.length > 0 ? (
              <Swiper
                key={`${continentFilter}-${yearFilter.start}`}
                className={styles.cardList}
                spaceBetween={40}
                slidesPerView={'auto'}
                effect="fade"
                fadeEffect={{ crossFade: true }}
              >
                {filteredData.map(card => (
                  <SwiperSlide key={card.id} className={styles.swiperSlide}>
                    <LandmarkCard
                      country={card.country}
                      title={card.title}
                      year={card.year}
                      image={card.image}
                      description={card.description}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
          ) : (
            <div className={styles.noResult}>No results found.</div>
          )}
        </div>
      </div>
    </section>
  )
}
export default CardGallery;