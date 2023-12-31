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
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'

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

  // [ JSX Mark-up ] ------------------------------------------------------------------------------------------------------------ //

  return (
    <>
      <Canvas >
        <OrbitControls autoRotate={true}/>
        <mesh position={0} scale={2}>
          <ambientLight intensity={1} />
          <directionalLight position={[-1,0,1]} intensity={0.5} />
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial attach="material" color={0xa3b18a}/>
        </mesh>
      </Canvas>
    </>
  );
};

ThreeHome.defaultProps = {};

export default ThreeHome;
