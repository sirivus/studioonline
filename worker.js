import * as CANNON from "/mine/cannon.js-master/build/cannon.js"
import "/node_modules/three/build/three.js";

// Setup our world
var world = new CANNON.World();
world.gravity.set(0, 0, -9.82); // m/s²

// Create a sphere
var radius = 1; // m
var sphereBody = new CANNON.Body({
  mass: 5, // kg
  position: new CANNON.Vec3(0, 0, 10), // m
  shape: new CANNON.Sphere(radius),
});
world.addBody(sphereBody);

// Create a plane
var groundBody = new CANNON.Body({
  mass: 0, // mass == 0 makes the body static
});
var groundShape = new CANNON.Plane();
groundBody.addShape(groundShape);
world.addBody(groundBody);

var fixedTimeStep = 1.0 / 60.0; // seconds
var maxSubSteps = 3;

// Start the simulation loop
var lastTime;
(function simloop(time) {
  requestAnimationFrame(simloop);
  if (lastTime !== undefined) {
    var dt = (time - lastTime) / 1000;
    world.step(fixedTimeStep, dt, maxSubSteps);
  }
  console.log("Sphere z position: " + sphereBody.position.z);
  lastTime = time;
})();


/*
// Create an entity
const box = new Entity()

// Create and add a `Transform` component to that entity
box.addComponent(new Transform())

// Set the fields in the component
box.getComponent(Transform).position.set(3, 1, 3)

// Create and apply a `BoxShape` component to give the entity a visible form
box.addComponent(new BoxShape())

// Add the entity to the engine
engine.addEntity(box)
*/