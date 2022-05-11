#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    //FragColor = texture(image, texcoord);

    float deg = atan(((2.0 * texcoord[1]) - 1.0), ((2.0 * texcoord[0]) - 1.0));
    vec2 temp = vec2(((2.0 * texcoord[0]) - 1.0), ((2.0 * texcoord[1]) - 1.0));
    float radius = pow(length(temp), 1.5);
    vec2 fish_texcoord = vec2(radius * cos(deg), radius * sin(deg));
    
    vec2 final_texcoord = vec2(0.5 * (fish_texcoord[0] + 1.0), 0.5 * (fish_texcoord[1] + 1.0));

    FragColor = texture(image, final_texcoord);
}
