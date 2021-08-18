<template>
  <div class="container">
    <button @click="reject()">Nah</button>
    <Card :currentOption="currentOption"></Card>
    <button @click="accept()">Yeah!</button>
  </div>
</template>

<script lang="ts">
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

export default {
  name: 'match-screen',
  computed: {
    currentOption(): Option {
      return this.options[this.currentIndex];
    },
  },
  data: () => ({
      options: mockOptions,
      currentIndex: 0,
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
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
}

</style>
