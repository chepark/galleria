import "./_slideImage.styles.scss";

import Modal from "../modal/Modal.component";
import { useWindowSize } from "../../hooks/useWindowSize.hook";

const SlideImage = ({ paintingData, paintingTitle, isModalOpen, open }) => {
  const { name, artist } = paintingData;
  const [innerHeight, innerWidth] = useWindowSize();

  return (
    <div className="slide-image">
      <div className="image-titleArtist">
        <h2>{name}</h2>
        <p>{artist.name}</p>
      </div>
      <div className="image-gallery">
        <img
          src={
            innerWidth > 720
              ? require(`../../assets/${paintingTitle}/gallery.jpg`)
              : require(`../../assets/${paintingTitle}/hero-small.jpg`)
          }
          alt={paintingTitle}
        />
        <button className="image-gallery-btn" onClick={() => isModalOpen(true)}>
          <span className="material-icons">open_with</span>
          VIEW IMAGE
        </button>
      </div>

      <div className="image-artist">
        <img
          src={require(`../../assets/${paintingTitle}/artist.jpg`)}
          alt={artist.name}
        />
      </div>
      {open && (
        <Modal>
          <div className="modal">
            <div className="modal-closeBtn__wrapper">
              <button
                className="modal-closeBtn"
                onClick={() => isModalOpen(false)}
              >
                CLOSE
              </button>
            </div>
            <img
              className="modal-image"
              src={
                innerWidth > 1200
                  ? require(`../../assets/${paintingTitle}/hero-large.jpg`)
                  : require(`../../assets/${paintingTitle}/gallery.jpg`)
              }
              alt={paintingTitle}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default SlideImage;
