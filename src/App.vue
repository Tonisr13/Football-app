<template>
  <div class="relative">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    padding-top: 80px;
    padding-bottom: 20px;
  }
  .relative {
    position: relative;
  }
</style>
