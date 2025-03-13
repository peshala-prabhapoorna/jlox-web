const exampleArticles = [];

exampleArticles[0] = {
    title: 'Factorial Calculator',
    type: 'example',
    articleHTML: `<h3 id="-factorial-calculator-"><strong>Factorial Calculator</strong></h3>
<p>A program to calculate the factorial of a number (n!), which is the product of all positive integers from 1 to n.</p>
<pre><code class="lang-swift"><span class="hljs-keyword">var</span> n = <span class="hljs-number">5</span>;
<span class="hljs-keyword">var</span> <span class="hljs-literal">result</span> = <span class="hljs-number">1</span>;
<span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">2</span>; i &lt;= n; i = i + <span class="hljs-number">1</span>) {
  <span class="hljs-literal">result</span> = <span class="hljs-literal">result</span> * i;
}
print <span class="hljs-literal">result</span>;  // <span class="hljs-type">Output</span>: <span class="hljs-number">120</span>
</code></pre>
<p>The code initializes result as 1 and multiplies it by each number from 2 up to n, computing 5! = 5 × 4 × 3 × 2 × 1 = 120.</p>`,
}

exampleArticles[1] = {
    title: 'Prime Number Check',
    type: 'example',
    articleHTML: `<h3 id="-prime-number-check-"><strong>Prime Number Check</strong></h3>
<p>A function that determines whether a given number is prime (only divisible by 1 and itself).</p>
<pre><code class="lang-swift"><span class="hljs-keyword">fun</span> <span class="hljs-title function_">isDivisible</span>(<span class="hljs-variable">n</span>, <span class="hljs-variable">d</span>) {
  <span class="hljs-keyword">var</span> <span class="hljs-variable">temp</span> <span class="hljs-operator">=</span> <span class="hljs-variable">n</span>;
  <span class="hljs-keyword">while</span> (<span class="hljs-variable">temp</span> <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
    <span class="hljs-variable">temp</span> <span class="hljs-operator">=</span> <span class="hljs-variable">temp</span> <span class="hljs-operator">-</span> <span class="hljs-variable">d</span>;
  }
  <span class="hljs-keyword">return</span> <span class="hljs-variable">temp</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span>;
}

<span class="hljs-keyword">fun</span> <span class="hljs-title function_">isPrime</span>(<span class="hljs-variable">n</span>) {
  <span class="hljs-keyword">if</span> (<span class="hljs-variable">n</span> <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>) <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> <span class="hljs-variable">i</span> <span class="hljs-operator">=</span> <span class="hljs-number">2</span>; <span class="hljs-variable">i</span> <span class="hljs-operator">*</span> <span class="hljs-variable">i</span> <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> <span class="hljs-variable">n</span>; <span class="hljs-variable">i</span> <span class="hljs-operator">=</span> <span class="hljs-variable">i</span> <span class="hljs-operator">+</span> <span class="hljs-number">1</span>) {
    <span class="hljs-keyword">if</span> (<span class="hljs-variable">isDivisible</span>(<span class="hljs-variable">n</span><span class="hljs-operator">,</span> <span class="hljs-variable">i</span>)) <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
  }
  <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
}

<span class="hljs-built_in">print</span> <span class="hljs-variable">isPrime</span>(<span class="hljs-number">7</span>);  <span class="hljs-comment">// Output: true</span>
<span class="hljs-built_in">print</span> <span class="hljs-variable">isPrime</span>(<span class="hljs-number">4</span>);  <span class="hljs-comment">// Output: false</span>
</code></pre>
<p>The function checks divisibility up to n/2. Since modulo isn&#39;t available, it simulates it using subtraction and multiplication.</p>
`,
}

