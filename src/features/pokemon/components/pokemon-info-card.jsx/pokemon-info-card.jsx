import { POKEMON_TYPE_COLORS } from "../../utils/pokemon-colors";

const DataRow = ({ label, value }) => (
    <div className="flex flex-col py-2 border-b border-bgLightGray/40 last:border-0">
        <span className="text-[10px] uppercase tracking-widest text-bgDarkGray/40 font-black mb-1">
            {label}
        </span>
        <span className="text-sm text-bgDarkGray font-bold capitalize leading-tight">
            {value}
        </span>
    </div>
);

export const PokemonInfoCard = ({
    height,
    weight,
    types,
    abilities,
    themeColor,
}) => {
    const pokemonHeightInCm = `${height * 10} cm`;
    const pokemonWeightInKg = `${weight / 10} kg`;
    const typeNames = types
        .map((pokemonType) => pokemonType.type.name)
        .join(" / ");
    const abilitiesNames = abilities
        .map((pokemonAbility) => pokemonAbility.ability.name)
        .join(", ");

    const pokemonTypeBadges = types.map((pokemonType) => ({
        name: pokemonType.type.name,
        color: POKEMON_TYPE_COLORS[pokemonType.type.name] || "#F3F4F6",
    }));

    return (
        <div className="w-full md:max-w-[320px] bg-white rounded-2xl px-5 py-7 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white flex flex-col animate-fadeIn">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-bgLightGray/30">
                <div
                    className="w-2 h-6 rounded-full"
                    style={{ backgroundColor: themeColor }}
                ></div>
                <h2 className="text-xs font-black text-bgDarkGray uppercase tracking-[0.25em]">
                    Pokemon Data
                </h2>
            </div>

            <div className="grid grid-cols-1">
                <DataRow label="Type" value={typeNames} />
                <div className="grid grid-cols-2 gap-4">
                    <DataRow label="Height" value={pokemonHeightInCm} />
                    <DataRow label="Weight" value={pokemonWeightInKg} />
                </div>
                <DataRow label="Abilities" value={abilitiesNames} />
            </div>

            <div className="mt-6 pt-4 border-t-2 border-bgLightGray/30 flex gap-3 justify-center">
                {pokemonTypeBadges.map((badge) => (
                    <span
                        key={badge.name}
                        className="px-5 py-1 rounded-md text-[10px] font-black text-white uppercase tracking-widest"
                        style={{ backgroundColor: badge.color }}
                    >
                        {badge.name}
                    </span>
                ))}
            </div>
        </div>
    );
};
