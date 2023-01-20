<script>
  import '../app.css';
  export let padding = '64px';
  // style="padding-bottom:{padding};"
</script>

<div class="w-full flex flex-col items-center {$$props.class}">
  <slot />
</div>
