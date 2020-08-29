let i = 0;
let e=0;
let left = document.getElementById("left");
let right = document.getElementById("right");
let hissatu = document.getElementById("SuperAtt")
let hissatuwaza = document.getElementById("hissatuwaza");
let aflag =true;
let playname=prompt("汝の名を名乗れ");
plySt0.textContent=playname;
function stagehenkou(){
        eneLv++;
        eneSec.textContent="モンスターの攻撃まで"+enecnt[eneLv]+"秒";
        eneImg.src = "img/enemyA"+[eneLv]+".png"
        eneSt0.textContent=eneName[eneLv];
        eneSt1.textContent="レベル:"+[eneLv];
        eneSt2.textContent="HP:"+eneHp[eneLv];
        eneSt3.textContent="攻撃力:"+eneAtt[eneLv];
        eneSt4.textContent="倒した回数"+enekill[eneLv];

    
    

}
//プレイヤーデータ
let plyLv=1
let plyLvMax=11;
let plyHp= new Array(11);
plyHp = [20,50,100,200,350,400,550,650,750,900,1000];
let plyHpMax=new Array(11)
plyHpMax = [20,50,100,200,350,400,550,650,750,900,1000];
let plyAtt= new Array(11);
plyAtt = [5,10,15,20,25,30,35,40,45,50,60];
let plyAttMax= new Array(11);
plyAttMax=[5,10,15,20,25,30,35,40,45,50,60];
superAtt=100;
superAttTime=60;
superAttTimeMax=60;
let plyHeal=new Array(11);
plyHeal = [2,5,10,13,15,17,19,21,23,25,30];
let plyExp=0;
let plyExpNext=new Array (10);
plyExpNext=[20,50,80,120,150,300,500,800,1000]
let plyExpneed=new Array(10)
plyExpneed=[20,50,80,120,150,300,500,800,1000];
let plyImg=document.getElementById("plyImg");
let plySt=new Array(7);
for (let s = 0; s < plySt.length; s++) {
    plySt[s] = document.getElementById("plySt" + s);
  }

