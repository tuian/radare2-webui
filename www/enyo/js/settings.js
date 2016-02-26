enyo.kind({name:"Settings",classes:"panels-sample-sliding-content r2panel",kind:"Scroller",tag:"div",data:null,style:"background-color:#c0c0c0; color:black !important;padding:0px;margin:0px;border:0px;overflow:hidden",components:[{kind:"FittableRows",fit:!1,components:[{tag:"h2",content:"General"},{kind:"onyx.InputDecorator",components:[{tag:"p",content:"Two panels",classes:"rowline"},{kind:"onyx.ToggleButton",name:"twopanels"}]},{kind:"onyx.InputDecorator",components:[{tag:"p",content:"Edit keybindings",classes:"rowline"},{kind:"onyx.Button",content:"+"}]}]},{kind:"FittableRows",fit:!1,components:[{tag:"h2",content:"Target"},{kind:"onyx.InputDecorator",components:[{tag:"p",content:"Arch",classes:"rowline"},{kind:"onyx.PickerDecorator",components:[{},{kind:"onyx.Picker",name:"arch",components:[{content:"arc"},{content:"arm"},{content:"avr"},{content:"ppc"},{content:"bf"},{content:"dalvik"},{content:"dcpu16"},{content:"i8080"},{content:"java"},{content:"m68k"},{content:"mips"},{content:"msil"},{content:"rar"},{content:"sh"},{content:"sparc"},{content:"x86",active:!0},{content:"z80"}]}]}]},{kind:"onyx.InputDecorator",components:[{tag:"p",content:"Bits",classes:"rowline"},{kind:"onyx.PickerDecorator",components:[{},{kind:"onyx.Picker",name:"bits",components:[{content:"8"},{content:"16"},{content:"32",active:!0},{content:"64"}]}]}]},{kind:"onyx.InputDecorator",components:[{tag:"p",content:"Endian",classes:"rowline"},{kind:"onyx.PickerDecorator",components:[{},{kind:"onyx.Picker",components:[{content:"little",active:!0},{content:"big"}]}]}]},{kind:"onyx.InputDecorator",components:[{tag:"p",content:"OS",classes:"rowline"},{kind:"onyx.PickerDecorator",components:[{},{kind:"onyx.Picker",components:[{content:"linux",active:!0},{content:"darwin"},{content:"w32"},{content:"dos"}]}]}]},{tag:"h2",content:"Disassembly"},{kind:"onyx.InputDecorator",components:[{tag:"p",content:"Show new view",classes:"rowline",ontap:"nextPanel"},{kind:"onyx.ToggleButton",name:"use_new_view"}]},{kind:"onyx.InputDecorator",components:[{tag:"p",content:"Show bytes",classes:"rowline",ontap:"nextPanel"},{kind:"onyx.ToggleButton",name:"toggle_bytes"}]},{kind:"onyx.InputDecorator",components:[{tag:"p",content:"Show offsets",classes:"rowline",ontap:"nextPanel"},{kind:"onyx.ToggleButton",name:"toggle_offset"}]},{kind:"onyx.InputDecorator",components:[{tag:"p",content:"Show flags",classes:"rowline",ontap:"nextPanel"},{kind:"onyx.ToggleButton",name:"toggle_flags"}]},{kind:"onyx.InputDecorator",components:[{tag:"p",content:"Show xrefs",classes:"rowline",ontap:"nextPanel"},{kind:"onyx.ToggleButton",name:"toggle_xrefs"}]},{kind:"onyx.InputDecorator",components:[{tag:"p",content:"Show comments on right",classes:"rowline",ontap:"nextPanel"},{kind:"onyx.ToggleButton",name:"toggle_cmtright"}]},{kind:"onyx.InputDecorator",components:[{tag:"p",content:"Show lines",classes:"rowline",ontap:"nextPanel"},{kind:"onyx.ToggleButton",name:"toggle_lines"}]},{kind:"onyx.InputDecorator",components:[{tag:"p",content:"Pseudo",classes:"rowline",ontap:"nextPanel"},{kind:"onyx.ToggleButton",name:"toggle_pseudo"}]}]},{tag:"h2",content:"Save changes?"},{tag:"div",style:"margin-left:50px",components:[{ontap:"reset",kind:"onyx.Button",style:"position:relative;left:0px",content:"Reset"},{ontap:"save",kind:"onyx.Button",style:"position:relative;left:50px",content:"Save",classes:"onyx-affirmative"}]},{tag:"div",style:"height:64px"}],load:function(){var a=this;a.$.twopanels.setActive(-1!=document.referrer.indexOf("/two")),a.$.toggle_bytes.setActive(r2.settings["asm.bytes"]),a.$.toggle_pseudo.setActive(r2.settings["asm.pseudo"]),a.$.toggle_flags.setActive(r2.settings["asm.flags"]),a.$.toggle_xrefs.setActive(r2.settings["asm.xrefs"]),a.$.toggle_cmtright.setActive(r2.settings["asm.cmtright"]),a.$.toggle_offset.setActive(r2.settings["asm.offset"]),a.$.toggle_lines.setActive(r2.settings["asm.lines"]);var b=readCookie("r2_view_mode");b||(b="old"),a.$.use_new_view.setActive("new"==b)},create:function(){this.inherited(arguments),this.load()},save:function(){var a=this.$.use_new_view.active,b=this.$.toggle_offset.active,c=this.$.arch.selected.content,d=this.$.bits.selected.content,e=this.$.toggle_bytes.active,f=this.$.toggle_pseudo.active,g=this.$.toggle_flags.active,h=this.$.toggle_lines.active,i=this.$.toggle_xrefs.active,j=this.$.toggle_cmtright.active,k=this.$.twopanels.active;r2.cmds(["e asm.offset="+b,"e asm.arch="+c,"e asm.bits="+d,"e asm.lines="+h,"e asm.bytes="+e,"e asm.flags="+g,"e asm.xrefs="+i,"e asm.cmtright="+j,"e asm.pseudo="+f]),r2.settings={use_new_view:a,"asm.arch":c,"asm.bits":d,"asm.bytes":e,"asm.flags":g,"asm.xrefs":i,"asm.cmtright":j,"asm.lines":h,"asm.pseudo":f},a?createCookie("r2_view_mode","new",7):createCookie("r2_view_mode","old",7),k?window.parent.location="/enyo/two":window.parent.location="/enyo/",r2ui.seek("$$",!1)},reset:function(){this.load()}});