<template>
  <v-container pt-1>
    <v-layout row wrap>
      <v-flex xs12>
        <data-table/>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando.`
    }
  },
  created() {
    console.log(this.$store.state.user);
  }
}
</script>

<style>

</style>
