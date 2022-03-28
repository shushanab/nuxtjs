<template>
  <div class="search mr-2">
    <v-text-field
      v-model.trim="search"
      color="primary"
      class="search__input"
      placeholder="Search"
      hide-details
      outlined
      prepend-inner-icon="mdi-magnify"
      autofocus
      @input="searching"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    searching() {
      this.$emit("searching", this.search);
    },
  },
};
</script>
<style lang="scss" scoped>
.search__input {
  width: 520px;

  background: #fafafa;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  border-radius: 2px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.75);
}
</style>
