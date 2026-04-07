/**
 * Utility untuk fetch dengan retry logic dan error handling yang lebih baik
 */
export const fetchWithRetry = async (url, options = {}, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      console.log(`Attempt ${i + 1}/${retries}: Fetching ${url}`);
      
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      console.log(`Successfully fetched: ${url}`);
      return data;
    } catch (error) {
      console.error(`Attempt ${i + 1} failed:`, error.message);
      
      // Jika ini attempt terakhir, throw error
      if (i === retries - 1) {
        throw new Error(
          `Failed to fetch after ${retries} attempts: ${error.message}`
        );
      }
      
      // Wait sebelum retry (exponential backoff)
      const delay = Math.pow(2, i) * 1000;
      console.log(`Retrying in ${delay}ms...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
};
