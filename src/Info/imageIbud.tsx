import { useState } from 'preact/hooks'
import { Carousel } from '../carousel';
import {Ibudmyndir} from "../assets/data/ibud.json"


export default function ImageHus() {
    const [isCarouselOpen, setIsCarouselOpen] = useState(false); // Start with carousel closed
  
    const toggleCarousel = () => {
      setIsCarouselOpen(!isCarouselOpen);
    };
  
    return (
      <div>
        <img
          id="displayImage"
          src="Bauganes1a/src/assets/Ibud/i2.jpg"
          alt="Bauganes"
          onClick={toggleCarousel}
          
          style={{ cursor: 'pointer' }}
        />
        
        {isCarouselOpen && (
          <div className="carousel-overlay">
            <Carousel data={Ibudmyndir} />
            <button onClick={toggleCarousel} className="close-button">
              Loka
            </button>
          </div>
        )}
      </div>
    );
  }
  