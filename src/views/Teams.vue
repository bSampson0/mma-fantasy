<template>
  <div id="teams">
    <div class="heading">
      <h1 class="ml-12">Teams & Rosters</h1>
    </div>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          v-for="(player, i) in this.$store.state.players"
          :key="i"
        >
          <v-card class="mx-auto" max-width="500" tile>
            <div class="top-section">
              <v-card-title v-text="player.teamName"></v-card-title>
              <v-card-subtitle v-text="player.playerName"></v-card-subtitle>
            </div>
            <v-list dense>
              <v-list-item-group>
                <v-list-item v-for="(team, i) in player.team" :key="i">
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="team.fighterName"
                    ></v-list-item-title>
                    <v-list-item-subtitle
                      v-text="team.weightClass"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.top-section {
  background: #134775;
}
.heading {
  padding-top: 10%;
  padding-bottom: 10%;
  background: url('https://network-new.punditarena.com/uploads/2019/04/Conor-McGregor-1-1.jpg');
  background-size: cover;
  background-position: top;
}
</style>
