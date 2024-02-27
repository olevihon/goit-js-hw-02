function getShippingCost(country) {
  const message = function (countryName, price) {
    return `Shipping to ${countryName} will cost ${price} credits`;
  };

  switch (country) {
    case 'China':
      return message(country, 100);
    case 'Chile':
      return message(country, 250);
    case 'Australia':
      return message(country, 170);
    case 'Jamaica':
      return message(country, 120);
    default:
      return 'Sorry, there is no delivery to your country';
  }
}

console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
