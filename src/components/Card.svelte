<script lang="ts">
  import '../app.css';
</script>

<div
  class="bg-card rounded-xl justify-between flex flex-col gap-4 flex-1 p-5 text-center items-center {$$props.class ??
    ' '}"
>
  <slot />
</div>
