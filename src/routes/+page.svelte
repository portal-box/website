<script>
  import Header from '../components/page/Header.svelte';

  import '../app.css';
  import Main from '../components/page/Main.svelte';
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
  class="flex flex-col items-center justify-between bg-background min-h-[100vh] w-full text-white"
>
  <div
    id="app"
    class="flex flex-col items-center min-h-full max-w-[1024px] p-10"
  >
    <Header />
    <Main />
  </div>
</div>
