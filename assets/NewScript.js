// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
       
        label: {
            default:null,
            type: cc.Label,
        },
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        text1:'Привет, да, ты наверное думаешь, ну и зачем я здесь? Хороший вопрос, друг! мой',
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        var str = this.text1;
        for (let i = 0; i < this.text1.lenght; i++) {
            console.log(this.text1.charAt(i));
            this.label.string += this.text1.charAt(i);
            cc.delayTime(5);
        }
        this.label.string = str.charAt(11);
    },

    start() {

    },

    // update (dt) {},
});
