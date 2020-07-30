import { jobs } from './_data';

export function get(req, res, next) {
  const { id } = req.params;
  const job = jobs.find(j => j.id == id);

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(job));
}