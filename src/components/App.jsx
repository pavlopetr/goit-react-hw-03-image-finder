import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import api from './api';

export class App extends Component {
  state = {
    search: '',
    data: [],
    loging: false,
    totalHits: null,
    page: 1,
    modalData: {},
    modalStart: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, search } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.setState({ loging: true });
      this.asincApi();
    }
  }

  async asincApi() {
    const { page, search } = this.state;

    const arr = await api(search, page);

    this.setState(prevState => ({
      data: [...prevState.data, ...arr.hits],
      loging: false,
      totalHits: arr.totalHits,
    }));
  }

  handelSearch = value => {
    this.setState({ search: value, page: 1, data: [] });
  };
  handlBtnlick = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  onClickModal = (src, alt) => {
    this.setState({
      modalData: { src, alt },
      modalStart: true,
    });
  };

  toggleModal = () => {
    this.setState({ modalStart: false });
  };

  render() {
    const { data, loging, totalHits, page, modalStart, modalData } = this.state;
    const totalPage = Math.ceil(totalHits / 12);
    return (
      <div>
        <Searchbar handelSearch={this.handelSearch} />
        {loging && <Loader />}
        <ImageGallery>
          <ImageGalleryItem data={data} onClickModal={this.onClickModal} />
        </ImageGallery>
        {totalPage > page && <Button handlBtnlick={this.handlBtnlick} />}

        {modalStart && (
          <Modal modalData={modalData} toggleModal={this.toggleModal} />
        )}
      </div>
    );
  }
}