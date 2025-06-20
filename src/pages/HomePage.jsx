import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.homePage}>
      <h1 className={css.homePageTitle}>Welcome to the Phonebook</h1>
      <p className={css.homePageText}>This is your personal space to manage contacts.</p>
      <p className={css.homePageText}>Please register or log in to get started.</p>
    </div>
  );
}