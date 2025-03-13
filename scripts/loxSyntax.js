const syntaxArticles = [];

syntaxArticles[0] = {
    title: 'Introduction to the Lox Language',
    type: 'syntax',
    articleHTML: `<h3 id="-introduction-to-the-lox-language-"><strong>Introduction to the Lox Language</strong></h3>
<p>Lox is a lightweight, dynamically typed scripting language designed for clarity and educational purposes. It combines familiar C-style syntax with modern features like classes, closures, and inheritance. The language is implemented as a <strong>tree-walk interpreter</strong>, which parses code into an abstract syntax tree (AST) and executes it directly. Lox emphasizes simplicity, making it ideal for learning language design or scripting small projects.  </p>
<h4 id="-key-features-"><strong>Key Features</strong>:</h4>
<ul>
<li><strong>Dynamic Typing</strong>: Variables hold values of any type (no type annotations).  </li>
<li><strong>First-Class Functions</strong>: Functions can be assigned to variables, passed as arguments, or returned.  </li>
<li><strong>Class-Based OOP</strong>: Classes with inheritance, methods, and <code>this</code> keyword.  </li>
<li><strong>Lexical Scoping</strong>: Variables are resolved at compile time based on nested blocks.  </li>
</ul>
<h4 id="-three-simple-examples-"><strong>Examples</strong>:</h4>
<ol>
<li><strong>Hello World</strong>:
<pre><code class="lang-swift"><span class="hljs-built_in">print</span> <span class="hljs-string">"Hello, Lox!"</span>;  <span class="hljs-comment">// Output: Hello, Lox!</span>
</code></pre>
</li>
<li><strong>Function &amp; Loop</strong>:
<pre><code class="lang-swift"><span class="hljs-function"><span class="hljs-keyword">fun</span> <span class="hljs-title">countTo</span><span class="hljs-params">(n)</span></span> {
  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">1</span>; i &lt;= n; i = i + <span class="hljs-number">1</span>) {
    print i;
  }
}
countTo(<span class="hljs-number">3</span>);  <span class="hljs-comment">// Output: 1 2 3</span>
</code></pre>
</li>
<li><strong>Class &amp; Object</strong>:
<pre><code class="lang-swift"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Greeter</span> </span>{
  sayHello() {
    <span class="hljs-built_in">print</span> <span class="hljs-string">"Hello from Greeter!"</span>;
  }
}
<span class="hljs-keyword">var</span> greeter = Greeter();
greeter.sayHello();  <span class="hljs-comment">// Output: Hello from Greeter!</span>
</code></pre>
</li>
</ol>
<p><strong>Ready to Learn?</strong><br>Follow the lessons below to master Lox’s syntax, from variables to inheritance. Each lesson includes examples, key rules, and practical tips.  </p> `,
}

syntaxArticles[1] = {
    title: 'Program Structure & Basic Output',
    type: 'syntax',
    articleHTML: `<h3 id="-lesson-1-program-structure-basic-output-"><strong>Program Structure &amp; Basic Output</strong></h3>
<h4 id="-what-is-a-lox-program-"><strong>What is a Lox Program?</strong></h4>
<p>A Lox program consists of a series of <strong>declarations</strong> (e.g., variables, functions, classes) followed by <strong>statements</strong> (e.g., <code>print</code>, loops). The interpreter executes code top-down, but declarations are <em>hoisted</em> (e.g., functions can be called before they’re defined).  </p>
<h4 id="-syntax-rules-"><strong>Syntax Rules</strong>:</h4>
<ol>
<li><strong>Statements</strong> end with a semicolon <code>;</code>.  </li>
<li><strong>Blocks</strong> use curly braces <code>{ ... }</code> to group code (e.g., loops, conditionals).  </li>
<li><strong>Comments</strong> start with <code>//</code> and are ignored.  </li>
</ol>
<h4 id="-hello-world-"><strong>Hello World</strong>:</h4>
<pre><code class="lang-swift"><span class="hljs-comment">// The simplest valid program</span>
<span class="hljs-built_in">print</span> <span class="hljs-string">"Hello, world!"</span>;
</code></pre>
<h4 id="-multi-statement-program-"><strong>Multi-Statement Program</strong>:</h4>
<pre><code class="lang-swift"><span class="hljs-keyword">var</span> message = <span class="hljs-string">"Welcome to Lox"</span>;  <span class="hljs-comment">// Declaration</span>
<span class="hljs-built_in">print</span> message;                   <span class="hljs-comment">// Statement</span>
{                               <span class="hljs-comment">// Block</span>
  <span class="hljs-keyword">var</span> temp = <span class="hljs-string">"Local message"</span>;
  <span class="hljs-built_in">print</span> temp;  
}
</code></pre>
<h4 id="-key-notes-"><strong>Key Notes</strong>:</h4>
<ul>
<li>Lox is <strong>expression-oriented</strong>: Even assignments like <code>x = 5</code> are expressions that return a value.  </li>
<li>The program ends with an implicit <code>EOF</code> (end-of-file) token.  </li>
</ul>`,
}

