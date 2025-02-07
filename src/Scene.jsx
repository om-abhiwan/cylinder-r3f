import { useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

const Scene = () => {

    let texture = useTexture("/image.png")
    let cylRef = useRef(null)


    useFrame((state, delta) => {
        cylRef.current.rotation.y += delta * 0.5
        // cylRef.current.rotation.x += delta * 0.5
    })



    return (
        <>

            <group rotation={[0, 1.4, 0.5]}>
                <mesh ref={cylRef} >
                    {/* true krne se bottom or top side nhi dekh sakte  */}
                    <cylinderGeometry args={[2, 2, 2, 60, 60, true]} />

                    {/* yha double side krne se ab hm aar paar dekh sakte h  */}
                    {/* yha transaparent add krne se kya hoga ki jo multiple images ki bich m space h wha se aap dusri images ko dekh sakte h  */}
                    <meshStandardMaterial map={texture} transparent side={THREE.DoubleSide} />
                </mesh>
            </group>
        </>
    )
}

export default Scene