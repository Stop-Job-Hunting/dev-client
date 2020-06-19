// const SlateArr = [
//   {
//     type: "bulleted-list",
//     children: [
//       {
//         type: "list-item",
//         children: [{ text: "Write your work highlights here!" }],
//       },
//       {
//         type: "list-item",
//         children: [
//           { text: "This is your second Bullet Point!" },
//           { text: "But wait! I'm not done typing yet!" },
//         ],
//       },
//     ],
//   },
//   {
//     type: "paragraph",
//     children: [
//       { text: "This is the start of my paragraph. " },
//       { text: "But wait! Im not done typing it quite yet." },
//     ],
//   },
// ];

// Check if bulleted-list, list item, or paragraph

// if bulleted-list, call function on children.
// if list-item, call function on children.

function SlateParser(slateArr) {
  let answerObj = {
    highlights: [],
    paragraph: "",
  };

  // Loop through slateArr children

  if (!slateArr) {
    return;
  }

  for (let i = 0; i < slateArr.length; i++) {
    // check to see if bulleted list or paragraph
    if (
      slateArr[i].type === "bulleted-list" ||
      slateArr[i].type === "numbered-list"
    ) {
      // loop through the <li> of the bulleted list
      for (let x = 0; x < slateArr[i].children.length; x++) {
        // make sure it's a list item
        if (slateArr[i].children[x].type === "list-item") {
          // loop through the list item, print the text
          let childText = "";
          for (let y = 0; y < slateArr[i].children[x].children.length; y++) {
            // push it into our return variable
            childText = childText + slateArr[i].children[x].children[y].text;
          }
          answerObj.highlights.push(childText);
        }
      }
    } else if (slateArr[i].type === "paragraph") {
      let paragraphText = "";
      // loop through the paragraph children
      for (let z = 0; z < slateArr[i].children.length; z++) {
        paragraphText = paragraphText + slateArr[i].children[z].text;
      }
      answerObj.paragraph = answerObj.paragraph + paragraphText;
    }
  }

  return answerObj;
}

export default SlateParser;
