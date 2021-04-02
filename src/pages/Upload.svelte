<script>
	import Modal from './Modal.svelte';

	let showModal = false;
	import Dropzone from "svelte-file-dropzone";
  
	let files = {
	  accepted: [],
	  rejected: []
	};
  
	
	function handleFilesSelect(e) {
	  const { acceptedFiles, fileRejections } = e.detail;
	  files.accepted = [...files.accepted, ...acceptedFiles];
	  files.rejected = [...files.rejected, ...fileRejections];
	}
</script>

<button on:click="{() => showModal = true}">
	click to upload
</button>

{#if showModal}
	<Modal on:close="{() => showModal = false}">
		<Dropzone on:drop={handleFilesSelect} />
  		<ol>
		{#each files.accepted as item}
	  		<li>{item.name}</li>
		{/each}
  		</ol>
	</Modal>
{/if}







  
  