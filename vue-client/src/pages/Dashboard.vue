<template>
    <v-layout row wrap>
      <v-flex xs12>
        <data-table/>
      </v-flex>
    </v-layout>
</template>

<script>
export default {
  data() {
    return {
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando.`
    }
  },
  created() {
    console.log(this.$store.state.user.email);
  },
  beforeRouteEnter(to, from, next) {
    console.log('beforeROuteEner');
    const loggedIn = true

    if (true === loggedIn ) {
      next ();
    } else {
      next('/');
    }

  }
}
</script>

<style>

</style>
