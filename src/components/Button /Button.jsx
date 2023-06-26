import css from './Button.module.css';

export const Button = ({ loadMore }) => {

    return (
      <div style={{'display':'flex', 'justifyContent': 'center'}}>
        <button onClick={loadMore} type="button" className={css.Button}>
          Load more
        </button>
      </div>
    );
}