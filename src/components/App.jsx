import { Component } from "react";
import { ImageGallery } from "./ImageGallery";
import { Searchbar } from "./Searchbar";
import  './styles.css';


export class App extends Component {
  state = {
    inputValue: '',
    value: '',
  };

  onChange = e => {
    this.setState({ inputValue: e.target.value });
    console.log(`input e target : ${e.target.value}`);
    console.log(`inputVal : ${this.state.inputValue}`);
  };
  onSubmit = e => {
    e.preventDefault();
    this.setState({ value: this.state.inputValue });
  };

  render() {
    const { page } = this.props;
    const { value, inputValue  } = this.state;
    console.log(`App value: ${value}`);

    return (
      <div className="App">
        <Searchbar value={value} onChange={ this.onChange} onSubmit={this.onSubmit} inputValue={inputValue} />
        <ImageGallery value={value} page={page} />
      </div>
    );
  }
};
