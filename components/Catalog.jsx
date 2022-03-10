import Card from "./Card";

function Catalog({ results }) {
  return (
    <div>
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Catalog;
