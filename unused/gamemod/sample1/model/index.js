import * as THREE from "https://cdn.skypack.dev/three"
import ReactDOM from "https://cdn.skypack.dev/react-dom"
import React, { Suspense, useMemo } from "https://cdn.skypack.dev/react"
import { Canvas, useLoader } from "https://cdn.skypack.dev/react-three-fiber"
import { Physics, usePlane, useConvexPolyhedron } from "https://cdn.skypack.dev/use-cannon"
import { GLTFLoader } from "https://cdn.skypack.dev/three/examples/jsm/loaders/GLTFLoader"
import './styles.css'

function Diamond(props) {
  const { nodes } = useLoader(GLTFLoader, '/diamond.glb')
  const geo = useMemo(() => new THREE.Geometry().fromBufferGeometry(nodes.Cylinder.geometry), [nodes])
  const [ref] = useConvexPolyhedron(() => ({ mass: 100, ...props, args: geo, onCollide: e => console.log('collision', e.contact.impactVelocity) }))
  return (
    <mesh castShadow ref={ref} geometry={nodes.Cylinder.geometry} dispose={null}>
      <meshNormalMaterial attach="material" transparent opacity={0.85} />
    </mesh>
  )
}

function Plane(props) {
  const [ref] = usePlane(() => ({ mass: 0, ...props }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[50, 50]} />
      <shadowMaterial attach="material" color="#171717" opacity={0.5} />
    </mesh>
  )
}

ReactDOM.render(
  <Canvas shadowMap colorManagement gl={{ alpha: false }} camera={{ position: [1, 1, 5], fov: 50 }}>
    <color attach="background" args={['lightpink']} />
    <hemisphereLight intensity={0.35} />
    <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={2} castShadow shadow-mapSize-width={256} shadow-mapSize-height={256} />
    <Physics allowSleep>
      <Plane rotation={[-Math.PI / 2, 0, 0]} />
      <Suspense fallback={null}>
        <Diamond position={[0, 5, 0]} rotation={[0.1, 0.1, 0.1]} />
      </Suspense>
    </Physics>
  </Canvas>,
  document.getElementById('root')
)
