<template>
  <v-card
    class="user_card"
    color="secondary"
    :class="user.selected ? 'user_card__active' : ''"
  >
    <v-card-text class="user_card__text">
      <v-img
        v-if="user.avatar"
        :src="user.avatar"
        class="user_card__avatar"
      ></v-img>
      <v-avatar
        v-else
        color="grey lighten-2"
        size="128"
        tile
        class="user_card__avatar user_card__avatar_initials"
      >
        <span>{{ createInitials(user.name) }}</span>
      </v-avatar>

      <div class="user_card__info">
        <div class="user_name__row ml-6">
          <span class="user_card__name" v-html="user.name"> </span>

          <span class="user_card__email" v-html="user.email"> </span>
        </div>

        <p class="user_card__title ml-6 mt-1 mb-0" v-html="user.title"></p>
        <span
          class="user_card__address ml-6 mt-1 pt-0"
          v-html="user.address + ' , ' + user.city"
        >
        </span>

        <v-divider v-show="!user.selected" class="ml-2"></v-divider>
      </div>
    </v-card-text>
    <v-card-actions class="user_card__actions">
      <v-btn text color="accent" @click="userClick(user)">
        <span v-if="user.selected">skip selection</span>
        <span v-else>mark as suitable</span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "User",
  data() {
    return {};
  },
  props: {
    user: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    createInitials(name) {
      const fullName = name.split(" ");
      const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
      return initials.toUpperCase();
    },

    userClick(user) {
      this.$emit("user:click", user);
    },
  },
};
</script>
<style lang="scss" scoped>
$user-margin: 134px;
.user_card {
  height: $user-margin;
  margin-right: 16px;

  box-sizing: border-box;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  border-radius: 3px;
}

.user_card__active {
  border: 1px solid #4765ff !important;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  left: 0;
  top: 0;
}

.user_card__avatar {
  position: absolute;
  width: $user-margin;
  background: #bbbbbb;
  border-radius: 3px 0 0 3px;
  left: -1px;
  top: -1px;
  bottom: 0;
}

.user_card__avatar_initials {
  color: #4765ff;
  font-size: 24px;
  font-weight: 700;
}

.user_card__info {
  position: absolute;
  left: $user-margin;
  width: calc(100% - 134px);
  padding-right: 8px;
}

.user_card__name {
  margin-top: 0;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
  white-space: nowrap;
  padding-right: 2px;

  color: rgba(0, 0, 0, 0.87);
}

.user_card__email {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: end;
  word-break: break-word;
  text-align: end;
  padding-left: 2px;

  color: rgba(0, 0, 0, 0.54);
}

.user_name__row {
  display: flex;
  justify-content: space-between;
}

.user_card__title {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;

  color: rgba(0, 0, 0, 0.543846);
}

.user_card__address {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: rgba(0, 0, 0, 0.543846);
}

.user_card__actions {
  left: 140px;
  top: 88px;
  position: absolute;
}
</style>
              
    