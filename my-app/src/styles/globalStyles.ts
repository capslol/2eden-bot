// src/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;700&family=K2D:wght@400;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    font-family: 'K2D', sans-serif;
    background-color: #F7F7F7;
    
  }

  /* Additional global styles */
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root {
    isolation: isolate;
  }
  /* Сброс стилей стандартных кнопок Swiper */
  .swiper-button-next::after, .swiper-button-prev::after {
    display: none;
  }
  .swiper-wrapper{
    display: flex;
    align-items: center;
    height: 200px;
  }
  .swiper-slide {
    display: flex;
    align-items: center; /* Выравнивание по вертикали внутри слайда */
    justify-content: center; /* Выравнивание по горизонтали внутри слайда (по желанию) */
  }
  .swiper-slide {
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 200ms linear;
    transform: scale(0.8);
  }
  &.swiper-slide-active{
    transform: scale(1.5) !important;
  }



`;



export default GlobalStyles;
