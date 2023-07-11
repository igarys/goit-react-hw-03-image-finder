import { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  // state = {
  //   inputValue: '',
  //   value: '',
  // };

  // onChange = e => {

  //   this.setState({ inputValue: e.target.value});
  //   console.log(`input e target : ${e.target.value}`);
  //   console.log(`inputVal : ${this.state.inputValue}`);

  // };
  // onSubmit = (e) => {
  //   e.preventDefault();
  //   this.setState({value: this.state.inputValue})
  // }

  render() {
    console.log(`input : ${this.props.value}`);
    // const {value, inputValue} = this.state;
    const { onSubmit, onChange, value, inputValue } = this.props;

    return (
      <header className={css.Searchbar}>
        <form onSubmit={onSubmit} value={ value } className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="inputValue"
            value={inputValue}
            onChange={onChange}
          />
        </form>
      </header>
    );
  }
};

