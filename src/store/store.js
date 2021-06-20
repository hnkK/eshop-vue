import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import { state } from "./state"
import { getters } from "./getters"
import { actions } from "./actions"
import { mutations } from "./mutations"

Vue.use(Vuex, axios);

export const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})