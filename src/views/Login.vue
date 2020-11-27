<template>
  <div class="page-wrapper">
    <!-- <h1 class="home-page-title">{{ appTitle }}</h1> -->
    <!-- Offline instruction -->
    <div v-show="!networkOnLine" data-test="offline-instruction">
      Please check your connection, login feature is not available offline.
    </div>

    <div class="logos">
      <img
        alt="logo-bento"
        class="mascot"
        src="@/assets/img/fraternize-mascot.svg"
      />
      <img
        alt="logo-fraternize"
        class="text"
        src="@/assets/img/logo-text.png"
      />
    </div>
    <!-- Auth UI -->
    <div
      v-show="user !== undefined && !user && networkOnLine"
      data-test="login-btn"
      class="login-btn"
      @click="login"
    >
      Sign in with Google
    </div>
    <!-- Show login errors -->
    <p v-if="loginError">{{ loginError }}</p>
    <!-- Loader -->
    <div v-show="user === undefined" data-test="loader">Authenticating...</div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { isNil } from 'lodash'
import firebase from 'firebase/app'
import { desktop as isDekstop } from 'is_js'

export default {
  data: () => ({ loginError: null }),
  head() {
    return {
      title: {
        inner: 'Login'
      },
      meta: [
        {
          name: 'description',
          content: `Sign in or sign up to ${this.appTitle}`,
          id: 'desc'
        }
      ]
    }
  },
  computed: {
    ...mapState('authentication', ['user']),
    ...mapState('app', ['networkOnLine', 'appTitle'])
  },
  watch: {
    user: {
      handler(user) {
        if (!isNil(user)) {
          const redirectUrl = isNil(this.$route.query.redirectUrl)
            ? '/products'
            : this.$route.query.redirectUrl
          this.$router.push(redirectUrl)
        }
      },
      immediate: true
    }
  },
  methods: {
    ...mapMutations('authentication', ['setUser']),
    async login() {
      this.loginError = null
      const provider = new firebase.auth.GoogleAuthProvider()
      this.setUser(undefined)

      try {
        // Firebase signin with popup is faster than redirect
        // but we can't use it on mobile because it's not well supported
        // when app is running as standalone on ios & android
        // eslint-disable-next-line no-unused-expressions
        isDekstop()
          ? await firebase.auth().signInWithPopup(provider)
          : await firebase.auth().signInWithRedirect(provider)
      } catch (err) {
        this.loginError = err
        this.setUser(null)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-position: left;
  background-size: cover;
  background-image: url('../assets/img/home-bg.jpg');

  .logos {
    width: 20rem;
    .mascot {
      border: green 2px;
    }
    .text {
      margin-top: -30px;
      width: 20rem;
    }
  }
  .home-page-title {
    text-align: center;
  }
  .login-btn {
    background-color: $vue-color;
    color: $dark-color;
    padding: 0.5rem 1.5rem;
    border-radius: 0.5rem;
    font-size: 1.25rem;
    text-align: center;
    width: 70%;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 20%;
  }
}
</style>