syntaxArticles[2] = {
    title: 'Variables & Data Types',
    type: 'syntax',
    articleHTML: `<h3 id="-lesson-2-variables-data-types-"><strong>Variables &amp; Data Types</strong></h3>
<h4 id="-declaring-variables-"><strong>Declaring Variables</strong></h4>
<p>Use <code>var</code> to declare variables. Initialization is optional (defaults to <code>nil</code>):  </p>
<pre><code class="lang-swift"><span class="hljs-keyword">var</span> name = <span class="hljs-string">"Lox"</span>;  
<span class="hljs-keyword">var</span> age;          // Initialized <span class="hljs-keyword">to</span> <span class="hljs-string">'nil'</span>
</code></pre>
<h4 id="-data-types-"><strong>Data Types</strong></h4>
<p>Lox supports four primitive types:  </p>
<ol>
<li><strong>Numbers</strong>: <code>3</code>, <code>-5.2</code> (double-precision floating-point).  </li>
<li><strong>Strings</strong>: <code>&quot;hello&quot;</code> (immutable, double-quoted).  </li>
<li><strong>Booleans</strong>: <code>true</code> or <code>false</code>.  </li>
<li><strong>Nil</strong>: <code>nil</code> (represents no value).  </li>
</ol>
<h4 id="-type-flexibility-"><strong>Type Flexibility</strong></h4>
<p>Variables can be reassigned to any type:  </p>
<pre><code class="lang-swift">var x = <span class="hljs-number">10</span><span class="hljs-comment">;  </span>
<span class="hljs-attribute">x</span> = <span class="hljs-string">"now a string"</span><span class="hljs-comment">;  // Valid</span>
</code></pre>
<h4 id="-scope-rules-"><strong>Scope Rules</strong></h4>
<ul>
<li>Variables are <strong>block-scoped</strong>:  <pre><code class="lang-swift">{
  <span class="hljs-keyword">var</span> inner = <span class="hljs-string">"local"</span>;
  <span class="hljs-built_in">print</span> inner;  <span class="hljs-comment">// Works</span>
}
<span class="hljs-built_in">print</span> inner;    <span class="hljs-comment">// Error: Undefined variable.</span>
</code></pre>
</li>
<li>Re-declaring a variable in the same scope is an error:  <pre><code class="lang-swift"><span class="hljs-keyword">var</span> x = <span class="hljs-number">1</span>;
<span class="hljs-keyword">var</span> x = <span class="hljs-number">2</span>;  <span class="hljs-comment">// Error: Variable 'x' already declared.</span>
</code></pre>
</li>
</ul>
`,
}

