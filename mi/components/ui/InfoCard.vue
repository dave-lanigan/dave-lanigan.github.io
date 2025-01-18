<template>
    <div class="collapse bg-neutral w-11/12 sm:w-3/4 md:w-7/12 lg:w-5/12 border-md font-sans">
        <input type="checkbox" />
        <div class="collapse-title text-xl">
                <h2 class="font-normal text-primary flex justify-between items-center">
                    <slot name="header"></slot>
                    <font-awesome :icon="['fas', props.headerIcon]" class="text-xl" />
                </h2>
        </div>
        <div class="collapse-content">
                <p class="mt-2 mb-2 text-neutral-content font-normal leading-snug"><slot></slot></p>
                <div class="text-accent flex justify-center mt-6"><slot name="tech"></slot></div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['headerIcon'])
</script>
<style>
.collapse-title {
    padding-inline-end: 1rem !important;
}
</style>