import s from './Button.module.css';
import PropTypes from 'prop-types';
function Button({ handlBtnlick }) {
  return (
    <button onClick={() => handlBtnlick()} className={s.button} type="button">
      Load more
    </button>
  );
}
Button.propTypes = {
  handlBtnlick: PropTypes.func,
};

export default Button;