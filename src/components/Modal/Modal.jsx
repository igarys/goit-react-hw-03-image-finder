import { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.props.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.props.handleKeyDown);
  }

  render() {
    const { largeImageURL, alt, handleClick } = this.props;

    return (
      <div>
        <div className={css.Overlay}>
          <div
            className={css.Modal}
            onClick={handleClick}
            onKeyDown={this.handleKeyDown}
          >
            <img src={largeImageURL} alt={alt} />
          </div>
        </div>
      </div>
    );
  }
}
