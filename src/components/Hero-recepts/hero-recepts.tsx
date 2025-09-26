import "./hero-recepts.scss";

import { useState, useEffect } from "react";
import type { MealResponse } from "../../types/types";
import axios from "axios"
import { useQuery } from "@tanstack/react-query";


export default function HeroRecepts() {
    const [search, setSearch] = useState("");

    const [liked, setLiked] = useState<string[]>([]);

    const toggleLike = (id: string) => {
        setLiked((prev) =>
            prev.includes(id) ? prev.filter((mealId) => mealId !== id) : [...prev, id]
        );
    };

    useEffect(() => {
        const saved = localStorage.getItem("likedMeals");
        if (saved) {
            setLiked(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("likedMeals", JSON.stringify(liked));
    }, [liked]);

    const { data, isLoading, error } = useQuery({
        queryKey: ["Meal"],
        queryFn: async () => {
            const res = await axios.get<MealResponse>(
                "https://www.themealdb.com/api/json/v1/1/search.php?s="
            );
            return res.data.meals ?? [];
        }
    });
    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h1>Error...</h1>
    const last100 = data?.slice(0);
    const filteredMeals = last100?.filter((meal) =>
        meal.strMeal.toLowerCase().includes(search.toLowerCase())
    );
    return (

        <>
            <div className="search-container">
                <input className="search-bar" placeholder="Search Your Food..." type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                <svg width={30} height={30} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

            </div>
            <div className="recepts-list">
                {filteredMeals?.map((meal) => (
                    <div className="meal-card">

                        <div className="meal-card-image">
                            <img src={meal.strMealThumb} alt={meal.strMeal} />

                            <button onClick={() => toggleLike(meal.idMeal)} className="star">
                                {
                                    liked.includes(meal.idMeal) ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                                        </svg> 
                                    ) :
                                        (
                                            <svg width={35} height={35} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                            </svg>
                                        )
                                }
                            </button>
                        </div>
                        <div className="meal-info">
                            <h3>{meal.strMeal}</h3>
                            <p>
                                {meal.strCategory} · {meal.strArea}
                            </p>
                            <button>
                                More Details
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}