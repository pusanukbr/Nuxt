<template>
    <div class="empty__page">
        <slot />
    </div>
    <slot />
</template>

<style lang="scss">
.empty__page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;

    width: 100%;
    min-height: 100vh;
}
</style>
