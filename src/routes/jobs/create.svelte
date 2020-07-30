<script>
  import { goto } from '@sapper/app';

  let title;
  let salary;
  let details;

  const handleSubmit = async () => {
    if (title && salary && details) {
      const res = await fetch('jobs.json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, salary, details })
      });
      const updatedJobs = await res.json();

      goto('jobs');
    }
  }
</script>

<style>
  h2{
    text-align: center;
  }
  form {
    max-width: 360px;
    margin: 40px auto;
    text-align: center;
  }
  input, textarea {
    display: block;
    width: 100%;
    padding: 10px;
    font-family: arial;
    margin: 10px auto;
    border: 1px solid #eee;
    border-radius: 8px;
  }
</style>

<h2>Add a New Job</h2>
<form on:submit|preventDefault={handleSubmit}>
  <input type="text" placeholder="job title" bind:value={title} required>
  <input type="number" placeholder="amount" bind:value={salary} required>
  <textarea placeholder="Job details" bind:value={details} required></textarea>
  <button class="btn">Add new job</button>
</form>