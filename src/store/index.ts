import { createStore } from 'vuex';
import { scroll, ScrollState } from './modules/scroll';
import { preloader, PreloaderState } from './modules/preloader';
import { burgerMenu, BurgerMenuState } from './modules/burgerMenu';

export interface RootState 
{
    scroll: ScrollState;
    preloader: PreloaderState;
    burgerMenu: BurgerMenuState;
}

export const store = createStore<RootState>(
{
    modules: 
    {
        scroll,
        preloader,
        burgerMenu
    },
});