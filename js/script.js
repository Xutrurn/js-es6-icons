// alert("Hello world");

$(document).ready(function() {

  const icons = [{
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    }
  ];

  const colors = [
    'blue',
    'orange',
    'purple'
  ];

  const types = getTypes(icons);


  const iconColor = icons.map((element) => {

    const indexType = types.indexOf(element.type);

    return {
      ...element,
      color: colors[indexType]
    }

  });


  const container = $('.icons');


  printIcons(iconColor, container);


});
// fine doc






// Funzione per filtrare array generico in base a chiave per esempio type
function getTypes(array) {
  const types = [];

  array.forEach((element) => {
    if (!types.includes(element.type)) {
      types.push(element.type);
    }
  });

  return types;

}


// Funzione per aggiungere all'html gli elementi
function printIcons(array, container) {
  array.forEach((element) => {

    const {
      name,
      family,
      prefix,
      type,
      color
    } = element;

    container.append(
      `
        <div class="icon">
          <i class="${family} ${prefix}${name}" style="color:${element.color}"></i>
          <div class="title">${name.toUpperCase()}</div>
        </div>
      `
    );

  });

}







// console.log();
