import { getApi } from "../moviedb/movie-db";
import html from "./app.html?raw";


let pagesNumber = 1;


/**
 * 
 * @param {String} elementHtml 
 */
export const app = (elementHtml) => {
    
    elementHtml.innerHTML = html;
    
    const $cards       = document.querySelector('#cards');
    const $btn_previus = document.querySelector('#btnAnterior');
    const $btn_next    = document.querySelector('#btnSiguiente');

    
    getApi($cards, pagesNumber);
    
    $btn_previus.addEventListener('click', () => {
        
        if( pagesNumber === 1 ) return

        pagesNumber = pagesNumber - 1;
    
        $cards.innerHTML = '';
        getApi($cards, pagesNumber)
    })
    
    $btn_next.addEventListener('click', () => {
        
        if( pagesNumber === 36520) return

        pagesNumber = pagesNumber + 1;

        $cards.innerHTML = '';
        getApi($cards, pagesNumber)
    })
    
}