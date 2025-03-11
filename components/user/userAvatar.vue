<template>
    <div class="image-wrapper">
        <div v-if="loading" class="skeleton" />
        <NuxtImg
            :src="src"
            class="avatar"
            width="32"
            height="32"
            @load="onLoad"
            :class="{ hidden: loading }"
        />
    </div>
</template>

<script setup lang="ts">
const { src } = defineProps<{
    src: String;
}>();

const loading = ref(true)
const onLoad = () => {
    loading.value = false
}
</script>

<style scoped lang="scss">
.image-wrapper {
    position: relative;
    width: 32px;
    height: 32px;
    display: flex;
}

.avatar,
.skeleton {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: block;
    padding: 0;
}

.skeleton {
    background-color: var(--border);
    animation: pulse 1.2s infinite ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}

@keyframes pulse {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.4;
    }
    100% {
        opacity: 1;
    }
}

.hidden {
    display: none;
}
</style>
