import {useEffect, useState} from 'react';
import buttonIcon from '../../assets/images/icon_enter.png';
import styles from './FullBleed.module.scss';

const UNSPLASH_API = 'https://api.unsplash.com/photos/random?client_id=RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTM';

const FullBleed = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState('');

  const isValidEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (isValidEmail(email)) {
      alert('You\'re successfully subscribed! 🎉');
      setEmail('');
      setIsSubmitted(false);
    }
  };

  const showError = isSubmitted && !isValidEmail(email);

  useEffect(() => {
    const savedImage = localStorage.getItem('backgroundImage');
    if (savedImage) {
      setBackgroundImage(savedImage);
    } else {
      fetch(UNSPLASH_API)
        .then(res => res.json())
        .then(data => {
          const imageUrl = data.urls.full;
          setBackgroundImage(imageUrl);
          localStorage.setItem('backgroundImage', imageUrl);
        })
        .catch(err => console.error(err));
    }
  }, [])

  return (
    <section
      className={styles.section}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay}>
        <h3 className={styles.title}>
          Sed ut perspiciatis unde omnis
        </h3>
        <p className={styles.description}>
          There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form,
          by injected humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum,
          you need to be sure there isn't anything embarrassing hidden in the middle of text.
          All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
        </p>
        <p className={styles.description2}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
        </p>
        <div className={styles.subscribe}>
          <h4>Subscribe to our newsletter</h4>
          <div className={styles.form}>
            <form noValidate onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={showError ? styles.invalid : (isValidEmail(email) ? styles.valid : '')}
              />
              <button
                type="submit"
                className={showError ? styles.invalid : ''}
              >
                <img src={buttonIcon} alt="Button Icon"/>
              </button>
            </form>
            {showError && (<p className={styles.errorTxt}>Please enter a valid email!</p>)}
          </div>
        </div>
      </div>
    </section>
  )
}
export default FullBleed;