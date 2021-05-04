import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: [
      {
        playerName: 'Joey Bigsby',
        teamName: 'Joe the Pro',
        team: [
          {
            fighterName: 'Isreal Adesanya',
            weightClass: 'Light Heavyweight',
          },
          {
            fighterName: 'Dustin Poirier',
            weightClass: 'Welterweight',
          },
          {
            fighterName: 'Jan Blachowicz',
            weightClass: 'Heavyweight',
          },
        ],
      },
      {
        playerName: 'Scott Caliway',
        teamName: 'Scotty too Hotty',
        team: [
          {
            fighterName: 'Kamaru Usman',
            weightClass: 'Light Heavyweight',
          },
          {
            fighterName: 'Rose Namajunas',
            weightClass: 'Welterweight',
          },
          {
            fighterName: 'Aljamain Sterling',
            weightClass: 'Heavyweight',
          },
        ],
      },
      {
        playerName: 'Joe Finamore',
        teamName: 'Big Money',
        team: [
          {
            fighterName: "Sean O'Malley",
            weightClass: 'Light Heavyweight',
          },
          {
            fighterName: 'Valentina Shevchenko',
            weightClass: 'Welterweight',
          },
          {
            fighterName: 'Max Halloway',
            weightClass: 'Heavyweight',
          },
          {
            fighterName: 'Fransisco Figueredo',
            weightClass: 'Heavyweight',
          },
        ],
      },
      {
        playerName: 'Bryce Sampson',
        teamName: 'First Round Knockouts',
        team: [
          {
            fighterName: 'Amanda Nunes',
            weightClass: 'Womens Heavyweight',
          },
          {
            fighterName: 'Cody Garbrandt',
            weightClass: 'Lightweight',
          },
          {
            fighterName: 'Francis Ngannou',
            weightClass: 'Heavyweight',
          },
          {
            fighterName: 'Leon Edwards',
            weightClass: 'Welterweight',
          },
        ],
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
})
