export interface User {
    id: string;
    name: string;
    login: string;
    permissions: string[];
}
export interface StoredState {
    token?: string;
    user?: User;
}
export declare function useUserState(): User | undefined;
export declare function useTokenState(): string | undefined;
export declare function updateStoreToken(token: string): void;
export declare function updateStoreUser(user: User): void;
export declare function cleanupStore(): void;
