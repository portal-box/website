<script lang="ts">
  import Card from './Card.svelte';
  import '../app.css';

  export let title: string, description: string;
</script>

<Card class="flex-1">
  <h1 class="text-3xl">{title}</h1>
  <h2 class="text-[#BBBBBB] text-xl flex-1 pb-5">
    {description}
  </h2>
  <div
    class="flex xs:flex-col gap-4 justify-even items-center justify-center w-full"
  >
    <slot />
  </div>
</Card>
