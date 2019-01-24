<template>
  <div id="app">
    <div v-if="!this.loggedIn">
      <b-navbar toggleable="md" type="dark" variant="dark">
        <div class="container">
          <b-navbar-nav>
            <b-nav-item href="#">Home</b-nav-item>
            <b-nav-item href="#products">Products</b-nav-item>
            <b-nav-item href="/pricing/">Pricing</b-nav-item>
            <b-nav-item href="#news">News</b-nav-item>
            <b-nav-item href="#about">About</b-nav-item>
            <b-nav-item href="/contact/">Contact</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item right>
              <b-button v-if="this.loggedIn === false" size="sm" class="account-btn my-2 my-sm-0" @click="userLogin"><font-awesome-icon icon="sign-in-alt" />&nbsp;&nbsp;Sign In</b-button>
              <b-button v-else size="sm" class="account-btn my-2 my-sm-0" @click="userLogout"><font-awesome-icon icon="sign-out-alt" />&nbsp;&nbsp;Sign Out</b-button>
            </b-nav-item>
          </b-navbar-nav>
        </div>
      </b-navbar>
    </div>
    <div v-if="this.loggedIn === true && this.role === 'admin'">
      <AdminNav />
    </div>
    <div v-if="this.loggedIn === true && this.role === 'rater'">
      <RaterNav />
    </div>

  </div>
</template>

<script>
import AdminNav from './components/AdminNav.vue'
import RaterNav from './components/RaterNav.vue'

export default {
  name: 'app',
  components: {
    AdminNav,
    RaterNav
  },
  data: function() {
    return {
      loggedIn: false,
      role: 'admin'
    }
  },
  methods: {
    userLogin: function() {
      // console.log("user login attempted");
      this.loggedIn = true
    },
    userLogout: function() {
      this.loggedIn = false
    }
  }
}
</script>

<style>

  nav {
    height: 50px;
  }

  .nav-item{
    padding: 10px;
  }

  .navbar {
    padding: 0 !important;
  }
  .container {
    font-size: 14px;
  }


  .account-btn {
      color: #333 !important;
      background-color: #fff !important;
      border-color: #ccc !important;
  }

</style>
