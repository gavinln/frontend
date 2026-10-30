<script lang="ts">
  import '@picocss/pico';
  // 1. Basic Svelte
  // 1.1. Welcome to Svelte
  // 1.1.1. Your first component
  let name = 'Svelte';
  // 1.1.2. Dynamic attributes
  let src="https://www.python.org/static/img/python-logo.png";
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
  let numbers = $state([1, 2, 3, 4])
  function addNumber() {
    numbers[numbers.length] = numbers.length + 1;
  }
  // 1.2.3. Derived state
  let numbers2 = $state([1, 2, 3, 4])
  function addNumber2() {
    numbers2[numbers2.length] = numbers2.length + 1;
  }
  let total2 = $derived(numbers2.reduce((t, n) => t + n, 0))
  // 1.2.4. Inspecting state
  let numbers3 = $state([1, 2, 3, 4])
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
  // 1.4. Logic
  // 1.4.1. If blocks
  // 1.4.2. Else blocks
  // 1.4.3. Else-if blocks
  // 1.4.4. Each blocks
  // 1.4.5. Keyed each blocks
  // 1.4.6. Await blocks
  // 1.5. Events
  // 1.5.1. DOM events
  // 1.5.2. Inline handlers
  // 1.5.3. Capturing
  // 1.5.4. Component events
  // 1.5.5. Spreading events
  // 1.6. Bindings
  // 1.6.1. Text inputs
  // 1.6.2. Numeric inputs
  // 1.6.3. Checkbox inputs
  // 1.6.4. Select bindings
  // 1.6.5. Group inputs
  // 1.6.6. Select multiple
  // 1.6.7. Textarea inputs
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
<style>
  #styling {
    color: goldenrod;
    font-family: 'Comic Sans MS', cursive;
    font-size: 2em;
  }
</style>
<main class="container">
<h1>1. Basic Svelte</h1>
<h2>1.1. Welcome to Svelte</h2>
<h3>1.1.1. Your first component</h3>
  <p>Hello {name}!</p>
<h3>1.1.2. Dynamic attributes</h3>
  <img src={src} alt="A man dancing"/>
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
  <button onclick={addNumber}>
    Add a number
  </button>
<h3>1.2.3. Derived state</h3>
  <p>{numbers2.join(' + ')} = {total2}</p>
  <button onclick={addNumber2}>
    Add a number
  </button>
<h3>1.2.4. Inspecting state</h3>
  <p>{numbers3.join(' + ')} = ...</p>
  <button onclick={addNumber3}>
    Add a number
  </button>
<h3>1.2.5. Effects</h3>
  <button onclick={() => interval /= 2}>speed up</button>
  <button onclick={() => interval *= 2}>slow down</button>
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
  <Nested3 answer={42} />
  <Nested3 />
<h3>1.3.3. Spread props</h3>
<h2>1.4. Logic</h2>
<h3>1.4.1. If blocks</h3>
<h3>1.4.2. Else blocks</h3>
<h3>1.4.3. Else-if blocks</h3>
<h3>1.4.4. Each blocks</h3>
<h3>1.4.5. Keyed each blocks</h3>
<h3>1.4.6. Await blocks</h3>
<h2>1.5. Events</h2>
<h3>1.5.1. DOM events</h3>
<h3>1.5.2. Inline handlers</h3>
<h3>1.5.3. Capturing</h3>
<h3>1.5.4. Component events</h3>
<h3>1.5.5. Spreading events</h3>
<h2>1.6. Bindings</h2>
<h3>1.6.1. Text inputs</h3>
<h3>1.6.2. Numeric inputs</h3>
<h3>1.6.3. Checkbox inputs</h3>
<h3>1.6.4. Select bindings</h3>
<h3>1.6.5. Group inputs</h3>
<h3>1.6.6. Select multiple</h3>
<h3>1.6.7. Textarea inputs</h3>
<h2>1.7. Classes and styles</h2>
<h3>1.7.1. The class attribute</h3>
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
