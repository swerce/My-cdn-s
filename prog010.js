// Library file

function createCustomProgressBar(containerSelector, userConfig = {}) {
    const container = document.querySelector(containerSelector);
    
    if (!container) {
      console.error(`Container element with selector "${containerSelector}" not found.`);
      return null;
    }
  
    const progressBar = container.querySelector('.custom-progress-bar');
  
    if (!progressBar) {
      console.error('Progress bar element with class "custom-progress-bar" not found in the container.');
      return null;
    }
  
    // Default configuration
    const defaultConfig = {
      width: '0',
      height: '30px',
      backgroundColor: '#3498db',
      borderRadius: '5px',
      transition: 'width 0.5s ease, background-color 0.5s ease',
      animation: 'smooth', // Default animation style
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', // Box shadow
      margin: '5px', // Margin around the progress bar
    };
  
    // Merge user configuration with default values
    const config = { ...defaultConfig, ...userConfig };
  
    // Apply customization options
    Object.assign(progressBar.style, config);
  
    // Expose a simple function to update the progress bar
    async function updateProgressBar(progress, options = {}) {
      const clampedProgress = Math.min(100, Math.max(0, progress));
      const { onComplete, onStart, onProgress, duration = 1000, gradientColors, easingFunction } = options;
  
      if (onStart) {
        onStart();
      }
  
      await new Promise((resolve) => {
        progressBar.style.transition = `width ${duration / 1000}s ${easingFunction || 'ease'}, background-color ${duration / 1000}s ${easingFunction || 'ease'}`;
  
        if (gradientColors && gradientColors.length === 2) {
          progressBar.style.background = `linear-gradient(to right, ${gradientColors[0]}, ${gradientColors[1]})`;
        }
  
        progressBar.style.width = `${clampedProgress}%`;
        progressBar.setAttribute('aria-valuenow', `${clampedProgress}`);
        resolve();
      });
  
      if (onProgress) {
        onProgress(clampedProgress);
      }
  
      if (onComplete) {
        onComplete();
      }
    }
  
    // Expose the progress bar element and update function
    return {
      progressBar,
      updateProgressBar,
    };
  }
  
