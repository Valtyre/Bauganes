import { useState } from 'preact/hooks'
import { Carousel } from '../carousel';
import {Husmyndir} from "../assets/data/husid.json"


export default function ImageHus() {
    const [isCarouselOpen, setIsCarouselOpen] = useState(false); // Start with carousel closed
  
    const toggleCarousel = () => {
      setIsCarouselOpen(!isCarouselOpen);
    };
  
    return (
      <div>
        <img
          id="displayImage"
          src="src/assets/house1.png"
          alt="Bauganes"
          onClick={toggleCarousel}
          style={{ cursor: 'pointer' }}
        />
        
        {isCarouselOpen && (
          <div className="carousel-overlay">
            <Carousel data={Husmyndir} />
            <button onClick={toggleCarousel} className="close-button">
              Loka
            </button>
          </div>
        )}
      </div>
    );
  }
  