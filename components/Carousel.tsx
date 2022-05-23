import { useEffect, useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useWindowSize } from "../hooks/useWindowSize";

interface ISlideProps {
  thumbnail: string;
  title: string;
  description: string;
  link?: string;
}

interface IProps {
  slides: ISlideProps[];
}

export const Carousel: React.FC<IProps> = (props) => {
  const sliderRef = useRef<any>(null);
  const size = useWindowSize();

  function reorder(x: number, obj: number) {
    if (x !== 0) {
      return -(Math.ceil(-x / obj) * obj);
    } else {
      return x;
    }
  }

  const slideRight = () => {
    const margin = size.width > 1120 ? 20 : 0;
    const xSize = sliderRef.current.children[0].clientWidth + margin;

    sliderRef.current.scrollLeft =
      reorder(sliderRef.current.scrollLeft, xSize) + xSize;
  };

  const slideLeft = () => {
    const margin = size.width > 1120 ? 20 : 0;
    const xSize = sliderRef.current.children[0].clientWidth + margin;

    sliderRef.current.scrollLeft =
      reorder(sliderRef.current.scrollLeft, xSize) - xSize;
  };

  useEffect(() => {
    if (sliderRef && size.width < 1120) {
      sliderRef.current.scrollLeft = 0;
    }
  }, [size.width]);

  return (
    <div id="main-slider-container">
      <div>
        <MdChevronLeft
          size={40}
          className="slider-icon left"
          onClick={slideLeft}
        />
      </div>
      <div id="slider" ref={sliderRef}>
        {props.slides.length > 0 ? (
          props.slides.map((slide, index: any) => {
            return (
              <div className="slider-card" key={index}>
                <a
                  href={
                    slide.link ??
                    "https://api.whatsapp.com/send?phone=5521965316122&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20avalia%C3%A7%C3%A3o."
                  }
                  target="_blank"
                >
                  <div
                    className="slider-card-image"
                    style={{
                      backgroundImage: `url(${slide.thumbnail})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </a>
                <p className="slider-card-title">{slide.title ?? "Em breve"}</p>
                <p className="slider-card-description">
                  {slide.description ?? "Em breve"}
                </p>
              </div>
            );
          })
        ) : (
          <div className="slider-card">
            <a
              href="https://api.whatsapp.com/send?phone=5521965316122&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20avalia%C3%A7%C3%A3o."
              target="_blank"
            >
              <div className="slider-card-image" />
            </a>
            <p className="slider-card-title">Em breve</p>
            <p className="slider-card-description">Em breve</p>
          </div>
        )}
      </div>
      <div>
        <MdChevronRight
          size={40}
          className="slider-icon right"
          onClick={slideRight}
        />
      </div>
    </div>
  );
};
