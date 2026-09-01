<template>
  <main class="mx-auto w-11/12 pb-12 sm:w-3/4 md:w-7/12 lg:w-5/12">
    <NuxtLink
      to="/"
      class="inline-flex items-center gap-2 text-sm text-base-content/70 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <font-awesome :icon="['fas', 'arrow-left']" class="text-xs" />
      Back home
    </NuxtLink>

    <header class="mb-8 mt-6">
      <h1 class="text-3xl font-normal text-base-content">Projects</h1>
      <p class="mt-2 leading-snug text-base-content/70">Things I've built and shipped.</p>
    </header>

    <div class="flex flex-col gap-10">
      <UiProjectCard
        name="Homey"
        url="https://homey-311927961239.us-central1.run.app/"
        repo="https://github.com/dave-lanigan/homey"
        image="/projects/homey.jpg"
        image-alt="The Homey home screen: a prompt box reading “Describe your ideal getaway” above suggested trip searches."
        :tech="['Cloud Run', 'Nuxt.js', 'FastAPI', 'Pydantic AI', 'TursoDB', 'Gemini AI']"
      >
        You describe the trip you want in plain language, and Homey finds places to stay that match. Filters are
        there when you want to narrow things down, but you never have to start with them.
      </UiProjectCard>

      <UiProjectCard
        name="LatAmities"
        url="https://latamities.vercel.app/"
        repo="https://github.com/dave-lanigan/latamities"
        image="/projects/latamities.jpg"
        image-alt="The LatAmities globe, showing Latin American cities marked from Mérida down to Mendoza."
        :tech="['Nuxt.js', 'Vercel']"
      >
        A map of Latin America for people working out where to live next. Pick a city marker for a quick snapshot,
        then open its full profile to weigh it against the others.
      </UiProjectCard>

      <UiProjectCard
        name="Vulgatae"
        url="https://vulgatae.vercel.app/"
        repo="https://github.com/dave-lanigan/vulgatae"
        image="/projects/vulgatae.jpg"
        image-alt="The Vulgatae home page: an illuminated manuscript header over a search bar and the verse of the day."
        :tech="['Nuxt.js', 'Tailwind CSS', 'Algolia', 'Vercel']"
      >
        A Latin-first reader for the Douay-Rheims Vulgate. Every verse sits beside its English translation, with a
        verse of the day, guided reading plans, and search across all 73 books.
      </UiProjectCard>
    </div>
  </main>
</template>
