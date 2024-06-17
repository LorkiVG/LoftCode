import { Module, ActionContext } from 'vuex';
import { RootState } from '../index';

export interface ScrollState 
{
    isBurgerMenuActive: boolean;
}

const state: ScrollState = 
{
    isBurgerMenuActive: false,
};

const mutations = 
{
    setBurgerMenuActive(state: ScrollState, hidden: boolean) 
    {
        state.isBurgerMenuActive = hidden;
    },
};

const actions = 
{
    toggleBurgerMenuActive({ commit }: ActionContext<ScrollState, RootState>, hidden: boolean) 
    {
        commit('setBurgerMenuActive', hidden);
    },
};

const getters = 
{
    isBurgerMenuActive(state: ScrollState): boolean 
    {
        return state.isBurgerMenuActive;
    },
};

export const scroll: Module<ScrollState, RootState> = 
{
    state,
    mutations,
    actions,
    getters,
};