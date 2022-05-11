#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    //FragColor = texture(image, texcoord);
    vec4 temp = texture(image, texcoord);
    float red = (round(temp[0] * 4.0))/4.0;
    float green = (round(temp[1] * 4.0))/4.0;
    float blue = (round(temp[2] * 4.0))/4.0;
    FragColor = vec4 (red, green, blue, 1.0);
}
