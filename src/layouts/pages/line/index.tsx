/**
 * Project : three-js
 * Created with WebStorm
 * Created by hyeonmin
 * Created at 2023/09/26 2:20 PM
 *
 * Component Line
 * Description : React Web 컴포넌트
 */


import React from 'react';
import {Canvas} from '@react-three/fiber'
import * as THREE from 'three';
import {OrbitControls} from '@react-three/drei'

interface LineProps {

}

const Line = ({...props}: LineProps) => {
  /* 다국어 함수 - 가급적 다국어 함수를 컴포넌트 제일 위에 선언하면 해당 컴포넌트가 어느 영역의 다국어 데이터를 참조하는지 확인이 쉽다.
   t: 지정된 prefix 하위의 다국어만 사용
   g: prefix 무시하고 루트에서부터 다국어 탐색
   l: 언어 지정하여 다국어 값 표기
   o: multiCodeName, multiCodeDesc 등 언어 통합 데이터에서 현재 언어값에 맞는 텍스트 추출
   */
  // [ global store 접근 ] ------------------------------------------------------------------------------------------------------------ //
  // [ state 선언 ] ------------------------------------------------------------------------------------------------------------ //
  // [ state, props 변환값 ] ------------------------------------------------------------------------------------------------------------ //
  // [ hook 사용 ] ------------------------------------------------------------------------------------------------------------ //
  // [ effect 기능 ] ------------------------------------------------------------------------------------------------------------ //
  // [ 이벤트 핸들러 ] ------------------------------------------------------------------------------------------------------------ //
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
   document.getElementById('render')?.appendChild( renderer.domElement );
  const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
  camera.position.set( 0, 0, 100 );
  camera.lookAt( 0, 0, 0 );

  const scene = new THREE.Scene();

  //create a blue LineBasicMaterial
  const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
  const points = [];
  points.push( new THREE.Vector3( - 10, 0, 0 ) );
  points.push( new THREE.Vector3( 0, 10, 0 ) );
  points.push( new THREE.Vector3( 10, 0, 0 ) );

  const geometry = new THREE.BufferGeometry().setFromPoints( points );
  const line = new THREE.Line( geometry, material );
  scene.add( line );
  renderer.render( scene, camera );
  // [ JSX Mark-up ] ------------------------------------------------------------------------------------------------------------ //

  return (
    <>
      <Canvas>
        <mesh position={0} scale={2}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial attach="material" color={0xa3b18a}/>
        </mesh>
      </Canvas>
    </>
  );
};

Line.defaultProps = {};

export default Line;
