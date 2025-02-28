// test/answer-toggle-test.js
const { expect } = require('chai');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

describe('Answered Toggle Buttons', () => {
  let dom, document, markedValue;

  // A simple mock function to simulate the button click handler
  function markTopic(flag) {
    markedValue = flag;
  }

  beforeEach(() => {
    // Set up a simple HTML environment with two buttons
    dom = new JSDOM(`
      <!DOCTYPE html>
      <html>
        <body>
          <button id="markAnsweredBtn">Answered</button>
          <button id="markUnansweredBtn">Unanswered</button>
        </body>
      </html>
    `);
    document = dom.window.document;
    // Reset the value
    markedValue = null;

    // Attach event listeners to simulate your button click handlers
    document.getElementById('markAnsweredBtn').addEventListener('click', () => {
      markTopic(true);
    });
    document.getElementById('markUnansweredBtn').addEventListener('click', () => {
      markTopic(false);
    });
  });

  it('should call the handler with true when the "Answered" button is clicked', () => {
    const answeredBtn = document.getElementById('markAnsweredBtn');
    answeredBtn.click();
    expect(markedValue).to.equal(true);
  });

  it('should call the handler with false when the "Unanswered" button is clicked', () => {
    const unansweredBtn = document.getElementById('markUnansweredBtn');
    unansweredBtn.click();
    expect(markedValue).to.equal(false);
  });
});
