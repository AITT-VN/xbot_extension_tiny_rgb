Blockly.Blocks["xbot_led_tiny_set_all"] = {
  init: function () {
    this.jsonInit({
      inputsInline: true,
      colour: "#D31384",
      nextStatement: null,
      tooltip: "",
      message0: "%6 tiny rgb cổng %1 chân %2 đổi màu led %3 %4 %5",
      previousStatement: null,
      args0: [
        {
          type: "field_dropdown",
          name: "port",
          options: [
            ["1", "0"],
            ["2", "1"],
            ["3", "2"],
            ["4", "3"],
            ["5", "4"],
            ["6", "5"],
          ],
        },
        {
          type: "field_dropdown",
          name: "pin",
          options: [
            ["1", "0"],
            ["2", "1"],
          ],
        },
        {
          type: "field_dropdown",
          name: "option",
          options: [
            ["tất cả", "0"],
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
          ],
        },
        { type: "input_value", name: "COLOR" },
        {type: "input_dummy"},
        {
          "type": "field_image",
          "src": "https://i.ibb.co/S0C6G8D/tiny-rgb.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }],
      helpUrl: ""
    });
  },
};

Blockly.Blocks["xbot_led_tiny_rgb"] = {
  init: function () {
    this.jsonInit({
      colour: "#D31384",
      nextStatement: null,
      previousStatement: null,
      tooltip: "",
      message0: "%8 tiny rgb cổng %1 chân %2 đổi màu led %3 màu red %4 green %5 blue %6 %7",
      args0: [
        {
          type: "field_dropdown",
          name: "port",
          options: [
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
          ],
        },
        {
          type: "field_dropdown",
          name: "pin",
          options: [
            ["1", "1"],
            ["2", "2"],
          ],
        },
        {
          type: "field_dropdown",
          name: "option",
          options: [
            ["tất cả", "0"],
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
          ],
        },
        { type: "input_value", name: "RED", check: "Number"},
        { type: "input_value", name: "GREEN", check: "Number"},
        { type: "input_value", name: "BLUE", check: "Number"},
        {type: "input_dummy"},
        {
          "type": "field_image",
          "src": "https://i.ibb.co/S0C6G8D/tiny-rgb.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      helpUrl: ""
    });
  },
};

Blockly.Python['xbot_led_tiny_set_all'] = function(block) {
  var port = block.getFieldValue('port');
  var pin = block.getFieldValue('pin');
  var option = block.getFieldValue('option');
  var color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_led_tiny'] = 'tiny_rgb = RGBLed(PORTS_DIGITAL['+ port +']['+ pin +'], 4)';
  // TODO: Assemble Python into code variable.
  var code = "tiny_rgb.show("+ option +", hex_to_rgb("+ color +"))\n";
  return code;
};

Blockly.Python['xbot_led_tiny_rgb'] = function(block) {
  var port = block.getFieldValue('port');
  var pin = block.getFieldValue('pin');
  var option = block.getFieldValue('option');
  var RED = Blockly.Python.valueToCode(block, 'RED', Blockly.Python.ORDER_ATOMIC);
  var GREEN = Blockly.Python.valueToCode(block, 'GREEN', Blockly.Python.ORDER_ATOMIC);
  var BLUE = Blockly.Python.valueToCode(block, 'BLUE', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_led_tiny'] = 'tiny_rgb = RGBLed(PORTS_DIGITAL['+ port +']['+ pin +'], 4)';
  // TODO: Assemble Python into code variable.
  var code = "tiny_rgb.show("+ option +", ("+ RED +", "+ GREEN +", "+ BLUE +"))\n";
  return code;
};