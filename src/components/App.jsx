import { Component } from "react";
import { fetchApi, ImageGallery } from "./ImageGallery";
import { Searchbar } from "./Searchbar";
import  './styles.css';

export class App extends Component {
  state = {
    images: [],
    value: '',
    isLoading: false,
  };

   componentDidMount() {
    this.setState({ isLoading: true });
  }
  
  shouldComponentUpdate(nextState) {
     console.log(nextState.value)
     if (nextState.value !== this.state.value) {
       return true
     } else {
       return false
   }
   }
  
  async componentDidUpdate() {
  const { value } = this.state;
  const images = await fetchApi(value);
  this.setState({
    images: images,
    isLoading: false,
  });
}

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value , images} = this.state;
    console.log(value);
    return (
      <div className="App">
        <Searchbar value = {this.onChange} />
        <ImageGallery images={images} />
      </div>
    );
  }
};
