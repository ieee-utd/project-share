<script>
	import { createEventDispatcher, onDestroy } from 'svelte';
	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');
	let modal;
	let classCourse = '';
	let tags = '';
	let clAss = '';
	const handle_keydown = e => {
		if (e.key === 'Escape') {
			close();
			return;
		}
		if (e.key === 'Tab') {
			// trap focus
			const nodes = modal.querySelectorAll('*');
			const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0);
			let index = tabbable.indexOf(document.activeElement);
			if (index === -1 && e.shiftKey) index = 0;
			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;
			tabbable[index].focus();
			e.preventDefault();
		}
	};
	const previously_focused = typeof document !== 'undefined' && document.activeElement;
	if (previously_focused) {
		onDestroy(() => {
			previously_focused.focus();
		});
	}
</script>

<svelte:window on:keydown={handle_keydown}/>

<div class="modal-background" on:click={close}></div>

<div class="modal" role="dialog" aria-modal="true" bind:this={modal}>
	<div class = "modalparent">
		<div>
			<slot name="header"></slot>
			<hr>
			<slot></slot>
			<hr>

		</div>

		<div class = "course">
			<h> 
				<input bind:value = {classCourse} placeholder = "Enter Course section"/>
				<input bind:value = {clAss} placeholder= "Enter class"/>
				<input bind:value = {tags}  placeholder = "Enter Tag"/>
			</h>
		</div>
	</div>
	
	<button class = "upload-button">Upload</button>
	<button on:click={close}>Close</button>

</div>


<style>
	.modalparent{
		display:flex;
		flex-direction: row;
		flex-grow: 1;
		flex-basis: auto;
	}
	.course{		
		display:flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-left: 50px;
	}
	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.3);
	}
	.modal {
		display:flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
		position: absolute;
		left: 50%;
		top: 50%;
		width: calc(100vw - 4em);
		max-width: 32em;
		max-height: calc(100vh - 4em);
		overflow: auto;
		transform: translate(-50%,-50%);
		padding: 1em;
		border-radius: 0.2em;
		background: rgba(31, 31, 31, 0.301);
	}
	button {
		display: block;
	}

	.upload-button
	{
		background-color: blue;
		color:white;
	}
</style>