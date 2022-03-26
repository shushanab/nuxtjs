<template>
  <v-row class="title_bar">
    <v-spacer></v-spacer>
    <v-tooltip bottom v-for="(icon, i) of titleBarIcons" :key="i">
      <template v-slot:activator="{ on, attrs }">
        <img
          v-bind="attrs"
          v-on="on"
          class="mr-4 title_bar__img"
          @click="titleBarIconClick(icon.title)"
          :alt="icon.title"
          :src="icon.title + '.svg'"
        />
      </template>
      <span>{{ icon.title }}</span>
    </v-tooltip>
  </v-row>
</template>
<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {
      titleBarIcons: [
        { title: "minimise" },
        { title: "maximise" },
        { title: "close" },
      ],
    };
  },
  methods: {
    titleBarIconClick(selectedButton) {
      console.log(`TODO implement ${selectedButton.toUpperCase()} function`);
    },
  },
};
</script>
<style lang="scss" scoped>
.title_bar {
  position: absolute;
  width: 1280px;
  height: 32px;
  top: 12px;
  background: #757575;
}

.title_bar__img {
  cursor: pointer;
}
</style>