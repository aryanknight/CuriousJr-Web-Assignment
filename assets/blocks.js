Blockly.defineBlocksWithJsonArray([
    {
      "type": "bot",
      "message0": "Bot %1",
      "args0": [
        {
          "type": "input_statement",
          "name": "VALUE",
        }
      ],
      "colour": 300
    }
  ]);

  let date = new Date();
  let today = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
  let time =date.getHours() + ':' + date.getMinutes() ;
  
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "questions",
      "message0": "Question %1 ",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "QUESTION",
          "options": [
            ["What is the date today?", `Today is ${today}`],
            ["What is the time now?", ` It's ${time}` ],
            ["How are you?", "I'm fine sir , How about you ?"],
            ["What is JavaScript?", "JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive"],
            ["What is your name?", "My name is Aryan ."]
          ]
        }
      ],"previousStatement": null,
      "colour": 300
    }
  ]);  