import { Module, ActionContext } from 'vuex';
import { RootState } from '../index';

export interface ThemeState 
{
    currentTheme: string;
}

const state: ThemeState = 
{
    currentTheme: localStorage.getItem('theme') || 'light',
};

const mutations = 
{
    setCurrentTheme(state: ThemeState, newTheme: string) 
    {
        state.currentTheme = newTheme;
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