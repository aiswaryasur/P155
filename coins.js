AFRAME.registerComponent("coins", {
     init: function () {
    for (var i=1; i < 10; i++) {
        const id=`coin${i}`;
    const posX = Math.random() * 100 + -50;
    const posY =  Math.random()* 5 + 5;
    const posZ = Math.random()* 60 + -40;
    const position = {x: posX, y: posY, z:posZ};
    this.createCoins (id, position);
    }
},
    createCoins: function (id, position) {
    const treasureEntity = document.querySelector("#treasureCoins");
    var coinEl =  document.createElement("a-entity");
    coinEl.setAttribute("id", id);
    coinEl.setAttribute("position", position);
    coinEl.setAttribute("material", "color", "#ff9100");
    coinEl.setAttribute("geometry", {primitive: "circle", radius: 1 });
    coinEl.setAttribute("static-body",{shape:'sphere',sphereRadius:2})  
    coinEl.setAttribute('game-play',{elementId:`#${id}`})
    coinEl.setAttribute("animation", {
    property: "rotation",
    to: "8 360 9",
    loop: "true",
    dur: 1800
    });
    treasureEntity.appendChild(coinEl);
}
});