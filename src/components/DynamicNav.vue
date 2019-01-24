<template>
    <b-navbar toggleable="md" type="dark" variant="dark">
        <div class="container">
          <b-navbar-nav>
            <b-nav-item v-for="(value, index) in this.userInfo.links" :key="index" >{{ value }}</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item right>
              <b-button v-if="this.userInfo.loggedIn === false" size="sm" class="account-btn my-2 my-sm-0" @click="userLogin"><font-awesome-icon icon="sign-in-alt" />&nbsp;&nbsp;Sign In</b-button>
              <b-button v-else size="sm" class="account-btn my-2 my-sm-0" @click="userLogout"><font-awesome-icon icon="sign-out-alt" />&nbsp;&nbsp;Sign Out</b-button>
            </b-nav-item>
          </b-navbar-nav>
        </div>
    </b-navbar> 
</template>

<script>
// import axios
import axios from 'axios';

export default {
  name: "DynamicNav",
  data: function() {
    return {
      userInfo: {
        links: [

        ],
        role: '',
        loggedIn: false
      }
    };
  },
  methods: {
    userLogin: function() {
      // console.log("user login attempted");
      axios.get('https://api.jsonbin.io/b/5c492ad6b0141617ba96a75e')
      .then(response => {
        this.userInfo = response.data
        console.log(this.userInfo.links);
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


