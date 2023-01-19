<script>
  import Button from '../Button.svelte';
  import '../../app.css';
  import ProductCard from '../ProductCard.svelte';

  const titleStyle = 'text-3xl';
  const descriptionStyle = 'text-[#BBBBBB] text-xl flex-1';
  const buttonsStyle =
    'flex flex-col gap-4 items-stretch justify-center w-full';
  // xs:flex-col
</script>

<div class="flex gap-9 md:flex-col w-full">
  <ProductCard
    title="Plugin Portal"
    description="Automated in-game plugin downloading and updating."
    ><Button class="w-full" href="/" buttonType="secondary">View Free</Button>
    <Button class="w-full" href="/" buttonType="key">View Premium</Button
    ></ProductCard
  >
  <ProductCard
    title="Server Portal"
    description="Automated local dev server creation and management tool."
    ><Button class="w-full italic" disabled href="/" buttonType="secondary"
      >Coming soon</Button
    >
  </ProductCard>
</div>
