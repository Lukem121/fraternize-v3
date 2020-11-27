<template>
  <header>
    <nav>
      <!-- Today -->
      <router-link to="/events" class="link">
        <div>
          <img
            alt="logo-bento"
            class="icons"
            src="@/assets/icons/calander.svg"
          />
          <span class="link-text">Events</span>
        </div>
      </router-link>

      <!-- Favorites -->
      <router-link to="/favorites" class="link">
        <div>
          <img alt="favorites" class="icons" src="@/assets/icons/star.svg" />
          <span class="link-text">Favorites</span>
        </div>
      </router-link>

      <!-- Messages -->
      <router-link to="/messages" class="link">
        <div>
          <img alt="messages" class="icons" src="@/assets/icons/messages.svg" />
          <span class="link-text">Messages</span>
        </div>
      </router-link>

      <!-- Profile -->
      <router-link to="/profile" class="link">
        <div>
          <img alt="logo-bento" class="icons" src="@/assets/icons/user.svg" />
          <span class="link-text">Profile</span>
        </div>
      </router-link>
    </nav>
  </header>
</template>

<script>
import firebase from 'firebase/app'

export default {
  methods: {
    async logout() {
      await firebase.auth().signOut()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.navbar {
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100vw;
  height: $navbar-height;
  background-color: $navbar-color;

  .link {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
  }

  .icons {
    height: 24px;
  }

  .nav-links {
    display: flex;
    align-items: center;
    justify-content: center;

    .nav-item {
      position: relative;
      display: inline-block;
    }
  }
}
</style>
