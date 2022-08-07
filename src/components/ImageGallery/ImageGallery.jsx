import s from './ImageGallery.module.css';


import PropTypes from 'prop-types';

function ImageGallery({ children }) {
  return (
    <>
      <ul className={s.gallery}>{children}</ul>
    </>
  );
}
ImageGallery.propTypes = {
  children: PropTypes.object,
};
  export default ImageGallery;
  