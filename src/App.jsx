import { Float, OrbitControls, Text } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Scene from "./Scene"
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing"


const App = () => {


  return (
    <>

      <Canvas
        camera={{
          fov: 75
        }}
      >
        <Float rotationIntensity={1} >
          <Text
            fontSize={.7}
            font="/Bangers/Bangers-Regular.ttf"
            position={[0, 3, 0]}
            rotation-x={.5}
          >
            Welcome to website
          </Text>
        </Float>
        {/* <OrbitControls makeDefault /> */}

        <ambientLight intensity={1} />
        <Scene />

        {/* to get the real colors of the objects and the models */}
        <EffectComposer>
          <Bloom
            minmapBlur
            intensity={.5}
            luminanceSmoothing={0}
            luminanceThreshold={0}
          />
          <ToneMapping adaptive />
        </EffectComposer>

        <Float rotationIntensity={.4} >
          <Text
            fontSize={.1}
            font="/Bangers/Bangers-Regular.ttf"
            position={[3, -3.3, 0]}
          // rotation-x={.5}
          >
            Developed by Om Sharma
          </Text>
        </Float>

      </Canvas>
    </>
  )
}

export default App