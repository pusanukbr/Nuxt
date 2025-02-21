<template>
    <div class="post-header">
        <div class="post-header__info">
            <span class="post-header__info--name">{{ user.username }}</span>
            <span class="post-header__info--date">{{
                formatDate(createdAt)
            }}</span>
        </div>
        <!-- <div class="post-header__dots"></div> -->
    </div>
</template>

<script setup>
defineProps(["user", "createdAt"]);
const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("uk-UA", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    }).format(date);
};
</script>

<style lang="scss">
.post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 0.9rem;
    color: var(--text-secondary);

    &__info {
        display: flex;

        &--name {
            margin-right: 0.5rem;

            font-weight: 600;
            color: var(--text-primary);
        }
        &--date {
            color: var(--secondary-text);
        }
    }
}
</style>
