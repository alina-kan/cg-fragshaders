#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    //FragColor = texture(image, texcoord);

    vec2 temp = vec2(((2.0 * texcoord[0]) - 1.0), ((2.0 * texcoord[1]) - 1.0));
    float radius = pow(length(temp), 1.5);
    vec2 offset = vec2(temp[0] * ((sin(radius * 30.0 - time * 5.0) + 0.5)/60.0), temp[1] * ((sin(radius * 30.0 - time * 5.0) + 0.5)/60.0));
    vec2 final_texcoord = vec2(texcoord[0] + offset[0], texcoord[1] + offset[1]);

    FragColor = texture(image, final_texcoord);
}
