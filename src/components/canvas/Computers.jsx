import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber"; //gives us an empty canvas to work with
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"; //these help us to draw on canvas use gltf allow us to import 3d models
import CanvasLoader from "../Loader";
const Computers = ({isMobile}) => {
  //importing model
  const computer = useGLTF("./desktop_pc/scene.gltf");
  //

  //when working with three js we dont start with div with start with mesh
  //inside mesh we create light called hemispher so we can ssee
  //point light is the light on the screen
  //primitave hold the object
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight position={[-20,50,10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile?0.6: 0.75}
        position={isMobile?[0,-3,-0.5]:[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, - 0.1]}
      />
    </mesh>
  );
};
//this function help us see the pc
//canvas is so we can see the image
//camera in canvas is where are we looking at the model from
//gl needs so properly render
//suspense helps us to load the model
//orbit helps us with the movment of model
const ComputerCanvas = () => {
const[isMobile,setIsMobile]=useState(false);
useEffect(()=>{
  //checks if the screen is mobile
const mediaQuery=window.matchMedia('(max-width:500px)');
//sets the value 
setIsMobile(mediaQuery.matches);
//when width changes
const handleMediaQuery=(event)=>{
  setIsMobile(event.matches);
}
//event listener
mediaQuery.addEventListener('change',handleMediaQuery);

return()=>{
  mediaQuery.removeEventListener('change',handleMediaQuery);
}

},[])

  return (
    <Canvas
     frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
