
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
  console.log('here in BOT');
  var code = `
	var inputTexntValue = "${txe}";
  `;
  return Blockly.JavaScript.statementToCode(block, "VALUE");
};

Blockly.JavaScript["questions"] = function (block) {
  var text_input = block.getFieldValue("QUESTION");
  console.log('here in question',text_input);
  var prevblock=this.getPreviousBlock()?.type;       // Instead of this we can also check if the parent block has an attached chld block .
  let state;
  if(prevblock=='bot'){
    state=true;
  }else{
    state=false;
  }
  var code = `
  if(${state}){
    var inputTextValue = "${text_input}";
  }else{
	  var inputTextValue = "Please Join the Bot and Questions Block .";
  }
  `;
  return code;
};

var workspace = Blockly.inject("blocklyDiv", {
  media: "assets/media/",maxBlocks: 2,                 //limiting max number of blocks to 2
  toolbox: document.getElementById("toolbox"),
});

function redrawUi() {
  if (typeof inputTextValue !== "undefined") {
    $("#inputBox").text(inputTextValue);
  } else {
    $("#inputBox").text("Please Join the Bot and Questions Block .");
  }
}

function runcode() {
  var geval = eval;
  console.log('clicked')
  try {
    
    geval(Blockly.JavaScript.workspaceToCode(workspace));
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