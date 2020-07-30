<script context="module">
  // console.log('module script');
  export async function preload(page, session) {
		const res = await this.fetch('/data.json');
		const todos = await res.json();

		return { todos };
  }
</script>

<script>
  // console.log('component script');
  export let todos;
  console.log(todos);
</script>

<style>
</style>

<h2>All Current Jobs</h2>