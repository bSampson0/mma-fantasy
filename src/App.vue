<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn text to="/"><strong>MMA</strong>FANTASY</v-btn>

      <v-spacer></v-spacer>
      <v-btn text to="/fighters">Fighters</v-btn>
      <v-btn text to="/standings">Standings</v-btn>
      <v-btn text to="/teams">Teams & Rosters</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway:wght@100;400;900&display=swap");
h1,
h2,
h3,
h4,
h5 {
  font-family: "Raleway", sans-serif;
  font-weight: 900;
}
body {
  font-family: "Open Sans", sans-serif;
}
</style>
