<template>
    <div class="card bg-neutral text-base-content sm:w-3/4 md:w-1/2 border-md font-sans">
        <div class="card-body">
            <div class="avatar">
                <div class="mask mask-circle w-24 mt-4 mb-4">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <h2 class="card-title font-normal text-primary text-2xl">Hi, I'm David.</h2>
            <p class="mt-2 mb-2 prose text-neutral-content font-normal leading-snug">
                A full stack developer who enjoys developing with FastAPI and NuxtJS. My daily work involves deploying serverless apps to the AWS Cloud as well as building CICD pipelines with Github Actions.
            </p>
            
            <div class="text-accent flex justify-between">
                <div>
                    <a href="https://github.com/dave-lanigan"><font-awesome :icon="['fab', 'github']" class="text-xl link hover:scale-125 transition-transform duration-300" /></a>
                    <a href="https://linkedin.com/in/david-lanigan-734b0a8a"><font-awesome :icon="['fab', 'linkedin']" class="text-xl ml-3 link hover:scale-125 transition-transform duration-300" /></a>
                </div>
                <div>
                    <font-awesome :icon="['fas', 'envelope']" class="text-xl link hover:scale-125 transition-transform duration-300" />
                    <font-awesome :icon="['fab', 'whatsapp']" class="text-xl ml-3 link hover:scale-125 transition-transform duration-300" />
                </div>
            </div>
        </div>

    </div>
</template>