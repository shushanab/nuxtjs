<template>
  <v-row justify="center" align="center">
    <Header />
    <Content />
  </v-row>
</template>

<script>
import Header from "/components/Header";
import Content from "/components/Content";

export default {
  name: "IndexPage",
  components: {
    Header,
    Content,
  },
};
</script>