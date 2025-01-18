<template>
    <div class="card bg-neutral text-base-content sm:w-3/4 md:w-1/2 border-md font-sans">
        <div class="card-body">
            <h2 class="card-title font-normal text-primary flex justify-between">
                <slot name="header"></slot>
                <font-awesome :icon="['fas', props.headerIcon]" class="text-xl ml-2" />
            </h2>
            <p class="mt-2 mb-2 text-neutral-content font-normal leading-snug"><slot></slot></p>
            <div class="text-accent"><slot name="tech"></slot></div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['headerIcon'])
</script>