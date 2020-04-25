﻿class Product {
  constructor(id, eigenaar, postcode, gemeente, titel, omschrijving, prijs, categorie, afbeeldingen) {
    this._id = id;
    this._eigenaar = eigenaar;
    this._postcode = postcode;
    this._gemeente = gemeente;
    this._titel = titel;
    this._omschrijving = omschrijving;
    this._prijs = prijs;
    this._categorie = categorie;
    this._afbeeldingen = afbeeldingen;
  }

  get id() {
    return this._id;
  }
  get titel() {
    return this._titel;
  }
  get omschrijving() {
    return this._omschrijving;
  }
  get prijs() {
    return this._prijs;
  }
  get categorie() {
    return this._categorie;
  }
  get afbeeldingen() {
    return this._afbeeldingen;
  }
}

class ProductenRepository {
  constructor() {
    this._producten = [];
    this.haalProductenOp();
  }

  get producten() {
    return this._producten;
  }

  // voegt het gegeven product achteraan toe aan de array _producten
  voegProductToe(product) {

  }

  // retourneert het product met gegeven id
  geefProduct(id) {

  }

  // retourneert een array met producten behorend tot de gegeven categorie (case-insensitive)
  // merk op: indien de categorie == alles dan moeten alle producten geretourneerd worden
  geefProductenUitCategorie(categorie) {

  }

  // retourneert een alfabetisch gesorteerde array van strings die de unieke categorieën bevat
  geefAlleCategorieen() {

  }

  haalProductenOp() {
    this.voegProductToe(
      new Product(
        'P000',
        'Jonas_De_Clercq',
        '9090',
        'Melle',
        'Prachtige eetkamer',
        'Wegens verhuis is deze prachtige eetkamer te koop. Geen gebruikersschade. Als nieuw',
        750,
        'Meubelen',
        ['P000_1', 'P000_2', 'P000_3']
      )
    );
    this.voegProductToe(
      new Product(
        'P001',
        'Simon_De_Witte',
        '9000',
        'Gent',
        'Eetkamer met 6 stoelen',
        'Wegens samenwonen komt deze eetkamer vrij. Werd in 2010 aangekocht.',
        '825',
        'Meubelen',
        ['P001_1', 'P001_2', 'P001_3']
      )
    );
    this.voegProductToe(
      new Product(
        'P002',
        'Ilse_Van_Acker',
        '8000',
        'Brugge',
        'Eetkamer landelijke stijl met zitbankje',
        'Te koop: tafel + 3 stoelen + zitbank + dressoir + barkast',
        515,
        'Meubelen',
        ['P002_1', 'P002_2', 'P002_3']
      )
    );
    this.voegProductToe(
      new Product(
        'P003',
        'Simon_De_Witte',
        '9000',
        'Gent',
        'Moderne slaapkamer',
        'Wegens samenwonen komt deze slaapkamer in zwart wit tinten vrij. Werd in 2010 aangekocht.',
        400,
        'Meubelen',
        ['P003_1', 'P003_2']
      )
    );
    this.voegProductToe(
      new Product(
        'P004',
        'Andreas_Baert',
        '2000',
        'Antwerpen',
        'Klassieke slaapkamer',
        'Zeer gerieflijke slaapkamer te koop. Af te halen in Antwerpen vanaf begin juli.',
        450,
        'Meubelen',
        ['P004_1', 'P004_2']
      )
    );
    this.voegProductToe(
      new Product(
        'P005',
        'Lieve_Van_Aelst',
        '9800',
        'Deinze',
        'Eenpersoons slaapkamer',
        'Slaapkamer met frisse look te koop voor een weggeefprijsje',
        150,
        'Meubelen',
        ['P005_1', 'P005_2']
      )
    );
    this.voegProductToe(
      new Product(
        'P006',
        'Eva_Van_Damme',
        '9700',
        'Oudenaarde',
        'Tajine te koop',
        'Tajine - 27 cm - 2 liter van LE CREUSET',
        100,
        'Keuken',
        ['P006_1', 'P006_2']
      )
    );
    this.voegProductToe(
      new Product(
        'P007',
        'Laurens_Waeterman',
        '8500',
        'Kortrijk',
        'Super de luxe grill',
        'Grill gewonnen bij tombola. Nog nieuw in verpakking. Doe een bod.',
        50,
        'Keuken',
        ['P007_1', 'P007_2']
      )
    );
    this.voegProductToe(
      new Product(
        'P008',
        'Inge_De_Meulemeester',
        '8790',
        'Waregem',
        'Pottenset',
        'Kleurrijke pottenset bestaande uit 6 potten in frisse kleuren',
        100,
        'Keuken',
        ['P008_1', 'P008_2', 'P008_3', 'P008_4', 'P008_5', 'P008_6']
      )
    );
    this.voegProductToe(
      new Product(
        'P009',
        'Iris_Wuyttens',
        '9160',
        'Lokeren',
        'Rustieke tuinset',
        'Zeer mooie rustieke tuinset met 6 stoelen. Uitstekend geschikt voor mensen die houden van landelijke stijl',
        1000,
        'Tuin',
        ['P009_1', 'P009_2']
      )
    );
    this.voegProductToe(
      new Product(
        'P010',
        'Eva_Van_Damme',
        '9700',
        'Oudenaarde',
        'Romantische tuinset',
        'Plooistoel in massief dennenhout en metaal L39 x D46 X H96 cm',
        475,
        'Tuin',
        ['P010_1', 'P010_2']
      )
    );
    this.voegProductToe(
      new Product(
        'P011',
        'Willy_Van_Wichelen',
        '9770',
        'Kruisem',
        'Box voor tuinkussens',
        'Tuinkussenbox in PVC B 120 x D 52 x H 60 cm',
        50,
        'Tuin',
        ['P011_1']
      )
    );
    this.voegProductToe(
      new Product(
        'P012',
        'Nathalie_Everts',
        '9100',
        'Sint Niklaas',
        'Tuinspot',
        'Tuinspot in grijze en in zwarte PVC 1 x 450W',
        5,
        'Tuin',
        ['P012_1', 'P012_2']
      )
    );
    this.voegProductToe(
      new Product(
        'P013',
        'Johan_Allaert',
        '2550',
        'Kontich',
        'Tuinset',
        'Heel mooie tuinset bestaande uit tafel en 8 rieten stoel. Weggeefprijs',
        575,
        'Tuin',
        ['P013_1', 'P013_2', 'P013_3']
      )
    );
    this.voegProductToe(
      new Product(
        'P014',
        'Linde_Dejaegher',
        '8550',
        'Zwevegem',
        'Houten tuinset met  6 stoelen',
        'Omdat we verhuizen naar een appartement kunnen we onze tuinset niet meenemen.',
        365,
        'Tuin',
        ['P014_1', 'P014_2', 'P014_3']
      )
    );
    this.voegProductToe(
      new Product(
        'P015',
        'Mathilde_De_Laet',
        '9850',
        'Merendree',
        'Houdertjes voor theelichtjes',
        'Houdertjes voor theelichtjes. Als je meerdere koopt, zakt de prijs wel',
        5,
        'Tuin',
        ['P015_1', 'P015_2']
      )
    );
  }
}

