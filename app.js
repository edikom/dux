/* global instantsearch algoliasearch */

const search = instantsearch({
  indexName: 'Produits DUX',
  searchClient: algoliasearch('HAHKE34ZA2', '0795798992f6e09f780d0ad5d42bff87'),
});

search.addWidgets([
  instantsearch.widgets.configure({
    hitsPerPage: 8,
  }),  
  instantsearch.widgets.searchBox({
    container: '#searchbox',
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
  instantsearch.widgets
    .index({ indexName: 'Contenus DUX' })
    .addWidgets([
      instantsearch.widgets.configure({
        hitsPerPage: 8,
      }),    
      instantsearch.widgets.hits({
        container: '#hits2',
        templates: {
          item: `
          <div><a href="https://mouvementdux.com/articles/{{URL}}">
            <img class="hit-image" src="{{Image de l'article}}" align="left" alt="{{Titre}}" />
            <div class="hit-name">
              {{#helpers.highlight}}{ "attribute": "Titre" }{{/helpers.highlight}}
            </div>
            <div class="hit-price">\${{Auteur de l'article}}</div>
            </a>
          </div>
        `,
        },
      }),
    ]),    
]);

search.start();
