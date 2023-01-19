<script>
    import "../app.css";
</script>

<svelte:head>
    <meta name="theme-color" content="#2f3136">
    <meta property="og:url" content="https://portalbox.link">
    <meta property="og:title" content="Portal Box">
    <meta property="og:type" content="website">
    <meta property="og:description" content="Providing a range of powerful tools to assist Minecraft plugin developers.">
    <meta name="theme-color" data-react-helmet="true" content="#2f3136">
    <meta name="twitter:card" content="summary_large_image">
</svelte:head>

<div class="bg-[#19191C] min-h-[100vh] w-full text-white">
    <div class="flex flex-col items-center min-h-full h-full w-full h-[100vh] min-w-full justify-evenly">
        <div class="flex flex-col items-center gap-4">
            <img class="w-96" src="logo.png" alt="Logo">
            <h1 class="text-xl text-center">Providing a range of powerful tools to assist<br> Minecraft plugin developers.</h1>
        </div>
        <div class="flex gap-[4vw]">
            <div class="h-[234px] md:h-[220px] max-w-[353px] bg-cover bg-[#303033] border-[1px] border-[#59595C] justify-between flex flex-col p-5 text-center items-center">
                <h1 class="text-3xl">Plugin Portal</h1>
                <h2 class="text-[#BBBBBB] text-xl">Automated in-game plugin downloading and updating.</h2>
                <div class="flex gap-5">
                    <a href="" target="_blank" rel="noreferrer" class="w-fit"><button class="rounded-full bg-[#434347] text-white py-2 px-7">View Free</button></a>
                    <a href="" target="_blank" rel="noreferrer" class="w-fit"><button class="rounded-full bg-[#E2AB3F] text-white py-2 px-7">View Premium</button></a>
                </div>
            </div>
            <div class="h-[234px] md:h-[220px] max-w-[353px] bg-cover bg-[#303033] border-[1px] border-[#59595C] justify-between flex flex-col p-5 text-center items-center">
                <h1 class="text-3xl">Server Portal</h1>
                <h2 class="text-[#BBBBBB] text-xl">Automated local dev server creation and management tool.</h2>
                <button disabled class="rounded-full text-[#878787] bg-[#434347] text-white py-2 px-7 w-fit">Coming soon</button>
            </div>
        </div>
        <div class="flex gap-[8vw]">
            <div class="flex flex-col w-[24vw]">
                <h1 class="text-[#5662F6] text-1xl">GET TALKING</h1>
                <h2 class="text-2xl">Join our Discord community to stay up to date and engaged with what we’re working on!</h2>
                <a href="https://discord.gg/vVNQSUSsMv" target="_blank" rel="noreferrer" class="w-fit">
                    <button class="mt-4 rounded-full bg-[#FFFFFF] text-black py-2 px-7 flex items-center gap-2">
                        Connect
                        <img class="w-3.5" src="icon/arrow-right.svg" alt="Arrow right">
                    </button>
                </a>
            </div>
            <div class="flex flex-col w-[24vw]">
                <h1 class="text-[#1F6FEB] text-1xl">CONTRIBUTE</h1>
                <h2 class="text-2xl">Get involved with some of our development, contribute your ideas and help us improve!</h2>
                <a href="https://github.com/portal-box/" target="_blank" rel="noreferrer" class="w-fit">
                    <button class="mt-4 rounded-full bg-[#FFFFFF] text-black py-2 px-7 flex items-center gap-2">
                        Contribute
                        <img class="w-3.5" src="icon/arrow-right.svg" alt="Arrow right">
                    </button>
                </a>
            </div>
        </div>
    </div>
</div>