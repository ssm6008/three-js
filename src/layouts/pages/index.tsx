/**
 * Project : three-js
 * Created with WebStorm
 * Created by hyeonmin
 * Created at 2023/09/14 2:04 PM
 *
 * Component ThreeHome
 * Description : React Web 컴포넌트
 */


import React from 'react';
// import { THREE } from 'three';
import * as THREE from 'three';

interface ThreeHomeProps {

}

const ThreeHome = ({...props}: ThreeHomeProps) => {
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
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
  }

  animate();
  // [ JSX Mark-up ] ------------------------------------------------------------------------------------------------------------ //

  return (
    <div>
    </div>
  );
};

ThreeHome.defaultProps = {};

export default ThreeHome;
