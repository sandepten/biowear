import { doc, getDocs, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { testDataCollection } from "../db/test-func";

const doctest = () => {
  const addDocument = async (name, age, weight) => {
    await setDoc(doc(testDataCollection, name), {
      name: name,
      age: age,
      weight: weight,
    });
    setAddDataStatus(true);
    console.log(`Your document was added to the collection`);
  };

  const readDocument = async () => {
    const querySnapshot = await getDocs(testDataCollection);
    setAllUsers(
      querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }))
    );
  };
  const [addDataStatus, setAddDataStatus] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [showUsers, setShowUsers] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    readDocument();
  }, []);

  return (
    <div>
      {/* <div className="mt-10 flex items-center justify-center">
        <div action="" className="space-y-10">
          <div className="flex justify-between space-x-5 text-center">
            <label htmlFor="name">Name</label>
            <input
              onChange={(event) => setName(event.target.value)}
              type="text"
              name="name"
              className="rounded-lg bg-gray-300 px-1.5 py-0.5"
              id="name"
            />
          </div>
          <div className="flex justify-between space-x-5 text-center">
            <label htmlFor="age">Age</label>
            <input
              onChange={(event) => setAge(event.target.value)}
              type="number"
              name="age"
              id="age"
              className="rounded-lg bg-gray-300 px-1.5 py-0.5"
            />
          </div>
          <div className="flex justify-between space-x-5 text-center">
            <label htmlFor="weight">Weight</label>
            <input
              onChange={(event) => setWeight(event.target.value)}
              type="number"
              name="weight"
              id="weight"
              className="rounded-lg bg-gray-300 px-1.5 py-0.5"
            />
          </div>
          <div className="text-center">
            <button
              onClick={() => addDocument(name, age, weight)}
              className="rounded-lg bg-blue-200 px-3 py-1.5"
            >
              Submit
            </button>
          </div>
          <div className="text-center">
            <button
              onClick={() => {
                readDocument(), setShowUsers(true);
              }}
              className="rounded-lg bg-blue-200 px-3 py-1.5"
            >
              Show all users
            </button>
          </div>
        </div>
      </div>
      {addDataStatus ? (
        <p className="mt-10 text-center text-2xl font-semibold">
          You data was successfully added
        </p>
      ) : null}
      {showUsers ? (
        <div className="mt-10 text-center">
          {allUsers?.map((user) => {
            <p className="mt-2" key={user.id}>
              {console.log(user.data.name)}
              <span>{user.data.name}</span>
            </p>;
          })}
        </div>
      ) : null} */}
    </div>
  );
};

export default doctest;
