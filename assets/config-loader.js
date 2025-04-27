fetch('/assets/config.json')
  .then(res => res.json())
  .then(config => {
    const brand = config.brand;
    const style = document.createElement('style');
    style.innerHTML = `
      :root {
        --brand-primary: ${brand.primaryColor};
        --brand-bg: ${brand.backgroundColor};
        --brand-text: ${brand.textColor};
        --brand-accent: ${brand.accentColor};
        --brand-font: ${brand.fontFamily};
      }
    `;
    document.head.appendChild(style);
  })
  .catch(err => {
    console.error('Failed to load config.json', err);
  });
