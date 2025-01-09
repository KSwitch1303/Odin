import './style.css'
import HomeNav from "./components/Navbar"
import HomeHero from './components/Hero';
const Home = () => {
  return ( 
    <div className="homePage">
      <HomeNav />
      <HomeHero />
    </div>
   );
}
 
export default Home;