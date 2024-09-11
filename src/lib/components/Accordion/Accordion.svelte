<svelte:options customElement="garnet-accordion" />

<script>
	import AccordionItem from "./AccordionItem.svelte";
	export let data = [];	
	export let isOpen = false;
</script>

<div class="garnet-accordion">
	{#each data as entry}
		<AccordionItem title={entry.title} isOpen={isOpen}>
			<p>{entry.text}</p>
		</AccordionItem>
	{/each}
</div>

<style>
	.garnet-accordion {
		display: flex;
		flex-direction: column;
		width: 450px;
	}
</style>
