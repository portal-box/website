<script lang="ts">
  import '../app.css';
  import Button from './Button.svelte';

  export let titleColor: string, title: string;
</script>

<div
  class="flex flex-col gap-4 flex-1 justify-between max-w-[500px] md:w-full md:max-w-full {$$props.class}"
>
  <h1 class="text-1xl font-semibold" style="color:{titleColor};">
    {title}
  </h1>
  <slot />
</div>
