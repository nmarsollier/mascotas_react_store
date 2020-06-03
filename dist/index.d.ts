import * as StoredStateModule from "./store/sessionStore";
import { cleanSession, sessionStore } from "./store/sessionStore";
export { sessionStore, cleanSession };
export declare type StoredState = StoredStateModule.StoredState;
