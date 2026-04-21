export const PokemonCard = ({ pokemon }) => {
    const { id, name, sprites, types } = pokemon;

    const imageUrl =
        sprites.versions["generation-v"]["black-white"].animated.front_default;

    const colors = {
        fire: "#FF4422",
        grass: "#77CC55",
        electric: "#FFCC33",
        water: "#3399FF",
        ground: "#E2BF65",
        rock: "#BBAA66",
        fairy: "#EE99EE",
        poison: "#AA5599",
        bug: "#AABB22",
        dragon: "#7766EE",
        psychic: "#FF5599",
        flying: "#8899FF",
        fighting: "#BB5544",
        normal: "#AAAA99",
        ice: "#66CCFF",
        ghost: "#6666BB",
        dark: "#705746",
        steel: "#AAAABB",
    };

    const type = types[0].type.name;
    const backgroundColor = colors[type] || "#F5F5F5";

    return (
        <div className="flex flex-col py-3 font-item bg-white border-2 border-gray-500/40 w-48 md:max-w-42 rounded-2xl shadow-lg transition-transform hover:scale-105">
            <div className="w-full h-35 flex justify-center items-center p-5 ">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="flex flex-col justify-center items-center p-2">
                <span className="text-xs font-bold">
                    #{id.toString().padStart(3, "0")}
                </span>
                <h2 className="capitalize font-bold text-sm text-bgDarkGray">
                    {name}
                </h2>
                <div
                    className="text-xs text-white px-5 mt-2 rounded-sm shadow-xl"
                    style={{ backgroundColor }}
                >
                    <span>{type}</span>
                </div>
            </div>
        </div>
    );
};
