import * as StoredStateModule from "./store/sessionStore";
import { cleanSession, sessionStore, updateUser, updateToken } from "./store/sessionStore";

export {
    sessionStore,
    cleanSession,
    updateUser,
    updateToken
};

export type StoredState = StoredStateModule.StoredState
