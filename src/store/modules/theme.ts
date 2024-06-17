import { Module, ActionContext } from 'vuex';
import { RootState } from '../index';

export interface ThemeState 
{
    currentTheme: string;
}

const state: ThemeState = 
{
    currentTheme: localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : null) || 'light',
};

const mutations = 
{
    setCurrentTheme(state: ThemeState, newTheme: string) 
    {
        localStorage.setItem('theme', newTheme);
    },
};

const actions = 
{
    changeTheme({ commit }: ActionContext<ThemeState, RootState>, newTheme: string) 
    {
        commit('setCurrentTheme', newTheme);
    },
};

const getters = 
{
    currentTheme(state: ThemeState): string 
    {
        return state.currentTheme;
    },
};

export const theme: Module<ThemeState, RootState> = 
{
    state,
    mutations,
    actions,
    getters,
};