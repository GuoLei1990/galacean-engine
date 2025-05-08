#include <common>
varying vec2 v_uv;
uniform sampler2D renderer_BlitTexture;

void main(){
	mediump vec4 color = texture2DSRGB(renderer_BlitTexture, v_uv);

    gl_FragColor = linearToGamma(color);
    gl_FragColor =vec4(mix(color.rgb,gl_FragColor.rgb, 1.0),gl_FragColor.a);    
}