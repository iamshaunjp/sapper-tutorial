<script context="module">
	export async function preload(page, session) {
		const { id } = page.params;

    const res = await this.fetch(`jobs/${id}.json`);
    const job = await res.json();
    
    return { job };
	}
</script>

<script>
  export let job;
  console.log(job);
</script>
