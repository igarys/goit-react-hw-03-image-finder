import css from './ImageGalleryItem.module.css';


export const ImageGalleryItem = ({ images }) => (
       images.map(({ id, webformatURL, tags }) => (
          <li key={id} className={css.ImageGalleryItem}>
            <img
              className={css.ImageGalleryItemImage}
              src={webformatURL}
              alt={tags}
            />
          </li>
        )))