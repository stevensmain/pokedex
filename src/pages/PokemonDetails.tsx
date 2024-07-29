import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { addToCombatList, removeFromCombatList } from "../feature/pokemonSlice";
import usePokemonDetails from "../hooks/usePokemonDetails";
import { PreviousIcon } from "../components/Icons";
import PokemonImage from "../components/PokemonImage";
import PokemonDetails from "../components/PokemonDetails";

interface GoBackButtonProps {
  onClick: () => void;
}

interface CombatListButtonProps {
  isInCombatList: boolean;
  onClick: () => void;
}

const BackButton = ({ onClick }: GoBackButtonProps) => (
  <button
    type="button"
    className="absolute top-4 left-4 focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"
    onClick={onClick}
  >
    <PreviousIcon />
  </button>
);

const CombatListButton = ({
  isInCombatList,
  onClick,
}: CombatListButtonProps) => (
  <button
    type="button"
    className="absolute top-4 right-4 py-2.5 px-5 me-2 mb-2 text-sm font-medium w-fit focus:outline-none rounded-lg border focus:z-10 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"
    onClick={onClick}
  >
    {isInCombatList ? "Remove from combat list" : "Add to combat list"}
  </button>
);

export default function PokemonDetailsPage() {
  const { name } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const combatList = useAppSelector(({ pokemon }) => pokemon.combatList);
  const pokemon = usePokemonDetails(name!);

  const isInCombatList = combatList.some((pokemon) => pokemon.name === name);

  const goBack = () => navigate(-1);

  const handleCombatListClick = () => {
    dispatch(
      isInCombatList ? removeFromCombatList(name!) : addToCombatList(pokemon!)
    );
  };

  if (!pokemon) {
    return;
  }

  return (
    <div className="flex flex-col items-center gap-7">
      <BackButton onClick={goBack} />
      <CombatListButton
        isInCombatList={isInCombatList}
        onClick={handleCombatListClick}
      />

      <PokemonImage name={pokemon?.name} sprites={pokemon?.sprites} />
      <PokemonDetails pokemon={pokemon} />
    </div>
  );
}
