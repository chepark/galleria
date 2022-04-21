import "./_slideImage.styles.scss";

const SlideImage = ({ paintingData, paintingTitle }) => {
  const { name, artist } = paintingData;

  return (
    <div className="slide-image">
      <div className="image-titleArtist">
        <h2>{name}</h2>
        <p>{artist.name}</p>
      </div>
      <div className="image-gallery">
        <img
          src={require(`../../assets/${paintingTitle}/gallery.jpg`)}
          alt={paintingTitle}
        />
        <button className="image-gallery-btn">
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
    </div>
  );
};

export default SlideImage;