//プレイヤー回復
"use strict";
(function() {
    document.getElementById('plyImg').addEventListener('mousedown',function() {
        this.className = 'pushed';
    });

    document.getElementById('plyImg').addEventListener('mouseup',function() {
        this.className = '';
    });
})();
let eneImg=document.getElementById("eneImg");
plyImg.addEventListener("mousedown",()=>{
    if(aflag){
        plyImg.src="img/playerC.png";
        
    }
});
plyImg.addEventListener("mouseup",()=>{
    if(aflag){
        plyImg.src="img/playerA.png";
        plyHp[i] += plyHeal[i];
        if(plyHp[i]>plyHpMax[i]){
            plyHp[i]=plyHpMax[i];
        }
    
        plySt2.textContent="HP"+plyHp[i];
    }
    
    });
    //敵のデータ
    let eneLv =0;
    let eneName =new Array(6);
    eneName[0]= "ブルースライム"
    eneName[1]="エリート騎士"
    eneName[2]="ブラックドラゴン"
    eneName[3]="ファイヤーファルコン"
    eneName[4]="闇の仮面"
    eneName[5]="謎の剣士を狩る者"
    eneSt0.textContent = eneName[eneLv];
    let eneHp = new Array(6);
    eneHp=[20,60,150,200,300,4000]
    function enedame(){
        eneImg.src = "img/enemyB"+[eneLv]+".png"
    }
    let eneHpMax= new Array(6);
    eneHpMax=[20,60,150,200,300,4000]
    let eneAtt = new Array(6);
    eneAtt=[5,18,25,35,50,100]
    let enecnt = new Array(6);
    enecnt=[7,6,6,5,3,2]
    function jikannkeika(){
        enecnt[eneLv]--;
    eneSec.textContent = "モンスターの攻撃まで"+enecnt[eneLv]+"秒"
    }
    let enecntMax = new Array(6)
    enecntMax=[7,6,6,5,3,2]
   let enekill = new Array(6);
   enekill=[0,0,0,0,0,0]
   let eneExp = new Array(6);
   eneExp=[1,5,15,20,35,50]
 function kougeki(){
     eneHp[eneLv] -= plyAtt[i];
     eneSt2.textContent = "HP:"+eneHp[eneLv];
     eneImg.src = "img/enemyA"+eneLv+".png"
     
    }
    let eneSt=new Array(5);
    for (let j = 0; j < eneSt.length; j++) {
        eneSt[j] = document.getElementById("eneSt" + j);
    }
    //敵を攻撃

    {
        "use strict";
        (function() {
            document.getElementById('eneImg').addEventListener('mousedown',function() {
                this.className = 'pushed';
            });
      
            document.getElementById('eneImg').addEventListener('mouseup',function() {
                this.className = '';
            });
        })();
        eneImg.addEventListener("mousedown",()=>{
        enedame()
        });
        eneImg.addEventListener("mouseup",()=>{
            if(aflag){
                if(eneHp[eneLv]> 0){
                    kougeki()
                    if(eneHp[5] <= 0){
                        clearInterval(loop);
                        clearInterval(k)
                        eneSec.textContent ="ゲームクリア"
                        aflag = false
                    }
                 
                }if(eneHp[eneLv] <=0){
                    eneHp[eneLv] = 0;
                    eneSt2.textContent = "Hp:"+eneHp[eneLv];
                    setTimeout(()=>{
                        eneHp[eneLv] =eneHpMax[eneLv];
                        eneSt2.textContent = "Hp:"+eneHp[eneLv];

                    },100)
                        enekill[eneLv]++;
                        eneSt4.textContent="倒した回数"+enekill[eneLv];
                        //経験値の処理
                
                            if(plyExpNext[i]>0){
                                
                                plyExp += eneExp[eneLv];
                                plySt5.textContent ="経験値" + plyExp;
                                plyExpNext[i] -= eneExp[eneLv];
                                plySt6.textContent="次のレベルまでの経験値"+plyExpNext[i]+"ポイント";
                                
                            }
                            
                            //レベルアップの処理
                            if(plyExpNext[i] <= 0){
                                
                                if(i<10){
                             
                                    i++;
                                    plyLv++;
                                    plyExpNext[i]=plyExpneed[i]
                                    plySt1.textContent="レベル:"+plyLv;
                                    plySt2.textContent="HP:"+plyHpMax[i];
                                    plySt3.textContent="攻撃力"+plyAtt[i];
                                    plySt4.textContent="回復魔法"+plyHeal[i]
                                    if(e<10){

                                        plySt6.textContent="次のレベルまでの経験値"+plyExpneed[i]+"ポイント";
                                    }
                                }
                                
                                
                                
                                
                            }
                        }   
            }
        });
        let k = setInterval(() => {
            if(aflag){
            if(superAttTime > 0){
            eneImg.src = "img/enemyA"+[eneLv]+".png"
                superAttTime--;
            
                hissatu.textContent="必殺斬り使用可能まであと"+superAttTime+"秒";
            }else {
                hissatu.textContent = "必殺斬り使用可能";
            }
          
               
                
        }   
            
            
              }, 200);
        //必殺技
        hissatuwaza.addEventListener("click",()=>{
            if(aflag){
                if(superAttTime == 0){
                    eneImg.src = "img/enemyB"+[eneLv]+".png";
                    if(eneHp[eneLv]>0){
                        eneHp[eneLv] -= plyAtt[i]*5;
                        eneSt2.textContent = "Hp:"+ eneHp[eneLv];
                    }
                    setTimeout(()=>{
                        if(eneHp[eneLv]<=0){

                            eneImg.src ="img/enemyA"+[eneLv]+".png"
                            eneHp[eneLv] = eneHpMax[eneLv];
                            eneSt2.textContent = "Hp:"+ eneHp[eneLv];
                        }
                    },50);
                    if (eneHp[eneLv] <= 0) {
                        eneHp[eneLv] = 0;
                        eneSt2.textContent = "Hp:"+ eneHp[eneLv];
                        enekill[eneLv]++;
                        eneSt4.textContent = "倒した回数：" + enekill[eneLv];
                        if(plyExpNext[i]>0){
                                
                            plyExp += eneExp[eneLv];
                            plySt5.textContent ="経験値" + plyExp;
                            plyExpNext[i] -= eneExp[eneLv];
                            plySt6.textContent="次のレベルまでの経験値"+plyExpNext[i]+"ポイント";
                            
                        }
                    }
                }
            }
            superAttTime = superAttTimeMax;
        　　hissatu.textContent="必殺斬り使用可能まであと"+superAttTime+"秒";
        });
      function nigeru(){
    
          

          eneLv--;
          eneImg.src = "img/enemyA"+[eneLv]+".png"
          eneSt0.textContent = eneName[eneLv];
          eneSt1.textContent = "レベル:"+eneLv;
          eneSt2.textContent = "HP:"+eneHp[eneLv];
          eneSt3.textContent = "攻撃力"+eneAtt[eneLv];
          eneSt4.textContent ="倒した回数"+enekill[eneLv];
          eneSec.textContent ="モンスターの攻撃まで"+enecnt[eneLv]+"秒"
      
      



      }
    function plydame(){
        
            

                plyImg.src = "img/playerB.png"
                plyHp[i] -= eneAtt[eneLv]
                plySt2.textContent="HP:"+plyHp[i];
                eneSec.textContent="モンスターの攻撃まで"+enecnt[eneLv]+"秒";
            
            }
            function gameover(){
                
                clearInterval(loop);
                aflag=false;
                plySt2.textContent="HP:"+0;
                eneSec.textContent="ゲームオーバー";
            }
            function aaa(){
                enecnt[eneLv]=enecntMax[eneLv]
                plyImg.src="img/playerA.png";
                eneSec.textContent="モンスターの攻撃まで"+ enecntMax[eneLv]+"秒";
            }
            //敵が時間ごとに攻撃
    let eneSec=document.getElementById("eneSec");
    let loop=setInterval(()=>{
        if(enecnt[eneLv]>0){
            jikannkeika();
        }
        if(enecnt[eneLv] == 0){
             if(i<11){

                 if (plyHp[i]>0){
                    
                       plydame();
                    
                     if(plyHp[i]<= 0){
         
                         gameover();
                     }
         
                 }
             }
            setTimeout(()=>{
                if(aflag){
                    aaa()
                    
                };
                
            },500);                            
        }
       
        
    },1000);
     }
  //ステージ変更
  "use strict";
  (function() {
      document.getElementById('left').addEventListener('mousedown',function() {
          this.className = 'pushed';
      });

      document.getElementById('left').addEventListener('mouseup',function() {
          this.className = '';
      });
  })();
  "use strict";
  (function() {
      document.getElementById('right').addEventListener('mousedown',function() {
          this.className = 'pushed';
      });

      document.getElementById('right').addEventListener('mouseup',function() {
          this.className = '';
      });
  })();
  right.addEventListener("mouseup",()=>{
      
     
  });
  right.addEventListener("mousedown",()=>{
      if(eneLv < 5){
          if (aflag) {
              
      
                  stagehenkou();
                  
                }
                
            }
            
        });
        left.addEventListener("mousedown",()=>{
            
            if (aflag) {
                if(eneLv>0){
                    
                    nigeru();
                }
                
            }
        });
        if(aflag){

            if(eneLv == 5){
          
                if(enekill[eneLv] = 1){

                    clearInterval(k)
                    clearInterval(loop);
                    eneSec.textContent ="ゲームクリア"
                    eneSt2.textContent ="Hp:"+0
                    aflag = false
                }
            }
        }
