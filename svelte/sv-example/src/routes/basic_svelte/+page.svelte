<script lang="ts">
  // 1. Basic Svelte
  // 1.1. Welcome to Svelte
  // 1.1.1. Your first component
  let name = 'Svelte';
  // 1.1.2. Dynamic attributes
  let src = 'https://www.python.org/static/img/python-logo.png';
  // 1.1.3. Styling
  // 1.1.4. Nested components
  import Nested from './Nested.svelte';
  // 1.1.5. HTML tags
  let string = `this string contains some <strong>HTML!!!</strong>`;
  // 1.2. Reactivity
  // 1.2.1. State
  let count = $state(0);
  function increment() {
    count += 1;
  }
  // 1.2.2. Deep state
  let numbers = $state([1, 2, 3, 4]);
  function addNumber() {
    numbers[numbers.length] = numbers.length + 1;
  }
  // 1.2.3. Derived state
  let numbers2 = $state([1, 2, 3, 4]);
  function addNumber2() {
    numbers2[numbers2.length] = numbers2.length + 1;
  }
  let total2 = $derived(numbers2.reduce((t, n) => t + n, 0));
  // 1.2.4. Inspecting state
  let numbers3 = $state([1, 2, 3, 4]);
  function addNumber3() {
    numbers3[numbers3.length] = numbers3.length + 1;
    console.log($state.snapshot(numbers3));
  }
  $inspect(numbers3);
  // 1.2.5. Effects
  let elapsed = $state(0);
  let interval = $state(1000);
  $effect(() => {
    const id = setInterval(() => {
      elapsed += 1;
    }, interval);
    return () => {
      clearInterval(id);
    };
  });
  // 1.2.6. Universal reactivity
  import Counter from './Counter.svelte';
  // 1.3. Props
  // 1.3.1. Declaring props
  import Nested2 from './Nested2.svelte';
  // 1.3.2. Default values
  import Nested3 from './Nested3.svelte';
  // 1.3.3. Spread props
  import PackageInfo from './PackageInfo.svelte';

  const pkg = {
    name: 'svelte',
    version: 5,
    description: 'blazing fast',
    website: 'https://svelte.dev'
  };
  // 1.4. Logic
  // 1.4.1. If blocks
  // 1.4.2. Else blocks
  // 1.4.3. Else-if blocks
  let count2 = $state(0);

  function increment2() {
    count2 += 1;
  }
  // 1.4.4. Each blocks
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  let selected = $state(colors[0]);
  // 1.4.5. Keyed each blocks
  import Thing from './Thing.svelte';
  let things = $state([
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'carrot' },
    { id: 4, name: 'doughnut' },
    { id: 5, name: 'egg' }
  ]);
  // 1.4.6. Await blocks
  import { roll } from './utils.js';
  let promise = $state(roll());
  // 1.5. Events
  // 1.5.1. DOM events
  let pointer = $state({ x: 0, y: 0 });
  function onpointermove(event) {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  }
  // 1.5.2. Inline handlers
  // 1.5.3. Capturing
  let bubbling: string[] = $state([]);
  let capturing: string[] = $state([]);
  // 1.5.4. Component events
  import Stepper from './Stepper.svelte';

  let value = $state(0);
  // 1.5.5. Spreading events
  import BigRedButton from './BigRedButton.svelte';

  import horn from '#lib/assets/horn.mp3';
  import { onMount } from 'svelte';

  let audio;

  onMount(() => {
    audio = new Audio();
    audio.src = horn;
  });

  // const audio = new Audio();
  // audio.src = horn;

  function honk() {
    audio.load();
    audio.play();
  }
  // 1.6. Bindings
  // 1.6.1. Text inputs
  let name2 = $state('world');
  // 1.6.2. Numeric inputs
  let numeric_a = $state(1);
  let numeric_b = $state(2);

  // 1.6.3. Checkbox inputs
  let yes = $state(false);

  // 1.6.4. Select bindings
  const text = 'What is another personal fact ' + 'that an attacker could easily find with Google?';
  let questions = [
    { id: 1, text: `Where did you go to school?` },
    { id: 2, text: `What is your mother's name?` },
    { id: 3, text: text }
  ];

  let chosen = $state();

  let answer = $state('');

  function handleSubmit(e) {
    e.preventDefault();

    alert(`answered question ${chosen.id} (${chosen.text}) with "${answer}"`);
  }
  // 1.6.5. Group inputs
  let scoops = $state(1);
  let flavours = $state([]);

  const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
  // 1.6.6. Select multiple

  let scoops2 = $state(1);
  let flavours2 = $state([]);

  const formatter2 = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });

  // 1.6.7. Textarea inputs
  import { marked } from 'marked';

  let value2 = $state(`Some words are *italic*, some are **bold**\n\n- lists\n- are\n- cool`);
  // 1.7. Classes and styles
  // 1.7.1. The class attribute
  // 1.7.2. The style directive
  // 1.7.3. Component styles
  // 1.8. Attachments
  // 1.8.1. The attach tag
  // 1.8.2. Attachment factories
  // 1.9. Transitions
  // 1.9.1. The transition directive
  // 1.9.2. Adding parameters
  // 1.9.3. In and out
  // 1.9.4. Custom CSS transitions
  // 1.9.5. Custom JS transitions
  // 1.9.6. Transition events
  // 1.9.7. Global transitions
  // 1.9.8. Key blocks
