# Meta Syntax of the Grammar

### **1. Rule Definitions**
- Syntax:  
  ```
  non-terminal → production
  ```
- `non-terminal`: Represents a grammar rule or category (like `expression` or `unary`).  
- `→`: Separates the rule name from its definition.  
- **Example:**  
  ```
  expression → equality
  ```

### **2. Alternative Choices (Disjunction)**
- `|` separates multiple valid alternatives for a rule.  
- **Example:**  
  ```
  literal → NUMBER | STRING | "true" | "false" | "nil"
  ```

### **3. Grouping**
- Parentheses `()` group elements.
- **Example:**  
  ```
  unary → ( "!" | "-" ) unary
  ```

### **4. Terminal Symbols (Literals)**
- Quoted strings (`"=="`, `"("`, `"true"`) represent specific tokens to match in the input.  
- **Example:**  
  ```
  operator → "==" | "!="
  ```

### **5. Recursive Definitions**
- A rule referencing itself, either directly or indirectly, allows recursion.  
- **Direct recursion example:**  
  ```
  unary → ( "!" | "-" ) unary | primary
  ```
- **Indirect recursion example:**  
  ```
  expression → primary ...
  primary → "(" expression ")"
  ```

### **6. Optional Elements (`?`)**
- `?` denotes that an element may appear zero or one time.  
- **Example:**  
  ```
  expression → identifier ("[" expression "]")?
  ```

### **7. Repetition**
- `*` denotes zero or more occurrences of the preceding element.  
- **Example:**  
  ```
  factor → unary ( ( "/" | "*" ) unary )*
  ```

### **8. Associativity Control Through Rule Placement**
- Associativity is implied by where recursion occurs in the rule.  
  - **Left-associative:** Recursive call appears on the left side.  
  - **Example:**  
    ```
    term → factor ( ( "-" | "+" ) factor )*
    ```
  - **Right-associative:** Recursive call appears on the right side.  
  - **Example:**  
    ```
    unary → ( "!" | "-" ) unary | primary
    ```

### **9. Precedence Control Through Rule Stratification**
- Precedence is enforced by defining separate rules for different precedence levels (e.g., `term`, `factor`, `equality`). Lower precedence rules call higher precedence rules.
