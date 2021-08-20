<template>
  <div class="container">
    <div class="hover-area" :class="{
      'being-rejected': rejectReady
    }" @mouseover="rejectReady = true" @mouseleave="rejectReady = false">
      <button @click="reject()">Nah</button>
    </div>
    <Card :currentOption="currentOption" class="card" :class="{
      'accept-ready': acceptReady,
      'reject-ready': rejectReady
    }"></Card>
    <div class="hover-area" :class="{
      'being-accepted': acceptReady
    }" @mouseover="acceptReady = true" @mouseleave="acceptReady = false">
      <button @click="accept()">Yeah!</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '@/components/Card.vue';
import { Option } from '@/models/Option';

const mockOptions: Option[] = [
  {
    id: '1',
    name: 'Pizza Restaurant',
    cost: 5,
    timeTo: 4,
  },
  {
    id: '2',
    name: 'Burguer Restaurant',
    cost: 1,
    timeTo: 5,
  },
  {
    id: '3',
    name: 'Bar Restaurant',
    cost: 2,
    timeTo: 3,
  },
];

export default defineComponent({
  name: 'match-screen',
  computed: {
    currentOption() {
      return this.options[this.currentIndex];
    },
  },
  data: () => ({
      options: mockOptions,
      currentIndex: 0,
      rejectReady: false,
      acceptReady: false,
  }),
  methods: {
    accept() {
      // next in options
      if (this.currentIndex + 1 < this.options.length) this.currentIndex += 1;
      if (process.env.NODE_ENV === 'development') console.log('accepted');
    },
    reject() {
      // previous in options
      if (this.currentIndex - 1 >= 0) this.currentIndex -= 1;
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
