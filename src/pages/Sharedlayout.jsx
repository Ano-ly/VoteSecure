import { Outlet } from 'react-router-dom';
import Footer from '../components/global/Footer'
const Sharedlayout = () => {
  return (
    <div>
      <main>
        <Outlet /> {/* This renders the matched child route */}
      </main>
      <Footer/>
    </div>
  );
};

export default Sharedlayout;
