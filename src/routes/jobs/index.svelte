<script context="module">
  // console.log('module script');
  export async function preload(page, session) {
		const res = await this.fetch('/jobs.json');
		const jobs = await res.json();

		return { jobs };
  }
</script>

<script>
  export let jobs;
</script>

<style>
  ul{
    padding: 0;
  }
  li {
    list-style-type: none;
  }
  li a {
    display: block;
    padding: 15px;
    border: 1px solid #f2f2f2;
    border-radius: 8px;
    margin: 10px auto;
    text-decoration: none;
  }
  li a:hover {
    background: #fbfbfb;
  }
</style>

<h2>All Current Jobs</h2>

<ul>
	{#each jobs as job}
		<li><a href="/">{job.title}</a></li>
	{/each}
</ul>