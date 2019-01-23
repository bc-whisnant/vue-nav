<template>
  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item href="#">Home</b-nav-item>
      <b-nav-item href="#products">Products</b-nav-item>
      <b-nav-item href="/pricing/">Pricing</b-nav-item>
      <b-nav-item href="#news">News</b-nav-item>
      <b-nav-item href="#about">About</b-nav-item>
      <b-nav-item href="/contact/">Contact</b-nav-item>
      <b-nav-item href="#" v-if="this.userInfo.role ==='admin' && this.userInfo.loggedIn">Admin Only</b-nav-item>
      <b-nav-item href="#" v-if="this.userInfo.role =='tester' || this.userInfo.loggedIn">Testing Only</b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
      <b-nav-item right>
        <b-button v-if="this.userInfo.loggedIn === false" size="sm" class="my-2 my-sm-0" @click="userLogin"><font-awesome-icon icon="sign-in-alt" />&nbsp;&nbsp;Sign In</b-button>
        <b-button v-else size="sm" class="my-2 my-sm-0" @click="userLogout"><font-awesome-icon icon="sign-out-alt" />&nbsp;&nbsp;Sign Out</b-button>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
// import axios
import axios from 'axios';
export default {
  name: "Navbar",
  data: function() {
    return {
      userInfo: {
        role: '',
        loggedIn: false
      }
    };
  },
  methods: {
    userLogin: function() {
      // console.log("user login attempted");
      axios.get('https://api.myjson.com/bins/qys18')
      .then(response => {
        this.userInfo = response.data
        this.userInfo.loggedIn = true;
      })
      .catch (e => {
        this.errors.push(e)
      })
    },
    userLogout: function() {
      this.userInfo.loggedIn = false
    }
  },
  
};
</script>

<style>
</style>


