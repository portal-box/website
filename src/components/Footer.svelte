<script>
  import '../app.css';

  const year = new Date().getFullYear();
  const creationYear = 2023;
</script>

<div class="flex justify-center w-full p-2 font-medium bg-card text-greyText">
  ©{creationYear}{year === creationYear ? '' : '-' + year} Portal Box
</div>
