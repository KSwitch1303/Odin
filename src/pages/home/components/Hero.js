import HomeSearch from "./HomeSearch";
const HomeHero = () => {
  return ( 
    <div className="homeHero flex h-screen w-full mt-10 sm:px-14">
      <div className="left w-full text-gray-700">
        <div className="leftOne">
          <ul>
            <li>MEN</li>
            <li>WOMEN</li>
            <li>KIDS</li>
          </ul>
          <HomeSearch />
        </div>
        <div className="leftTwo mt-20 sm:flex">
          <div className="leftt">
            <h1 className="text-5xl text-black sm:text-6xl font-bold">NEW <br />COLLECTION</h1>
            <h3 className="text-xl sm:text-3xl">Summer <br /> 2024</h3>
          </div>
          <div className="right flex gap-10 sm:ml-10">
            <img src="/cloth1.png" alt="" className="w-40 sm:w-full" />
            <img src="/cloth2.png" alt="" className="w-40 sm:w-full" />
          </div>
        </div>        
      </div>
    </div>
  );
}
 
export default HomeHero;