import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';



function ImageGalleryItem({ data, onClickModal }) {
  return (
    <>
      {data.map(el => (
        <li key={el.id} className={s.item}>
          <img
            className={s.image}
            src={el.webformatURL}
            alt={el.tags}
            onClick={() => onClickModal(el.largeImageURL, el.tags)}
          />
        </li>
      ))}
    </>
  );
}
ImageGalleryItem.propTypes = {
  data: PropTypes.array,
  onClickModal: PropTypes.func,
};
export default ImageGalleryItem;