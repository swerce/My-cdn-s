# My-cdn-s
my cdn files like js css etc..

#example code for prog010
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://swerce.github.io/My-cdn-s/prog010.js"></script>
  <title>Customizable Progress Bar Example</title>
</head>
<body>
    <style>
        body{
            padding: 0;
            margin: 0;
        }
    </style>

    <div id="progress-container" class="progress-container"></div>


<script>
  // Create custom progress bar with user configuration and callbacks
 // Create custom progress bar with user configuration and callbacks
 const { progressBar, updateProgressBar, on, applyCustomStyles } = createCustomProgressBar('progress-container', {
    width: '0',
    height: '10px',
    backgroundColor: '#ff5733',
    borderRadius: '8px',
    transition: 'width 0.8s ease, background-color 0.8s ease',
    animation: 'shake',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    // margin: '10px',
    containerColor: '#FF573361', // Customize the background color of the container here
  });


// Example usage
on('onStart', () => console.log('Progress bar started.'));
on('onProgress', (progress) => console.log(`Progress: ${progress}%`));
on('onComplete', () => console.log('Progress bar completed.'));

// Example usage with advanced responsive configuration

// Example usage
let currentProgress = 0;

// Update the progress bar every second (for demonstration purposes)
const intervalId = setInterval(() => {
  if (currentProgress < 100) {
    currentProgress += 10;
    updateProgressBar(currentProgress);
  } else {
    clearInterval(intervalId);
  }
}, 1000);


</script>

</body>
</html>

```
