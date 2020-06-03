import { createStore } from "redux";

interface User {
    id: string;
    name: string;
    login: string;
    permissions: string[];
}

export interface StoredState {
    token?: string;
    user?: User;
}

enum StoreAction {
    UPDATE, CLEANUP,
}

interface Action {
    type: StoreAction;
    payload?: StoredState;
}

export const sessionStore = createStore((state: StoredState = {}, action: Action) => {
    switch (action.type) {
        case StoreAction.UPDATE:
            return {
                ...state,
                ...action.payload,
            };
        case StoreAction.CLEANUP:
            return {
                ...state,
                token: undefined,
                user: undefined,
            };
        default:
            return state;
    }
});

export function updateToken(token: string) {
    sessionStore.dispatch({
        payload: {
            token
        },
        type: StoreAction.UPDATE,
    });
}

export function updateUser(user: User) {
    sessionStore.dispatch({
        payload: {
            user
        },
        type: StoreAction.UPDATE,
    });
}

export function cleanSession() {
    sessionStore.dispatch({
        payload: undefined,
        type: StoreAction.CLEANUP,
    });
}
