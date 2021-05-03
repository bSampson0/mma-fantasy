<template>
  <div id="fighters">
    <v-container>
      <v-row>
        <v-col cols="12" lg="4" md="6" sm="8" class="text-center mx-auto pt-12">
          <h2>Search Fighter</h2>
          <p>Enter fighter name.</p>
          <v-text-field outlined placeholder="Jon Jones"></v-text-field>
          <v-btn elevation="0" color="primary">Search</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Weight Class</th>
                  <th class="text-left">Wins</th>
                  <th class="text-left">Losses</th>
                  <th class="text-left">Draws</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="fighter in fighters" :key="fighter.FighterId">
                  <td>
                    {{ fighter.FirstName }}
                    <span v-if="fighter.Nickname"
                      >"{{ fighter.Nickname }}"</span
                    >
                    {{ fighter.LastName }}
                  </td>
                  <td>{{ fighter.WeightClass }}</td>
                  <td>{{ fighter.Wins }}</td>
                  <td>{{ fighter.Losses }}</td>
                  <td>{{ fighter.Draws }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fighters: null,
    };
  },
  created() {
    this.getFighters();
  },
  methods: {
    getFighters() {
      fetch(
        `https://fly.sportsdata.io/v3/mma/scores/json/Fighters?key=43096d78b6a1429984a2c65141157df4`
      )
        .then((resp) => resp.json())
        .then((data) => (this.fighters = data));
    },
  },
};
</script>

<style lang="scss" scoped></style>
