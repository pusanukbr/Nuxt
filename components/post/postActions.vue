<template>
    <div class="post-actions">
        <button class="post-actions__item" @click.stop>
            <Icon
                name="fluent:heart-24-regular"
                class="post-actions__icon post-actions__icon--heart"
            />
            <span>{{ likes }}</span>
        </button>
        <button class="post-actions__item" @click.stop>
            <Icon name="fluent:comment-24-regular" class="post-actions__icon" />
            <span>{{ commentsCount }}</span>
        </button>
        <button class="post-actions__item" @click.stop>
            <span>
                <Icon
                    name="fluent:arrow-repeat-all-24-regular"
                    class="post-actions__icon"
                />
            </span>
            <span>2</span>
        </button>
    </div>
</template>

<script setup>
defineProps(["likes", "commentsCount"]);
</script>

<style lang="scss">
.post-actions {
    display: flex;

    margin-left: -15px;

    &__item {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        padding: 10px 15px;

        background: none;

        border: none;
        border-radius: 15px;

        color: var(--post-icon);

        cursor: pointer;

        transition: all 0.3s ease-in-out;

        &:hover {
            background-color: var(--primary-bg);
        }
    }

    &__icon {
        font-size: 18px;

        /* &--heart {
            color: var(--danger);
        } */
    }
}
</style>
