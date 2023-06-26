import { Component } from 'react';
import css from './Modal.module.css';


export class Modal extends Component {
    state = {
        src: '',
        alt:''
    }

    render() {
        const { src, alt } = this.state
        
        return (
            <div className={css.overlay}>
                <div className={css.modal}>
              <img src={src} alt={alt} />
            </div>
          </div>
        );
    }
}