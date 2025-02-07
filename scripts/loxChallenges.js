const challengeArticles = [];

challengeArticles[0] = {
    title: 'The Password Generator',
    type: 'challenge',
    articleHTML: `<h3 id="the-password-generator">The Password Generator</h3>
<p><strong>Difficulty:</strong> Medium</p>
<p>Create a function that generates &quot;passwords&quot; by applying a pattern. Take a string and generate output by:</p>
<ol>
<li>Replacing vowels with numbers (a=1, e=2, i=3, o=4, u=5)</li>
<li>Capitalizing every third character</li>
<li>Adding the string length at the end</li>
</ol>
<p><strong>Input:</strong> A string containing only lowercase letters
<strong>Expected Output:</strong> Transformed string following the rules</p>
<p><strong>Example:</strong></p>
<pre><code class="lang-swift"><span class="hljs-function"><span class="hljs-keyword">fun</span> <span class="hljs-title">generatePassword</span><span class="hljs-params">(text)</span></span> {
    <span class="hljs-comment">// Your code here</span>
}

print generatePassword(<span class="hljs-string">"hello"</span>);     <span class="hljs-comment">// Output: h2lL4_5</span>
print generatePassword(<span class="hljs-string">"password"</span>);  <span class="hljs-comment">// Output: p1ssW4rD_8</span>
</code></pre>`,
}

challengeArticles[1] = {
    title: 'The Mood Tracker',
    type: 'challenge',
    articleHTML: `<h3 id="the-mood-tracker">The Mood Tracker</h3>
<p><strong>Difficulty:</strong> Medium</p>
<p>Create a class that tracks a person&#39;s mood throughout the day using a 1-5 scale. Calculate their average mood and provide a summary.</p>
<p><strong>Input:</strong> Series of mood ratings (1-5)
<strong>Expected Output:</strong> Average mood and interpretation</p>
<p><strong>Example:</strong></p>
<pre><code class="lang-swift"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MoodTracker</span> </span>{
    <span class="hljs-keyword">init</span>() {
        <span class="hljs-comment">// Initialize your tracker</span>
    }

    <span class="hljs-comment">// Add methods for tracking and calculating</span>
}

<span class="hljs-keyword">var</span> tracker = <span class="hljs-type">MoodTracker</span>();
tracker.addMood(<span class="hljs-number">4</span>);  <span class="hljs-comment">// Happy</span>
tracker.addMood(<span class="hljs-number">2</span>);  <span class="hljs-comment">// Sad</span>
tracker.addMood(<span class="hljs-number">3</span>);  <span class="hljs-comment">// Neutral</span>
<span class="hljs-built_in">print</span> tracker.getSummary();
<span class="hljs-comment">// Output: </span>
<span class="hljs-comment">// Average mood: 3.0</span>
<span class="hljs-comment">// Feeling neutral today</span>
</code></pre>`,
}

challengeArticles[2] = {
    title: 'The Word Game',
    type: 'challenge',
    articleHTML: `<h3 id="the-word-game">The Word Game</h3>
<p><strong>Difficulty:</strong> Medium-Hard</p>
<p>Create a game where you build chains of words where each word must start with the last letter of the previous word. Keep track of points: longer words give more points.</p>
<p><strong>Input:</strong> Words to add to the chain
<strong>Expected Output:</strong> Points and validation of the chain</p>
<p><strong>Example:</strong></p>
<pre><code class="lang-swift"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">WordChain</span> </span>{
    <span class="hljs-keyword">init</span>() {
        <span class="hljs-comment">// Initialize your game</span>
    }

    <span class="hljs-comment">// Add methods for playing</span>
}

<span class="hljs-keyword">var</span> game = <span class="hljs-type">WordChain</span>();
game.addWord(<span class="hljs-string">"hello"</span>);     <span class="hljs-comment">// Valid - 5 points</span>
game.addWord(<span class="hljs-string">"orange"</span>);    <span class="hljs-comment">// Valid - starts with 'o', 6 points</span>
game.addWord(<span class="hljs-string">"elephant"</span>);  <span class="hljs-comment">// Invalid - doesn't start with 'e'</span>
<span class="hljs-built_in">print</span> game.getScore();     <span class="hljs-comment">// Output: 11</span>
<span class="hljs-built_in">print</span> game.getChain();     <span class="hljs-comment">// Output: hello -&gt; orange</span>
</code></pre>`,
}

