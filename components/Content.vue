<template>
  <v-col cols="12" sm="8" md="6">
    <v-card class="content elevation-0">
      <v-card-text>
        <Search />
      </v-card-text>
    </v-card>
  </v-col>
</template>
<script>
import Search from "/components/Search";
export default {
  name: "Content",
  components: {
    Search,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.content {
  margin-top: 82px;
  width: 564px;
  height: 642px;
  background: #ffffff;
  border-radius: 0;
}
</style>