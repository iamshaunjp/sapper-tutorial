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
</script>

<div class="job">
  <h2>{ job.title }</h2>
  <p class="price">Salary of £{ job.salary } / yr</p>
  <p class="details">{ job.details }</p>
</div>