/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/chair.gltf 
*/

import React from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'

const Chair = (props) => {
	const leatherTextureProps = useTexture({
		// map: "./textures/leather/Leather_008_Base Color.jpg",
		normalMap: './textures/leather/Leather_011_normal.jpg',
		roughnessMap: './textures/leather/Leather_011_roughness.jpg',
		aoMap: './textures/leather/Leather_011_ambientOcclusion.jpg',
	})

	const fabricTextureProps = useTexture({
		// map: "./textures/fabric/Fabric_Knitted_006_basecolor.jpg",
		normalMap: './textures/fabric/Fabric_Knitted_006_normal.jpg',
		roughnessMap: './textures/fabric/Fabric_Knitted_006_roughness.jpg',
		aoMap: './textures/fabric/Fabric_Knitted_006_ambientOcclusion.jpg',
	})

	leatherTextureProps.normalMap.repeat.set(2, 2)
	leatherTextureProps.roughnessMap.repeat.set(2, 2)
	leatherTextureProps.aoMap.repeat.set(2, 2)

	leatherTextureProps.normalMap.repeat.set(3, 3)
	leatherTextureProps.roughnessMap.repeat.set(3, 3)
	leatherTextureProps.aoMap.repeat.set(3, 3)

	leatherTextureProps.normalMap.wrapS = leatherTextureProps.normalMap.wrapT = THREE.MirroredRepeatWrapping
	leatherTextureProps.roughnessMap.wrapS = leatherTextureProps.roughnessMap.wrapT = THREE.MirroredRepeatWrapping
	leatherTextureProps.aoMap.wrapS = leatherTextureProps.aoMap.wrapT = THREE.RepeatWrapping

	fabricTextureProps.normalMap.repeat.set(3, 3)
	fabricTextureProps.roughnessMap.repeat.set(3, 3)
	fabricTextureProps.aoMap.repeat.set(3, 3)

	fabricTextureProps.normalMap.wrapS = fabricTextureProps.normalMap.wrapT = THREE.RepeatWrapping
	fabricTextureProps.roughnessMap.wrapS = fabricTextureProps.roughnessMap.wrapT = THREE.RepeatWrapping
	fabricTextureProps.aoMap.wrapS = fabricTextureProps.aoMap.wrapT = THREE.RepeatWrapping
	const { nodes, materials } = useGLTF('./models/chair.gltf')

	return (
		<group {...props} dispose={null}>
			<mesh geometry={nodes.Chair.geometry} castShadow>
				<meshStandardMaterial {...leatherTextureProps} />
			</mesh>
			<mesh geometry={nodes.Cushion.geometry} position={[0, 0.06, 0.04]} castShadow>
				<meshStandardMaterial {...fabricTextureProps} />
			</mesh>
			<mesh geometry={nodes.Legs1.geometry} material={materials.Legs} />
			<mesh geometry={nodes.Legs2.geometry} material={materials.Legs} visible={false} />
		</group>
	)
}

useGLTF.preload('./models/chair.gltf')

export default Chair
