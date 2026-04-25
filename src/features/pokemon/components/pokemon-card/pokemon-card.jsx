import { useNavigate } from "react-router";
import { POKEMON_TYPE_COLORS } from "../../utils/pokemon-colors";

export const PokemonCard = ({ pokemon }) => {
    const navigate = useNavigate();
    const { id, name, image, types } = pokemon;
    const mainType = types[0];
    const themeColor = POKEMON_TYPE_COLORS[mainType] || "#F5F5F5";
    const formattedId = `#${id.toString().padStart(3, "0")}`;

    return (
        <div
            onClick={() => navigate(`/pokemon/${pokemon.name}`)}
            className="flex flex-col py-3 font-item bg-white border-2 border-bgGray/40 w-46 rounded-2xl shadow-lg transition-transform hover:scale-105 fade-in-up"
        >
            <div className="w-full h-35 flex justify-center items-center p-4">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-contain drop-shadow-md"
                />
            </div>
            <div className="flex flex-col justify-center items-center p-2">
                <span className="text-xs font-bold">{formattedId}</span>
                <h2 className="capitalize font-bold text-xs text-bgDarkGray">
                    {name}
                </h2>
                <div
                    className="text-xs text-white px-5 mt-2 rounded-sm shadow-xl"
                    style={{ backgroundColor: themeColor }}
                >
                    <span>{mainType}</span>
                </div>
            </div>
        </div>
    );
};
