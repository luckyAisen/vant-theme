<template>
  <div class="app-navbar-container">
    <div class="navbar-logo">
      <router-link to="/"> vant-theme-preview </router-link>
    </div>
    <div class="navbar-action">
      <a href="https://github.com/Aisen60/vant-theme.git" target="_blank">
        GitHub
      </a>
    </div>
  </div>
</template>

<style lang="less" scoped>
.app-navbar-container {
  border-bottom: solid 1px #efeff5;
  height: var(--app-main-container);
  padding: 0 32px;
  display: flex;
  align-items: center;

  .navbar-logo {
    font-size: 24px;
    cursor: pointer;
  }

  .navbar-action {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    padding-left: 32px;
  }
}
</style>
