<template>
  <v-app dark>
    <v-col cols="6" class="col_centered">
      <NoResult
        :description="error.statusCode === 404 ? pageNotFound : otherError"
      />
    </v-col>
    <v-col cols="6" class="col_centered">
      <NuxtLink to="/"> Home page </NuxtLink>
    </v-col>
  </v-app>
</template>

<script>
export default {
  name: "EmptyLayout",
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>

<style scoped>
.col_centered {
  margin: 0 auto;
  text-align: center;
}
</style>
