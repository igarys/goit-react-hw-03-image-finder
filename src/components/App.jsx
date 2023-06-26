import { Component } from "react";
import { ImageGallery } from "./ImageGallery";
import { Searchbar } from "./Searchbar";
import  './styles.css';


export class App extends Component {
  state = {
    value: ''
  };

    onChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value } = this.state;
    console.log(value);
    return (
      <div className="App">
        <Searchbar value = {this.onChange} />
        <ImageGallery value={value} />
      </div>
    );
  }
};
