<script>
  import Header from '../components/page/Header.svelte';
  import Section from '../components/Section.svelte';
  import Products from '../components/page/Products.svelte';
  import CommunityCards from '../components/page/CommunityCards.svelte';

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
    class="flex flex-col items-center justify-evenly gap-24 min-h-[100vh] max-w-[1280px] p-14 xs:p-7"
  >
    <Header />
    <!-- <Main /> -->
    <Section>
      <Products />
    </Section>
    <Section padding="0">
      <CommunityCards />
    </Section>
  </div>
</div>
