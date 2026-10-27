# Frontend

Frontend code examples using javascript, typescript, HTML, CSS, etc

## Languages

[Javascript](javascript/README.md)

## Frameworks

[Written introduction][100]

[100]: https://vuejs.org/guide/introduction.html

### Vue.js video tutorials

[Crash course][200]

[200]: https://www.youtube.com/watch?v=VeNfHj6MhgA

[Multiple tutorials][210]

[210]: https://www.youtube.com/playlist?list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1

## Try this for node.js

1. Using lint-staged (Recommended for Node.js)

```
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

```
-   repo: https://github.com/oxc-project/mirrors-oxlint
    rev: v1.58.0
    hooks:
      - id: oxlint
        verbose: true
```
