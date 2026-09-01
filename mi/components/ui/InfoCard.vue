<template>
    <div class="info-card collapse bg-neutral w-11/12 sm:w-3/4 md:w-7/12 lg:w-5/12 border-md font-sans">
        <input type="checkbox" />
        <div class="collapse-title text-xl">
            <h2 class="font-normal text-primary flex justify-between items-center">
                <slot name="header"></slot>
                <font-awesome :icon="['fas', props.headerIcon]" class="text-xl" />
            </h2>
        </div>
        <div class="collapse-content">
            <div class="info-card-inner">
                <p class="mt-2 mb-2 text-neutral-content font-normal leading-snug"><slot></slot></p>
                <div class="text-accent flex justify-center items-center mt-6"><slot name="tech"></slot></div>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['headerIcon'])
</script>
<style>
.info-card.collapse {
    grid-template-rows: max-content 0fr;
    transition: grid-template-rows 0.18s ease-out;
}

.info-card.collapse:not(.collapse-close):has(> input[type="checkbox"]:checked),
.info-card.collapse:not(.collapse-close):has(> input[type="radio"]:checked) {
    grid-template-rows: max-content 1fr;
}

.info-card .collapse-content {
    min-height: 0;
    transition: none;
}

.info-card .collapse-content > .info-card-inner {
    min-height: 0;
    overflow: hidden;
}

.info-card:not(.collapse-close) > input[type="checkbox"]:checked ~ .collapse-content,
.info-card:not(.collapse-close) > input[type="radio"]:checked ~ .collapse-content {
    visibility: visible;
    min-height: 0;
}

.info-card .collapse-title {
    padding-inline-end: 1rem !important;
}

@media (prefers-reduced-motion: reduce) {
    .info-card.collapse {
        transition: none;
    }
}
</style>
