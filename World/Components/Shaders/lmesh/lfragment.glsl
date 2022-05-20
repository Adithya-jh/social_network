varying vec2 vUv;
uniform float uTime;
void main()	{
	// vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
	// gl_FragColor = vec4(0.1,0.1,0.6,1.0);
	gl_FragColor = vec4(1,1.0,1.0,1.);
	// vec4 texture = texture2D(uTexture,vUv);
}