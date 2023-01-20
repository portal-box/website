<script>
  import Button from '../Button.svelte';
  import '../../app.css';
  import ProductCard from '../ProductCard.svelte';
  // xs:flex-col
</script>

<div
  class="flex gap-[6vw] md:flex-col items-stretch justify-center w-full max-w-[900px]"
>
  <ProductCard
    title="Plugin Portal"
    description="Automated in-game plugin downloading and updating."
    ><Button class="flex-1 xs:w-full" href="/" buttonType="secondary"
      >View Free</Button
    >
    <Button class="flex-1 xs:w-full" href="/" buttonType="key"
      >View Premium</Button
    ></ProductCard
  >
  <ProductCard
    title="Server Portal"
    description="Automated local dev server creation and management tool."
    ><Button
      class="italic w-[50%] xs:w-full"
      disabled
      href="/"
      buttonType="secondary">Coming soon</Button
    >
  </ProductCard>
</div>
