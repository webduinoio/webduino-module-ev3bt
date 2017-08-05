Blockly.JavaScript['ev3bt_new'] = function(block) {
    var dropdown_rx_ = block.getFieldValue('rx_');
    var dropdown_tx_ = block.getFieldValue('tx_');
    var code = 'getEV3BT(board,' + dropdown_rx_ + ',' + dropdown_tx_ + ')';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['ev3bt_sendmsg'] = function(block) {
    var variable_var_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var_'), Blockly.Variables.NAME_TYPE);
    var dropdown_msgtype = block.getFieldValue('msgtype');
    var text_title = block.getFieldValue('title_');
    var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
    var code = variable_var_ + '["send'+dropdown_msgtype+'"]("' + text_title + '",' + value_value_ + ');\n';
    return code;
};

Blockly.JavaScript['ev3bt_recv'] = function(block) {
    var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
    var text_title = block.getFieldValue('title');
    var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
    var code = variable_name_ + '.on("' + text_title + '" , function(data){\n' +
        //variable_name_ + '.content = data;\n' +
        statements_do + '});\n';
    return code;
};

Blockly.JavaScript['ev3bt_getmsg'] = function(block) {
    var variable_var_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var_'), Blockly.Variables.NAME_TYPE);
    var code = variable_var_ + '.content';
    return [code, Blockly.JavaScript.ORDER_NONE];
};