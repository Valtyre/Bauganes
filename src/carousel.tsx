import { useState } from 'preact/hooks'

interface CarouselProps {
  data: { src: string; alt: string }[];
}

export const Carousel = ({ data }: CarouselProps) => {
  const [picture, setPicture] = useState(0);

  return (
    <div className="overlay">
      <div className="carousel">
        {data.map((media, index) => (
            media.src.includes('mov') ? 
            <video className={`slide ${index === picture ? 'active' : ''}`} key={index} controls muted>
                <source src = {media.src} type="video/mp4"></source>
                </video> :
          <img
            key={index}
            src={media.src}
            alt={media.alt}
            className={`slide ${index === picture ? 'active' : ''}`}
          />
        ))}
        <button onClick={() => setPicture((picture - 1 + data.length) % data.length)}>&larr;</button>
        <button onClick={() => setPicture((picture + 1) % data.length)}>&rarr;</button>
      </div>
    </div>
  );
};