syntaxArticles[3] = {
    title: 'Operators & Expressions',
    type: 'syntax',
    articleHTML: `<h3 id="-lesson-3-operators-expressions-"><strong>Operators &amp; Expressions</strong></h3>
<h4 id="-operator-precedence-"><strong>Operator Precedence</strong></h4>
<p>From highest to lowest priority:  </p>
<ol>
<li>Grouping <code>()</code>  </li>
<li>Unary <code>-</code>, <code>!</code>  </li>
<li>Multiplication/Division <code>*</code>, <code>/</code>  </li>
<li>Addition/Subtraction <code>+</code>, <code>-</code>  </li>
<li>Comparisons <code>&gt;</code>, <code>&gt;=</code>, <code>&lt;</code>, <code>&lt;=</code>  </li>
<li>Equality <code>==</code>, <code>!=</code>  </li>
<li>Logical <code>and</code>  </li>
<li>Logical <code>or</code>  </li>
<li>Comma <code>,</code>  </li>
</ol>
<h4 id="-examples-"><strong>Examples</strong></h4>
<pre><code class="lang-swift">var x = <span class="hljs-number">1</span> + <span class="hljs-number">2</span> * <span class="hljs-number">3</span>;   <span class="hljs-comment">// 7 (not 9)</span>
var y = (<span class="hljs-number">1</span> + <span class="hljs-number">2</span>) * <span class="hljs-number">3</span>; <span class="hljs-comment">// 9</span>
var z = !true;       <span class="hljs-comment">// false</span>
var a = <span class="hljs-number">1</span> &gt; <span class="hljs-number">2</span> or <span class="hljs-number">3</span> == <span class="hljs-number">3</span>;  <span class="hljs-comment">// true</span>
</code></pre>
<h4 id="-special-operators-"><strong>Special Operators</strong></h4>
<ul>
<li><strong>Comma Operator</strong>: Evaluates expressions left-to-right, returns the last value:  <pre><code class="lang-swift">var <span class="hljs-type">list</span> = <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>;  <span class="hljs-comment">// 'list' is 3</span>
</code></pre>
</li>
<li><strong>Ternary Conditional</strong>:  <pre><code class="lang-swift"><span class="hljs-attribute">var result</span> = x &gt; 5 ? <span class="hljs-string">"big"</span> : <span class="hljs-string">"small"</span>;
</code></pre>
</li>
</ul>
`,
}

syntaxArticles[4] = {
    title: 'Control Flow',
    type: 'syntax',
    articleHTML: `<h3 id="-lesson-4-control-flow-"><strong>Control Flow</strong></h3>
<h4 id="-conditionals-"><strong>Conditionals</strong></h4>
<p>Use <code>if</code>/<code>else</code> to branch execution:  </p>
<pre><code class="lang-swift"><span class="hljs-keyword">var</span> score = <span class="hljs-number">75</span>;
<span class="hljs-keyword">if</span> (<span class="hljs-keyword">score</span> &gt;= 90) {
  <span class="hljs-keyword">print</span> <span class="hljs-string">"A"</span>;
} <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (<span class="hljs-keyword">score</span> &gt;= 80) {
  <span class="hljs-keyword">print</span> <span class="hljs-string">"B"</span>;
} <span class="hljs-keyword">else</span> {
  <span class="hljs-keyword">print</span> <span class="hljs-string">"C"</span>;
}
</code></pre>
<h4 id="-while-loops-"><strong>While Loops</strong></h4>
<p>Execute a block while a condition is <code>true</code>:  </p>
<pre><code class="lang-swift"><span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>;
<span class="hljs-keyword">while</span> (i &lt; <span class="hljs-number">3</span>) {
  <span class="hljs-built_in">print</span> i;  <span class="hljs-comment">// 0, 1, 2</span>
  i = i + <span class="hljs-number">1</span>;
}
</code></pre>
<h4 id="-block-scoping-"><strong>Block Scoping</strong></h4>
<p>Variables declared inside a block are local to it:  </p>
<pre><code class="lang-swift"><span class="hljs-keyword">var</span> <span class="hljs-keyword">global</span> = <span class="hljs-string">"outside"</span>;
{
  <span class="hljs-keyword">var</span> <span class="hljs-keyword">global</span> = <span class="hljs-string">"inside"</span>;
  <span class="hljs-keyword">print</span> <span class="hljs-keyword">global</span>;  <span class="hljs-comment">// "inside"</span>
}
<span class="hljs-keyword">print</span> <span class="hljs-keyword">global</span>;    <span class="hljs-comment">// "outside"</span>
</code></pre>
`,
}

