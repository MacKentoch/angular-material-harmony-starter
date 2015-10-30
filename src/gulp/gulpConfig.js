module.exports = {
	
	base : {
		'root' 	: './',
		'src'		:	'./app/src/',
		'public': './public/'
	},
	
	js : {
		sources : ['./src/**/*.js'],
		dest		: {
			filename 	: 'app.bundle.js',
			dir				: './public/js/'
		}
	},
	
	css  :{
		sources : ['./src/app/app.style.scss'],
		dest		: {
			filename 	: 'appBundle.css',
			dir				: './src/app/'
		}		
	},
	
	jspm : {
		main : './src/app/app.bootstrap.js',
		dest : './public/js/appBundle.js'	
	}
	
};