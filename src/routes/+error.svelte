<script>
  import Header from '../components/page/Header.svelte';

  import '../app.css';
</script>

<svelte:head>
  <meta name="theme-color" content="#2f3136" />
  <meta property="og:url" content="https://portalbox.link" />
  <meta property="og:title" content="Portal Box" />
  <meta property="og:type" content="website" />
  <meta
    property="og:description"
    content="Providing a range of powerful tools to assist Minecraft plugin developers."
  />
  <meta name="theme-color" data-react-helmet="true" content="#2f3136" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div
  id="body"
  class="flex flex-col items-center bg-background min-h-[100vh] w-full text-white"
>
  <div
    id="app"
    class="flex flex-col items-center justify-center gap-24 min-h-[100vh] max-w-[1280px] p-14 xs:p-7"
  >
    <Header text="Oops! This page doesn't exist." redirect />
  </div>
</div>
