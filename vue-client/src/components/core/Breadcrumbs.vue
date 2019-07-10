<template>
<v-container >
    <v-layout row wrap mb-0>
      <v-flex xs12>
        <v-card class="header-links" color="grey lighten-4">
          <v-breadcrumbs :items="items" class="breadcrumbs" divider="/">
            <template slot="item" slot-scope="props">
              <router-link :to="{ name: props.item.href }" class="link">{{ props.item.name }}</router-link>
            </template>
          </v-breadcrumbs>
        </v-card>
  </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: []
    }
  },

  watch: {
    '$route' () {
      const vm = this;

      vm.updateBreadcrumbs();
    }
  },

  mounted() {
    const vm = this;

    vm.updateBreadcrumbs();
  },

  methods: {
    updateBreadcrumbs() {
      const vm = this;

      vm.items = vm.$route.meta.breadcrumb;
    }
  }
}
</script>

<style>
  .breadcrumbs .link {
    text-decoration: none;
    color:green;
    font:  14px Sans-Serif;
    letter-spacing: -1px;
    white-space: nowrap;
    display: inline-block;
    position: relative;
  }

  .header-links {
    /* border: 1px solid #333 !important; */
    border-radius: 5px !important;
    background: red;
  }

</style>
