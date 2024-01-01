// Library file

function createCustomProgressBar(containerId, userConfig = {}) {
    const container = document.getElementById(containerId);
    const progressBar = document.createElement('div');
    progressBar.id = 'custom-progress-bar';
    progressBar.className = 'custom-progress-bar';
    container.appendChild(progressBar);
  
    // Default configuration
    const defaultConfig = {
      width: '0',
      height: '30px',
      backgroundColor: '#3498db',
      borderRadius: '5px',
      transition: 'width 0.5s ease, background-color 0.5s ease',
      animation: 'smooth', // Default animation style
      borderRadius: '5px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', // Box shadow
      margin: '5px', // Margin around the progress bar
    };
  
    // Merge user configuration with default values
    const config = { ...defaultConfig, ...userConfig };
  
    // Apply customization options
    Object.assign(progressBar.style, config);
  
    // Expose a simple function to update the progress bar
    function updateProgressBar(progress) {
      progressBar.style.width = `${progress}%`;
    }
  
    // Expose the progress bar element and update function
    return {
      progressBar,
      updateProgressBar,
    };
  }
  
