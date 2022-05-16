#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

vec4 colorconvert(float t){
    //t = luminance
    //initialize color to be white
    vec4 color = vec4(1.0, 1.0, 1.0, 1.0);

    float luminance = 0.0;

    //initialize other colors
    vec4 pink = vec4(216.0/255.0, 9.0/255.0, 126.0/255.0, 1.0); //vec4(252.0/255.0, 114.0/255.0, 192.0/255.0, 1.0); //
    vec4 blue = vec4(2.0/255.0, 12.0/255.0, 105.0/255.0, 1.0);
    vec4 purple = vec4(121.0/255.0, 72.0/255.0, 153.0/255.0, 1.0);

    if (t < 0.5){
        luminance = 2.0 * t;
        color.r = ((1.0-luminance) * blue.r) + (luminance * purple.r);
        color.g = ((1.0-luminance) * blue.g) + (luminance * purple.g);
        color.b = ((1.0-luminance) * blue.b) + (luminance * purple.b);
    } else {
        //(((OldValue - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin
        luminance = (((t - 0.5) * (1.0 - 0.0))/(1.0-0.5)) + 0.0;
        color.r = ((1.0-luminance) * purple.r) + (luminance * pink.r);
        color.g = ((1.0-luminance) * purple.g) + (luminance * pink.g);
        color.b = ((1.0-luminance) * purple.b) + (luminance * pink.b);
    }

    return color;
}

void main() {
    //FragColor = texture(image, texcoord);
    vec4 temp = texture(image, texcoord);

    //convert to black + white
    float luminance = 0.299 * temp.r + 0.587 * temp.g + 0.114 * temp.b;

    //convert black + white to color
    // pink -> white, blue -> black, purple -> grey
    //linear interpolation from pink to purple, then purple to blue

    vec4 color = vec4(1.0, 1.0, 1.0, 1.0);
    color = colorconvert(luminance);

    //vec4 pink_color = w_b * pink;
    //vec4 color = temp.rgba * pink;

    FragColor = color;
}
