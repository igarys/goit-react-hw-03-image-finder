import css from './Modal.module.css';

export const Modal = ({ largeImageURL, alt, handleClick, handleKeyDown }) => {
  return (
    <div tabIndex={0} onKeyDown={handleKeyDown}>
      <div className={css.Overlay}>
        <div className={css.Modal} onClick={handleClick}>
          <img src={largeImageURL} alt={alt} />
        </div>
      </div>
    </div>
  );
};
