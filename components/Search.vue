<template>
  <div class="search mr-2">
    <v-text-field
      v-model.trim="search"
      color="primary"
      class="search__input"
      placeholder="Search"
      outlined
      prepend-inner-icon="mdi-magnify"
      autofocus
      persistent-hint
      :hint="computedHint"
      @input="searching"
    ></v-text-field>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "search",
  data() {
    return {};
  },

  methods: {
    searching: _.debounce(function ($event) {
      this.$emit("searching", $event);
    }, 1000),
  },

  computed: {
    computedHint() {
      return `Found ${this.count} users.`;
    },

    search: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  props: {
    count: {
      type: Number,
      default: 0,
    },
    value: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
.search__input {
  width: 520px;

  border-radius: 2px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.75);
  background: #fafafa !important;
  .v-input__controll {
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  }
  .v-text-field__details {
    float: right;
  }
}
</style>
