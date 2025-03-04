<script setup lang="ts">
import { computed } from "vue";
const { comment, deep } = defineProps<{
    comment: Object;
    deep: number;
}>();

const lastBlock = ref(null);
onMounted(() => {
    if (lastBlock.value?.classList.contains("my-class")) {
        console.log("Елемент має клас my-class  reigns");
    } else {
        console.log("Елемент НЕ має клас my-class");
    }
});
</script>

<template>
    <div
        :class="`comment ${comment.replies.length ? 'comment__first' : ''}`"
        ref="lastBlock"
    >
        <div :class="`comment__deep comment__deep--${deep}`">
            <div class="comment__col">
                <UserAvatar :src="comment.user.avatar" />
            </div>
            <div class="comment__col">
                <PostHeader
                    :user="comment.user"
                    :createdAt="comment.createdAt"
                />
                <PostContent :content="comment.text" />
                <PostActions
                    :likes="comment.likes || 0"
                    :commentsCount="comment.replies.length"
                />
            </div>
        </div>
        <Comments
            v-if="comment.replies.length"
            v-for="reply in comment.replies"
            :key="reply.id"
            :deep="(deep ?? 0) + 1"
            :comment="reply"
        />
    </div>
</template>
<style lang="scss">
.comment {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    width: 100%;
    &::before {
        content: "";

        position: absolute;
        top: 60px;
        left: 0;

        width: 2px;
        height: 100%;
        background: red;
    }

    &__deep {
        display: flex;
        gap: 10px;
        padding: 24px;

        width: 100%;

        &--1 {
            width: calc(100% - 50px);
            /* padding-left: 50px; */
        }

        &--2 {
            width: calc(100% - 70px);
        }
    }
    &__col {
        display: flex;
        flex-direction: column;
    }
}
</style>
