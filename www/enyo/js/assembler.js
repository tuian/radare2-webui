enyo.kind({name:"Assembler",kind:"Scroller",classes:"r2panel",style:"background-color:#c0c0c0;",components:[{tag:"form",style:"margin-top:8px;margin-left:8px",attributes:{action:"javascript:#"},components:[{kind:"FittableRows",fit:!0,components:[{kind:"onyx.InputDecorator",classes:"r2ui-input",components:[{tag:"font",content:"opcode",classes:"r2ui-input",style:"width:64px;font-weight:bold"},{kind:"Input",value:"",style:"width:60%",onkeydown:"assembleOpcode",attributes:{autocapitalize:"off"},name:"opcode"}]},{kind:"onyx.InputDecorator",classes:"r2ui-input",components:[{tag:"font",content:"bytes",classes:"r2ui-input",style:"width:64px;font-weight:bold"},{kind:"Input",value:"",style:"width:120px",onkeydown:"assembleOpcode",attributes:{autocapitalize:"off"},name:"bytes"}]},{kind:"onyx.InputDecorator",classes:"r2ui-input",components:[{tag:"font",content:"offset",classes:"r2ui-input",style:"width:64px;font-weight:bold"},{kind:"Input",value:"entry0",style:"width:120px",onkeydown:"assembleOpcode",attributes:{autocapitalize:"off"},name:"offset"}]}]}]},{tag:"form",style:"margin-top:8px;margin-left:8px",attributes:{action:"javascript:#"},components:[{tag:"h2",content:"Calculator"},{kind:"onyx.InputDecorator",classes:"r2ui-input",components:[{tag:"font",name:"value",content:"0",classes:"r2ui-input",style:"width:200px;font-weight:bold"},{kind:"Input",name:"ivalue",value:"0",style:"width:300",onkeydown:"calculateValue",attributes:{autocapitalize:"off"}}]}]}],calculateValue:function(a,b){if(13===b.keyCode){var c=this.$.value,d=a.getValue();c.setContent("..."),r2.cmd("?v "+d,function(a){c.setContent(a)})}},assembleOpcode:function(a,b){if(13===b.keyCode){var c=a.getValue(),d=this.$.offset.getValue();switch(a.name){case"opcode":var e=this.$.bytes;r2.assemble(d,c,function(a){e.setValue(a)});break;case"bytes":var f=this.$.opcode;r2.disassemble(d,c,function(a){f.setValue(a)});break;case"offset":}}}});