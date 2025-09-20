import { getters } from './getters'
import { actions } from './actions'
import { state } from "./state"; // 🛠 state import qilindi


import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", {
  getters,
  actions,
  state
});

