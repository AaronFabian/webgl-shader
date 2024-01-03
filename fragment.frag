precision highp float;

// uniform vec4 color;

const float PI=3.14159265359;
uniform float canvasWidth;
uniform vec2 u_resolution;
uniform float u_frames;
uniform vec2 u_mouse;

void main(){
  vec2 uv=gl_FragCoord.xy/u_resolution.xy;
  vec2 mouse=u_mouse.xy/u_resolution.xy;
  
  float offset=abs(10.*sin(u_frames/5000.));
  
  float factor=16.;
  float bright=1.-factor*mod(distance(mouse,uv),1./factor);
  
  bright+=offset;
  bright=mod(bright,1.);
  
  // float angle = (PI * atan(uv.y, uv.x)) / (PI * 2.0);
  float angle=(PI*atan(uv.y-mouse.y,uv.x-mouse.x))/(PI*2.);
  
  gl_FragColor=vec4(bright,factor*mod(angle+offset*.1,1./factor),0.,1.);
  // gl_FragColor = vec4(bright, 0.0, 0.0, 1.0);
  
  // legacy code
  // vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  // vec2 mouse = u_mouse.xy / u_resolution.xy;
  
  // float offset = abs(10.0 * sin(u_frames / 10000.0));
  
  // float factor = 16.0;
  // float bright = 1.0 - factor * mod(distance(mouse, uv), 1.0 / factor);
  
  // bright += offset;
  // bright = mod(bright, 1.0);
  
  // gl_FragColor = vec4(bright, 0.0, 0.0, 1.0);
  
  // legacy code
  // vec2 mouse = vec2(0.5, 0.5);
  // gl_FragColor = vec4(uv.y, 0.0, 0.0, 1.0);
}