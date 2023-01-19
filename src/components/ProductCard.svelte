<script lang="ts">
  import Card from './Card.svelte';
  import '../app.css';

  export let title: string, description: string;
</script>

<Card>
  <h1 class="text-3xl">{title}</h1>
  <h2 class="text-[#BBBBBB] text-xl flex-1">
    {description}
  </h2>
  <div class="flex flex-col gap-4 items-stretch justify-center w-full">
    <slot />
  </div>
</Card>
