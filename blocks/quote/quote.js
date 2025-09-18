export default function decorate(block) {
  // Get the quote data from the block
  const quoteText = block.querySelector('div:nth-child(1)')?.innerHTML?.trim() || '';
  const quoteAuthor = block.querySelector('div:nth-child(2)')?.textContent?.trim() || '';
  const accentColor = block.querySelector('div:nth-child(3)')?.textContent?.trim() || 'blue';

  // Create the quote structure
  const quoteElement = document.createElement('div');
  quoteElement.className = 'quote';
  quoteElement.setAttribute('data-accent-color', accentColor);

  // Create quote text
  const quoteTextElement = document.createElement('div');
  quoteTextElement.className = 'quote-text';
  quoteTextElement.innerHTML = quoteText;

  // Create author section
  const authorElement = document.createElement('div');
  authorElement.className = 'quote-author';
  authorElement.textContent = quoteAuthor;

  // Assemble the quote
  quoteElement.appendChild(quoteTextElement);
  quoteElement.appendChild(authorElement);

  // Clear the original block content and add the new structure
  block.innerHTML = '';
  block.appendChild(quoteElement);
}
