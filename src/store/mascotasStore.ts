import { useLayoutEffect, useState } from "react";
import { Subject } from "rxjs";
import axios from "axios";

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

export let mascotasState: StoredState = {};

const mascotasStore = new Subject<StoredState>();

export function useUserState() {
  const [user, setUser] = useState(mascotasState.user);

  useLayoutEffect(() => {
    mascotasStore.subscribe((newState) => {
      setUser(newState.user);
    });
  }, []);

  return user;
}

export function useTokenState() {
  const [token, setToken] = useState(mascotasState.token);

  useLayoutEffect(() => {
    mascotasStore.subscribe((newState) => {
      setToken(newState.token);
    });
  }, []);

  return token;
}

export function updateStoreToken(token: string) {
  axios.defaults.headers.common.Authorization = "bearer " + token;
  mascotasState = {
    ...mascotasState,
    token,
  };
  mascotasStore.next(mascotasState);
}

export function updateStoreUser(user: User) {
  mascotasState = {
    ...mascotasState,
    user,
  };
  mascotasStore.next(mascotasState);
}

export function cleanupStore() {
  axios.defaults.headers.common.Authorization = "";
  mascotasState = {};
  mascotasStore.next(mascotasState);
}

axios.defaults.headers.common["Content-Type"] = "application/json";

export function securedAxios() {
  return axios;
}