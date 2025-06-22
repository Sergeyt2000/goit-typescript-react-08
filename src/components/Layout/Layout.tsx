import AppBar from '../AppBar/AppBar.jsx';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <AppBar />
      {children}
    </>
  );
}
