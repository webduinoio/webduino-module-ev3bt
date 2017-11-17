Blockly.Blocks['ev3bt_new'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.WEBDUINO_EV3BT, "樂高EV3 , Rx ")
            .appendField(new Blockly.FieldDropdown([
                ["2", "2"],
                ["3", "3"],
                ["4", "4"],
                ["5", "5"],
                ["6", "6"],
                ["7", "7"],
                ["8", "8"],
                ["9", "9"],
                ["10", "10"],
                ["11", "11"],
                ["12", "12"],
                ["13", "13"]
            ]), "rx_")
            .appendField(Blockly.Msg.WEBDUINO_EV3BT_TX, "  Tx")
            .appendField(new Blockly.FieldDropdown([
                ["2", "2"],
                ["3", "3"],
                ["4", "4"],
                ["5", "5"],
                ["6", "6"],
                ["7", "7"],
                ["8", "8"],
                ["9", "9"],
                ["10", "10"],
                ["11", "11"],
                ["12", "12"],
                ["13", "13"]
            ]), "tx_");
        this.setOutput(true);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('https://tutorials.webduino.io/');
    }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory_old/index.html#v8h6ui
Blockly.Blocks['ev3bt_sendmsg'] = {
    init: function() {
        this.appendValueInput("value_")
            .setCheck(null)
            .appendField(Blockly.Msg.WEBDUINO_EV3BT_FROM, "從樂高")
            .appendField(new Blockly.FieldVariable("adapter"), "var_")
            .appendField(Blockly.Msg.WEBDUINO_EV3BT_SEND, "傳送")
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg.WEBDUINO_EV3BT_TEXT, "Text"],
                [Blockly.Msg.WEBDUINO_EV3BT_NUM, "Number"],
                [Blockly.Msg.WEBDUINO_EV3BT_LOGIC, "Logic"]
            ]), "msgtype")
            .appendField(Blockly.Msg.WEBDUINO_EV3BT_SEND_TITLE, "格式，傳送訊息標題為")
            .appendField(new Blockly.FieldTextInput("myMsg"), "title_")
            .appendField(Blockly.Msg.WEBDUINO_EV3BT_SEND_TEXT, "，傳送資料為");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('https://tutorials.webduino.io/');
    }
};


//https://blockly-demo.appspot.com/static/demos/blockfactory_old/index.html#4uh58r
Blockly.Blocks['ev3bt_recv'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.WEBDUINO_EV3BT_FROM, "從樂高")
            .appendField(new Blockly.FieldVariable("adapter"), "name_")
            .appendField(Blockly.Msg.WEBDUINO_EV3BT_RECV_TITLE, "接收訊息資料 , 訊息標題")
            .appendField(new Blockly.FieldTextInput("title"), "title");
        this.appendStatementInput("do")
            .setCheck(null)
            .appendField(Blockly.Msg.WEBDUINO_EV3BT_RUN, "執行");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('https://tutorials.webduino.io/');
    }
};


Blockly.Blocks['ev3bt_getmsg'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("adapter"), "var_")
            .appendField(Blockly.Msg.WEBDUINO_EV3BT_GET_MSG, "取得目前訊息資料");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(35);
        this.setTooltip('');
        this.setHelpUrl('https://tutorials.webduino.io/');
    }
};