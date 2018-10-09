<template>
  <div>
    <select v-model="selected" v-if="hasMoreThanOneAccount">
      <option > </option>
      <option v-for="account in accounts" :key="account.id" :value="account.id">
        {{account.domain}}
      </option>
    </select>
    <div>
      selected account is: {{selectedAccount}}
    </div>
    <br/>
    <br/>
    <div>
      <h3>operations requiring selected account</h3>
      <button :disabled="!isSelectedAccountAvailable">make api call</button><br/>
      <button :disabled="!isSelectedAccountAvailable">make another api call</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      selected: null,
    };
  },
  computed: {
    ...mapState(['accounts', 'selectedAccount']),
    ...mapGetters(['hasMoreThanOneAccount', 'isSelectedAccountAvailable']),
  },
  methods: {
    ...mapMutations(['setSelectedAccount']),
  },
  watch: {
    selected(newVal) {
      if (newVal) {
        this.setSelectedAccount(newVal);
      }
    },
  },
};
</script>

<style>
button:disabled {
  background-color: lightgray;
  color: #555;
}
</style>
