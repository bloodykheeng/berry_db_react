// store/CustomizationContext.js
import React, { createContext, useReducer, useContext } from 'react';
import config from 'config';
import * as actionTypes from './actions';

// Initial state
const initialState = {
    isOpen: [], // for active default menu
    fontFamily: config.fontFamily,
    borderRadius: config.borderRadius,
    opened: true
};

// Reducer function
const customizationReducer = (state, action) => {
    let id;
    switch (action.type) {
        case actionTypes.MENU_OPEN:
            id = action.id;
            return {
                ...state,
                isOpen: [id]
            };
        case actionTypes.SET_MENU:
            return {
                ...state,
                opened: action.opened
            };
        case actionTypes.SET_FONT_FAMILY:
            return {
                ...state,
                fontFamily: action.fontFamily
            };
        case actionTypes.SET_BORDER_RADIUS:
            return {
                ...state,
                borderRadius: action.borderRadius
            };
        default:
            return state;
    }
};

// Create Context
const CustomizationContext = createContext();

// Provider component
export const CustomizationProvider = ({ children }) => {
    const [state, dispatch] = useReducer(customizationReducer, initialState);

    return <CustomizationContext.Provider value={{ state, dispatch }}>{children}</CustomizationContext.Provider>;
};

// Custom hooks to use context
export const useCustomization = () => {
    const context = useContext(CustomizationContext);
    if (!context) {
        throw new Error('useCustomization must be used within a CustomizationProvider');
    }
    return context;
};
