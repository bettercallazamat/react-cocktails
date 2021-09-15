import { Link } from 'react-router-dom';
import Nav from '../containers/Nav';
import img404 from '../assets/images/404.jpeg';
import '../assets/styles/Page404.css';

const Page404 = () => (
  <>
    <Nav />
    <div className="sectin404">
      <img src={img404} alt="error" />
      <h3>Oops! Spilled Glass.</h3>
      <p>Can’t find what you want? Let us help you!</p>
      <Link to="/" title="Home Page">
        TAKE ME HOME
      </Link>
    </div>
  </>
);

export default Page404;
