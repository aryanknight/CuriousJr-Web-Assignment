$(document).ready(function () {
  $("#runBtn").click(function () {
    runcode();
  });
  $("#resetBtn").click(function () {
    reset();
  });
});

// Blockly.Blocks["example_input_text"] = {
//   init: function () {
//     this.appendDummyInput()
//       .appendField("Example Block:")
//       .appendField(new Blockly.FieldTextInput("write here..."), "input");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(230);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   },
// };

// Blockly.JavaScript["example_input_text"] = function (block) {
//   var text_input = block.getFieldValue("input");

//   var code = `
// 	var inputTextValue = "${text_input}";
//   `;
//   return code;
// };

let inputValue;
let isBlock=false;

// Blockly.JavaScript["bot"] = function(block) {
//   var txe="Please select Questions block";
//   isBlock=true;
//   var code = `
// 	var inputTexntValue = "${txe}";
//   `;
//   return Blockly.JavaScript.statementToCode(block, "VALUE");
// };

// Blockly.JavaScript["questions"] = function (block) {
//   var text_input = block.getFieldValue("QUESTION");
//   console.log('here in question');
//   var code = `if(${isBlock}){
//     var inputTextValue="${text_input}"
//     isBlock=false
//   }else{
//     var inputTextValue="Please drap the Bot Block"
//     console.log('print nothing')
//   }
//   `;
//   return code;
// };


Blockly.JavaScript["bot"] = function(block) {
  var txe="Please select Questions block";
  
  isBlock=true;
  var code = `
	var inputTexntValue = "${txe}";
  `;
  return Blockly.JavaScript.statementToCode(block, "VALUE");
};

Blockly.JavaScript["questions"] = function (block) {
  var text_input = block.getFieldValue("QUESTION");
  console.log(this.getPreviousBlock().type);
  var code = `
    var inputTextValue="Please drap the Bot Block"
  `;
  return code;
};

var workspace = Blockly.inject("blocklyDiv", {
  media: "assets/media/",
  toolbox: document.getElementById("toolbox"),
});

function redrawUi() {
  if (typeof inputTextValue !== "undefined") {
    $("#inputBox").text(inputTextValue);
  } else {
    $("#inputBox").text("");
  }
}

function runcode() {
  var geval = eval;
  try {
    geval(Blockly.JavaScript.workspaceToCode(workspace));
    console.log('no error occured')
    redrawUi();
  } catch (e) {
    console.log(e);
  }
  
}

function reset() {
  delete inputTextValue;
  $("#inputBox").text("ANSWER WILL APPEAR HERE");
  Blockly.mainWorkspace.clear();
}
