module.exports = babel;

function babel ( code, options ) {
	// allow options to be specified like: transform('babel', {ext: '.js', options: {/*babel stuff*/}})
	if (options.options) options = options.options;
	options.sourceMap = options.sourceMap !== false;
	return require( 'babel-core' ).transform( code, options );
}

babel.id = 'babel';

babel.defaults = {
	accept: '.js'
};
