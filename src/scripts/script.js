let category = document.getElementById('category');
let entry = document.getElementById('entry');
let exit = document.getElementById('exit');
let convert = document.getElementById('convert');

const categories = {
  temperature: {
    options: [
      { value: '', text: 'Escolha uma Opção' },
      { value: 'celsius', text: 'Celsius' },
      { value: 'fahrenheit', text: 'Fahrenheit' },
      { value: 'kelvin', text: 'Kelvin' }
    ],
    exitOptions: {
      celsius: [
        { value: 'fahrenheit', text: 'Fahrenheit' },
        { value: 'kelvin', text: 'Kelvin' }
      ],
      fahrenheit: [
        { value: 'celsius', text: 'Celsius' },
        { value: 'kelvin', text: 'Kelvin' }
      ],
      kelvin: [
        { value: 'celsius', text: 'Celsius' },
        { value: 'fahrenheit', text: 'Fahrenheit' }
      ]
    }
  },
  length: {
    options: [
      { value: '', text: 'Escolha uma opção' },
      { value: 'meter', text: 'Metro' },
      { value: 'centimeter', text: 'Centrimetro' },
      { value: 'inch', text: 'Polegada' }
    ],
    exitOptions: {
      meter: [
        { value: 'centimeter', text: 'Centimetro' },
        { value: 'inch', text: 'Polegada' }
      ],
      centimeter: [
        { value: 'meter', text: 'Metro' },
        { value: 'inch', text: 'Polegada' }
      ],
      inch: [
        { value: 'centimeter', text: 'Centimetro' },
        { value: 'meter', text: 'Metro' }
      ]
    }
  },
  weight: {
    options: [
      { value: '', text: 'Escolha uma opção' },
      { value: 'kilogram', text: 'Quilograma' },
      { value: 'gram', text: 'Grama' },
      { value: 'pound', text: 'Libra' }
    ],
    exitOptions: {
      kilogram: [
        { value: 'gram', text: 'Grama' },
        { value: 'pound', text: 'Libra' }
      ],
      gram: [
        { value: 'pound', text: 'Libra' },
        { value: 'kilogram', text: 'Quilograma' }
      ],
      pound: [
        { value: 'kilogram', text: 'Quilograma' },
        { value: 'gram', text: 'Grama' }
      ]
    }
  }
};

function generateOptions(options) {
  return options.map(option => `<option value="${option.value}">${option.text}</option>`).join('');
}

// Event listener for category change
category.addEventListener('change', (event) => {
  clearForm();
  const selectedCategory = categories[event.target.value];
  if (selectedCategory) {
    entry.innerHTML = generateOptions(selectedCategory.options);

    // Event listener for entry change
    entry.addEventListener('change', () => {
      const selectedOption = entry.value;
      if (selectedCategory.exitOptions[selectedOption]) {
        exit.innerHTML = generateOptions(selectedCategory.exitOptions[selectedOption]);
      }
    });
  }
});