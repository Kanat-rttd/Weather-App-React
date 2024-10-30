interface WeatherProps {
    loading: boolean;
    data: WeatherData
}

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

function WeatherInfo({loading, data} : WeatherProps) {
    return (
        <div>
            {loading ? (
            <div className="flex items-center justify-center mt-4">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-400"></div>   
            </div>
        ) : data && Object.keys(data).length !== 0 ?
            <div className="bg-gray-700 p-6 rounded-lg shadow-md"> 
                <div className="text-center mb-4"> 
                    <p className="text-3xl font-bold text-white">{data.location.name}, {data.location.country}</p> 
                </div>
                <div className="flex items-center justify-around mb-4">
                    <img className="w-24 h-24" src={`${data.current.condition.icon}`} alt="#" /> 
                    <div className="text-white text-lg">
                        <p className="font-medium">{data.current.condition.text}</p> 
                        <p>Wind Speed: {data.current.wind_kph} km/h</p>
                    </div>
                </div>
                <div className="text-center text-white"> 
                    <p className="text-3xl font-bold mb-3">Temperature: {data.current.temp_c} °C</p> 
                    <p className="text-xl">Local time: {data.location.localtime}</p>
                </div>
            </div>
            :
            <div className="text-center text-white mt-4">Search for city first...</div> 
        }
        </div>
    )
}

export default WeatherInfo;