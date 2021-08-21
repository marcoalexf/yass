<template>
    <n-card :title="this.currentOption.name" class="card">
        Price: {{this.currentOption.price}}
        Distance : {{this.currentOption.distance}}
        <template #action class="actions">
            <n-button circle class="favorite">
                <template #icon>
                    <n-icon v-if="this.currentOption.favorite"><favorite-filled /></n-icon>
                    <n-icon
                    v-if="!this.currentOption.favorite"
                    ><favorite-border-outlined /></n-icon>
                </template>
            </n-button>
        </template>
    </n-card>
</template>

<script lang="ts">
import { PropType } from '@vue/runtime-core';
import { NCard, NButton, NIcon } from 'naive-ui';
import { FavoriteFilled, FavoriteBorderOutlined } from '@vicons/material';
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
        NButton,
        NIcon,
        FavoriteFilled,
        FavoriteBorderOutlined,
    },
};
</script>

<style>
.card {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.n-card > .n-card__action {
    display: flex;
    align-items: center;
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

.favorite {
    color: red;
}
</style>
