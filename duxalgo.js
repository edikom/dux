/* global instantsearch algoliasearch */

const search = instantsearch({
  indexName: 'Produits DUX',
  searchClient: algoliasearch('HAHKE34ZA2', '0795798992f6e09f780d0ad5d42bff87'),
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.clearRefinements({
    container: '#clear-refinements',
  }),
  instantsearch.widgets.refinementList({
    container: '#brand-list',
    attribute: 'Product Categories',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <div><a href="https://mouvementdux.com/product/{{Product Handle}}">
          <img class="hit-image" src="{{Main Variant Image}}" align="left" alt="{{Product Name}}" />
          <div class="hit-name">
            {{#helpers.highlight}}{ "attribute": "Product Name" }{{/helpers.highlight}}
          </div>
          <div class="hit-price">\${{Variant Price}}</div>
          </a>
        </div>
      `,
    },
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
