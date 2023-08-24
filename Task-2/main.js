/* 

JavaScript code can be added to a webpage using several methods. The preferred method often depends on the context and requirements of your project. Here are some ways to include JavaScript code on a webpage:

1. **Inline Script**: You can embed JavaScript directly within the HTML document using the `<script>` tag. This is the simplest way, but it's generally not recommended for larger scripts or for scripts that need to be reused across multiple pages. Example:

   ```html
   <script>
     // Your JavaScript code here
   </script>
   ```

2. **Internal Script**: You can include your JavaScript code within the `<script>` tag in the `<head>` or `<body>` section of the HTML document. This approach separates your JavaScript code from the HTML content, making it easier to manage. Example:

   ```html
   <html>
   <head>
     <script>
       // Your JavaScript code here
     </script>
   </head>
   <body>
     <!-- HTML content here -->
   </body>
   </html>
   ```

3. **External Script**: You can create a separate `.js` file containing your JavaScript code and include it in your HTML using the `<script>` tag's `src` attribute. This promotes code reusability and separates concerns. Example:

   ```html
   <script src="path/to/your/script.js"></script>
   ```

4. **Async and Defer Attributes**: When using the `<script>` tag with the `src` attribute, you can also use the `async` or `defer` attributes. These attributes control how the script is loaded and executed in relation to the rest of the page content.
   - `async`: The script is downloaded asynchronously and executed as soon as it's available, without blocking the HTML parsing. This is useful for scripts that don't depend on the DOM.
   - `defer`: The script is downloaded asynchronously but executed after the HTML parsing is complete. This is useful for scripts that need to interact with the DOM.

   ```html
   <script src="path/to/your/script.js" async></script>
   <script src="path/to/your/script.js" defer></script>
   ```

5. **Modern JavaScript Modules**: You can use ES6 modules to organize and modularize your JavaScript code. This is the most preferred approach for larger applications, as it supports a more structured way of writing and importing code.
   
   ```html
   <script type="module">
     import { someFunction } from './module.js';
     // Your code here
   </script>
   ```

The preferred method often depends on factors such as code organization, maintainability, reusability, and performance. For larger projects, using external scripts and modern module systems is generally recommended, as it helps to keep your codebase organized and easier to manage. However, for small and quick projects, inline or internal scripts might be more convenient.