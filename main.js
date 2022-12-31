import { app } from './src/app/app';
import './style.css'

document.querySelector('#app').innerHTML = `
    <div class="container-fluid" id="container">
    </div>
`

const element = document.querySelector('#container');

app(element);