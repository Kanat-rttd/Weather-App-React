import { useState } from "react";
import Input from "./Input";
import WeatherInfo from "./WeatherInfo";

function Card() {
    interface WeatherData {
        location: {
            name: string,
            country: string,
            localtime: string,
        };
        current: {
            temp_c: number,
            wind_kph: number,
            condition: {
                icon: string,
                text: string,
            }
        }
    }

    const key:string = '1455f94df59c4d668da60337243010';

    const [search, setSearch] = useState<string>('');
    const [data, setData] = useState<WeatherData>({} as WeatherData);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSearch = () => {
        const trimmedSearch = search.trim();

        if (trimmedSearch.length !== 0) {
            setLoading(true);
            fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${search}&aqi=no`)
            .then(response => {
                if(!response.ok) {
                    if(response.status === 400) {
                        alert(`Города '${search}' не существует, попробуйте ввести корректное имя`)
                    } else {
                        alert("Ошибка при получении данных о погоде")
                    }
                    throw new Error('Response was not ok');
                }
                return response.json();
            })
            .then((weatherData: WeatherData) => setData(weatherData))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));

            setSearch('');
        } else {
            alert("Enter city name!")
        }
    }   

    return (
        <div className="mt-8 p-4 bg-gray-800 rounded-lg shadow-md"> 
            <Input search={search} setSearch={setSearch} handleSearch={handleSearch}/>

            <WeatherInfo loading={loading} data={data}/>
        </div>
    )
}

export default Card;