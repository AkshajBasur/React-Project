import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/images3.jpg";
import ImageFour from "../../images/image4.png";
import ImageFive from "../../images/image5.jpg";
import ImageSix from "../../images/image6.jpg";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "Accounting Website",
    image: ImageOne,
    link: "https://www.costsecon.com/",
  },
  {
    id: 3,
    name: "Watch Boutique",
    link: "https://firstsite979.wordpress.com/",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "Java Gameboy",
    image: ImageThree,
    link: "https://github.com/AkshajBasur/Gameboy",
  },
  {
    id: 2,
    name: "Inventory Management System",
    image: ImageFour,

    link: "https://github.com/AkshajBasur/inventory-management-system",
  },
  {
    id: 3,
    name: "Front End for Accounting Firm",
    image: ImageFive,
    link: "https://akshajbasur.000webhostapp.com/",
  },
  {
    id: 2,
    name: "Weather Forecast App",
    image: ImageSix,
    link: "https://github.com/AkshajBasur/Weather-Forecast-app",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }
  function TothePage(item){
    window.location.href = item ;
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button onClick={() => TothePage(item.link)}>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
