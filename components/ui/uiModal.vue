<template>
    <div v-if="visible" class="modal">
        <div ref="modalRef" class="modal__content">
            <button class="modal__close" @click="closeModal">×</button>
            <slot />
            <div v-if="$slots.buttons" class="modal__buttons">
                <slot name="buttons" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from "vue";
import { onClickOutside } from "@vueuse/core";

interface Props {
    modelValue: boolean;
    id: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{
    (event: "update:modelValue", value: boolean): void;
}>();

const visible = ref<boolean>(props.modelValue);
const modalRef = ref<HTMLElement | null>(null);

watch(
    () => props.modelValue,
    (newVal) => {
        visible.value = newVal;
    },
);

const closeModal = () => {
    visible.value = false;
    emit("update:modelValue", false);
};

const onEscapeKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
        closeModal();
    }
};

onMounted(() => {
    document.addEventListener("keydown", onEscapeKey);
});

onUnmounted(() => {
    document.removeEventListener("keydown", onEscapeKey);
});

onClickOutside(modalRef, closeModal);
</script>

<style scoped lang="scss">
.modal {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;

    &__content {
        background: var(--secondary-bg);
        padding: 20px;
        border-radius: 8px;
        position: relative;
        min-width: 300px;
        max-width: 500px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        color: var(--primary-text);
        font-family: var(--font-family);
        transition: all 0.3s ease;
    }

    &__close {
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
        color: var(--secondary-text);
        transition: color 0.2s;

        &:hover {
            color: var(--primary-text);
        }
    }

    &__buttons {
        margin-top: 20px;
        display: flex;
        justify-content: flex-end;
        gap: 10px;

        button {
            background-color: var(--button-bg);
            color: var(--button-text);
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;

            &:hover {
                background-color: var(--button-hover-bg);
            }
        }
    }
}
</style>
