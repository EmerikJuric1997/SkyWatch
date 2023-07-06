<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>
<style scoped>
ion-app {
  background: linear-gradient(rgb(31, 45, 97) 0%, rgba(104, 165, 233, 1) 100%);
}
</style>
