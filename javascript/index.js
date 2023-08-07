// Selectors for buttons and elements
let textout = document.querySelector(".text-out");
let boldBtn = document.querySelector(".bold");
let italicBtn = document.querySelector(".italic");
let alignRightBtn = document.querySelector(".align-right");
let alignLeftBtn = document.querySelector(".align-left");
let alignCenterBtn = document.querySelector(".align-center");
let sectionText = document.querySelector(".intro-text");
let removeFormatTextBtn = document.querySelector(".reset");
let selectAllBtn = document.querySelector(".selectAll");
let underlineBtn = document.querySelector(".underline");
let undoBtn = document.querySelector(".undo");
let redoBtn = document.querySelector(".redo");
let deleteBtn = document.querySelector(".delete");
let copyBtn = document.querySelector(".copy");
let H1Btn = document.querySelector(".H1");
let H2Btn = document.querySelector(".H2");
let H3Btn = document.querySelector(".H3");

// Function to apply text formatting commands
function text(command, value) {
  document.execCommand(command, false, value);
}

// Function to apply text alignment
function textAlign(textalign, value) {
  document.execCommand("justify" + textalign, false, value);
}

// Function to apply heading styles
function applyHeadingStyle(headingType) {
  document.execCommand("formatBlock", false, headingType);
}

// Function to attach click event to buttons
function startListing(button, functionName) {
  button.addEventListener("click", functionName);
}

// Attach click events to buttons for text formatting
startListing(boldBtn, () => text("bold", null));
startListing(italicBtn, () => text("italic", null));
startListing(removeFormatTextBtn, () => text("removeFormat", null));
startListing(underlineBtn, () => text("underline", null));
startListing(undoBtn, () => text("undo", null));
startListing(redoBtn, () => text("redo", null));
startListing(selectAllBtn, () => text("selectAll", null));
startListing(deleteBtn, () => text("delete", null));
// Note: "copy" command has limitations and is commented out
// startListing(copyBtn, () => text("copy", null));

// Attach click events to buttons for heading styles
startListing(H1Btn, () => applyHeadingStyle("H1"));
startListing(H2Btn, () => applyHeadingStyle("H2"));
startListing(H3Btn, () => applyHeadingStyle("H3"));

// Attach click events to buttons for text alignment
startListing(alignRightBtn, () => textAlign("Right", null));
startListing(alignLeftBtn, () => textAlign("Left", null));
startListing(alignCenterBtn, () => textAlign("Center", null));

// Animate Text
let i = 0;
let milliseconds = 100;
let editorTitle = "Welcome to Inspire: An Innovative Text Editor!";
function startTextAnimation() {
  let textInterval = setInterval(() => {
    sectionText.textContent += editorTitle[i];
    i++;
    if (i === editorTitle.length) {
      i = 0;
      clearInterval(textInterval);
      setTimeout(() => {
        sectionText.textContent = "";
        startTextAnimation();
      }, 2000);
    }
  }, milliseconds);
}
startTextAnimation();

// Copy Text
copyBtn.addEventListener("click", function () {
  // Select the text inside the contenteditable div
  let selection = window.getSelection();
  let range = document.createRange();
  range.selectNodeContents(textout);
  selection.removeAllRanges();
  selection.addRange(range);
  // Execute the copy command
  text("copy");
  // Clear the selection
  selection.removeAllRanges();
});
