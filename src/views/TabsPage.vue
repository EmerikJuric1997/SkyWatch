<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar>
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="cloud" />
        </ion-tab-button>
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon aria-hidden="true" :icon="search" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon } from '@ionic/vue';
import { cloud, search } from 'ionicons/icons';
export default {
  components: {
    IonPage, 
    IonTabs, 
    IonRouterOutlet, 
    IonTabBar, 
    IonTabButton, 
    IonIcon
  },
  data() {
    return {
cloud,
search
    };
  }
  }
</script>
<style scoped>
ion-tab-bar,
ion-tab-button {
  background-color: #608cbe;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  border: none;
}
ion-tab-bar {
  box-shadow: 0 0 40px #feffff76;
}
ion-icon {
  filter: drop-shadow(4px 4px 6px #0000007d);
  color: #e2e2e2;
}
</style>
