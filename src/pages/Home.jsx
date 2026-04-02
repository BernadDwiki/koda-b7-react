import Review from '../components/Review';

function Home() {
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to My App</h1>
      <p className="text-center mb-8">This is the home page. Please leave a review!</p>
      <Review />
    </div>
  );
}

export default Home;