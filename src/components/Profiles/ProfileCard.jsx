import styles from './ProfileCard.module.scss';

const ProfileCard = ({image, name, description, onLearnMore }) => {
  return (
    <div>
      <div className={styles.imageContainer} style={{ backgroundImage: `url(${image})` }}></div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <a className={styles.learnMore} href="#" onClick={onLearnMore}>LEARN MORE</a>
    </div>
  )
}
export default ProfileCard;