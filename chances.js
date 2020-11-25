let chars5 = ["Tartaglia","Diluc","Jean","Kequing","Klee","Mona","Qiqi","Venti"]
let chars4 = ["Amber","Barbara","Beidou","Bennett","Chongyun","Fischl","Kaeya","Lisa","Ningguang","Noelle","Razor","Sucrose","Xiangling","Xingqiu"]
let pullNum = 0
let chance = 0.006
let clear = 0
let chance4 = 0.051
let pullNum4 = 0
let clear4 = 0
document.querySelector(".pull").onclick=function(){
  pullNum += 1
  pullNum4 += 1
  drop = Math.random()
  if (pullNum4 == 10){
    chance4 = 10
    clear4 = 1
  }
    if(pullNum == 90){
      chance = 10
      clear = 1
    }
    if(pullNum == 76){
      chance = 0.2056
    }
    if(pullNum <= 76){
      chance = chance - 0.00002
    }
    else{
      if(chance > 0.00265){
        chance = 0.6 * (10000 * chance) / 10000
      }
      else{
        chance = chance - 0.00002
      }
    }
    if (drop < chance4){
      let b = Math.floor(Math.random() * 14)
      console.log(chars4[b], "on " , pullNum4 , "th pull")
      chance4 = 0.051
      pullNum4 = 0
    }
    if(drop < chance){
      let a = Math.floor(Math.random() * 8)
      console.log(chars5[a] , pullNum)
      chance = 0.006
      pullNum = 0
    }
    if(clear == 1){
      chance = 0.006
      clear = 0
    }
    if(clear4 == 1){
      chance4 = 0.051
      pullNum4 = 0
      clear4 = 0
    }
  }