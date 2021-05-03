<template>
  <div id="home">
    <v-container class="fill-height" fluid>
      <v-row justify="center" align="center">
        <v-col class="text-center">
          <h1 class="pb-4" style="color: #fff; font-size: 4em">
            MMA FANTASY LEAGUE
          </h1>
          <v-btn to="/teams" color="primary" dark elevation="0" x-large
            >ENTER</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style>
#home {
  height: 100vh;
  background: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.52),
      rgba(19, 71, 117, 0.73)
    ),
    url("https://static01.nyt.com/images/2021/01/22/sports/22ufc-mcgregor01/22ufc-mcgregor01-mobileMasterAt3x.jpg");
  background-size: cover;
  background-position: top;
}
</style>
