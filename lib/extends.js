/**
 * Extension Blade Directive
 */

var ExtensionDirective = Object.create(require('./base'));

ExtensionDirective.regex = /\@extends\((["'])(.*?)(\1)\)/g;
ExtensionDirective.name = 'Extend';
ExtensionDirective.parse = function(html,variables){
    console.log( this.name + " >> " + this.search );
};

module.exports = ExtensionDirective;