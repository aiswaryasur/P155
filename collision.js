AFRAME.registerComponent('game-play',{
    schema:{
        elementId:{type:"string",default:"#coin1"},
},
    isCollided: function(elementId){
        const element= document.querySelector(elementId);
        element.addEventListener("collide", (e) => {
        if (elementId.includes("#treasureCoins")) {
        element.setAttribute("visible", false);
        console.log("coin collision");
        }
        if(elementId.includes ("#fishes")){ 
        console.log("fish collision");
        }
        });
    },
    update:function(){
        this.isCollided(this.data.elementId)
    }
});