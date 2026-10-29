# Svelte

[Svelte][100] is a free, open-source front-end JavaScript framework for
building web user interfaces. Unlike React or Vue, it compiles components into
highly optimized vanilla JavaScript at build time rather than shipping a
runtime library to the browser, resulting in smaller, faster apps.

[100]: https://svelte.dev/

[npx][110] is a command-line tool bundled with npm that runs Node.js packages
directly without permanently installing them.

[110]: https://docs.npmjs.com/cli/v12/commands/npx

[prettier][120] is an opinionated code formatter with support for multiple
web languages.

[120]: https://prettier.io/

[vite][130] is a next-generation frontend build tool and local development server.

[130]: https://vite.dev/

## Create, Build and Run Svelte example

1. Create an empty directory for the `sv-example` app

```
mkdir sv-example && cd sv-example
```

2. Create the app

```
npx sv create --template minimal --types ts --add prettier --install npm .
```

3. Run the app

```
npm run dev
```

4. Enable polling to check for file changes

```
# add to vite.config.ts
server: {
    watch: {
        usePolling: true,
    }
}
```

4. Go to the server `http://localhost:5173`

5. To add Pico styling install the package

```
npm install -D @picocss/pico
```

6. To use Pico styling

```
// add this inside the script tag
import '@picocss/pico';
```

## Learning Svelte

### Tutorial

[Official Tutorial][200]

[200]: https://svelte.dev/tutorial/svelte/welcome-to-svelte

#### Basic Svelte

#### Advanced Svelte

#### Basic SvelteKit

#### Advanced SvelteKit

### Svelte Videos

[Svelte in 100 seconds][300]

[300]: https://www.youtube.com/watch?v=rv3Yq-B8qp4

[Svelte 5 Basics][310] 1:49:47

[310]: https://www.youtube.com/watch?v=8DQailPy3q8

[Complete Svelte 5 Course][320] 3:14:30

[320]: https://www.youtube.com/watch?v=B2MhkPtBWs4
