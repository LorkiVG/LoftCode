import { Module, ActionContext } from 'vuex';
import { RootState } from '../index';

export interface PreloaderState 
{
    isPreloaded: boolean;
}

const state: PreloaderState = 
{
    isPreloaded: false,
};

const mutations = 
{
    setPreloaded(state: PreloaderState, hidden: boolean) 
    {
        state.isPreloaded = hidden;
    },
};

const actions = 
{
    togglePreloaded({ commit }: ActionContext<PreloaderState, RootState>, hidden: boolean) 
    {
        commit('setPreloaded', hidden);
    },
};

const getters = 
{
    isPreloaded(state: PreloaderState): boolean 
    {
        return state.isPreloaded;
    },
};

export const preloader: Module<PreloaderState, RootState> = 
{
    namespaced: true, 
    state,
    mutations,
    actions,
    getters,
};
