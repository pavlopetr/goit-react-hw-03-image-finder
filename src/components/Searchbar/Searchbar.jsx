import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import s from './Searchbar.module.css';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    queri: '',
  };
  handelChange = e => {
    const value = e.target.value;
    this.setState({ queri: value });
  };

  handelSubmit = e => {
    e.preventDefault();
    const { handelSearch } = this.props;
    const { queri } = this.state;
    if (queri.trim() === '') {
      Notify.failure('Empty request');
      return;
    }

    handelSearch(queri);
  };

  render() {
    const { queri } = this.state;
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
            value={queri}
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