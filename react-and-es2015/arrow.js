var func = function (val) {
    console.log(val);
}

var newFunc = (val) => {
    console.log(val);
}

func('hoge');
newFunc('fuga');

var obj = {
    val:'hoge',
    show:function () {
        console.log(this);

        let fncA = function () {
            console.log(this);
        };
        fncA();

        let fncB = () => {
            console.log(this);
        };
        fncB();
    }
};
obj.show();