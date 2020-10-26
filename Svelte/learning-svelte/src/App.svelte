<script>
	import Navbar from "./Navbar.svelte";

	let name ="John Doe";
	let points =1000
	let showControls = false

	const addPoint = () => (points += 1)
	const removePoint = () => (points -= 1)
	const toggleControls = () => (showControls = !showControls)
</script>

<style>
	h1 {
		color: blue;
	}
</style>

<Navbar />
<main>
	<h1>
		Hello {name}!
		<button on:click={toggleControls}>
			{#if showControls}-{:else}+{/if}
		</button>
	</h1>
	<h3>Points: {points}</h3>
	{#if showControls}
		 <button on:click={addPoint}>+1</button>
		 <button on:click={removePoint}>-1</button>
		 <input type="number" bind:value={points}>
	{/if}
</main>

