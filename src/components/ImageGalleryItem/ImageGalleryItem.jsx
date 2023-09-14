import { Modal } from 'components/Modal';
import { Component } from 'react';
import css from './ImageGalleryItem.module.css';


export class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  handleClick = () => {
    this.setState(modal => ({ isOpen: !modal.isOpen }));
  };

  handleKeyDown = (evt) => {
    if (evt.key === 'Escape') {
      this.setState(modal => ({ isOpen: !modal.isOpen }));
    }
  }


  // message = () => `Sorry... There is no ${this.value} images :(`;

  render() {
    const { isOpen } = this.state;
    const { image } = this.props;

    return (
      <li key={image.id} className={css.ImageGalleryItem}>
        <img
          className={css.ImageGalleryItemImage}
          src={image.webformatURL}
          alt={image.tags}
          onClick={this.handleClick}
        />
        {isOpen && (
          <Modal
            largeImageURL={image.largeImageURL}
            alt={image.tags}
            handleClick={this.handleClick}
            handleKeyDown={this.handleKeyDown}
          />
        )}
      </li>
    );
  }
}