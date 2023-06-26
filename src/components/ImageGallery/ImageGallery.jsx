import { Component } from "react";
import { ImageGalleryItem } from "components/ImageGalleryItem";
import css from './ImageGallery.module.css';
import axios from "axios";
import { Loader } from "components/Loader";
import { Searchbar } from "components/Searchbar";
// const searchInput = document.querySelector('input');
const API_URL = 'https://pixabay.com/api/';
const API_KEY = '36079957-3576dde99500ac3aadc903693';

export class ImageGallery extends Component {
  state = {
    images: [],
    isLoading: false,
  };
  searchInput = e => {9
     e.target.value;
  };
  async componentDidMount() {
    this.setState({ isLoading: true });

    const response = await axios.get(
      `${API_URL}?key=${API_KEY}&q=${this.searchInput} `
    );
    this.setState({
      images: response.data.hits,
      isLoading: false,
    });
  }

  render() {
    const { images, isLoading } = this.state;
    console.log(this.searchInput);
    return isLoading ? (
      <Loader />
    ) : (
      <ul className={css.ImageGallery}>
        <ImageGalleryItem images={images} />
      </ul>
    );
  }
}