class ProductenComponent {
  constructor() {
    this._productenRepository = new ProductenRepository();
  }

  // intialiseert de pagina
  initialiseerHtml() {
    this.categorieenToHtml(this._productenRepository.geefAlleCategorieen());
    this.productenToHtml(this._productenRepository.producten);
  }

  // voegt de gegeven categorieen toe aan de selectlist #categorie
  categorieenToHtml(categorieen) {

  }

  // toont het aantal producten in div #aantalProducten
  // toont de producten in div #overzichtProducten
  productenToHtml(producten) {

  }


  // toont de details van het gegeven product in de div #productDetails
  // zet het gegeven product vetjes in de div #overzichtProducten
  productDetailsToHtml(product) {
    // maakt het element met id productDetails zichtbaar en leeg
    const divProductDetails = document.getElementById('productDetails');
    divProductDetails.style.display = 'block';
    divProductDetails.innerHTML = '';

    // zet, in het overzicht van de producten, het gekozen product in het vetjes
    if (document.querySelector(`#overzichtProducten .tekstVet`))
      document.querySelector(`#overzichtProducten .tekstVet`).removeAttribute('class');
    document.querySelector(`#${product.id} p`).setAttribute('class', 'tekstVet');

    const h2Element = document.createElement('h2');
    const h2Text = document.createTextNode(product.titel);
    h2Element.appendChild(h2Text);
    const pElement = document.createElement('p');
    const pText = document.createTextNode(product.omschrijving);
    pElement.appendChild(pText);
    const h4Element = document.createElement('h4');
    const h4Text = document.createTextNode('Prijs: €' + product.prijs);
    h4Element.appendChild(h4Text);
    const divElement = document.createElement('div');
    divElement.id = 'afbeeldingen';
    const imgGroteAfbeelding = document.createElement('img');
    imgGroteAfbeelding.id = 'groteAfbeelding';
    imgGroteAfbeelding.src = `images/${product.id}/${product.afbeeldingen[0]}.jpg`;
    imgGroteAfbeelding.alt = product.titel;
    divElement.appendChild(imgGroteAfbeelding);
    const asideElement = document.createElement('aside');
    asideElement.id = 'thumbnails';
    product.afbeeldingen.forEach(afbeelding => {
      const imgElement = document.createElement('img');
      imgElement.src = `images/${product.id}/thumbs/thumb_${afbeelding}.jpg`;
      imgElement.onclick = () => {
        document.getElementById('groteAfbeelding').src = imgElement.src.replace(
          '/thumbs/thumb_',
          '/'
        );
      };
      asideElement.appendChild(imgElement);
    });
    divElement.appendChild(asideElement);
    document.getElementById('productDetails').appendChild(h2Element);
    document.getElementById('productDetails').appendChild(pElement);
    document.getElementById('productDetails').appendChild(h4Element);
    document.getElementById('productDetails').appendChild(divElement);
  }
}

const init = function () {
  const productenComponent = new ProductenComponent();
  productenComponent.initialiseerHtml();
};

window.onload = init;