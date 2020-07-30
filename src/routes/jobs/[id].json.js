import { jobs } from './_data';

export function get(req, res, next) {
  const { id } = req.params;
  const job = jobs.find(j => j.id == id);

  if (job) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(job));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'That job does not exist' }));
  }
}