syntaxArticles[5] = {
    title: 'For Loops',
    type: 'syntax',
    articleHTML: `<h3 id="-lesson-5-for-loops-"><strong>For Loops</strong></h3>
<h4 id="-syntax-"><strong>Syntax</strong></h4>
<p>For loops have three optional clauses:  </p>
<pre><code class="lang-swift"><span class="hljs-keyword">for</span> (var <span class="hljs-built_in">i</span> = <span class="hljs-number">0</span>; <span class="hljs-built_in">i</span> &lt; <span class="hljs-number">3</span>; <span class="hljs-built_in">i</span> = <span class="hljs-built_in">i</span> + <span class="hljs-number">1</span>) {
  print i;  // <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>
}
</code></pre>
<h4 id="-desugaring-"><strong>Desugaring</strong></h4>
<p>The loop above is equivalent to:  </p>
<pre><code class="lang-swift">{
  var i = <span class="hljs-number">0</span><span class="hljs-comment">;</span>
  while (<span class="hljs-name">i</span> &lt; <span class="hljs-number">3</span>) {
    print i;
    i = i + <span class="hljs-number">1</span><span class="hljs-comment">;</span>
  }
}
</code></pre>
<h4 id="-flexible-initializer-"><strong>Flexible Initializer</strong></h4>
<p>The initializer can be any statement:  </p>
<pre><code class="lang-swift">var <span class="hljs-built_in">j</span> = <span class="hljs-number">0</span>;
<span class="hljs-keyword">for</span> (; <span class="hljs-built_in">j</span> &lt; <span class="hljs-number">2</span>; <span class="hljs-built_in">j</span> = <span class="hljs-built_in">j</span> + <span class="hljs-number">1</span>) {
  print j;  // <span class="hljs-number">0</span>, <span class="hljs-number">1</span>
}
</code></pre>
`,
}

syntaxArticles[6] = {
    title: 'Functions',
    type: 'syntax',
    articleHTML: `<h3 id="-lesson-6-functions-"><strong>Functions</strong></h3>
<h4 id="-declaring-functions-"><strong>Declaring Functions</strong></h4>
<p>Functions are declared with <code>fun</code>, followed by a name, parameters, and a body:  </p>
<pre><code class="lang-swift"><span class="hljs-function"><span class="hljs-keyword">fun</span> <span class="hljs-title">greet</span><span class="hljs-params">(name)</span></span> { 
  print <span class="hljs-string">"Hello, "</span> + name; 
}  
greet(<span class="hljs-string">"Alice"</span>); <span class="hljs-comment">// "Hello, Alice"</span>
</code></pre>
<ul>
<li><strong>Parameters</strong>: Comma-separated identifiers (e.g., <code>(a, b, c)</code>).  </li>
<li><strong>Return Values</strong>: Use <code>return</code> to exit early or return a value (defaults to <code>nil</code>):  <pre><code class="lang-swift"><span class="hljs-function"><span class="hljs-keyword">fun</span> <span class="hljs-title">add</span><span class="hljs-params">(a, b)</span></span> { 
  <span class="hljs-keyword">return</span> a + b; 
}  
print add(<span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">// 5</span>
</code></pre>
</li>
</ul>
<h4 id="-first-class-functions-"><strong>First-Class Functions</strong></h4>
<p>Functions can be assigned to variables, passed as arguments, or returned:  </p>
<pre><code class="lang-swift"><span class="hljs-keyword">var</span> multiply = <span class="hljs-function"><span class="hljs-title">fun</span><span class="hljs-params">(a, b)</span></span> { <span class="hljs-keyword">return</span> a * b; };  
print multiply(<span class="hljs-number">3</span>, <span class="hljs-number">4</span>); <span class="hljs-comment">// 12</span>
</code></pre>
<h4 id="-closures-"><strong>Closures</strong></h4>
<p>Functions capture variables from their outer scope (lexical scoping):  </p>
<pre><code class="lang-swift"><span class="hljs-function"><span class="hljs-keyword">fun</span> <span class="hljs-title">makeCounter</span><span class="hljs-params">()</span></span> {  
  <span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>;  
  <span class="hljs-function"><span class="hljs-keyword">fun</span> <span class="hljs-title">count</span><span class="hljs-params">()</span></span> {  
    i = i + <span class="hljs-number">1</span>;  
    <span class="hljs-keyword">return</span> i;  
  }  
  <span class="hljs-keyword">return</span> count;  
}  
<span class="hljs-keyword">var</span> counter = makeCounter();  
print counter(); <span class="hljs-comment">// 1  </span>
print counter(); <span class="hljs-comment">// 2</span>
</code></pre>
`,
}

