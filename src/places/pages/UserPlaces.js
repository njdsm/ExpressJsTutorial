import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: "p1",
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: "https://newyorkyimby.com/wp-content/uploads/2020/09/DSCN0762-777x1036.jpg",
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484,
            lng: -73.9857
        },
        creator: "u1"
    },
    {
        id: "p2",
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: "https://newyorkyimby.com/wp-content/uploads/2020/09/DSCN0762-777x1036.jpg",
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484,
            lng: -73.9857
        },
        creator: "u2"
    }
]

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces} />
}

export default UserPlaces;