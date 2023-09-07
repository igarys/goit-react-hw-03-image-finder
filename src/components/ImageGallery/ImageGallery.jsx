import { ImageGalleryItem } from "components/ImageGalleryItem";
import css from './ImageGallery.module.css';
import { Loader } from "components/Loader";
import { Button } from "components/Button ";


export const ImageGallery = ({ isLoading, images, page, loadMore, message }) => {


  return isLoading ? (
    <Loader />
  ) : (
    images.length > 0 && (
      <div>
        <ul className={css.ImageGallery}>
          {images.map(image => (
            <ImageGalleryItem key={ image.id} image={image} />
          ))}
        </ul>
        <Button page={page} loadMore={loadMore} />
      </div>
    )
    //       && (

    // images.length > 12 && (
    //   <div>
    //     <Button page={page} loadMore={loadMore} />
    //   </div>))
  );
};

