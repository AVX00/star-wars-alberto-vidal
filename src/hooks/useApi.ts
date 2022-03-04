const useApi = () => {
  const getNumberOfSpaceships = async () => {
    const apiUrl = import.meta.env.VITE_API;
    const response = await fetch(`${apiUrl}starships/`);
    const { count }: number = await response.json();
    return count;
  };

  return { getNumberOfSpaceships };
};

export default useApi;
