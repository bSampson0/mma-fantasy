<template>
  <v-app>
    <v-navigation-drawer
      disable-resize-watcher
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="title">
            <strong>MMA</strong>Fantasy
          </v-list-item-title>
          <v-list-item-subtitle>
            <em
              >"Everyone has a plan until they <br />
              get punched in the mouth."</em
            >
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item link to="/fighters">
          <v-list-item-content>
            <v-list-item-title>Fighters</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/standings">
          <v-list-item-content>
            <v-list-item-title>Standings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/teams">
          <v-list-item-content>
            <v-list-item-title>Team & Rosters</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="d-sm-none"
      ></v-app-bar-nav-icon>
      <v-toolbar-title><strong>MMA</strong>FANTASY</v-toolbar-title>

      <v-spacer></v-spacer>
      <div class="d-none d-sm-block">
        <v-btn text rounded to="/fighters">Fighters</v-btn>
        <v-btn text rounded to="/standings">Standings</v-btn>
        <v-btn text rounded to="/teams">Teams & Rosters</v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: false,
  }),
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway:wght@100;400;900&display=swap');
h1,
h2,
h3,
h4,
h5 {
  font-family: 'Raleway', sans-serif;
  font-weight: 900;
}
body {
  font-family: 'Open Sans', sans-serif;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
