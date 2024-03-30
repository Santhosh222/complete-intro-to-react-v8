import { useState, useEffect } from "react";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
import Pet from './Pet';

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const breeds = [];

    useEffect(() => {
        requestPets();
    }, []);

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();

        setPets(json.pets);
    }

    return (
        <div className="search-params">
            <form onSubmit={e => {
                e.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">
                    Location
                    <input 
                        type="text" 
                        id="location" 
                        value={location} 
                        onChange={e => setLocation(e.target.value)}
                        placeholder="Location"/>
                </label>
                <label htmlFor="animal">
                    Animal
                    <select name="animal" id="animal" 
                        value={animal} 
                        onChange={e => {
                            setAnimal(e.target.value);
                            setBreed("");
                        }}>
                        <option/>
                        {ANIMALS.map(animalItem => (
                            <option key={animalItem}>{animalItem}</option>
                        ))}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select name="breed" id="breed" 
                        disabled={breeds.length === 0}
                        value={breed} 
                        onChange={e => setBreed(e.target.value)}>
                        <option/>
                        {breeds.map(breedItem => (
                            <option key={breedItem}>{breedItem}</option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
            {pets.map(pet => (
                <Pet 
                    name={pet.name} 
                    animal={pet.animal} 
                    breed={pet.breed}
                    key={pet.id}/>
            ))}
        </div>
    )
}

export default SearchParams;