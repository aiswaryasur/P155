AFRAME.registerComponent("fishes", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `fishes${i}`;
  
        //position variables     
        var posX = Math.random() * 100 + -60;
        var posY =  Math.random()* 10 + -5;
        var posZ = Math.random()* 60 + -40;
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createFishes(id, position);
      }
    } ,
  
    createFishes: function(id, position) { 
      
     var islandEl = document.querySelector('#fishes')

     var fishesEl = document.createElement('a-entity')

     fishesEl.setAttribute('id',id)
     fishesEl.setAttribute('position',position)
     fishesEl.setAttribute('scale',{ x: 0.05, y: 0.05, z: 0.05 })
     fishesEl.setAttribute('gltf-model','./assets/fish/scene.gltf')
     fishesEl.setAttribute("static-body",{shape:'sphere',sphereRadius:5})
     fishesEl.setAttribute('game-play',{elementId:`#${id}`})
     fishesEl.setAttribute("animation", {
        property: "rotation",
        to: "0 180 9",
        loop: "true",
        dur: 1800
        });

     islandEl.appendChild(fishesEl)
    }
  });
  
  