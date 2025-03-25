import  './BentoItems.css'
import { Mapa } from './Mapa'
import barcoSushi from '../assets/FotoBarcoSushi.jpg';



export const BentoItems = () => {

    return (
        <>
        <div className="parent">
                
                <div class="parent">
                    <div class="div1">
                        <div className='div1Text'>
                            <h3>L-V</h3>
                            <p>13:00- 16:00  20:00- 23:00</p>

                            <h3>S-D </h3>
                        
                        
                            <p>13:00- 16:00 20:00- 24:00 </p>
                        </div>
                        <div className='sushiIcons'>
                            <svg width="109px" height="109px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M640.13216 0h-224a128 128 0 0 0-128 128v128a128 128 0 0 0 128 128h224a128 128 0 0 0 128-128V128a128 128 0 0 0-128-128z m96 240a112 112 0 0 1-112 112h-192a112 112 0 0 1-112-112v-96a112 112 0 0 1 112-112h192a112 112 0 0 1 112 112v96z" fill="#434854"></path><path d="M736.13216 240a112 112 0 0 1-112 112h-192a112 112 0 0 1-112-112v-96a112 112 0 0 1 112-112h192a112 112 0 0 1 112 112v96z" fill="#EAEAEA"></path><path d="M761.25216 295.488c-0.704 2.24-1.216 4.576-2.048 6.752-2.592 6.592-5.824 12.8-9.408 18.848-0.16 0.288-0.288 0.576-0.48 0.832A127.424 127.424 0 0 1 640.13216 384h-224a127.488 127.488 0 0 1-109.184-62.048l-0.448-0.8a128.32 128.32 0 0 1-9.44-18.88c-0.832-2.208-1.344-4.544-2.08-6.784-1.632-5.024-3.392-9.952-4.416-15.2A123.552 123.552 0 0 1 288.13216 256v224a128 128 0 0 0 128 128h224a128 128 0 0 0 128-128V256c0 8.352-0.864 16.448-2.432 24.32-1.024 5.248-2.784 10.176-4.448 15.168z" fill="#434854"></path><path d="M761.25216 295.488c-0.704 2.24-1.216 4.576-2.048 6.752-2.592 6.592-5.824 12.8-9.408 18.848-0.16 0.288-0.288 0.576-0.48 0.832A127.424 127.424 0 0 1 640.13216 384h-224a127.488 127.488 0 0 1-109.184-62.048l-0.448-0.8a128.32 128.32 0 0 1-9.44-18.88c-0.832-2.208-1.344-4.544-2.08-6.784-1.632-5.024-3.392-9.952-4.416-15.2A123.552 123.552 0 0 1 288.13216 256v224a128 128 0 0 0 128 128h224a128 128 0 0 0 128-128V256c0 8.352-0.864 16.448-2.432 24.32-1.024 5.248-2.784 10.176-4.448 15.168z" fill=""></path><path d="M704.13216 590.24v-223.648c-9.888 5.824-20.64 10.24-32 13.216V603.456a125.024 125.024 0 0 0 32-13.216z" fill="#FFFFFF"></path><path d="M384.13216 192a144 96 0 1 0 288 0 144 96 0 1 0-288 0Z" fill="#EF4D4D"></path><path d="M352.00416 416H128.00416a128 128 0 0 0-128 128v128a128 128 0 0 0 128 128h224a128 128 0 0 0 128-128v-128a128 128 0 0 0-128-128z m96 240a112 112 0 0 1-112 112h-192A112 112 0 0 1 32.00416 656v-96A112 112 0 0 1 144.00416 448h192a112 112 0 0 1 112 112v96z" fill="#434854"></path><path d="M448.00416 656a112 112 0 0 1-112 112h-192A112 112 0 0 1 32.00416 656v-96A112 112 0 0 1 144.00416 448h192a112 112 0 0 1 112 112v96z" fill="#EAEAEA"></path><path d="M473.12416 711.488c-0.704 2.24-1.216 4.576-2.048 6.752-2.592 6.592-5.824 12.8-9.408 18.848-0.16 0.288-0.288 0.576-0.48 0.832A127.424 127.424 0 0 1 352.00416 800H128.00416a127.488 127.488 0 0 1-109.184-62.048l-0.448-0.8a128.32 128.32 0 0 1-9.44-18.88c-0.832-2.176-1.344-4.544-2.08-6.752-1.632-5.024-3.36-9.984-4.416-15.232A123.552 123.552 0 0 1 0.00416 672v224a128 128 0 0 0 128 128h224a128 128 0 0 0 128-128v-224c0 8.352-0.864 16.448-2.432 24.32-1.024 5.248-2.784 10.176-4.448 15.168z" fill="#434854"></path><path d="M473.12416 711.488c-0.704 2.24-1.216 4.576-2.048 6.752-2.592 6.592-5.824 12.8-9.408 18.848-0.16 0.288-0.288 0.576-0.48 0.832A127.424 127.424 0 0 1 352.00416 800H128.00416a127.488 127.488 0 0 1-109.184-62.048l-0.448-0.8a128.32 128.32 0 0 1-9.44-18.88c-0.832-2.176-1.344-4.544-2.08-6.752-1.632-5.024-3.36-9.984-4.416-15.232A123.552 123.552 0 0 1 0.00416 672v224a128 128 0 0 0 128 128h224a128 128 0 0 0 128-128v-224c0 8.352-0.864 16.448-2.432 24.32-1.024 5.248-2.784 10.176-4.448 15.168z" fill=""></path><path d="M416.00416 1006.24v-223.648c-9.888 5.824-20.64 10.24-32 13.216V1019.456a125.024 125.024 0 0 0 32-13.216z" fill="#FFFFFF"></path><path d="M96.00416 608a144 96 0 1 0 288 0 144 96 0 1 0-288 0Z" fill="#EF4D4D"></path><path d="M832.00416 768v224a32 32 0 1 0 64 0v-224h-64z" fill="#EAEAEA"></path><path d="M896.00416 768V32a32 32 0 1 0-64 0v736h64z" fill="#EACA44"></path><path d="M864.00416 0v1024a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32z" fill=""></path><path d="M960.00416 768v224a32 32 0 1 0 64 0v-224h-64z" fill="#EAEAEA"></path><path d="M1024.00416 768V32a32 32 0 1 0-64 0v736h64z" fill="#EACA44"></path><path d="M992.00416 0v1024a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32z" fill=""></path></g></svg>
                            <svg width="99px" height="99px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M608.00416 0h-224a128 128 0 0 0-128 128v128a128 128 0 0 0 128 128h224a128 128 0 0 0 128-128V128a128 128 0 0 0-128-128z m96 240a112 112 0 0 1-112 112h-192A112 112 0 0 1 288.00416 240v-96A112 112 0 0 1 400.00416 32h192A112 112 0 0 1 704.00416 144v96z" fill="#434854"></path><path d="M704.00416 240a112 112 0 0 1-112 112h-192A112 112 0 0 1 288.00416 240v-96A112 112 0 0 1 400.00416 32h192A112 112 0 0 1 704.00416 144v96z" fill="#EAEAEA"></path><path d="M729.12416 295.488c-0.704 2.24-1.216 4.576-2.048 6.752-2.592 6.592-5.824 12.8-9.408 18.848-0.16 0.288-0.288 0.576-0.48 0.832A127.424 127.424 0 0 1 608.00416 384h-224a127.488 127.488 0 0 1-109.184-62.048l-0.448-0.8a130.304 130.304 0 0 1-9.44-18.912c-0.832-2.176-1.344-4.512-2.08-6.752-1.632-5.024-3.392-9.952-4.416-15.2A123.552 123.552 0 0 1 256.00416 256v224a128 128 0 0 0 128 128h224a128 128 0 0 0 128-128V256c0 8.352-0.864 16.448-2.432 24.32-1.024 5.248-2.784 10.176-4.448 15.168z" fill="#434854"></path><path d="M729.12416 295.488c-0.704 2.24-1.216 4.576-2.048 6.752-2.592 6.592-5.824 12.8-9.408 18.848-0.16 0.288-0.288 0.576-0.48 0.832A127.424 127.424 0 0 1 608.00416 384h-224a127.488 127.488 0 0 1-109.184-62.048l-0.448-0.8a130.304 130.304 0 0 1-9.44-18.912c-0.832-2.176-1.344-4.512-2.08-6.752-1.632-5.024-3.392-9.952-4.416-15.2A123.552 123.552 0 0 1 256.00416 256v224a128 128 0 0 0 128 128h224a128 128 0 0 0 128-128V256c0 8.352-0.864 16.448-2.432 24.32-1.024 5.248-2.784 10.176-4.448 15.168z" fill=""></path><path d="M672.00416 590.24v-223.648c-9.888 5.824-20.64 10.24-32 13.216V603.456a125.024 125.024 0 0 0 32-13.216z" fill="#FFFFFF"></path><path d="M352.00416 192a144 96 0 1 0 288 0 144 96 0 1 0-288 0Z" fill="#EF4D4D"></path><path d="M352.00416 416H128.00416a128 128 0 0 0-128 128v128a128 128 0 0 0 128 128h224a128 128 0 0 0 128-128v-128a128 128 0 0 0-128-128z m96 240a112 112 0 0 1-112 112h-192A112 112 0 0 1 32.00416 656v-96A112 112 0 0 1 144.00416 448h192a112 112 0 0 1 112 112v96z" fill="#434854"></path><path d="M448.00416 656a112 112 0 0 1-112 112h-192A112 112 0 0 1 32.00416 656v-96A112 112 0 0 1 144.00416 448h192a112 112 0 0 1 112 112v96z" fill="#EAEAEA"></path><path d="M473.12416 711.488c-0.704 2.24-1.216 4.576-2.048 6.752-2.592 6.592-5.824 12.8-9.408 18.848-0.16 0.288-0.288 0.576-0.48 0.832A127.424 127.424 0 0 1 352.00416 800H128.00416a127.488 127.488 0 0 1-109.184-62.048l-0.448-0.8a128.32 128.32 0 0 1-9.44-18.88c-0.832-2.176-1.344-4.544-2.08-6.752-1.632-5.024-3.36-9.984-4.416-15.232A123.552 123.552 0 0 1 0.00416 672v224a128 128 0 0 0 128 128h224a128 128 0 0 0 128-128v-224c0 8.352-0.864 16.448-2.432 24.32-1.024 5.248-2.784 10.176-4.448 15.168z" fill="#434854"></path><path d="M473.12416 711.488c-0.704 2.24-1.216 4.576-2.048 6.752-2.592 6.592-5.824 12.8-9.408 18.848-0.16 0.288-0.288 0.576-0.48 0.832A127.424 127.424 0 0 1 352.00416 800H128.00416a127.488 127.488 0 0 1-109.184-62.048l-0.448-0.8a128.32 128.32 0 0 1-9.44-18.88c-0.832-2.176-1.344-4.544-2.08-6.752-1.632-5.024-3.36-9.984-4.416-15.232A123.552 123.552 0 0 1 0.00416 672v224a128 128 0 0 0 128 128h224a128 128 0 0 0 128-128v-224c0 8.352-0.864 16.448-2.432 24.32-1.024 5.248-2.784 10.176-4.448 15.168z" fill=""></path><path d="M416.00416 1006.24v-223.648c-9.888 5.824-20.64 10.24-32 13.216V1019.456a125.024 125.024 0 0 0 32-13.216z" fill="#FFFFFF"></path><path d="M96.00416 608a144 96 0 1 0 288 0 144 96 0 1 0-288 0Z" fill="#EF4D4D"></path><path d="M896.00416 416h-224a128 128 0 0 0-128 128v128a128 128 0 0 0 128 128h224a128 128 0 0 0 128-128v-128a128 128 0 0 0-128-128z m96 240a112 112 0 0 1-112 112h-192a112 112 0 0 1-112-112v-96a112 112 0 0 1 112-112h192a112 112 0 0 1 112 112v96z" fill="#434854"></path><path d="M992.00416 656a112 112 0 0 1-112 112h-192a112 112 0 0 1-112-112v-96a112 112 0 0 1 112-112h192a112 112 0 0 1 112 112v96z" fill="#EAEAEA"></path><path d="M1017.12416 711.488c-0.704 2.24-1.216 4.576-2.048 6.752-2.592 6.592-5.824 12.8-9.408 18.848-0.16 0.288-0.288 0.576-0.48 0.832A127.424 127.424 0 0 1 896.00416 800h-224a127.488 127.488 0 0 1-109.184-62.048l-0.448-0.8a128.32 128.32 0 0 1-9.44-18.88c-0.832-2.176-1.344-4.544-2.08-6.752-1.632-5.024-3.36-9.984-4.416-15.232A123.552 123.552 0 0 1 544.00416 672v224a128 128 0 0 0 128 128h224a128 128 0 0 0 128-128v-224c0 8.352-0.864 16.448-2.432 24.32-1.024 5.248-2.784 10.176-4.448 15.168z" fill="#434854"></path><path d="M1017.12416 711.488c-0.704 2.24-1.216 4.576-2.048 6.752-2.592 6.592-5.824 12.8-9.408 18.848-0.16 0.288-0.288 0.576-0.48 0.832A127.424 127.424 0 0 1 896.00416 800h-224a127.488 127.488 0 0 1-109.184-62.048l-0.448-0.8a128.32 128.32 0 0 1-9.44-18.88c-0.832-2.176-1.344-4.544-2.08-6.752-1.632-5.024-3.36-9.984-4.416-15.232A123.552 123.552 0 0 1 544.00416 672v224a128 128 0 0 0 128 128h224a128 128 0 0 0 128-128v-224c0 8.352-0.864 16.448-2.432 24.32-1.024 5.248-2.784 10.176-4.448 15.168z" fill=""></path><path d="M960.00416 1006.24v-223.648c-9.888 5.824-20.64 10.24-32 13.216V1019.456a125.024 125.024 0 0 0 32-13.216z" fill="#FFFFFF"></path><path d="M640.00416 608a144 96 0 1 0 288 0 144 96 0 1 0-288 0Z" fill="#EF4D4D"></path></g></svg>
                            <div className='bentoSVGContainer'>
                            <svg width="109px" height="109px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M62 55.6c0 .8-.6 1.4-1.4 1.4H3.4c-.8 0-1.4-.6-1.4-1.4V8.4C2 7.6 2.6 7 3.4 7h57.2c.8 0 1.4.6 1.4 1.4v47.2" fill="#3e4347" id="IconifyId17ecdb2904d178eab26112"> </path> <use xlink:href="#IconifyId17ecdb2904d178eab26112"> </use> <g fill="#ff5760"> <path d="M36.1 36.8c0-1.5-1.2-2.7-2.8-2.7H8.9c-1.5 0-2.8 1.2-2.8 2.7v13.3c0 1.5 1.2 2.7 2.8 2.7h24.5c1.5 0 2.8-1.2 2.8-2.7c-.1 0-.1-13.3-.1-13.3"> </path> <path d="M23.7 13.9c0-1.5-1.2-2.7-2.8-2.7h-12c-1.5 0-2.8 1.2-2.8 2.7v13.3c0 1.5 1.2 2.7 2.8 2.7H21c1.5 0 2.8-1.2 2.8-2.7c-.1 0-.1-13.3-.1-13.3"> </path> <path d="M30.6 11.1c-1.5 0-2.8 1.2-2.8 2.7v13.3c0 1.5 1.2 2.7 2.8 2.7h24.5c1.5 0 2.8-1.2 2.8-2.7V13.9c0-1.5-1.2-2.7-2.8-2.7H30.6z"> </path> </g> <path d="M33.5 41.4c0-1.1-.9-2.1-2.1-2.1c1.1 0 2.1-.9 2.1-2.1c0-1.1-.9-2.1-2.1-2.1c-1.1 0-2.1.9-2.1 2.1c0-1.1-.9-2.1-2.1-2.1c-1.1 0-2.1.9-2.1 2.1c0-1.1-.9-2.1-2.1-2.1c-1.1 0-2.1.9-2.1 2.1c0-1.1-.9-2.1-2.1-2.1S17 36.2 17 37.3c0-1.1-.9-2.1-2.1-2.1c-1.1 0-2.1.9-2.1 2.1c0-1.1-.9-2.1-2.1-2.1c-1.1 0-2.1.9-2.1 2.1c0 1.1.9 2.1 2.1 2.1c-1.1 0-2.1.9-2.1 2.1c0 1.1.9 2.1 2.1 2.1c-1.1 0-2.1.9-2.1 2.1c0 1.1.9 2.1 2.1 2.1c-1.1 0-2.1.9-2.1 2.1c0 1.1.9 2.1 2.1 2.1c1.1 0 2.1-.9 2.1-2.1c0 1.1.9 2.1 2.1 2.1c1.1 0 2.1-.9 2.1-2.1c0 1.1.9 2.1 2.1 2.1s2.1-.9 2.1-2.1c0 1.1.9 2.1 2.1 2.1c1.1 0 2.1-.9 2.1-2.1c0 1.1.9 2.1 2.1 2.1c1.1 0 2.1-.9 2.1-2.1c0 1.1.9 2.1 2.1 2.1c1.1 0 2.1-.9 2.1-2.1c0-1.1-.9-2.1-2.1-2.1c1.1 0 2.1-.9 2.1-2.1c0-1.1-.9-2.1-2.1-2.1c.9-.1 1.8-1.1 1.8-2.2" fill="#ffffff"> </path> <circle cx="21.1" cy="43.5" r="2.1" fill="#ff5760"> </circle> <circle cx="14.9" cy="20.5" fill="#3e4347" r="8"> </circle> <circle cx="14.9" cy="20.5" fill="#c94747" r="6.4"> </circle> <path d="M57.1 19.8c0-.4-.6-.6-.7-.9c.1-.4.5-.5.6-.8c.2-.4-.4-.7-.6-1c-.3-.4.3-.9 0-1.3c-.2-.4-.8-.2-1.1-.5c-.3-.3-.1-.9-.5-1.1c-.4-.2-.8.2-1.2.1c-.4-.1-.6-.9-1.1-.7c-.3.2-.5.7-1 .7c-.3 0-.9-.4-1.1 0c-.2.3-.1.9-.5 1c-.4.2-1.1.1-.9.7c.1.4.3.8-.1 1.1c-.3.3-.7.6-.3 1c.2.2.7.5.5.8c-.3.3-.9.6-.5 1.1c.2.2.7.5.5.9c-.2.3-.8.6-.6 1c.1.2.7.5.6.9c-.1.4-.9.6-.6 1.1c.2.3.7.5.7 1c0 .3-.4.9 0 1.1c.3.2.9.1 1.1.5c.2.4.1 1.1.7.9c.4-.1.8-.3 1.1.1c.3.3.6.7 1 .3c.3-.3.5-.6 1-.5c.5.1.9.2 1-.4c.1-.5.3-.7.8-.8c.5-.1.6-.3.5-.8c-.2-.5-.1-.7.3-1.1c.5-.5.3-.7-.2-1.1c-.7-.7.9-1 .3-1.7c-.2-.2-.6-.4-.5-.7c.2-.4.8-.5.8-.9" fill="#dae3ea"> </path> <g fill="#839391"> <path d="M50.3 16.7c.2-.4 0-1 .4-1.2c.3-.2.9.2 1.1.1c.4-.2.6-.7 1.1-.7c.4 0 .7.7 1 .7c.4 0 .8-.3 1.2 0c.4.2.2.9.4 1.2c-.3-.3-.3-.7-.6-1c-.2-.1-.8.3-1.1.2c-.4-.1-.6-.7-.9-.7c-.1 0-.6.6-.8.7c-.4.1-.8-.2-1.2-.2c-.3.1-.3.7-.6.9"> </path> <path d="M50.3 20.7c.2-.4 0-1 .4-1.2c.3-.2.9.2 1.1.1c.4-.2.6-.8 1.1-.7c.4 0 .7.7 1 .7c.4 0 .8-.3 1.2 0c.4.2.2.9.4 1.2c-.3-.3-.3-.7-.6-1c-.2-.1-.8.3-1.1.2c-.4-.1-.6-.7-.9-.7c-.1 0-.6.6-.8.7c-.4.1-.8-.2-1.2-.2c-.3.1-.3.7-.6.9"> </path> <path d="M50.3 18.7c.2-.4 0-1 .4-1.2c.3-.2.9.2 1.1.1c.4-.2.6-.7 1.1-.7c.4 0 .7.7 1 .7c.4 0 .8-.3 1.2 0c.4.2.2.9.4 1.2c-.3-.3-.3-.7-.6-1c-.2-.1-.8.3-1.1.2c-.4-.1-.6-.7-.9-.7c-.1 0-.6.6-.8.7c-.4.1-.8-.2-1.2-.2c-.3.1-.3.7-.6.9"> </path> </g> <g fill="#fc97b2"> <path d="M55.3 24.4s0 .1 0 0"> </path> <path d="M55.3 24.5c0 .1 0 .1 0 0"> </path> <path d="M51.6 24.7c-.9-1.1-.3-3.1 1.3-2.9c1.3.2 1.7 2.4.3 2.2c-.6-.1-1-.9-.3-1.2c.6-.3.7.4.7.8c.8-.6-.4-1.6-1.1-1c-.7.5-.4 1.5.3 1.9c1.9 1 3-2.5.8-3c-2-.5-3.2 2.1-2.1 3.6s3.5 1.1 4.1-.7c-.6.3-.9 1-1.7 1.1c-1.1.1-1.8-.2-2.3-.8"> </path> </g> <use xlink:href="#ssvg-id-bento-boxb"> </use> <g fill="#83bf4f"> <path d="M45.4 18c-4.2-1.3-8.7-1.3-13 0c-1.7.6-3-2.4-.9-3.1c4.8-1.5 10-1.5 14.8 0c2.1.7.8 3.7-.9 3.1"> </path> <path d="M45.4 22.6c-4.2-1.3-8.7-1.3-13 0c-1.7.6-3-2.4-.9-3.1c4.8-1.5 10-1.5 14.8 0c2.1.7.8 3.7-.9 3.1"> </path> <path d="M45.4 27.2c-4.2-1.3-8.7-1.3-13 0c-1.7.6-3-2.4-.9-3.1c4.8-1.5 10-1.5 14.8 0c2.1.7.8 3.7-.9 3.1"> </path> </g> <path d="M43 34.1c-1.5 0-2.8 1.2-2.8 2.7v13.3c0 1.5 1.2 2.7 2.8 2.7h12.1c1.5 0 2.8-1.2 2.8-2.7V36.8c0-1.5-1.2-2.7-2.8-2.7H43" fill="#ff5760"> </path> <path d="M54.8 37.1c0-1.1-1.3-1.8-1.9-1.9c-.5-.1-1.6.1-1.9.3c-.3-.2-1.4-.5-1.9-.5s-1.8.3-2.1.5c-.3-.2-1.3-.3-1.8-.3c-.7.1-1.9.9-1.9 1.9c-1.1 0-1.9.9-1.9 1.9s.9 1.9 1.9 1.9c0 1.1 1.3 1.8 1.9 1.9c.4.1 1.5-.1 1.8-.3c.3.2 1.5.3 2.1.3c.5 0 1.7-.2 1.9-.3c.3.2 1.4.3 1.9.3c.7-.1 1.9-.9 1.9-1.9c1.1 0 1.9-.9 1.9-1.9s-.8-1.9-1.9-1.9" fill="#fbbf67"> </path> <g fill="#89664c"> <path d="M51.6 36.5h1v5h-1z"> </path> <path d="M45.6 36.5h1v5h-1z"> </path> <path d="M48.6 36.5h1v5h-1z"> </path> </g> <path d="M54.8 46.1c0-1.1-1.3-1.8-1.9-1.9c-.5-.1-1.6.1-1.9.3c-.3-.2-1.4-.5-1.9-.5s-1.8.3-2.1.5c-.3-.2-1.3-.3-1.8-.3c-.7.1-1.9.9-1.9 1.9c-1.1 0-1.9.9-1.9 1.9s.9 1.9 1.9 1.9c0 1.1 1.3 1.8 1.9 1.9c.4.1 1.5-.1 1.8-.3c.3.2 1.5.3 2.1.3c.5 0 1.7-.2 1.9-.3c.3.2 1.4.3 1.9.3c.7-.1 1.9-.9 1.9-1.9c1.1 0 1.9-.9 1.9-1.9s-.8-1.9-1.9-1.9" fill="#fbbf67"> </path> <g fill="#89664c"> <path d="M51.6 45.5h1v5h-1z"> </path> <path d="M45.6 45.5h1v5h-1z"> </path> <path d="M48.6 45.5h1v5h-1z"> </path> </g> </g></svg>
                            </div>
                        </div>
                    
                    </div>
                    <div class="div2">
                        
                        <div className='gridContainer'>
                        <div className='sushiSticks'>
                        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="79px" height="79px" viewBox="0 0 365.649 365.649" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M265.682,167.08c-17.252,0-30.763,6.918-30.763,15.742c0,8.825,13.511,15.736,30.763,15.736 c17.245,0,30.75-6.911,30.75-15.736C296.432,174.003,282.921,167.08,265.682,167.08z"></path> </g> <g> <path d="M365.398,247.04c-1.592-6.274-10.593-11.607-13.962-13.612l-27.706-17.294v-33.306c0-16.129-25.586-28.763-58.258-28.763 c-12.052,0-23.551,1.732-33.273,5.017L66.217,55.571c-3.074-1.841-6.389-2.756-9.851-2.756c-6.161,0-12.361,3.167-15.06,7.705 c-1.931,3.228-2.39,7.305-1.267,11.172c0.874,3.044,3.156,7.397,9.046,10.91l160.373,92.201 c-1.471,2.603-2.209,5.308-2.209,8.019v41.502L26.766,111.791c-3.074-1.84-6.395-2.762-9.851-2.762 c-6.167,0-12.361,3.167-15.048,7.704c-1.924,3.228-2.384,7.305-1.273,11.172c0.874,3.044,3.155,7.397,9.046,10.907 L207.25,252.438v35.729l0.895,0.673c16.85,12.646,35.422,19.047,55.16,19.047c10.244,0,20.771-1.754,31.314-5.2l7.134,4.095 c6.857,4.084,12.147,6.054,16.165,6.054c4.083,0,6.161-2.042,7.188-3.783c2.042-3.435,2.192-9.007-8.292-16.345 c3.513-2.066,5.626-3.567,6.053-3.886l0.876-0.654v-47.642l17.463,10.046c6.863,4.083,12.153,6.059,16.171,6.059 c4.071,0,6.154-2.054,7.175-3.795C365.625,251.021,365.919,249.063,365.398,247.04z M265.478,207.21 c-29.676,0-53.833-10.953-53.833-24.383c0-13.442,24.157-24.362,53.833-24.362c29.693,0,53.845,10.926,53.845,24.362 C319.323,196.257,295.171,207.21,265.478,207.21z"></path> </g> </g> </g> </g></svg>
                       <svg fill="#000000" height="69px" width="69px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 297 297" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M295.576,104.887c-2.743-4.387-8.524-5.721-12.911-2.979l-93.878,58.674v-33.117c0-11.222-7.816-21.269-22.114-28.595 l80.122-58.756c4.172-3.061,5.074-8.923,2.015-13.096c-3.063-4.175-8.926-5.076-13.097-2.016l-90.299,66.22 c-10.853-2.64-22.996-4.045-35.562-4.045c-19.863,0-38.685,3.502-52.994,9.863c-16.729,7.434-25.939,18.238-25.939,30.424v47.722 L3.829,195.052c-4.173,3.061-5.075,8.924-2.015,13.097c1.836,2.503,4.68,3.829,7.563,3.829c1.923,0,3.863-0.591,5.533-1.814 l16.008-11.739v4.184c0,12.185,9.211,22.989,25.938,30.424c3.131,1.391,6.487,2.637,10.014,3.747l-31.549,19.719 c-4.388,2.743-5.722,8.523-2.98,12.911c1.778,2.844,4.831,4.404,7.955,4.404c1.695,0,3.413-0.46,4.956-1.425l48.466-30.291 c5.252,0.521,10.65,0.797,16.134,0.797c19.863,0,38.684-3.503,52.996-9.862c16.727-7.435,25.938-18.239,25.938-30.424v-19.928 l103.809-64.881C296.983,115.055,298.317,109.276,295.576,104.887z M109.852,105.916c36.188,0,60.196,12.97,60.196,21.549 c0,8.578-24.009,21.549-60.196,21.549c-36.187,0-60.196-12.971-60.196-21.549C49.656,118.885,73.665,105.916,109.852,105.916z M49.656,202.607v-48.396c2.218,1.301,4.619,2.529,7.201,3.676c14.312,6.36,33.132,9.863,52.995,9.863 c19.863,0,38.684-3.503,52.996-9.863c2.582-1.146,4.982-2.375,7.2-3.676v18.081l-80.632,50.396 C64.911,219.06,49.656,209.442,49.656,202.607z M170.048,202.607c0,7.452-18.125,18.214-46.606,20.912l46.606-29.129V202.607z"></path> <path d="M94.127,139.652c4.306,0.956,9.891,1.483,15.725,1.483c5.835,0,11.42-0.527,15.725-1.483 c10.75-2.389,13.008-7.946,13.008-12.187c0-4.242-2.257-9.8-13.008-12.189c-4.305-0.957-9.889-1.483-15.725-1.483 c-5.835,0-11.419,0.526-15.725,1.483c-10.751,2.39-13.007,7.947-13.007,12.189C81.12,131.706,83.377,137.263,94.127,139.652z"></path> </g> </g></svg>
                        </div>

                        <div className='sushiTable'>
                            <svg fill="#000000" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M437.02,74.98C388.667,26.628,324.38,0,256,0S123.333,26.628,74.98,74.98C26.628,123.333,0,187.619,0,256 s26.628,132.667,74.98,181.02C123.333,485.372,187.62,512,256,512s132.667-26.628,181.02-74.98 C485.372,388.667,512,324.381,512,256S485.372,123.333,437.02,74.98z M256,478.609c-60.914,0-116.183-24.6-156.417-64.378h152.151 V260.266H97.769v152.15C57.992,372.182,33.391,316.914,33.391,256c0-122.746,99.862-222.609,222.609-222.609 c60.914,0,116.183,24.601,156.417,64.378H260.266v153.964h153.965V99.584c39.777,40.234,64.377,95.503,64.377,156.416 C478.609,378.746,378.746,478.609,256,478.609z M131.16,380.839v-87.181h87.182v87.181H131.16z M380.84,131.161v87.181h-87.182 v-87.181H380.84z"></path> </g> </g> <g> <g> <path d="M202.346,97.77h-55.188c-27.233,0-49.388,22.155-49.388,49.388v55.188c0,27.233,22.155,49.388,49.388,49.388h55.188 c27.233,0,49.388-22.155,49.388-49.388v-55.188C251.734,119.925,229.579,97.77,202.346,97.77z M218.342,202.346 c0,8.821-7.176,15.997-15.997,15.997h-55.188c-8.821,0-15.997-7.176-15.997-15.997v-55.188c0-8.821,7.176-15.997,15.997-15.997 h55.188c8.821,0,15.997,7.176,15.997,15.997V202.346z"></path> </g> </g> <g> <g> <circle cx="174.748" cy="174.748" r="16.696"></circle> </g> </g> <g> <g> <path d="M364.843,260.266h-55.188c-27.233,0-49.388,22.155-49.388,49.388v55.188c0,27.233,22.155,49.388,49.388,49.388h55.188 c27.233,0,49.388-22.155,49.388-49.388v-55.188C414.231,282.421,392.075,260.266,364.843,260.266z M380.84,364.842 c0,8.821-7.176,15.997-15.997,15.997h-55.188c-8.821,0-15.997-7.176-15.997-15.997v-55.188c0-8.821,7.176-15.997,15.997-15.997 h55.188c8.821,0,15.997,7.176,15.997,15.997V364.842z"></path> </g> </g> <g> <g> <circle cx="337.252" cy="337.252" r="16.696"></circle> </g> </g> </g></svg>
                        </div>

                        <div className='sushiSticks'>
                        <svg fill="#000000" height="79px" width="79px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M18.3,13.2l1.5,1.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.5-1.5c0.4-0.4,0.4-1,0-1.4l-1.5-1.5c-0.4-0.4-1-0.4-1.4,0 l-1.5,1.5C17.9,12.2,17.9,12.8,18.3,13.2z M20.5,12.4L20.5,12.4v0.2V12.4L20.5,12.4z"></path> <path d="M30,14.7c-0.2-0.5-0.7-0.8-1.2-0.7l-3.4,1c0.4-0.8,0.7-1.7,0.7-2.6c0-1.5-0.6-2.9-1.6-3.9c-1-1-2.4-1.6-3.9-1.6 c-0.5,0-1,0.1-1.5,0.2l1.9-3.8c0.2-0.5,0-1.1-0.4-1.3c-0.5-0.2-1.1,0-1.3,0.4l-8.5,17.1L2.7,22c-0.5,0.2-0.8,0.7-0.7,1.3 C2.2,23.7,2.6,24,3,24c0.1,0,0.2,0,0.3,0l6-1.9l-3.2,6.5c-0.2,0.5,0,1.1,0.4,1.3C6.7,30,6.8,30,7,30c0.4,0,0.7-0.2,0.9-0.6l4.1-8.2 L29.3,16C29.8,15.8,30.1,15.2,30,14.7z M23,10c0.7,0.7,1,1.5,1,2.5s-0.4,1.8-1,2.5c-1.3,1.3-3.6,1.3-5,0c-0.7-0.7-1-1.5-1-2.5 s0.4-1.8,1-2.5s1.5-1,2.5-1S22.3,9.4,23,10z M15.4,14.5c0.3,0.7,0.7,1.4,1.2,1.9c0.4,0.4,0.9,0.7,1.3,1l-4.7,1.5L15.4,14.5z"></path> </g> </g></svg>
                        <svg fill="#000000" height="78px" width="78px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.999 511.999" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M507.109,416.716L357.237,266.843c42.94-3.393,76.85-39.394,76.85-83.191v-19.567c5.226,1.853,10.842,2.872,16.696,2.872 c27.618,0,50.087-22.469,50.087-50.087V83.478C500.87,37.375,463.29,0,417.391,0C411.95,0,86.559,0,83.478,0 C37.537,0,0,37.431,0,83.478v33.391c0,27.618,22.469,50.087,50.087,50.087c5.854,0,11.47-1.018,16.696-2.872v19.567 c0,46.03,37.448,83.478,83.478,83.478h59.867l239.979,239.979c6.52,6.52,17.091,6.52,23.611,0c6.52-6.519,6.52-17.091,0-23.611 L257.35,267.13c7.66,0,45.262,0,52.952,0l173.196,173.196c6.52,6.52,17.091,6.52,23.611,0 C513.63,433.808,513.63,423.236,507.109,416.716z M66.783,116.87c0,9.207-7.49,16.696-16.696,16.696s-16.696-7.49-16.696-16.696 V83.478c0-6.783,1.361-13.251,3.816-19.155l29.576,28.052V116.87z M59.546,39.491c7.115-3.887,15.27-6.099,23.933-6.099h38.053 l11.13,33.391H116.87c-7.723,0-15.043,1.76-21.582,4.895C93.667,70.056,59.546,39.491,59.546,39.491z M200.348,210.128 l-38.282-38.282c-6.519-6.519-17.091-6.519-23.611,0s-6.52,17.091,0,23.611l38.282,38.282h-26.476 c-27.618,0-50.087-22.468-50.087-50.087V116.87c0-9.206,7.49-16.696,16.696-16.696c8.821,0,75.143,0,83.478,0V210.128z M200.348,66.783H167.86l-11.13-33.391h43.618V66.783z M467.478,83.478v33.391c0,9.206-7.49,16.696-16.696,16.696 s-16.696-7.49-16.696-16.696V92.375l29.576-28.052C466.117,70.227,467.478,76.695,467.478,83.478z M379.339,33.391h38.053 c8.663,0,16.818,2.213,23.933,6.098c0,0-34.121,30.565-35.742,32.187c-6.539-3.134-13.859-4.894-21.582-4.894h-15.792 L379.339,33.391z M300.522,33.391h43.618l-11.13,33.391h-32.487V33.391z M267.13,233.739h-33.391V33.391h33.391V233.739z M300.522,233.739V100.174c8.371,0,74.636,0,83.478,0c9.206,0,16.696,7.49,16.696,16.696v66.783 c0,27.618-22.469,50.087-50.087,50.087H300.522z"></path> </g> </g> </g></svg>
                        </div>
                        

                        </div>
                    </div> 
                    <div className="div3">
                        <img src={barcoSushi} alt='Imagen barco sushi'/>
                        <div className="overlayText">
                            <h3>Disfruta de platos único</h3>
                        </div>
                    </div>
                    <div className="div4">
                        <Mapa/>
                    </div>
                </div>
        
                </div>    
        </>
    )
}