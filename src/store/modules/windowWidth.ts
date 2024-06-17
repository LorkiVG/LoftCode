import { Module } from 'vuex';
import { RootState } from '../index';

export interface ScrollState 
{
    windowWidth: number;
}

const state: ScrollState = 
{
    windowWidth: 0,
};

const getters = 
{
    isBurgerMenuActive(state: ScrollState): number 
    {
        return state.windowWidth;
    },
};

export const scroll: Module<ScrollState, RootState> = 
{
    state,
    getters,
};