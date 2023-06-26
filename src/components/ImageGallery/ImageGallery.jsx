// import { Component } from "react";
import { ImageGalleryItem } from "components/ImageGalleryItem";
import css from './ImageGallery.module.css';
import axios from "axios";
import { Loader } from "components/Loader";


// const searchInput = document.querySelector('input');
const API_URL = 'https://pixabay.com/api/';
const API_KEY = '36079957-3576dde99500ac3aadc903693';

export const fetchApi = async value => {
  const response = await axios.get(`${API_URL}?key=${API_KEY}&q=${value}`)
  return response.data.hits
}

export const ImageGallery = ({ images, isLoading } ) => {
 
    return(
    isLoading ? (
      <Loader />
    ) : (
      <ul className={css.ImageGallery}>
        <ImageGalleryItem images={images} />
      </ul>
    ))
  }
