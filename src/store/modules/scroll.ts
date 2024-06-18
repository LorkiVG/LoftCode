import { Module, ActionContext } from 'vuex';
import { RootState } from '../index';

export interface ScrollState 
{
    isScrollHidden: boolean;
}

const state: ScrollState = 
{
    isScrollHidden: false,
};

const mutations = 
{
    setScrollHidden(state: ScrollState, hidden: boolean) 
    {
        state.isScrollHidden = hidden;
    },
};

const actions = 
{
    toggleScrollHidden({ commit }: ActionContext<ScrollState, RootState>, hidden: boolean) 
    {
        commit('setScrollHidden', hidden);
    },
};

const getters = 
{
    isScrollHidden(state: ScrollState): boolean 
    {
        return state.isScrollHidden;
    },
};

export const scroll: Module<ScrollState, RootState> = 
{
    namespaced: true, 
    state,
    mutations,
    actions,
    getters,
};
