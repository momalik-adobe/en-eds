export default function decorate(block) {
  // Get the quote data from the block
  const quoteText = block.querySelector('div:nth-child(1)')?.textContent?.trim() || '';
  const authorText = block.querySelector('div:nth-child(2)')?.textContent?.trim() || '';
  const authorName = block.querySelector('div:nth-child(3)')?.textContent?.trim() || '';
  const accentColor = block.querySelector('div:nth-child(4)')?.textContent?.trim() || 'blue';

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

  const authorTextElement = document.createElement('div');
  authorTextElement.className = 'author-text';
  authorTextElement.textContent = authorText;

  const authorNameElement = document.createElement('div');
  authorNameElement.className = 'author-name';
  authorNameElement.textContent = authorName;

  // Assemble the quote
  authorElement.appendChild(authorTextElement);
  authorElement.appendChild(authorNameElement);
  
  quoteElement.appendChild(quoteTextElement);
  quoteElement.appendChild(authorElement);

  // Clear the original block content and add the new structure
  block.innerHTML = '';
  block.appendChild(quoteElement);
}
