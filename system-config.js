// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md
/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    'firebase': 'vendor/firebase/firebase.js',
    'angularfire2': 'vendor/angularfire2',
    '@angular2-material': 'vendor/@angular2-material'
};
/** User packages configuration. */
var packages = {
    angularfire2: {
        defaultExtension: 'js',
        main: 'angularfire2.js'
    }
};
// put the names of any of your Material components here
var materialPkgs = [
    'core',
    'toolbar',
    'icon',
    'button',
    'sidenav',
    'list',
    'card',
    'input',
    'checkbox',
    'radio',
    'progress-circle',
    'progress-bar',
    'tabs'
];
materialPkgs.forEach(function (pkg) {
    packages[("@angular2-material/" + pkg)] = { main: pkg + ".js" };
});
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app',
    'app/shared',
    'app/+index',
    'app/+admin',
    'app/+admin/teams',
    'app/+admin/groups',
    'app/+admin/pools',
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map