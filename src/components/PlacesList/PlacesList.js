export default function PlacesList(props) {
  const list = props.state.businesses.map((business) => {
    if (business) {
      return (
        <div>
          {business.id}
          {business.name}
          {business.website_url}
          {business.address}
        </div>
      );
    }
  });

  return (
    <div className="App">
      <ul>{list}</ul>
    </div>
  );
}
