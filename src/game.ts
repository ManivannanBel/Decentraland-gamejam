
function AddGLTF(path: string, position: Vector3, rotation: Vector3, scale?: Vector3, clip?: string) {
    let entity = new Entity();
  
    let shape = new GLTFShape(path);
    entity.addComponent(shape);
  
    let transform = new Transform();
    transform.position = position;
    transform.rotation = Quaternion.Euler(rotation.x, rotation.y, rotation.z);
    if (scale){
      transform.scale = scale;
    }
    else{
      transform.scale = Vector3.One();
    }
    entity.addComponent(transform);
  
    if (clip){
      const animator = new Animator();
      let animation = new AnimationState(clip);
      animator.addClip(animation);
      entity.addComponent(animator);
      animation.play();
    }
  
    engine.addEntity(entity);
}

AddGLTF("model/bar.gltf", new Vector3(50, 0.15, 50), new Vector3(0, 270, 0), new Vector3(10, 10, 10));
AddGLTF("model/big_house.gltf", new Vector3(50, 0.15, 50), new Vector3(0, 270, 0), new Vector3(10, 10, 10)); 
AddGLTF("model/bridge.gltf", new Vector3(50, 0.15, 50), new Vector3(0, 270, 0), new Vector3(10, 10, 10));
AddGLTF("model/collider.gltf", new Vector3(50, 0.15, 50), new Vector3(0, 270, 0), new Vector3(10, 10, 10));
AddGLTF("model/fan.gltf", new Vector3(50, 0.15, 50), new Vector3(0, 270, 0), new Vector3(10, 10, 10));
AddGLTF("model/goats.gltf", new Vector3(50, 0.15, 50), new Vector3(0, 270, 0), new Vector3(10, 10, 10));
AddGLTF("model/land.gltf", new Vector3(50, 0.15, 50), new Vector3(0, 270, 0), new Vector3(10, 10, 10)); 
AddGLTF("model/land_collider.gltf", new Vector3(50, 0.15, 50), new Vector3(0, 270, 0), new Vector3(10, 10, 10));
AddGLTF("model/rum_building.gltf", new Vector3(50, 0.15, 50), new Vector3(0, 270, 0), new Vector3(10, 10, 10));
AddGLTF("model/small_house.gltf", new Vector3(50, 0.15, 50), new Vector3(0, 270, 0), new Vector3(10, 10, 10));
AddGLTF("model/trees.gltf", new Vector3(50, 0.15, 50), new Vector3(0, 270, 0), new Vector3(10, 10, 10));
AddGLTF("model/water.gltf", new Vector3(50, 0.2, 50), new Vector3(0, 270, 0), new Vector3(10, 10, 10));
AddGLTF("model/windmill.gltf", new Vector3(50, 0.15, 50), new Vector3(0, 270, 0), new Vector3(10, 10, 10));
AddGLTF("model/path.gltf", new Vector3(50, 0.15, 50), new Vector3(0, 270, 0), new Vector3(10, 10, 10));
AddGLTF("model/plant.gltf", new Vector3(50, 0.15, 50), new Vector3(0, 270, 0), new Vector3(10, 10, 10));
AddGLTF("model/tank.gltf", new Vector3(50, 0.15, 50), new Vector3(0, 270, 0), new Vector3(10, 10, 10));