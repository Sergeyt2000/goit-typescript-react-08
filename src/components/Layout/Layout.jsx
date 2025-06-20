import AppBar from '../AppBar/AppBar.jsx';

export default function Layout({ children }) {
  return (
    <>
      <AppBar />
      {children}
    </>
  );
}
