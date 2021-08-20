<template>
    <n-card title="Card">
        Price: {{this.currentOption.price}}
        Time to : {{this.currentOption.timeTo}}
        <template #action>
            Action
        </template>
    </n-card>
</template>

<script lang="ts">
import { PropType } from '@vue/runtime-core';
import { NCard } from 'naive-ui';
import { Option } from '../models/Option';

export default {
    name: 'Card',
    props: {
        currentOption: {
            type: Object as PropType<Option>,
            required: true,
        },
    },
    components: {
        NCard,
    },
};
</script>

<style>
.card {
    background: #fff;
    border-radius: 2px;
    margin: 1rem;
    position: relative;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.card-header {
    display: flex;
}

.card-header {
    padding: .5rem;
}

.card-row > * {
    margin: .5rem 0 .5rem 0;
    flex-grow: 1;
}
</style>
