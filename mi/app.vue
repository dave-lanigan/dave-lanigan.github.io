<template>
  <div :data-theme="theme" class="h-max min-h-screen">
    
    <div class="w-100 flex justify-end p-2"><UiThemeController /></div>
    
    <div class="flex flex-col items-center pb-6">
      
      <UiBaseCard />
      
      <div class="bg-neutral w-px h-6"></div>
      
      <UiInfoCard headerIcon="code">
        <template #header>Backend</template>
        <template #default>
          My work as an Engineer my role involved building microservices in Pyton and Go using the FastAPI and Fiber frameworks and my prefered web frameworks. 
        </template>
        <template #tech>
          <font-awesome :icon="['fab', 'python']" class="text-lg" />
          <font-awesome :icon="['fab', 'golang']" class="text-lg ml-2" />
        </template>
      </UiInfoCard>
      
      <div class="bg-neutral w-px h-6"></div>
      
      <UiInfoCard headerIcon="laptop-code">
        <template #header>Frontend</template>
        <template #default>
          My work as an Engineer my role involved building microservices in Pyton and Go using the FastAPI and Fiber frameworks and my prefered web frameworks. 
        </template>
        <template #tech>
          <font-awesome :icon="['fab', 'vuejs']" class="text-lg" />
          <font-awesome :icon="['fab', 'react']" class="text-lg ml-2" />
          <font-awesome :icon="['fab', 'r-project']" class="text-lg ml-2" />
        </template>
      </UiInfoCard>

      <div class="bg-neutral w-px h-6"></div>
      
      <UiInfoCard headerIcon="code-compare">
        <template #header>DevOps</template>
        <template #default>
          I'm experience with Github Actions especially utilizing composite actions and re-usable workflows to manage CICD pipelines as well as deploying scallable serverless solutions on AWS by building infrastructure using CloudFormation and Terraform.
        </template>
        <template #tech>
          <font-awesome :icon="['fab', 'aws']" class="text-lg" />
          <font-awesome :icon="['fab', 'github']" class="text-lg ml-2" />
        </template>
      </UiInfoCard>

    </div>
  </div>
</template>
<script setup>
const theme = useState('theme');
theme.value = "dim";
</script>