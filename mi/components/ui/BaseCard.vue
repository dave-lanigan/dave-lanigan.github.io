<template>
    <div class="card bg-neutral text-base-content w-11/12 sm:w-3/4 md:w-7/12 lg:w-5/12 border-md font-sans">
        <div class="card-body">
            <!-- <UiThemeController /> -->
            <div class="avatar">
                <div class="mask mask-circle w-24 mt-4 mb-4">
                    <img src="~/assets/img/profile-pic-v3.png" />
                </div>
            </div>
            <h2 class="card-title font-normal text-primary text-2xl">Hi, I'm David.</h2>
            <p class="mt-2 mb-2 prose text-neutral-content font-normal leading-snug">
                A full stack developer who enjoys developing with FastAPI and VueJS. My daily work involves building serverless apps deployed on the AWS Cloud, as well as building CICD pipelines with Github Actions.
            </p>
            
            <div class="text-accent flex items-center justify-between">
                <div>
                    <a href="https://github.com/dave-lanigan">
                        <font-awesome :icon="['fab', 'github']" class="text-xl link hover:scale-125 transition-transform duration-300" />
                    </a>
                    <a href="https://linkedin.com/in/david-lanigan-734b0a8a">
                        <font-awesome :icon="['fab', 'linkedin']" class="text-xl ml-3 link hover:scale-125 transition-transform duration-300" />
                    </a>
                    <a href="">
                        <font-awesome :icon="['fab', 'upwork']" class="text-xl ml-3 link hover:scale-125 transition-transform duration-300" />
                    </a>
                    <!-- <a href="https://www.cloudskillsboost.google/public_profiles/9b5970de-dbbf-4e45-ae3f-8561635b08e2">
                        <svg class="ml-3" xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 128 128"><g fill="currentColor"><path d="M80.6 40.3h.4l-.2-.2l14-14v-.3c-11.8-10.4-28.1-14-43.2-9.5S24.9 32.8 20.7 48c.2-.1.5-.2.8-.2c5.2-3.4 11.4-5.4 17.9-5.4c2.2 0 4.3.2 6.4.6c.1-.1.2-.1.3-.1c9-9.9 24.2-11.1 34.6-2.6z"/><path d="M108.1 47.8c-2.3-8.5-7.1-16.2-13.8-22.1L80 39.9c6 4.9 9.5 12.3 9.3 20v2.5c16.9 0 16.9 25.2 0 25.2H63.9v20h-.1l.1.2h25.4c14.6.1 27.5-9.3 31.8-23.1s-1-28.8-13-36.9"/><path d="M39 107.9h26.3V87.7H39c-1.9 0-3.7-.4-5.4-1.1l-15.2 14.6v.2c6 4.3 13.2 6.6 20.7 6.6z"/><path d="M40.2 41.9c-14.9.1-28.1 9.3-32.9 22.8c-4.8 13.6 0 28.5 11.8 37.3l15.6-14.9c-8.6-3.7-10.6-14.5-4-20.8c6.6-6.4 17.8-4.4 21.7 3.8L68 55.2C61.4 46.9 51.1 42 40.2 42.1z"/></g></svg>
                    </a> -->
                </div>
                <div>
                    <font-awesome :icon="['fas', 'envelope']" class="text-xl link hover:scale-125 transition-transform duration-300" />
                    <font-awesome :icon="['fab', 'whatsapp']" class="text-xl ml-3 link hover:scale-125 transition-transform duration-300" />
                </div>
            </div>
        </div>

    </div>
</template>