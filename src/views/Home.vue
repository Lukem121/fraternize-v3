<template>
  <div class="page-wrapper">
    <!-- <h1 class="home-page-title">{{ appTitle }}</h1> -->
    <img
      alt="logo-bento"
      class="logo"
      src="@/assets/img/fraternize-mascot.svg"
    />
    <img alt="logo-fraternize" class="logo" src="@/assets/img/logo-text.png" />
    <router-link to="/login" class="login">Login</router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head() {
    return {
      title: {
        inner: 'Home'
      },
      meta: [
        {
          name: 'description',
          content: `${this.appTitle} home page`,
          id: 'desc'
        }
      ]
    }
  },
  computed: mapState('app', ['appTitle'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('../assets/img/home-bg.jpg');

  .logo {
    margin-bottom: 2rem;
    width: 20rem;
  }

  .home-page-title {
    text-align: center;
  }
  .login {
    //  mt-5 text-center text-xl font-bold py-2 px-6 rounded-lg w-10/12
    background-color: $vue-color;
    color: $dark-color;
    padding: 0.5rem 1.5rem;
    border-radius: 0.5rem;
    font-size: 1.25rem;
    text-align: center;
    width: 70%;
  }
}
</style>
