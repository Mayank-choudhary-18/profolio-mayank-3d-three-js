/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
// import React from 'react'
// import { Mesh } from './../../node_modules/@types/three/src/objects/Mesh.d';
import { useGLTF } from '@react-three/drei';
import skyScene from '../assets/3d/sky.glb'

import {useRef} from 'react'

import {useFrame} from '@react-three/fiber'



const Sky = ({isRotating}) => {
    const sky = useGLTF(skyScene)
    const skyRef = useRef();


    useFrame((_,delta)=>{

      if(isRotating){
        skyRef.current.rotation.y += 0.25*delta;
      }

    })


  return (
    <mesh ref={skyRef}>
            <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Sky
