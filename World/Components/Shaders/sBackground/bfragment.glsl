varying vec2 vUv;
uniform float uTime;
uniform sampler2D uTexture;
void main()	{
	// vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
	vec4 texture = texture2D(uTexture,vUv);
	gl_FragColor = vec4(vUv*0.8,0.5,0.7);
	// gl_FragColor = vec4(texture);
}