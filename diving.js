//Terrain Rotation
AFRAME.registerComponent("island-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRotation < 0.1) {
          this.data.speedOfRotation += 0.01;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRotation > -0.1) {
          this.data.speedOfRotation -= 0.01;
        }
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRotation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z,
    });
  },
});
AFRAME.registerComponent("scuba-diver-controls", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
      speedOfAscend:{type:'number',default:0}
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        this.data.speedOfRotation=this.el.getAttribute('rotation')
  
        var diver_rotation=this.data.speedOfRotation
        var diver_position=this.data.speedOfAscend
  
        if (e.key === "ArrowRight") {
          if (diver_rotation.x < 10) {
            diver_rotation.x += 0.5;
            this.el.setAttribute('rotation',diver_rotation)
          }
          if (diver_position.x < 10) {
            diver_position.x += 0.5;
            this.el.setAttribute("position", diver_position);
          }
          
        }
        if (e.key === "ArrowLeft") {
          if (diver_rotation.x > -10) {
            diver_rotation.x -= 0.5;
            this.el.setAttribute('rotation',diver_rotation)
          }
          if (diver_position.x < -10) {
            diver_position.x -= 0.1;
            this.el.setAttribute("position", diver_position);
          }
        
        }
        if (e.key === "ArrowUp") {
          if (diver_rotation.z < 20) {
            diver_rotation.z += 0.5;
            this.el.setAttribute("rotation", diver_rotation);
          }
          if (diver_position.y < 2) {
            diver_position.y += 0.01;
            this.el.setAttribute("position", diver_position);
          }
        }
        if (e.key === "ArrowDown") {
          if (diver_rotation.z > -10) {
            diver_rotation.z -= 0.5;
            this.el.setAttribute("rotation", diver_rotation);
          }
          if (diver_position.y > -2) {
            diver_position.y -= 0.01;
            this.el.setAttribute("position", diver_position);
          }
        }
      });
    },
  });
  