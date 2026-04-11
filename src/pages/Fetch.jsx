import useFetch from "../hooks/useFetch.js";

function Fetch() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/",
  );

  if (loading) return <div>Memuat Data...</div>;
  if (error) return <div>Error: {error}</div>;

  let output = "";
  data.forEach((element) => {
    output += `${element.title}\n`;
  });
  return output;
}

export default Fetch;
