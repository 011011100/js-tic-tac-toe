
var app = new Vue({
    el: '#app',
    data: {
        chess: true,
        message: "现在正在下棋的是：O"
    },
    methods: {
        chessfun: function () {

            this.chess = !this.chess
            if (this.chess) {
                this.message = "现在正在下棋的是：O"
            } else {
                this.message = '现在正在下棋的是：X'
            }
        },
        winer: function (massage) {
            this.message = massage
        }

    }
})

class tbfun {
    constructor(message) {
        this.message = message
    }



    playChess() {
        if (app.chess) {
            app.chessfun()
            return "O"
        } else {
            app.chessfun()
            return 'X'
        }
    }

    chackWiner() {
        if (td1_1.message == td1_2.message && td1_2.message == td1_3.message && td1_1.message != '' && td1_2.message != '' && td1_3.message != '') {
            app.winer("胜利者是：" + td1_1.message)
        } else if (td2_1.message == td2_2.message && td2_2.message == td2_3.message && td2_1.message != '' && td2_2.message != '' && td2_3.message != '') {
            app.winer("胜利者是：" + td2_1.message)
        } else if (td3_1.message == td3_2.message && td3_2.message == td3_3.message && td3_1.message != '' && td3_2.message != '' && td3_3.message != '') {
            app.winer("胜利者是：" + td3_1.message)
        } else if (td1_1.message == td2_1.message && td3_1.message == td2_1.message && td1_1.message != '' && td2_1.message != '' && td3_1.message != '') {
            app.winer("胜利者是：" + td1_1.message)
        } else if (td2_2.message == td1_2.message && td2_2.message == td3_2.message && td3_2.message != '' && td1_2.message != '' && td2_2.message != '') {
            app.winer("胜利者是：" + td2_1.message)
        } else if (td3_3.message == td2_3.message && td2_3.message == td1_3.message && td1_3.message != '' && td2_3.message != '' && td3_3.message != '') {
            app.winer("胜利者是：" + td3_1.message)
        } else if (td1_1.message == td2_2.message && td2_2.message == td3_3.message && td1_1.message != '' && td2_2.message != '' && td3_3.message != '') {
            app.winer("胜利者是：" + td2_2.message)
        } else if (td1_3.message == td2_2.message && td2_2.message == td3_1.message && td1_3.message != '' && td2_2.message != '' && td3_1.message != '') {
            app.winer("胜利者是：" + td2_2.message)
        }
    }
}

var td1_1 = new Vue({
    el: '#td1-1',
    data: {
        message: ''
    },
    methods: {
        doThis: function () {
            var a = new tbfun(app.chess);
            this.message = a.playChess()
            a.chackWiner()
        }
    }
})

var td1_2 = new Vue({
    el: '#td1-2',
    data: {
        message: ''
    },
    methods: {
        doThis: function () {
            var a = new tbfun(app.chess);
            this.message = a.playChess()
            a.chackWiner()
        }
    }
})

var td1_3 = new Vue({
    el: '#td1-3',
    data: {
        message: ''
    },
    methods: {
        doThis: function () {
            var a = new tbfun(app.chess);
            this.message = a.playChess()
            a.chackWiner()
        }
    }
})

var td2_1 = new Vue({
    el: '#td2-1',
    data: {
        message: ''
    },
    methods: {
        doThis: function () {
            var a = new tbfun(app.chess);
            this.message = a.playChess()
            a.chackWiner()
        }
    }
})

var td2_2 = new Vue({
    el: '#td2-2',
    data: {
        message: ''
    },
    methods: {
        doThis: function () {
            var a = new tbfun(app.chess);
            this.message = a.playChess()
            a.chackWiner()
        }
    }
})

var td2_3 = new Vue({
    el: '#td2-3',
    data: {
        message: ''
    },
    methods: {
        doThis: function () {
            var a = new tbfun(app.chess);
            this.message = a.playChess()
            a.chackWiner()
        }
    }
})

var td3_1 = new Vue({
    el: '#td3-1',
    data: {
        message: ''
    },
    methods: {
        doThis: function () {
            var a = new tbfun(app.chess);
            this.message = a.playChess()
            a.chackWiner()
        }
    }
})

var td3_2 = new Vue({
    el: '#td3-2',
    data: {
        message: ''
    },
    methods: {
        doThis: function () {
            var a = new tbfun(app.chess);
            this.message = a.playChess()
            a.chackWiner()
        }
    }
})

var td3_3 = new Vue({
    el: '#td3-3',
    data: {
        message: ''
    },
    methods: {
        doThis: function () {
            var a = new tbfun(app.chess);
            this.message = a.playChess()
            a.chackWiner()
        }
    }
})
