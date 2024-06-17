import { createStore } from 'vuex';
import { theme, ThemeState } from './modules/theme';
import { scroll, ScrollState } from './modules/scroll';
import { preloader, PreloaderState } from './modules/preloader';
import { burgerMenu, BurgerMenuState } from './modules/burgerMenu';


export interface RootState 
{
    theme: ThemeState;
    scroll: ScrollState;
    preloader: PreloaderState;
    burgerMenu: BurgerMenuState;
}

export const store = createStore<RootState>(
{
    modules: 
    {
        theme,
        scroll,
        preloader,
        burgerMenu
    },
});