//数学、国語、理科、社会、英語の変数を作成し合計点数を出力する
//数学：40 国語：35 理科：80 社会：50 英語：98  
//期限：6/19

//suugaku=40;
//kokugo=35;
//rika=80;
//syakai=50;
//eigo=98

///kyouka=5 ５つの教科数

let suugaku = 40;
let kokugo=35;
let rika=80;
let syakai=50;
let eigo=98
let kyouka=5

console.log (`5教科の合計は ${suugaku + kokugo + rika + syakai + eigo} です`);
console.log(`5教科の平均点は ${(suugaku + kokugo + rika + syakai + eigo)/kyouka} です`)

//-------パターン2------//

const add = (suugaku , kokugo , rika , syakai , eigo) => {
    console.log("数学、国語、理科、社会、英語の各点点です");
    console.log(suugaku , kokugo , rika , syakai , eigo);

    console.log("数学、国語、理科、社会、英語の合計点です");
    console.log(suugaku + kokugo + rika + syakai + eigo);

    console.log("数学、国語、理科、社会、英語の平均点です");
    console.log((suugaku + kokugo + rika + syakai + eigo)/5);

  };

  add(40,35,80,50,98,5);