import React from "react"

export default function Entry(props) {
    return (
        <div className="outer-entry-container">
            <div className="entry-container">
                <img className="location-img" src={props.imageUrl}/>
                <div className="info-container">
                    <div className="map-container">
                        <img className="map-location-logo" src="./images/map-location-logo.png"/>
                        <p className="location">{props.location.toUpperCase()}</p>
                        <a className="google-maps-location" href={props.googleMapsUrl}>Google Maps</a>
                    </div>
                    <h2 className="location-title">{props.title}</h2>
                    <p className="travel-dates">{props.startDate} - {props.endDate}</p>
                    <p className="description">{props.description}</p>
                </div>
            </div>
        </div>
    )
}