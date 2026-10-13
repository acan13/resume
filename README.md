# resume

Allan Cannon's resume, served at https://www.allancannon.com.

Plain static HTML and CSS in `site/`. There is no build step.

## Preview locally

```bash
python3 -m http.server -d site 8000
```

Then open http://localhost:8000.

## Deploy

The site is hosted from the `allan-cannon-resume` S3 bucket behind CloudFront.

```bash
aws s3 sync site/ s3://allan-cannon-resume --delete
aws cloudfront create-invalidation --distribution-id <DISTRIBUTION_ID> --paths "/*"
```
