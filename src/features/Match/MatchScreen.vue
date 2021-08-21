<template>
  <div class="container">
    <div class="hover-area" :class="{
      'being-rejected': rejectReady
    }" @mouseover="rejectReady = true" @mouseleave="rejectReady = false" @click="reject()">
    </div>
    <Card v-if="currentOption" :currentOption="currentOption" class="card" :class="{
      'accept-ready': acceptReady,
      'reject-ready': rejectReady
    }"></Card>
    <div class="hover-area" :class="{
      'being-accepted': acceptReady
    }" @mouseover="acceptReady = true" @mouseleave="acceptReady = false" @click="accept()">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Option } from '@/models/Option';
import Card from '../../components/Card.vue'
import { auth, userItemsCollection } from '../../../firebase-config'

export default defineComponent({
  name: 'match-screen',
  mounted() {
    if (auth.currentUser) {
      userItemsCollection(auth.currentUser.uid).onSnapshot((snapshotChange) => {
        snapshotChange.forEach((doc) => {
          const { name, price, distance, type, favorite } = doc.data();
          const option: Option = {
            id: doc.id,
            name,
            price,
            distance,
            type,
            favorite,
          };
          this.options.push(option);
        })
      });
    }
  },
  computed: {
    currentOption() {
      return this.options[this.currentIndex];
    },
  },
  data: () => {
    const options: Option[] = [];
    const currentIndex = 0;
    const rejectReady = false;
    const acceptReady = false;
    const data = {
      options,
      currentIndex,
      rejectReady,
      acceptReady,
    }
    return data;
  },
  methods: {
    accept() {
      // next in options
      if (this.currentIndex + 1 < this.options.length) this.currentIndex += 1;
      this.acceptReady = false;
      if (process.env.NODE_ENV === 'development') console.log('accepted');
    },
    reject() {
      // previous in options
      if (this.currentIndex - 1 >= 0) this.currentIndex -= 1;
      this.rejectReady = false;
      if (process.env.NODE_ENV === 'development') console.log('rejected');
    },
  },
  components: {
    Card,
  },
});
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
}

.container > * {
  margin: 0 5px 0 5px;
}

.accept-ready {
  opacity: .95;
  animation:accept .1s ease-in-out forwards;
}

.reject-ready {
  opacity: .95;
  animation:reject .1s ease-in-out forwards;
}

.hover-area {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.card {
  position: absolute;
  width: 300px;
}

.being-accepted {
  background-color: limegreen;
}

.being-rejected {
  background-color: rgba(255, 0, 0, 0.5);
}

@keyframes reject { 100% { transform: rotate(-10deg) translate(-50px, 0px); } }
@keyframes accept { 100% { transform: rotate(10deg) translate(50px, 0px); } }

</style>
