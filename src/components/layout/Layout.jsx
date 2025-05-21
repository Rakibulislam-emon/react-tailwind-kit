import Header from './Header';
import Footer from './Footer';
import AnnouncementBar from './AnnouncementBar';

export default function Layout({ children }) {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
