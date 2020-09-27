
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import cityJson from '../assets/city.json';






var mymap = null;

function OsmMap() {

    const [city, setCity] = useState(null);
    const [area, setArea] = useState(null);
    const [data, setData] = useState(null);

    console.log('city', city);
    console.log('area', area);

    function onAreaChange(value) {
        removeMarker();
        setArea(value);
        updateMarker(value);
    };

    //重製地圖
    function removeMarker() {
        osm.removeMapMarker();
    };

    //更新地圖
    function updateMarker(area) {
        const pharmacies = data.filter((pharmacy) => {
            if (!area) {
                return pharmacy.properties.county === city;
            }
            return pharmacy.properties.town === area;
        });
        pharmacies.forEach((pharmacy) => {
            const { properties, geometry } = pharmacy;
            osm.addMapMarker(
                geometry.coordinates[0],
                geometry.coordinates[1],
                properties,
            );
        });
        penTo(pharmacies[0]);


    };
    function penTo(pharmacy) {

        osm.penTo(pharmacy.geometry.coordinates[0], pharmacy.geometry.coordinates[1], pharmacy.properties);
    };




    useEffect(() => {

        console.log('mymap', mymap); // should output the object that represents instance of Leaflet
        if (mymap !== undefined && mymap !== null) {
            mymap.remove(); // should remove the map from UI and clean the inner children of DOM element
            console.log(mymap); // nothing should actually happen to the value of mymap
        }
        mymap = L.map("mapid").setView([25.03418, 121.564517], 17);

        const OSMUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

        L.tileLayer(OSMUrl, {
            attribution: '<a target="_blank" href="https://www.openstreetmap.org/">© OpenStreetMap 貢獻者</a>',
            maxZoom: 18,
        }).addTo(mymap);

        //取得口罩相關資訊
        axios('https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json')
            .then(res => {
                console.log('口罩', res.data.features)
                setData(res.data.features);
                //updateMarker();
            }).catch(error => {

                console.error('There was an error!', error);
            });

    }, []);



    const icons = {
        green: new L.Icon({
            iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41],
        }),
        grey: new L.Icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41],

        }),
    };

    const osm = {
        addMapMarker(x, y, item) {
            const icon = item.mask_adult || item.mask_child ? icons.green : icons.grey;
            L.marker([y, x], {
                icon,
            }).addTo(mymap).bindPopup(`<strong>${item.name}</strong> <br>
      口罩剩餘：<strong>成人 - ${item.mask_adult ? `${item.mask_adult} 個` : '未取得資料'}/ 兒童 - ${item.mask_child ? `${item.mask_child} 個` : '未取得資料'}</strong><br>
      地址: <a href="https://www.google.com.tw/maps/place/${item.address}" target="_blank">${item.address}</a><br>
      電話: ${item.phone}<br>
      <small>最後更新時間: ${item.updated}</small>`);
        },
        removeMapMarker() {
            mymap.eachLayer((layer) => {
                if (layer instanceof L.Marker) {
                    mymap.removeLayer(layer);
                }
            });
        },
        penTo(x, y, item) {
            const icon = item.mask_adult || item.mask_child ? icons.green : icons.grey;
            mymap.panTo(new L.LatLng(y, x));
            L.marker([y, x], {
                icon,
            }).addTo(mymap).bindPopup(`<strong>${item.name}</strong> <br>
      口罩剩餘：<strong>成人 - ${item.mask_adult ? `${item.mask_adult} 個` : '未取得資料'}/ 兒童 - ${item.mask_child ? `${item.mask_child} 個` : '未取得資料'}</strong><br>
      地址: <a href="https://www.google.com.tw/maps/place/${item.address}" target="_blank">${item.address}</a><br>
      電話: ${item.phone}<br>
      <small>最後更新時間: ${item.updated}</small>`).openPopup();
        },
    };


    return (

        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div class="form-group d-flex">
                        <label for="cityJson" class="mr-2 col-form-label text-right">縣市</label>
                        <div class="flex-fill">
                            <select className="custom-select" onChange={event => setCity(event.target.value)} value={city}>
                                <option selected>請選擇縣市</option>
                                {
                                    cityJson.map((item) => (
                                        <option value={item.CityName}>{item.CityName}</option>
                                    ))
                                }

                            </select>
                        </div>
                    </div>
                    <div class="form-group d-flex">
                        <label for="cityJson" class="mr-2 col-form-label text-right">地區</label>
                        <div class="flex-fill">
                            <select className="custom-select" onChange={event => onAreaChange(event.target.value)} value={area}>
                                <option selected>請選擇地區</option>
                                {

                                    city != null ? cityJson.find((c) => c.CityName == city).AreaList.map((item) => (
                                        <option value={item.AreaName}>{item.AreaName}</option>
                                    )) : ''
                                }

                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">

                <div className="col-12 ">
                    <div id="mapid" style={{ height: "300px", width: "auto" }} />
                </div>

            </div>

        </div>


    );
}

export default OsmMap; //輸出App函式