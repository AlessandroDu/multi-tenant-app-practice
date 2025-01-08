import tenant1Styles from '../styles/tenant1.module.css';
import tenant2Styles from '../styles/tenant2.module.css';

const tenant = 'tenant1'; // Change to 'tenant2' to test

export default function Home() {
  const styles = tenant === 'tenant1' ? tenant1Styles : tenant2Styles;

  return (
    <div className={styles.container}>
      <h1>Welcome to {tenant}</h1>
      <p>This is a demo for multi-tenant theming!</p>
    </div>
  );
}