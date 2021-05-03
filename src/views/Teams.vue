<template>
  <div id="teams" class="pt-12">
    <v-container>
      <v-row class="pb-8">
        <v-col>
          <h1>Teams & Rosters</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="3"
          sm="6"
          v-for="player in players"
          :key="player.index"
        >
          <h2>{{ player.playerName }}</h2>
          <ul v-for="t in player.team" :key="t.name">
            <li>{{ t }}</li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      players: [
        {
          playerName: "Joey Bigsby",
          team: ["Isreal Adesanya", "Dustin Poirier", "Jan Blachowicz"],
        },
        {
          playerName: "Scott Caliway",
          team: ["Kamaru Usman", "Rose Namajunas", "Aljamain Sterling"],
        },
        {
          playerName: "Joe Finamore",
          team: [
            "Sean O'Malley",
            "Valentina Shevchenko",
            "Max Halloway",
            "Fransisco Figueredo",
          ],
        },
        {
          playerName: "Bryce Sampson",
          team: [
            "Amanda Nunes",
            "Francis Ngannou",
            "Cody Garbrandt",
            "Leon Edwards",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
