<script>
  import '../../app.css';

  import CommunityCard from '../CommunityCard.svelte';
  import Button from '../Button.svelte';
</script>

<div class="md:flex-col flex items-stretch gap-16 md:gap-12">
  <CommunityCard title="GET TALKING" titleColor="#1F6FEB"
    ><h2 class="text-2xl flex-1">
      Join our Discord community to stay up to date and engaged with what we’re
      working on!
    </h2>
    <Button
      href="https://discord.gg/vVNQSUSsMv"
      buttonType="primary"
      class="xs:w-full"
      >Connect
      <img
        class="ml-2 w-3.5"
        src="icon/arrow-right.svg"
        alt="Arrow right"
      /></Button
    >
  </CommunityCard>
  <CommunityCard title="CONTRIBUTE" titleColor="#1F6FEB"
    ><h2 class="text-2xl flex-1">
      Get involved with some of our development, contribute your ideas and help
      us improve!
    </h2>
    <Button
      href="https://github.com/portal-box/"
      buttonType="primary"
      class="xs:w-full"
      >Contribute
      <img
        class="ml-2 w-3.5"
        src="icon/arrow-right.svg"
        alt="Arrow right"
      /></Button
    >
  </CommunityCard>
</div>
