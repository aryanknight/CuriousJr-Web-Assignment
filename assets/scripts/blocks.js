$(document).ready(function () {
  $("#runBtn").click(function () {
    runcode();
  });
  $("#resetBtn").click(function () {
    reset();
  });
});


Blockly.JavaScript["bot"] = function(block) {
  var txe="Please select Questions block";
  
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
