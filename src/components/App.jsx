import { Component } from "react";
import { ImageGallery } from "./ImageGallery";
import { Searchbar } from "./Searchbar";
import './styles.css';
import {fetchApi} from '../services'


export class App extends Component {
  state = {
    inputValue: '',
    value: '',
    images: [],
    isLoading: false,
    page: 1,
  };

  onChange = e => {
    this.setState({ inputValue: e.target.value });
  };
  onSubmit = (e, nextState) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    this.setState({ images: [] });
    this.setState({ value: this.state.inputValue });
    this.setState({ inputValue: '' });
    this.setState({ page: 1 });
  };


  componentDidMount() {
    this.setState({ isLoading: false });
  }

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  // message = () => `Sorry... There is no ${this.value} images :(`;

  async componentDidUpdate(prevState, nextState) {
    if (
      nextState.value !== this.state.value ||
      nextState.page !== this.state.page
    ) {
      const { value, page } = this.state;
      const images = await fetchApi(value, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        isLoading: false,
      }));
    }
  }

  render() {
    const { page, value, inputValue, images, isLoading } = this.state;

    return (
      <div className="App">
        <Searchbar
          value={value}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          inputValue={inputValue}
        />
        <ImageGallery
          images={images}
          page={page}
          loadMore={this.loadMore}
          isLoading={isLoading}
          // message={this.message}
        />
      </div>
    );
  }
};
