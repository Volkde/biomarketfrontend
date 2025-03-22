import { Link } from 'react-router-dom';
import { styles } from './styles';

const HeroSection = () => {

  return (
    <div style={styles.hero}>
      <h1 style={styles.title}></h1>
      <p style={styles.subtitle}>
        
      </p>
      <Link to="/products" style={styles.shopButton}>Shop Now</Link>
    </div>
  );
};

export default HeroSection;