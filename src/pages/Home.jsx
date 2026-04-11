import Review from '../components/Review';

function Home() {
  return (
    <div className={`container mx-auto p-10`}>
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to My App</h1>
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 max-w-md mx-auto">
        <p className="font-medium">✅ You are successfully logged in!</p>
        <p className="text-sm">Explore the different features and mini tasks below.</p>
      </div>
      <p className="text-center mb-8">This is the home page. Please leave a review!</p>
      <Review />
    </div>
  );
}

export default Home;