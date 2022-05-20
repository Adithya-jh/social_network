varying vec2 vUv;
uniform float uTime;

void main() {
  vec3 newposition = position;
  newposition.x += uTime+sin(newposition.y+uTime) ; 
//   newposition.y -= sin(newposition.y+uTime * 0.2) ; 
  newposition.z += 1.;
  gl_PointSize =  4.;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( newposition, 1.0 );
}