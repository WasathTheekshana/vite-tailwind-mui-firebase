import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import NameCard from "./components/NameCard";
import nameList from "./data/nameList";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import AddContact from "./components/AddContact";
import Auth from "./components/Auth";

function App() {
  const [name, setName] = useState([]);
  const nameCollectionRef = collection(db, "contacts");


  //read data form database
  useEffect(() => {
    const getContact = async () => {
      const data = await getDocs(nameCollectionRef);
      setName(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getContact();
  }, []);

  return (
    <div className="App">
      <div className="card-map">
        {name.map((item) => (
          <NameCard
            name={item.name}
            gender={item.gender}
            position={item.position}
            id={item.id}
          />
        ))}
      </div>
      <AddContact />
      <Auth />
    </div>
  );
}

export default App;
