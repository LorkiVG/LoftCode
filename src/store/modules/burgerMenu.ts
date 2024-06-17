import { Module, ActionContext } from 'vuex';
import { RootState } from '../index';

export interface BurgerMenuState 
{
    isBurgerMenuActive: boolean;
}

const state: BurgerMenuState = 
{
    isBurgerMenuActive: false,
};

const mutations = 
{
    setBurgerMenuActive(state: BurgerMenuState, hidden: boolean) 
    {
        state.isBurgerMenuActive = hidden;
    },
};

const actions = 
{
    toggleBurgerMenuActive({ commit }: ActionContext<BurgerMenuState, RootState>, hidden: boolean) 
    {
        commit('setBurgerMenuActive', hidden);
    },
};

const getters = 
{
    isBurgerMenuActive(state: BurgerMenuState): boolean 
    {
        return state.isBurgerMenuActive;
    },
};

export const burgerMenu: Module<BurgerMenuState, RootState> = 
{
    state,
    mutations,
    actions,
    getters,
};