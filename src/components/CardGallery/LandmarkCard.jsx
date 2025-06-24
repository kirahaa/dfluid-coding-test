import styles from './LandmarkCard.module.scss';

const LandmarkCard = ({ country, title, year, description, image}) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h4 className={styles.title}>{country}, {title}</h4>
        <span className={styles.year}>{year}</span>
      </div>
      <div className={styles.image} style={{ backgroundImage: `url(${image})` }}></div>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
export default LandmarkCard;