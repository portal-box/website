<script lang="ts">
  import Button from '../../components/Button.svelte';
  import Section from '../../components/Section.svelte';
  import '../../app.css';

  export let text: string, redirect = false;
</script>

<Section>
  <div class="flex flex-col items-center gap-4 max-w-sm">
    <img class="" src="logo.png" alt="Logo" />
    <h1 class="text-xl text-center">
      {text}
    </h1>
    
    {#if redirect}
      <Button 
        buttonType="secondary"
        href="/"
        ><img
        class="mr-2 w-3.5 rotate-180 invert"
        src="icon/arrow-right.svg"
        alt="Arrow right"
        />
        Go back</Button
      >
    {/if}
  </div>
</Section>
