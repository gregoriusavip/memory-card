import { useQueryClient } from "@tanstack/react-query";

import "../styles/gameButton.css";

async function fetchGeneration(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/generation/${id}`);
  return await response.json();
}

export default function GameButtons({ options, setOptions }) {
  const queryClient = useQueryClient();

  async function handleClick(id) {
    const data = await queryClient.fetchQuery({
      queryKey: ["generation", id],
      queryFn: async () => await fetchGeneration(id),
    });
    setOptions({
      ...options,
      generationData: data,
      generationId: id,
    });
  }

  const handleGeneration1Click = () => handleClick(1);
  const handleGeneration2Click = () => handleClick(2);

  return (
    <div className="button-container">
      <button onClick={handleGeneration1Click}>GENERATION 1</button>
      <button onClick={handleGeneration2Click}>GENERATION 2</button>
    </div>
  );
}