challengeArticles[3] = {
    title: 'The Mini Banking System',
    type: 'challenge',
    articleHTML: `<h3 id="the-mini-banking-system">The Mini Banking System</h3>
<p><strong>Difficulty:</strong> Hard</p>
<p>Create a banking system with accounts that can handle deposits, withdrawals, and transfers. Include a basic interest calculation feature.</p>
<p><strong>Input:</strong> Various banking operations
<strong>Expected Output:</strong> Transaction results and account status</p>
<p><strong>Example:</strong></p>
<pre><code class="lang-swift"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">BankAccount</span> </span>{
    <span class="hljs-keyword">init</span>(name, initialBalance) {
        <span class="hljs-comment">// Initialize account</span>
    }

    <span class="hljs-comment">// Add banking methods</span>
}

<span class="hljs-keyword">var</span> account1 = <span class="hljs-type">BankAccount</span>(<span class="hljs-string">"Alice"</span>, <span class="hljs-number">100</span>);
<span class="hljs-keyword">var</span> account2 = <span class="hljs-type">BankAccount</span>(<span class="hljs-string">"Bob"</span>, <span class="hljs-number">50</span>);
account1.deposit(<span class="hljs-number">50</span>);
account1.transfer(account2, <span class="hljs-number">25</span>);
account1.addInterest(<span class="hljs-number">0.05</span>);  <span class="hljs-comment">// 5% interest</span>
<span class="hljs-built_in">print</span> account1.getBalance();  <span class="hljs-comment">// Output: 131.25</span>
<span class="hljs-built_in">print</span> account2.getBalance();  <span class="hljs-comment">// Output: 75</span>
</code></pre>`,
}

challengeArticles[4] = {
    title: 'The Calendar Event Manager',
    type: 'challenge',
    articleHTML: `<h3 id="the-calendar-event-manager">The Calendar Event Manager</h3>
<p><strong>Difficulty:</strong> Very Hard</p>
<p>Create a system to manage events with time slots and detect scheduling conflicts. Each event has a name, duration (in hours), and start time (0-23).</p>
<p><strong>Input:</strong> Event details and scheduling requests
<strong>Expected Output:</strong> Scheduling confirmations or conflict notifications</p>
<p><strong>Example:</strong></p>
<pre><code class="lang-swift"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">EventScheduler</span> </span>{
    <span class="hljs-keyword">init</span>() {
        <span class="hljs-comment">// Initialize scheduler</span>
    }

    <span class="hljs-comment">// Add scheduling methods</span>
}

<span class="hljs-keyword">var</span> scheduler = <span class="hljs-type">EventScheduler</span>();
<span class="hljs-built_in">print</span> scheduler.addEvent(<span class="hljs-string">"Meeting"</span>, <span class="hljs-number">2</span>, <span class="hljs-number">9</span>);    <span class="hljs-comment">// Output: true (9-11)</span>
<span class="hljs-built_in">print</span> scheduler.addEvent(<span class="hljs-string">"Lunch"</span>, <span class="hljs-number">1</span>, <span class="hljs-number">10</span>);     <span class="hljs-comment">// Output: false (conflicts)</span>
<span class="hljs-built_in">print</span> scheduler.addEvent(<span class="hljs-string">"Coffee"</span>, <span class="hljs-number">1</span>, <span class="hljs-number">14</span>);    <span class="hljs-comment">// Output: true (14-15)</span>
<span class="hljs-built_in">print</span> scheduler.getSchedule();
<span class="hljs-comment">// Output:</span>
<span class="hljs-comment">// 09:00 - Meeting (2 hours)</span>
<span class="hljs-comment">// 14:00 - Coffee (1 hour)</span>
</code></pre>`,
}
