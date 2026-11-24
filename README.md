# Frontend

Frontend code examples using javascript, typescript, HTML, CSS, etc

## Languages

[Javascript](javascript/README.md)

## Frameworks

[Svelte](./svelte/README.md)

## Try this for node.js

1. Using lint-staged (Recommended for Node.js)

```sh
npm install -D oxlint lint-staged husky
```

2. Add to package.json:

```json
{
    "lint-staged": {
        "*.{js,jsx,ts,tsx}": "oxlint --fix"
    }
}
```

```bash
npx husky init
echo "npx lint-staged" > .husky/pre-commit
```

## Using oxlint with a pre-commit hook

DOES NOT WORK

```yaml
- repo: https://github.com/oxc-project/mirrors-oxlint
  rev: v1.58.0
  hooks:
      - id: oxlint
        verbose: true
```
