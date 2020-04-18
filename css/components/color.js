module.exports = function (config) {
    let out = {};

    let colors = {
        ...config.pallete,
        "primary": {base: config.variables.primaryColor},
        "secondary": {base: config.variables.secondaryColor}
    }

    
    for (let colorName in colors) {
        let color = colors[colorName];

        for (let variant in color) {
            if (variant == 'base') {
                out[`.${colorName}`] = { backgroundColor: `${color["base"]} !important` };
                out[`.${colorName}-text`] = { color: `${color["base"]} !important` };

                out[`.${colorName}-outline`] = {
                    border: `2px solid ${color["base"]}`,
                    background: "transparent",
                    color: color["base"]
                }

                out[`.${colorName}-rgba-dark`] = {
                    backgroundColor: `color-mod(${color["base"]} a(70%))`
                };
                out[`.${colorName}-rgba-medium`] = {
                    backgroundColor: `color-mod(${color["base"]} a(50%))`
                };
                out[`.${colorName}-rgba-light`] = {
                    backgroundColor: `color-mod(${color["base"]} a(25%))`
                };

            } else {
                out[`.${colorName}.${variant}`] = { backgroundColor: `${color[variant]} !important` }
                out[`.${colorName}-text.text-${variant}`] = { color: `${color[variant]} !important` }
            }
        }
    }

    for (gradientName in config.gradients) {
        out[`.${gradientName}-grad`] = {
            backgroundImage: `${config.gradients[gradientName]} !important`
        }
    }

    for (shadeName in config.shades) {
        let shade = config.shades[shadeName];

        out[`.${shadeName}`] = { backgroundColor: shade };
        out[`.${shadeName}-text`] = { color: shade };
        out[`.${shadeName}-outline`] = {
            border: `2px solid ${shade}`,
            background: "transparent",
            color: shade
        }
    }

    return out;
}