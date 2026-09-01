<template>
    <article
        class="project-card group relative w-full overflow-hidden rounded-box bg-neutral font-sans ring-1 ring-neutral-content/15 transition duration-200 hover:-translate-y-0.5 hover:ring-accent/60 focus-within:ring-accent/60"
    >
        <div class="flex items-center gap-3 border-b border-neutral-content/15 px-4 py-2.5">
            <span class="flex shrink-0 gap-1.5">
                <span class="h-2 w-2 rounded-full bg-neutral-content/25"></span>
                <span class="h-2 w-2 rounded-full bg-neutral-content/25"></span>
                <span class="h-2 w-2 rounded-full bg-neutral-content/25"></span>
            </span>
            <span class="truncate text-xs text-neutral-content/60">{{ host }}</span>
            <span class="ml-auto flex shrink-0 items-center gap-1.5 text-xs text-neutral-content/60">
                <span class="h-1.5 w-1.5 rounded-full bg-success"></span>
                Live
            </span>
        </div>

        <img
            :src="image"
            :alt="imageAlt"
            width="1280"
            height="640"
            class="block w-full border-b border-neutral-content/15"
        />

        <div class="p-6">
            <div class="flex items-start justify-between gap-4">
                <h2 class="text-2xl font-normal text-primary">{{ name }}</h2>
                <a
                    v-if="repo"
                    :href="repo"
                    target="_blank"
                    rel="noopener noreferrer"
                    :aria-label="`${name} source code on GitHub`"
                    class="relative z-10 shrink-0 text-xl text-accent transition-transform duration-200 hover:scale-125 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                    <font-awesome :icon="['fab', 'github']" />
                </a>
            </div>

            <p class="mt-2 leading-snug text-neutral-content"><slot /></p>

            <div v-if="tech?.length" class="mt-6 border-t border-neutral-content/15 pt-4">
                <p class="mb-3 text-xs uppercase tracking-[0.2em] text-accent">Built with</p>
                <ul class="flex flex-wrap gap-2">
                    <li
                        v-for="item in tech"
                        :key="item"
                        class="rounded-full border border-neutral-content/20 px-3 py-1 text-xs text-neutral-content/70"
                    >
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>

        <a
            :href="url"
            target="_blank"
            rel="noopener noreferrer"
            class="absolute inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
            <span class="sr-only">Open {{ name }}</span>
        </a>
    </article>
</template>

<script setup>
const props = defineProps({
    name: { type: String, required: true },
    url: { type: String, required: true },
    repo: { type: String, default: '' },
    image: { type: String, required: true },
    imageAlt: { type: String, required: true },
    tech: { type: Array, default: () => [] }
})

const host = computed(() => new URL(props.url).host)
</script>

<style scoped>
@media (prefers-reduced-motion: reduce) {
    .project-card,
    .project-card * {
        transition: none;
        transform: none;
    }
}
</style>
