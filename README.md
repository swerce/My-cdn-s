# My-cdn-s
my cdn files like js css etc..

#example code for prog010
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="[user-progress-bar.js](https://swerce.github.io/My-cdn-s/prog010.js)"></script>
  <title>Customizable Progress Bar Example</title>
</head>
<body>

<div id="progress-container" class="progress-container"></div>

<script>
  // Create custom progress bar with user configuration
  const { progressBar, updateProgressBar } = createCustomProgressBar('progress-container', {
    width: '0',
    height: '40px',
    backgroundColor: '#ff5733',
    borderRadius: '8px',
    transition: 'width 0.8s ease, background-color 0.8s ease',
    animation: 'shake', // Specify animation style (smooth, gradual-fill, bounce, pulse, slide, flash, shake)
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    margin: '10px',
  });

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
