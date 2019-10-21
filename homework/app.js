'use strict';
// 1.Map
const products = [
    {name: 'flower vase', price: 75},
    {name: 'lamp', price: 85},
    {name: 'jar of honey', price: 95},
    {name: 'coil', price: 65},
    {name: 'lumber', price: 55}
  ];
  
  let discountProducts =[];
  
  discountProducts= products.map(item =>{
    item.price = item.price/2;
    return item});

    console.log(discountProducts);

    //2.Filter
const products = [
    { name: 'flower vase',   price: 75 },
    { name: 'lamp',  price: 85 },
    { name: 'jar of honey',   price: 95 },
    { name: 'seashell frame', price: 65 },
    { name: 'lumber',  price: 55 }
      ];
      
    let cheapProducts= [];
      
    cheapProducts= products.filter(item => item.price <70)
      
    console.log(cheapProducts);

    //3.Reduce
const products = [
    { name: 'flower vase',   price: 75 },
    { name: 'lamp',  price: 85 },
    { name: 'jar of honey',   price: 95 },
    { name: 'seashell frame', price: 65 },
    { name: 'lumber',  price: 55 }
         ];


    let totalPrice= 0;
    let array= [];

    array= products.map(item => item.price);
    totalPrice= array.reduce((accumulator, currentValue) => accumulator + currentValue);

    console.log(totalPrice);
