/**
 * Core Object
 */

var BaseBladeProcessor = {
    name : 'base',
    parse: function( html, variables){
        console.log('Name ' + this.name);
        return html;
    }
};

module.exports = BaseBladeProcessor;