exampleArticles[2] = {
    title: 'Fibonacci Sequence',
    type: 'example',
    articleHTML: `<h3 id="-fibonacci-sequence-"><strong>Fibonacci Sequence</strong></h3>
<p>Generates Fibonacci numbers where each number is the sum of the two preceding ones.</p>
<pre><code class="lang-swift"><span class="hljs-function"><span class="hljs-keyword">fun</span> <span class="hljs-title">fib</span><span class="hljs-params">(n)</span></span> {
  <span class="hljs-keyword">if</span> (n &lt;= <span class="hljs-number">1</span>) <span class="hljs-keyword">return</span> n;
  <span class="hljs-keyword">return</span> fib(n - <span class="hljs-number">1</span>) + fib(n - <span class="hljs-number">2</span>);
}
<span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i = i + <span class="hljs-number">1</span>) {
  print fib(i);  <span class="hljs-comment">// Output: 0 1 1 2 3 5 8 13 21 34</span>
}
</code></pre>
<p>Uses recursion to calculate Fibonacci numbers, with base cases of 0 and 1. Prints first 10 numbers in the sequence.</p>
`,
}

exampleArticles[3] = {
    title: 'Class for Rectangles',
    type: 'example',
    articleHTML: `<h3 id="-class-for-rectangles-"><strong>Class for Rectangles</strong></h3>
<p>Demonstrates object-oriented programming with a Rectangle class that calculates area and perimeter.</p>
<pre><code class="lang-swift"><span class="hljs-keyword">class</span> Rectangle {
  init(<span class="hljs-built_in">width</span>, <span class="hljs-built_in">height</span>) {
    <span class="hljs-keyword">this</span>.<span class="hljs-built_in">width</span> = <span class="hljs-built_in">width</span>;
    <span class="hljs-keyword">this</span>.<span class="hljs-built_in">height</span> = <span class="hljs-built_in">height</span>;
  }
  area() {
    <span class="hljs-built_in">return</span> <span class="hljs-keyword">this</span>.<span class="hljs-built_in">width</span> * <span class="hljs-keyword">this</span>.<span class="hljs-built_in">height</span>;
  }
  perimeter() {
    <span class="hljs-built_in">return</span> <span class="hljs-number">2</span> * (<span class="hljs-keyword">this</span>.<span class="hljs-built_in">width</span> + <span class="hljs-keyword">this</span>.<span class="hljs-built_in">height</span>);
  }
}
var <span class="hljs-built_in">rect</span> = Rectangle(<span class="hljs-number">3</span>, <span class="hljs-number">4</span>);
<span class="hljs-built_in">print</span> <span class="hljs-built_in">rect</span>.area();      <span class="hljs-comment">// Output: 12</span>
<span class="hljs-built_in">print</span> <span class="hljs-built_in">rect</span>.perimeter(); <span class="hljs-comment">// Output: 14</span>
</code></pre>
<p>Creates a Rectangle class with methods for area and perimeter calculations. Tests it with a 3×4 rectangle.</p>
`,
}

exampleArticles[4] = {
    title: 'Inheritance with Vehicles',
    type: 'example',
    articleHTML: `<h3 id="-inheritance-with-vehicles-"><strong>Inheritance with Vehicles</strong></h3>
<p>Shows inheritance in object-oriented programming with a Vehicle parent class and Car child class.</p>
<pre><code class="lang-swift"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Vehicle</span> </span>{
  init(speed) {
    <span class="hljs-keyword">this</span>.speed = speed;
  }
  start() {
    <span class="hljs-built_in">print</span> <span class="hljs-string">"Vehicle started"</span>;
  }
}
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Car</span> &lt; <span class="hljs-title">Vehicle</span> </span>{
  start() {
    <span class="hljs-keyword">super</span>.start();
    <span class="hljs-built_in">print</span> <span class="hljs-string">"Car accelerating to "</span> + <span class="hljs-keyword">this</span>.speed;
  }
}
<span class="hljs-keyword">var</span> myCar = Car(<span class="hljs-number">60</span>);
myCar.start(); 
<span class="hljs-comment">// Output: </span>
<span class="hljs-comment">// Vehicle started</span>
<span class="hljs-comment">// Car accelerating to 60</span>
</code></pre>
<p>Demonstrates method overriding and the use of super to call parent class methods. The Car class extends Vehicle&#39;s functionality.</p>`,
}
