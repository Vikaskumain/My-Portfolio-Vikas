import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.png";
import MoviesApp from "../assets/portfolio/MoviesApp.jpg"
import navbar from "../assets/portfolio/navbar.webp";
import reactWeather from "../assets/portfolio/reactWeather.png";
import NetfilixNode from "../assets/portfolio/NetfilixNode.png.jpg"
import restaurantwebsites  from "../assets/portfolio/restaurantwebsites.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      href:"https://studynotionvicky.netlify.app/",
    },
    {
      id: 2,
      src:reactWeather,
      href:"https://vikaskumain.netlify.app/"
    },
    {
      id: 3,
      src: navbar,
      href:"https://shoppingwebsidekumain.netlify.app/"
    },
    {
      id: 4,
      src: MoviesApp,
      href:"https://movies-fetch-webapp.netlify.app/"
    },
    {
      id: 5,
      src: NetfilixNode,
      href:"https://lnkd.in/gQKRfwRx"
    },
    {
      id: 6,
      src: restaurantwebsites,
      href:"https://restraunt-websites.netlify.app/"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
               
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button onClick={()=>{
                   window.open(href, '_blank');
                }} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