</script>

<main>
  <h1>1. Basic Svelte</h1>
  <h2>1.1. Welcome to Svelte</h2>
  <h3>1.1.1. Your first component</h3>
  <p>Hello {name}!</p>
  <h3>1.1.2. Dynamic attributes</h3>
  <img {src} alt="A man dancing" />
  <h3>1.1.3. Styling</h3>
  <p id="styling">This is a paragraph</p>
  <h3>1.1.4. Nested components</h3>
  <Nested />
  <h3>1.1.5. HTML tags</h3>
  <p>{@html string}</p>
  <h2>1.2. Reactivity</h2>
  <h3>1.2.1. State</h3>
  <button onclick={increment}>
    Clicked {count}
    {count === 1 ? 'time' : 'times'}
  </button>
  <h3>1.2.2. Deep state</h3>
  <p>{numbers.join(' + ')} = ...</p>
  <button onclick={addNumber}> Add a number </button>
  <h3>1.2.3. Derived state</h3>
  <p>{numbers2.join(' + ')} = {total2}</p>
  <button onclick={addNumber2}> Add a number </button>
  <h3>1.2.4. Inspecting state</h3>
  <p>{numbers3.join(' + ')} = ...</p>
  <button onclick={addNumber3}> Add a number </button>
  <h3>1.2.5. Effects</h3>
  <button onclick={() => (interval /= 2)}>speed up</button>
  <button onclick={() => (interval *= 2)}>slow down</button>
  <p>elapsed: {elapsed}</p>
  <p>interval: {interval}</p>
  <h3>1.2.6. Universal reactivity</h3>
  <Counter />
  <Counter />
  <Counter />
  <h2>1.3. Props</h2>
  <h3>1.3.1. Declaring props</h3>
  <Nested2 answer={42} />
  <h3>1.3.2. Default values</h3>
  <Nested3 answer={'a comedy'} />
  <Nested3 />
  <h3>1.3.3. Spread props</h3>
  <PackageInfo version={pkg.version} description={pkg.description} website={pkg.website} />
  <PackageInfo {...pkg} />
  <h2>1.4. Logic</h2>
  <h3>1.4.1. If blocks</h3>
  <h3>1.4.2. Else blocks</h3>
  <h3>1.4.3. Else-if blocks</h3>
  <button onclick={increment2}>
    Clicked {count2}
    {count2 === 1 ? 'time' : 'times'}
  </button>
  {#if count2 > 10}
    <p>{count2} is greater than 10</p>
  {:else if count2 < 5}
    <p>{count2} is less than 5</p>
  {:else}
    <p>{count2} is between 5 and 10</p>
  {/if}
  <h3>1.4.4. Each blocks</h3>
  <p style="color: {selected}; font-size: 2rem; font-weight: 600">Pick a color</p>
  <div>
    {#each colors as color, i}
      <button
        style="background: {color}"
        aria-label={color}
        aria-current={selected === color}
        onclick={() => (selected = color)}>{i + 1}</button
      >
    {/each}
  </div>
  <h3>1.4.5. Keyed each blocks</h3>
  <button onclick={() => things.shift()}> Remove first thing </button>
  {#each things as thing (thing.id)}
    <Thing name={thing.name} />
  {/each}
  <h3>1.4.6. Await blocks</h3>
  <button onclick={() => (promise = roll())}> roll the dice </button>
  {#await promise}
    <p>...rolling</p>
  {:then number}
    <p>you rolled a {number}!</p>
  {:catch error}
    <p style="color: red">{error.message}!</p>
  {/await}
  <h2>1.5. Events</h2>
  <h3>1.5.1. DOM events</h3>
  <div {onpointermove} role="presentation" id="dom-event">
    Pointer: {pointer.x} x {pointer.y}
  </div>
  <h3>1.5.2. Inline handlers</h3>
  <h3>1.5.3. Capturing</h3>
  <div onkeydown={(e) => bubbling.push('<div> ' + e.key)} role="presentation">
    <input onkeydown={(e) => bubbling.push('<input> ' + e.key)} />
  </div>
  <ul>
    {#each bubbling as line}
      <li>{line}</li>
    {/each}
  </ul>

  <div onkeydowncapture={(e) => capturing.push('<div> ' + e.key)} role="presentation">
    <input onkeydowncapture={(e) => capturing.push('<input> ' + e.key)} />
  </div>
  <ul>
    {#each capturing as line}
      <li>{line}</li>
    {/each}
  </ul>
  <h3>1.5.4. Component events</h3>
  <p>The current value is {value}</p>
  <Stepper increment={() => (value += 1)} decrement={() => (value -= 1)} />
  <h3>1.5.5. Spreading events</h3>
  <!-- <BigRedButton onclick={honk} /> -->
  <BigRedButton onclick={honk} />
  <h2>1.6. Bindings</h2>
  <h3>1.6.1. Text inputs</h3>
  <input bind:value={name2} />
  <p>Hello {name2}!</p>
  <h3>1.6.2. Numeric inputs</h3>
  <label>
    <input type="number" bind:value={numeric_a} min="0" max="10" />
    <input type="range" bind:value={numeric_a} min="0" max="10" />
  </label>

  <label>
    <input type="number" bind:value={numeric_b} min="0" max="10" />
    <input type="range" bind:value={numeric_b} min="0" max="10" />
  </label>
  <p>{numeric_a} + {numeric_b} = {numeric_a + numeric_b}</p>

  <h3>1.6.3. Checkbox inputs</h3>
  <label>
    <input type="checkbox" bind:checked={yes} />
    Yes! Send me regular email spam
  </label>

  {#if yes}
    <p>Thank you. We will bombard your inbox and sell your personal details.</p>
  {:else}
    <p>You must opt in to continue. If you're not paying, you're the product.</p>
  {/if}

  <button disabled={!yes}>Subscribe</button>
  <h3>1.6.4. Select bindings</h3>
  <p>Insecurity questions</p>

  <form onsubmit={handleSubmit}>
    <select bind:value={chosen} onchange={() => (answer = '')}>
      {#each questions as question}
        <option value={question}>
          {question.text}
        </option>
      {/each}
    </select>

    <input bind:value={answer} />

    <button disabled={!answer} type="submit"> Submit </button>
  </form>

  <p>
    chosen question {chosen ? chosen.id : '[waiting...]'}
  </p>
  <h3>1.6.5. Group inputs</h3>
  <p>Size</p>
  {#each [1, 2, 3] as number}
    <label>
      <input type="radio" name="scoops" value={number} bind:group={scoops} />
      {number}
      {number === 1 ? 'scoop' : 'scoops'}
    </label>
  {/each}

  <p>Flavours</p>
  {#each ['cookies and cream', 'mint choc chip', 'raspberry ripple'] as flavour}
    <label>
      <input type="checkbox" name="flavours" value={flavour} bind:group={flavours} />
      {flavour}
    </label>
  {/each}

  {#if flavours.length === 0}
    <p>Please select at least one flavour</p>
  {:else if flavours.length > scoops}
    <p>Can't order more flavours than scoops!</p>
  {:else}
    <p>
      You ordered {scoops}
      {scoops === 1 ? 'scoop' : 'scoops'}
      of {formatter.format(flavours)}
    </p>
  {/if}
  <h3>1.6.6. Select multiple</h3>

  <p>Size</p>

  {#each [1, 2, 3] as number}
    <label>
      <input type="radio" name="scoops2" value={number} bind:group={scoops2} />

      {number}
      {number === 1 ? 'scoop' : 'scoops'}
    </label>
  {/each}

  <p>Flavours</p>
  <select multiple bind:value={flavours2}>
    {#each ['cookies and cream', 'mint choc chip', 'raspberry ripple'] as flavour}
      <option>{flavour}</option>
    {/each}
  </select>
  {#if flavours2.length === 0}
    <p>Please select at least one flavour</p>
  {:else if flavours2.length > scoops2}
    <p>Can't order more flavours than scoops!</p>
  {:else}
    <p>
      You ordered {scoops2}
      {scoops2 === 1 ? 'scoop' : 'scoops'}
      of {formatter.format(flavours2)}
    </p>
  {/if}
  <h3>1.6.7. Textarea inputs</h3>
  <div class="grid">
    input
    <textarea bind:value={value2}>{value2}</textarea>

    output
    <div>{@html marked(value2)}</div>
  </div>
  <h2>1.7. Classes and styles</h2>
  <h3>1.7.1. The class attribute</h3>

  <div class="no-pico container2">
    Flip the card
    <button class="card2">
      <div class="front2">
        <span class="symbol2">♠</span>
      </div>
      <div class="back2">
        <div class="pattern2"></div>
      </div>
    </button>
  </div>

  <div class="no-pico container2">
    Flip the card
    <button class="card2 flipped">
      <div class="front2">
        <span class="symbol2">♠</span>
      </div>
      <div class="back2">
        <div class="pattern2"></div>
      </div>
    </button>
  </div>

  <h3>1.7.2. The style directive</h3>
  <h3>1.7.3. Component styles</h3>
  <h2>1.8. Attachments</h2>
  <h3>1.8.1. The attach tag</h3>
  <h3>1.8.2. Attachment factories</h3>
  <h2>1.9. Transitions</h2>
  <h3>1.9.1. The transition directive</h3>
  <h3>1.9.2. Adding parameters</h3>
  <h3>1.9.3. In and out</h3>
  <h3>1.9.4. Custom CSS transitions</h3>
  <h3>1.9.5. Custom JS transitions</h3>
  <h3>1.9.6. Transition events</h3>
  <h3>1.9.7. Global transitions</h3>
  <h3>1.9.8. Key blocks</h3>
</main>

<style>
  #styling {
    color: goldenrod;
    font-family: 'Comic Sans MS', cursive;
    font-size: 2em;
  }
  #dom-event {
    width: 12rem;
    height: 12rem;
    padding: 1rem;
    border-style: solid;
    border-color: red;
  }
  .no-pico,
  .no-pico * {
    all: revert;
  }
  .container2 {
    --bg-1: hsl(0, 0%, 100%);
    --bg-2: hsl(206, 20%, 90%);
    --bg-3: hsl(206, 20%, 80%);
    display: flex;
    flex-direction: column;
    gap: 1em;
    height: 100%;
    align-items: center;
    justify-content: center;
    perspective: 100vh;
  }

  .card2 {
    position: relative;
    aspect-ratio: 2.5 / 3.5;
    font-size: min(1vh, 0.25rem);
    height: 80em;
    background: var(--bg-1);
    border-radius: 2em;
    transform: rotateY(180deg);
    transition: transform 0.4s;
    transform-style: preserve-3d;
    padding: 0;
    user-select: none;
    cursor: pointer;
  }

  .card2.flipped {
    transform: rotateY(0);
  }

  .front2,
  .back2 {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    backface-visibility: hidden;
    border-radius: 2em;
    border: 1px solid var(--fg-2);
    box-sizing: border-box;
    padding: 2em;
  }

  .front2 {
    background:
      url(./svelte-logo.svg) no-repeat 5em 5em,
      url(./svelte-logo.svg) no-repeat calc(100% - 5em) calc(100% - 5em);
    background-size:
      8em 8em,
      8em 8em;
  }

  .back2 {
    transform: rotateY(180deg);
  }

  .symbol2 {
    font-size: 30em;
    color: black;
  }

  .pattern2 {
    width: 100%;
    height: 100%;
    background-color: var(--bg-2);
    /* pattern from https://projects.verou.me/css3patterns/#marrakesh */
    background-image:
      radial-gradient(var(--bg-3) 0.9em, transparent 1em),
      repeating-radial-gradient(
        var(--bg-3) 0,
        var(--bg-3) 0.4em,
        transparent 0.5em,
        transparent 2em,
        var(--bg-3) 2.1em,
        var(--bg-3) 2.5em,
        transparent 2.6em,
        transparent 5em
      );
    background-size:
      3em 3em,
      9em 9em;
    background-position: 0 0;
    border-radius: 1em;
  }
</style>
