// tooling
const postcss = require('postcss');
const parser = require('postcss-selector-parser');

// plugin
module.exports = postcss.plugin('postcss-role', (opts) => (root) => {
	const replace = opts && opts.replace || '[role="$&"]';

	// walk each rule
	root.walkRules((rule) => {
		// process the selector
		const { result } = parser(walk).process(rule.selector);

		// if the selector has changed
		if (rule.selector !== result) {
			// update the selector
			rule.selector = result;
		}
	});

	// selector walk
	function walk(node) {
		// if the node has children
		if (node.nodes && node.nodes.length) {
			// walk over the children first
			node.nodes.forEach(walk);
		}

		// if the node is a selector
		if (node.type === 'selector') {
			// initialize the nodes
			const nodes = [];

			// walk the selector
			node.walk((pseudo) => {
				// if walking a :role pseudo
				if (pseudo.type === 'pseudo' && pseudo.value === ':role') {
					const parent = pseudo.parent;
					const index = pseudo.parent.nodes.indexOf(pseudo);

					// for each role within the :role pseudo
					pseudo.nodes.forEach((role) => {
						const replacer = parser(() => {}).process(
							String(role).trim().replace(/.+/, replace)
						).res;

						// replace the node with the appropriate fallback
						parent.nodes.splice(index, 1, replacer);

						// push the modified :role pseudo to the nodes
						nodes.push(node.clone());
					});
				}
			});

			// if nodes were added
			if (nodes.length) {
				// replace the node with those nodes
				node.replaceWith(
					parser.root({
						nodes
					})
				);
			}
		}
	}
});
