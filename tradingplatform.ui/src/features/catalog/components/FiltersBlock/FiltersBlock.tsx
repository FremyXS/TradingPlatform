import React, { useEffect, useState } from "react";
import { getFiltersAsync } from "../../../../api/products/product";
import Button from "../../../../components/Button/Button";
import { FiltersType } from "../../../../types";
import FilterCard from "./components/FilterCard/FilterCard";

import './FiltersBlock.scss';
import { PathType } from "./types";

function FiltersBlock({onHandleNavigate}:{onHandleNavigate:(filterName: "developers" | "genre" | "platforms" | "types", value: string, e: any)=>void}) {
    const [filters, setFilters] = useState<FiltersType>({
        developers: [],
        genre: [],
        platforms: [],
        typeProducts: [],
    });

    useEffect(() => {
        loadFiltersAsync();
    }, []);    

    return (
        <div className="filters-block">
            <FilterCard title="Цена">
                <input type="number" />
                <input type="number" />
            </FilterCard>
            <FilterCard title="Жанры">
                {filters.genre.map((el, index) =>
                    <label key={index} >
                        <input type="checkbox" value={el.name}
                            onClick={(e: any) => onHandleNavigate("genre", el.name, e)}
                        />
                        {el.name}
                    </label>
                )}
            </FilterCard>
            <FilterCard title="Платформы">
                {filters.platforms.map((el, index) =>
                    <label key={index} >
                        <input type="checkbox" value={el.name}
                            onClick={(e: any) => onHandleNavigate("platforms", el.name, e)}
                        />
                        {el.name}
                    </label>
                )}
            </FilterCard>
            <FilterCard title="Тип">
                {filters.typeProducts.map((el, index) =>
                    <label key={index} >
                        <input type="checkbox" value={el.name}
                            onClick={(e: any) => onHandleNavigate("types", el.name, e)}
                        />
                        {el.name}
                    </label>
                )}
            </FilterCard>
            <FilterCard title="Разработчики">
                {filters.developers.map((el, index) =>
                    <label key={index} >
                        <input type="checkbox" value={el.name}
                            onClick={(e: any) => onHandleNavigate("developers", el.name, e)}
                        />
                        {el.name}
                    </label>
                )}
            </FilterCard>
            <Button type="submit">
                Применить
            </Button>
        </div>
    )

    async function loadFiltersAsync() {
        const { data } = await getFiltersAsync();
        setFilters(data);
    }
}

export default FiltersBlock;