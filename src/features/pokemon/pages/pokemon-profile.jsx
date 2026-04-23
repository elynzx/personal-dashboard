import { useParams, useNavigate } from "react-router";
import { useGetPokemon } from "../hooks/use-get-pokemon";
import { ArrowLeft } from "pixelarticons/react";
import { PokemonHero } from "../components/pokemon-hero/pokemon-hero";
import { PokemonInfoCard } from "../components/pokemon-info-card.jsx/pokemon-info-card";
import { POKEMON_TYPE_COLORS } from "../utils/pokemon-colors";

export function PokemonProfilePage() {
    const { name: pokemonName } = useParams();
    const navigate = useNavigate();
    const { data: pokemon, loading } = useGetPokemon(pokemonName);

    if (loading || !pokemon) return <div className="p-10 font-item text-bgDarkPink italic">Loading...</div>;

    const { id, name, sprites, types, height, weight, abilities } = pokemon;
    const imageUrl = sprites.versions["generation-v"]["black-white"].animated.front_default || sprites.front_default;
    const mainType = types[0].type.name;

    const themeColor = POKEMON_TYPE_COLORS[mainType] || "#F3F4F6";

    const gradientStyle = {
        backgroundImage: `linear-gradient(135deg, #FBEDF4 0%, #FEE2EE 40%, ${themeColor} 100%)`,
    };

    return (
        <div style={gradientStyle} className="flex-1 w-full rounded-t-xl p-6 md:p-12 overflow-hidden flex flex-col relative font-item transition-all duration-700">
            <button onClick={() => navigate(-1)} className="absolute top-8 left-8 z-30 flex items-center gap-2 text-bgDarkGray/60 hover:text-bgDarkGray transition-all cursor-pointer text-xs font-bold uppercase">
                <ArrowLeft size={20} /> Back
            </button>

            <div className="flex flex-col md:flex-row items-center justify-center h-full gap-12 md:gap-18 max-w-5xl mx-auto w-full">
                <PokemonHero id={id} name={name} imageUrl={imageUrl} />
                <PokemonInfoCard 
                    height={height} 
                    weight={weight} 
                    types={types} 
                    abilities={abilities} 
                    themeColor={themeColor} 
                    mainType={mainType} 
                />
            </div>
        </div>
    );
}
