<template>
    <div class="nav-card bg-info/20 rounded-box w-11/12 sm:w-3/4 md:w-7/12 lg:w-5/12 border-md font-sans">
        <nav class="nav-card-title flex justify-between gap-3" aria-label="Site navigation">
                <NuxtLink
                    to="/projects"
                    class="btn btn-sm btn-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                    Projects
                </NuxtLink>
                <a
                    href="https://medium.com/@bohemdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-sm btn-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                    Blog
                </a>
        </nav>
    </div>
</template>

<style scoped>
.nav-card-title {
    padding: 1rem;
    padding-inline-end: 1rem !important;
}
</style>
