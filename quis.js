//問題、答え、正解を定義
const quis = [
    {
    question:"ぽぽのさあちゃんの好きなお菓子は？",
    answer:[
        "ポテトチップス",
        "すっぱむーちょ",
        "じゃがりこ",
        "ジャガビー"
    ],
    collect :"じゃがりこ"
},{
    question:"ぽぽの好きなさあちゃんは？",
    answer:[
        "イライラさあちゃん",
        "ニコニコさあちゃん",
        "ねむねむさあちゃん",
        "プンプンさあちゃん"
    ],
    collect :"ニコニコさあちゃん"
},{
    question:"ぽぽのさあちゃんの中学生の頃の将来の夢は？",
    answer:[
        "ケーキ屋さん",
        "ペットショップ",
        "専業主婦",
        "パン屋"
    ],
    collect :"専業主婦"
},{
    question:"ぽぽのさあちゃんの好きな揚げ物は？",
    answer:[
        "マックの揚げたてポテト",
        "ジューシー唐揚げ",
        "ぷりぷりエビフライ",
        "ママの特製春巻き"
    ],
    collect :"ママの特製春巻き"
}
];

let collectIndex = 0;
const quisLength = quis.length;
let quisIndex = 0;
const $button = document.getElementsByTagName("button");

const buttonLength = $button.length;

//問題文を記載

const quisSetup =()=>{
document.getElementById("js-question").textContent = quis[quisIndex].question;

//答えを記載
let buttonIndex = 0;
while (buttonIndex <buttonLength) {
    $button[buttonIndex].textContent = quis[quisIndex].answer[buttonIndex];
    buttonIndex++;
}
};
quisSetup();


const clickHand = (e)=>{
    if(e.target.textContent===quis[quisIndex].collect){
        window.alert("正解！");
        collectIndex++;
    }else{
        window.alert("不正解！")
    }   
    
    quisIndex++;
    if(quisIndex<quisLength){
        quisSetup();
    }else{
        window.alert(`お～わり${quisLength}問中${collectIndex}問正解！！`);
    }  
};
//正誤判定
let clickHandindex=0;
while (clickHandindex < buttonLength) {
$button[clickHandindex].addEventListener("click",(e)=>{
    clickHand(e);
});
    clickHandindex++;
}