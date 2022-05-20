varying vec2 vUv;
uniform float uTime;

void main() {
  vec3 newposition = position;
  newposition.x += sin(newposition.x+uTime) ; 
  newposition.y -= tan(newposition.y+uTime * 0.2) ; 
  newposition.z += 3.;
  gl_PointSize =  10.;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( newposition, 1.0 );
}