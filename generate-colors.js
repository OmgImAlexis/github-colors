var Colors = require ("./github-colors")
  , output = ""
  ;

for (var pLanguage in Colors) {

    var cpLanguage = Colors[pLanguage];
    if (!cpLanguage.color) {
        continue;
    }

    output += "![](http://www.placehold.it/200/" + cpLanguage.color + "/ffffff&text=" + pLanguage + ")\n";
}

console.log(output);