export default function House() {
  const house = {
    bedrooms: 4,
    bathrooms: 2.5,
    squareFeet: 2000,
    address: {
      street: "Via Roma",
      city: "Roma",
      state: "RM",
      zip: "00100",
      country: "Italy",
    },
    owners: ["Alice", "Bob"],
  };
  console.log(house);
  return (
    <div id="wd-house">
      <h4>House</h4>
      <h5>Bedrooms</h5>
      <p>{house.bedrooms}</p>
      <h5>Bathrooms</h5>
      <p>{house.bathrooms}</p>
      <h5>Square Feet</h5>
      <p>{house.squareFeet}</p>
      <h5>Address</h5>
      <pre>{JSON.stringify(house.address, null, 2)}</pre>
      <h5>Owners</h5>
      <p>{house.owners.join(', ')}</p>
      <hr />
    </div>
  );
}