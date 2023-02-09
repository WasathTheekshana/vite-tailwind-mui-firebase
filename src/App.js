import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import NameCard from "./components/NameCard";
import nameList from "./data/nameList";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

function App() {

  const [name, setName] = useState([]);
  const nameCollectionRef = collection(db, "contacts");

  useEffect(() => {
    const getContact = async () => {
      const data = await getDocs(nameCollectionRef);
      setName(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getContact();
  }, []);

  return (
    <div className="App">
      {name.map((item) => (
        <NameCard
          name={item.name}
          gender={item.gender}
          position={item.position}
        />
      ))}
    </div>
  );
}

export default App;
