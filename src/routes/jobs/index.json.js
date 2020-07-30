import { jobs } from './_data';

export function get(req, res, next) {
  
  res.end(JSON.stringify(jobs));

}