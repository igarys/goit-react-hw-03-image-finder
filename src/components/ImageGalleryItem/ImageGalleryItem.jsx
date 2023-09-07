import { Modal } from 'components/Modal';
import { Component } from 'react';
import css from './ImageGalleryItem.module.css';


export class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  handleClick = largeImageURL => {
    this.setState(modal => ({ isOpen: !modal.isOpen }));
    console.log(largeImageURL);
  };
  handleKeyDown = evt => {
    if (evt.key === "Escape") {
      this.setState({isOpen: false})
    }
 };
  
  
  render() {
    const { isOpen } = this.state;
    const { images } = this.props;

    return images?.map(({ id, webformatURL, tags, largeImageURL }) => (
      <li key={id} className={css.ImageGalleryItem}>
        <img
          className={css.ImageGalleryItemImage}
          src={webformatURL}
          alt={tags}
          onClick={this.handleClick}
        />
        {isOpen && (
          <Modal
            largeImageURL={largeImageURL}
            alt={tags}
            handleClick={this.handleClick}
            handleKeyDown={this.handleKeyDown}
          />
        )}
      </li>
    ));
  }
}