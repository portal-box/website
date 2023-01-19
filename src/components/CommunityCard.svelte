<script lang="ts">
  import '../app.css';
  import Button from './Button.svelte';

  export let titleColor: string, title: string;
</script>

<div class="flex flex-col gap-3 flex-1 md:w-full">
  <h1 class="text-1xl font-semibold" style="color:{titleColor};">{title}</h1>
  <slot />
</div>
