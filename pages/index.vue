<script lang="ts" setup>
    const {data} = await useAsyncData("projects", () => {
        const projects = $fetch("https://whole-words-smell.loca.lt/api/projects", {
        });
        return projects;
    });

    const projects = ref(data.value?.data);
    
    onMounted(() => {
        console.log(projects.value);
    });
</script>

<template>
  <div>
    <h1>This is my h1</h1>
    <ul>
        <h2 v-for="project in projects">{{ project.id - 1 }}</h2>
    </ul>
  </div>
</template>