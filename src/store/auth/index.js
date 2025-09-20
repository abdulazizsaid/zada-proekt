import { state } from './state'
import { actions } from './actions'


import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state,
  actions,
});

