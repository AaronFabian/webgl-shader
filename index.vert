// attribute vec2 aPosition;
attribute vec3 aPosition;

void main(){
  vec4 pos4=vec4(aPosition,1.);
  gl_Position=pos4;
}`