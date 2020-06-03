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
declare enum StoreAction {
    UPDATE = 0,
    CLEANUP = 1
}
interface Action {
    type: StoreAction;
    payload?: StoredState;
}
export declare const sessionStore: import("redux").Store<StoredState, Action>;
export declare function updateToken(token: string): void;
export declare function updateUser(user: User): void;
export declare function cleanSession(): void;
export {};
