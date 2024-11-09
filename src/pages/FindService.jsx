import React, { useEffect, useState } from "react";
import { workers } from "../constants/index.js";
import ShowNearbyWorkers from "../components/ShowNearbyWorkers.jsx";

const user = {
  id: 1,
  name: "Rajesh Sharma",
  email: "rajesh.sharma@example.com",
  phone: "+91 9876543210",
  latitude: 28.6139, // New Delhi
  longitude: 77.209,
  address: "Connaught Place, New Delhi",
};

// Haversine formula to calculate distance
const haversine = (lat1, lon1, lat2, lon2) => {
  const R = 6371.0; // Radius of Earth in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180.0;
  const dLon = ((lon2 - lon1) * Math.PI) / 180.0;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180.0) *
      Math.cos((lat2 * Math.PI) / 180.0) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in kilometers
};

const FindService = () => {
  const [nearbyWorkers, setNearbyWorkers] = useState([]);

  useEffect(() => {
    const filteredWorkers = workers.filter(
      (worker) =>
        haversine(
          user.latitude,
          user.longitude,
          worker.latitude,
          worker.longitude
        ) <= 5
    );
    setNearbyWorkers(filteredWorkers);
  }, []);

  return (
    <section className="pt-[5.25rem] h-[calc(100vh)] flex justify-center items-center">
      <span className="animate-ping absolute inline-flex h-52 w-52 rounded-full bg-sky-400 opacity-50"></span>
      <div>
        <img
          src="https://images.unsplash.com/photo-1730343464315-a9ca01f9f1c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="user profile"
          className="h-24 w-24 rounded-full object-cover absolute"
        />

        {nearbyWorkers.map((worker) => (
          <ShowNearbyWorkers key={worker.id} worker={worker} />
        ))}
      </div>
    </section>
  );
};

export default FindService;
