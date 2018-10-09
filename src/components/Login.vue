<template>
  <div>
    <input type="text" v-model="username"><br/>
    <input type="password" v-model="password"><br/>
    <button @click="submit">Log-in</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      username: null,
      password: null,
    };
  },
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
  watch: {
    isLoggedIn(newVal) {
      if (newVal) {
        console.log('moving on to Home after successful login.');
        this.$router.push({ name: 'home' });
      }
    },
  },
  methods: {
    submit() {
      this.login({
        username: this.username,
        password: this.password,
      });
    },
    ...mapActions(['login']),
  },
};
</script>
