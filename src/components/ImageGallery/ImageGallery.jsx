import { Component } from "react";
import { ImageGalleryItem } from "components/ImageGalleryItem";
import css from './ImageGallery.module.css';
import axios from "axios";
import { Loader } from "components/Loader";
import { Button } from "components/Button ";


const API_URL = 'https://pixabay.com/api/';
const API_KEY = '36079957-3576dde99500ac3aadc903693';

const fetchApi = async (value, page) => {
  
  const response = await axios.get(
    `${API_URL}?key=${API_KEY}&q=${value}&per_page=12&page=${page}`
  );
  console.log(` ${response.data.hits}`)
  return response.data.hits;
};

export class ImageGallery extends Component {
  state = {
    images: [],
    isLoading: false,
    page: 1,
  };


  loadMore = (nextState) => {
    this.setState(prevState => ({ page: prevState.page + 1 }))
    if (nextState.value !== this.props.value) { this.setState({ page: 1 }) }
        console.log(`page:${this.state.page}`);
     }; 
  
  componentDidMount() {
    this.setState({ isLoading: true });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value !== this.props.value ||
      nextState.page !== this.state.page) {
      return true;
    } else {
      return false;
    }
  }

//  return this.setState({ page: 1 });
  
 async componentDidUpdate() {
    const { value } = this.props;
    const { page } = this.state;
    const images =  await fetchApi(value,page);
    this.setState(prevState => ({
      images: [prevState.images, images],
      isLoading: false,
    }));

  }
  
  
  render() {
    const { isLoading, images, page } = this.state;
    const { value } = this.props;

    console.log(`page:${page}`)
    console.log(`gallery value:${value}`);
    console.log(`images:${images}`);


    
    
    return isLoading ? (
      <Loader />
    ) : (
      images.length > 0 && (
        <div>
          <ul className={css.ImageGallery}>
            <ImageGalleryItem images={images} />
          </ul>
            <Button page={ page } loadMore={this.loadMore} />
        </div>
      )
    );}
}