syntaxArticles[7] = {
    title: 'Classes & Methods',
    type: 'syntax',
    articleHTML: `<h3 id="-lesson-7-classes-methods-"><strong>Classes &amp; Methods</strong></h3>
<h4 id="-class-declaration-"><strong>Class Declaration</strong></h4>
<p>Define classes with <code>class</code>, methods, and an optional <code>init</code> constructor:  </p>
<pre><code class="lang-swift"><span class="hljs-keyword">class</span> Rectangle {  
  init(<span class="hljs-built_in">width</span>, <span class="hljs-built_in">height</span>) {  
    <span class="hljs-keyword">this</span>.<span class="hljs-built_in">width</span> = <span class="hljs-built_in">width</span>;  
    <span class="hljs-keyword">this</span>.<span class="hljs-built_in">height</span> = <span class="hljs-built_in">height</span>;  
  }  

  area() {  
    <span class="hljs-built_in">return</span> <span class="hljs-keyword">this</span>.<span class="hljs-built_in">width</span> * <span class="hljs-keyword">this</span>.<span class="hljs-built_in">height</span>;  
  }  
}  

var <span class="hljs-built_in">rect</span> = Rectangle(<span class="hljs-number">3</span>, <span class="hljs-number">4</span>);  
<span class="hljs-built_in">print</span> <span class="hljs-built_in">rect</span>.area(); <span class="hljs-comment">// 12</span>
</code></pre>
<ul>
<li><strong><code>this</code></strong>: Refers to the current instance inside methods.  </li>
<li><strong><code>init</code></strong>: Automatically called when an object is created.  </li>
</ul>
<h4 id="-methods-"><strong>Methods</strong></h4>
<p>Methods are functions attached to a class:  </p>
<pre><code class="lang-swift"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Greeter</span> {  </span>
  say(message) {  
    <span class="hljs-built_in">print</span> <span class="hljs-string">"Message: "</span> + message;  
  }  
}  
Greeter().say(<span class="hljs-string">"Hi"</span>); <span class="hljs-regexp">//</span> <span class="hljs-string">"Message: Hi"</span>
</code></pre>
`,
}

syntaxArticles[8] = {
    title: 'Inheritance',
    type: 'syntax',
    articleHTML: `<h3 id="-lesson-8-inheritance-super-"><strong>Inheritance</strong></h3>
<h4 id="-subclassing-"><strong>Subclassing</strong></h4>
<p>Inherit from a parent class using <code>&lt;</code>:  </p>
<pre><code class="lang-swift"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Animal</span> {  </span>
  speak() {  
    print <span class="hljs-string">"???"</span>;  
  }  
}  

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Dog</span> &lt; Animal {  </span>
  speak() {  
    print <span class="hljs-string">"Woof!"</span>;  
  }  
}  

Dog().speak(); <span class="hljs-regexp">//</span> <span class="hljs-string">"Woof!"</span>
</code></pre>
<h4 id="-super-"><strong>Super</strong></h4>
<p>Use <code>super.method()</code> to call a parent class method:  </p>
<pre><code class="lang-swift"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Cat</span> &lt; Animal {  </span>
  speak() {  
    <span class="hljs-keyword">super</span>.speak(); <span class="hljs-regexp">//</span> Calls Animal.speak()  
    print <span class="hljs-string">"Meow!"</span>;  
  }  
}  
Cat().speak(); <span class="hljs-regexp">//</span> <span class="hljs-string">"??? Meow!"</span>
</code></pre>
<ul>
<li><strong>Restriction</strong>: <code>super</code> can only be used in subclass methods.  </li>
</ul>
`,
}

