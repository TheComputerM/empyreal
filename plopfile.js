module.exports = function (plop) {
    // controller generator
    plop.setGenerator('component', {
        description: 'Generates a boilerplate JS and CSS for your new custom Empyreal component.',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Component Name'
        }, {
            type: "confirm",
            name: "css",
            message: "Generate SCSS file ?"
        }],
        actions: function (data) {
            var actions = [{
                type: 'add',
                path: 'js/components/{{lowerCase name}}.js',
                templateFile: 'utils/templates/component.hbs'
            }];
            if (data.css) {
                actions.push({
                    type: "add",
                    path: "sass/components/_{{lowerCase name}}.scss"
                })
            }
            return actions;
        }
    });

    plop.setGenerator("webpage", {
        description: "Generates a docs file",
        prompts: [{
            type: "input",
            name: "name",
            "message": "Name of file"
        }],
        actions: [{
            type: 'add',
            path: 'nunjucks/{{lowerCase name}}.njk',
            templateFile: 'utils/templates/webpage.hbs'
        }]
    })
};