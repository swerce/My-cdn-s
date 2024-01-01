// This is a simple progress bar librery made by swerce(swwajal);
// Contribute in it to support. Thankyou 🙂

function createCustomProgressBar(containerId, userConfig = {}) {
    const container = document.getElementById(containerId);
  
    if (!container) {
      console.error(`Container element with ID "${containerId}" not found.`);
      return null;
    }
  
    const progressBar = document.createElement('div');
    progressBar.id = 'custom-progress-bar';
    progressBar.className = 'custom-progress-bar';
    container.appendChild(progressBar);

    // Create a container div with the same length and height as the progress bar
    const containerStyle = {
      position: userConfig.position || 'absolute', // Allow customization of position
      width: '100%',
      height: progressBar.style.height || userConfig.height || '30px', // Set the height automatically
      backgroundColor: userConfig.containerColor || 'transparent', // Allow customization of container color
      borderRadius: progressBar.style.borderRadius || userConfig.borderRadius || '5px', // Inherit borderRadius
      margin: progressBar.style.margin || userConfig.margin || '5px', // Inherit margin
    };
    const progressContainer = document.createElement('div');
    progressContainer.id = 'progress-container';
    progressContainer.className = 'progress-container';
    container.appendChild(progressContainer);
    Object.assign(progressContainer.style, containerStyle);
  
    // Default configuration
    const defaultConfig = {
      width: '0',
      height: '30px',
      zIndex:'1',
      backgroundColor: '#3498db',
      borderRadius: '5px',
      transition: 'width 0.5s ease, background-color 0.5s ease',
      animation: 'smooth', // Default animation style
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', // Box shadow
      margin: '5px', // Margin around the progress bar
      position: 'absolute', // Default position style
      onStart: null,
      onProgress: null,
      onComplete: null,
    };
  
    // Merge user configuration with default values
    const config = { ...defaultConfig, ...userConfig };
  
    // Apply customization options
    Object.assign(progressBar.style, config);
    Object.assign(progressContainer.style, {
      height: progressBar.style.height || config.height || '30px', // Set the height automatically
      backgroundColor: config.containerColor || 'transparent',
      borderRadius: progressBar.style.borderRadius || config.borderRadius || '5px', // Inherit borderRadius
      margin: progressBar.style.margin || config.margin || '5px', // Inherit margin
      position: config.position || 'absolute', // Apply position style
    });
  
    // Expose a simple function to update the progress bar
    function updateProgressBar(progress) {
      progressBar.style.width = `${progress}%`;
  
      // Callbacks
      triggerCallback('onProgress', progress);
  
      if (progress === 0) {
        triggerCallback('onStart');
      }
  
      if (progress === 100) {
        triggerCallback('onComplete');
      }
    }
  
    // Generalized event handling
    const eventHandlers = {};
  
    function on(eventName, handler) {
      if (!eventHandlers[eventName]) {
        eventHandlers[eventName] = [];
      }
      eventHandlers[eventName].push(handler);
    }
  
    function triggerCallback(eventName, ...args) {
      const handlers = eventHandlers[eventName];
      if (handlers) {
        handlers.forEach((handler) => handler(...args));
      }
    }
  
    // Expose the progress bar element, update function, and event system
    return {
      progressBar,
      updateProgressBar,
      on,
      applyCustomStyles: (styles) => {
        // Allow users to apply additional custom styles after initialization
        Object.assign(progressBar.style, styles);
      },
    };
  }
