"use client";

import React from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { Destination } from "@/types/Destination";

const containerStyle = {
    width: "100%",
    height: "500px",
};



// Центр карты (Ташкент)


export default function MyMap({destinationData}: {destinationData: Destination}) {


    const center = {
        lat: destinationData.latitude,
        lng: destinationData.longitude,
    };

    const { isLoaded, loadError } = useJsApiLoader({
        id: "google-map-script",
        // СЮДА НУЖЕН КЛЮЧ. Если его нет, карта будет с надписью "только для разработки"
        googleMapsApiKey: "",
    });

    // Если ошибка загрузки API
    if (loadError) {
        return (
            <div className="w-full h-[450px] flex items-center justify-center bg-gray-100 text-red-500">
                Ошибка загрузки карты: {loadError.message}
            </div>
        );
    }

    // Пока карта грузится
    if (!isLoaded) {
        return (
            <div className="w-full h-[450px] flex items-center justify-center bg-gray-100">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div className="w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={13}
                // Убираем лишние кнопки управления для чистоты
                options={{
                    zoomControl: true,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: true,
                }}
            >
                {/* Стандартный маркер Google */}
                <MarkerF
                    position={center}
                    label="Мы здесь"
                />
            </GoogleMap>
        </div>
    );
}