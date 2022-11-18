const express = require('express');
const asyncify = require('express-asyncify');
const { transport, fashion } = require('carbon-footprint');

const app = asyncify(express());

const getFashionObjectReadableName = (key) => {
  switch (key) {
    case 'shirt':
      return 'Camisa'
    case 'tshirt':
      return 'Camiseta'
    case 'jeans':
      return 'Jeans'
    case 'sweater':
      return "Sweater"
    case 'coat':
      return 'Abrigo'
    case 'dress':
      return 'Vestido'
    case 'shoes':
      return 'Zapatos'
    default:
      return key
  }
}

const getTransportObjectReadableName = (key) => {
  switch (key) {
    case 'bus':
      return 'Autobús'
    case 'plane':
      return 'Avión'
    case 'car':
      return 'Coche'
    case 'fossilFueledCar':
      return 'Coche de combustible fósil'
    case 'hybridCar':
      return 'Coche híbrido'
    case 'carSharing':
      return 'Coche compartido'
    case 'motorbike':
      return 'Motocicleta'
    case 'shortDistanceBus':
      return 'Autobús de corta distancia'
    case 'longDistanceBus':
      return 'Autobús de larga distancia'
    case 'train':
      return 'Metro'
    case 'boat':
      return 'Barco'
    case 'shortHaulFlight':
      return 'Vuelo de distancia corta'
    case 'mediumHaulFlight':
      return 'Vuelo de distancia media'
    case 'longHaulFlight':
      return 'Vuelo de distancia larga'
    default:
      return key
  }
}
 
app.get('/transport', (req, res) => {
  const objects = Object.keys(transport).map(key => ({ key, readableName: getTransportObjectReadableName(key), emission: transport[key]}))
  res.json(objects)
});

app.get('/fashion', (req, res) => {
  const objects = Object.keys(fashion).map(key => ({ key, readableName: getFashionObjectReadableName(key), emission: fashion[key]}))
  res.json(objects)
});

app.listen(3000, () => {
console.log(`Corriendo en el puerto ${3000} 🚀`)
});

module.exports = app;