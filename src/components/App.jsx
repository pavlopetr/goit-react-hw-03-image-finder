import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import api from '../api/api';

export class App extends Component {
  state = {
    search: '',
    data: [],
    status: 'static',
    totalHits: null,
    page: 1,
    modalData: {},
    modalStart: false,
    error: ''
  };


  componentDidUpdate(prevProps, prevState) {
    const { page, search } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.setState({ status: 'loading'});
      this.asincApi();
    }
  }

  async asincApi() {
    const { page, search } = this.state;
    try {
      const arr = await api(search, page);

      this.setState(prevState => ({
        data: [...prevState.data, ...arr.hits],
        status: 'static',
        totalHits: arr.totalHits,
      }));
    } catch (error) {
      this.setState({ status: 'error', error });
    }
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
    const { data, totalHits, page, modalStart, modalData, error , status} = this.state;
    const totalPage = Math.ceil(totalHits / 12);
    return (
      <div>
        <Searchbar handelSearch={this.handelSearch} />
       
        <ImageGallery>
          <ImageGalleryItem data={data} onClickModal={this.onClickModal} />
        </ImageGallery>
        {status === 'loading' && <Loader />}

        {status === 'error' && <p style={{ textAlign: 'center' }}>{error.message}</p>}
        
        {totalPage > page && <Button handlBtnlick={this.handlBtnlick} />}

        {modalStart && (
          <Modal modalData={modalData} toggleModal={this.toggleModal} />
        )}
      </div>
    );
  }
}