# dave-lanigan.github.io

## Tech

- Deno
- NuxtJS
- daisyUI
- tailwindcss


```bash
deno -A npm:nuxi@latest init mi
```

### Notes:

Installing to deno environment did not install all the dependancies:

Run:

```bash
deno install --allow-scripts npm:@nuxt/ui@next npm:@nuxtjs/tailwindcss/merger npm:tailwindcss npm:@tailwindcss/forms npm:@tailwindcss/typography npm:@tailwindcss/aspect-ratio npm:@tailwindcss/container-queries npm:@headlessui/tailwindcss
```