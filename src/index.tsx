import * as StoredStateModule from "./store/sessionStore";
import { cleanSession, sessionStore } from "./store/sessionStore";

export {
    sessionStore,
    cleanSession
};

export type StoredState = StoredStateModule.StoredState
