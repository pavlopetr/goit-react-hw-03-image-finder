import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import s from './Searchbar.module.css';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    value: '',
  };
  handelChange = e => {
    const { value } = e.target;
    this.setState({ value });
  };

  handelSubmit = e => {
    e.preventDefault();
    const { handelSearch } = this.props;
    const { value } = this.state;
    if (value.trim() === '') {
      Notify.failure('Введіть запит');
      return;
    }

    handelSearch(value);
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form onSubmit={this.handelSubmit} className={s.form}>
          <button type="submit" className={s.button}>
            <span className={s.label}></span>
          </button>

          <input
            onChange={this.handelChange}
            className={s.input}
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  handelSearch: PropTypes.func,
};

export default Searchbar;