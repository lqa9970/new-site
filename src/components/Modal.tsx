type ImageProps = {
  images: string[];
};

const Modal = ({ images }: ImageProps) => {
  return (
    <div className="modal">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} />
      ))}
    </div>
  );
};

export default Modal;
