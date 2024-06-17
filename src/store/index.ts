import { createStore } from 'vuex';
import { theme, ThemeState } from './modules/theme';
import { scroll, ScrollState } from './modules/scroll';

export interface RootState 
{
    theme: ThemeState;
    scroll: ScrollState;
}

export const store = createStore<RootState>(
{
    modules: 
    {
        theme,
        scroll,
    },
});