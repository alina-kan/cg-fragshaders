#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    //FragColor = texture(image, texcoord);
    vec4 temp = texture(image, texcoord);
    float luminance = 0.299 * temp[0] + 0.587 * temp[1] + 0.114 * temp[2];
    FragColor = vec4(luminance, luminance, luminance, 1.0);
}