syntaxArticles[9] = {
    title: 'Advanced Expressions',
    type: 'syntax',
    articleHTML: `<h3 id="-lesson-9-advanced-expressions-"><strong>Advanced Expressions</strong></h3>
<h4 id="-assignment-property-access-"><strong>Assignment &amp; Property Access</strong></h4>
<p>Assign to variables or object properties:  </p>
<pre><code class="lang-swift"><span class="hljs-keyword">class</span> <span class="hljs-title">Person</span> {
  <span class="hljs-variable">init</span>(<span class="hljs-variable">name</span>) {
    <span class="hljs-keyword">this</span><span class="hljs-operator">.</span><span class="hljs-property"></span><span class="hljs-variable">name</span> <span class="hljs-operator">=</span> <span class="hljs-variable">name</span>;
  }
}
<span class="hljs-keyword">var</span> <span class="hljs-variable">person</span> <span class="hljs-operator">=</span> <span class="hljs-variable">Person</span>(<span class="hljs-string">"Alice"</span>);
<span class="hljs-variable">person</span><span class="hljs-operator">.</span><span class="hljs-property"></span><span class="hljs-variable">name</span> <span class="hljs-operator">=</span> <span class="hljs-string">"Bob"</span>;
<span class="hljs-built_in">print</span> <span class="hljs-variable">person</span><span class="hljs-operator">.</span><span class="hljs-property"></span><span class="hljs-variable">name</span>; <span class="hljs-comment">// "Bob"</span>
</code></pre>
<h4 id="-ternary-operator-"><strong>Ternary Operator</strong></h4>
<p>Compact conditional logic:  </p>
<pre><code class="lang-swift"><span class="hljs-built_in">var</span> age = <span class="hljs-number">20</span>;  
<span class="hljs-built_in">var</span> <span class="hljs-built_in">status</span> = age &gt;= <span class="hljs-number">18</span> ? <span class="hljs-string">"Adult"</span> : <span class="hljs-string">"Minor"</span>;  
<span class="hljs-built_in">print</span> <span class="hljs-built_in">status</span>; // <span class="hljs-string">"Adult"</span>
</code></pre>
<h4 id="-comma-operator-"><strong>Comma Operator</strong></h4>
<p>Evaluates expressions left-to-right, returns the last value:  </p>
<pre><code class="lang-swift">var x = (<span class="hljs-number">1</span> + <span class="hljs-number">2</span>, <span class="hljs-number">3</span> * <span class="hljs-number">4</span>, <span class="hljs-string">"hello"</span>);  
print x; <span class="hljs-comment">// "hello"</span>
</code></pre>
<h4 id="-method-chaining-"><strong>Method Chaining</strong></h4>
<p>Chain method calls by returning <code>this</code>:  </p>
<pre><code class="lang-swift"><span class="hljs-keyword">class</span> <span class="hljs-title">Calculator</span> {  
  init(<span class="hljs-keyword">value</span>) {  
    <span class="hljs-keyword">this</span>.<span class="hljs-keyword">value</span> = <span class="hljs-keyword">value</span>;  
  }  

  <span class="hljs-keyword">add</span>(n) {  
    <span class="hljs-keyword">this</span>.<span class="hljs-keyword">value</span> = <span class="hljs-keyword">this</span>.<span class="hljs-keyword">value</span> + n;  
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>;  
  }  

  multiply(n) {  
    <span class="hljs-keyword">this</span>.<span class="hljs-keyword">value</span> = <span class="hljs-keyword">this</span>.<span class="hljs-keyword">value</span> * n;  
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>;  
  }  
}  

<span class="hljs-keyword">var</span> calc = Calculator(<span class="hljs-number">1</span>);  
calc.<span class="hljs-keyword">add</span>(<span class="hljs-number">2</span>).multiply(<span class="hljs-number">3</span>);  
print calc.<span class="hljs-keyword">value</span>; <span class="hljs-comment">// 9</span>
</code></pre>
`,
}

syntaxArticles[10] = {
    title: 'Conclusion',
    type: 'syntax',
    articleHTML: `<h3 id="-conclusion-"><strong>Conclusion</strong></h3>
<p>You’ve now covered all core Lox syntax!  </p>
<ul>
<li><strong>Key Takeaways</strong>:  <ol>
<li>Lox uses C-style syntax with dynamic typing and lexical scoping.  </li>
<li>Functions and classes are first-class citizens.  </li>
<li>Inheritance is explicit via <code>&lt;</code> and <code>super</code>.  </li>
</ol>
</li>
<li><strong>Next Steps</strong>:  <ul>
<li>Practice by building small programs (e.g., a calculator).  </li>
<li>Explore <em>Crafting Interpreters</em> for implementation details.  </li>
</ul>
</li>
</ul>
<p><strong>Example Challenge</strong>:<br>Write a Lox program that creates a <code>Stack</code> class with <code>push</code>, <code>pop</code>, and <code>peek</code> methods.  </p>
<pre><code class="lang-swift"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Stack</span> </span>{  
  init() {  
    <span class="hljs-comment">// ...</span>
  }  

  push(item) {  
    <span class="hljs-comment">// ...</span>
  }  

  pop() {  
    <span class="hljs-comment">// ...</span>
  }  

  peek() {  
    <span class="hljs-comment">// ...</span>
  }  
}
</code></pre>
<p>Happy coding! 🚀</p>
`,
}
