
import css from './Modal.module.css';

export const Modal = ({ largeImageURL, alt, handleClick, handleKeyDown }) => {
 
  return (
    <div className={css.Overlay}>
      <div
        className={css.Modal}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        <img src={largeImageURL} alt={alt} />
      </div>
    </div>
  );
};   
    
