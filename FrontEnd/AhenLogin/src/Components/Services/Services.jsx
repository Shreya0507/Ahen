import { useState } from "react";
import "../Services/Services.css";
import Aadesh from "../images/Driving Schools/Aadesh.jpg";
import Bramha from "../images/Driving Schools/Bramha.png";
import Dhanashree from "../images/Driving Schools/Dhanashree.jpg";
import Diamond from "../images/Driving Schools/Diamond.jpg";
import Dyaneshwar from "../images/Driving Schools/Dyaneshwar.jpg";
import Gajanan from "../images/Driving Schools/Gajanan.jpg";
import Kesari from "../images/Driving Schools/Kesari.jpg";
import Maruti from "../images/Driving Schools/Maruti.jpg";
import Pragati from "../images/Driving Schools/Pragati.jpg";
import Rudransh from "../images/Driving Schools/Rudransh.jpg";
import Saraswati from "../images/Driving Schools/Saraswati.jpg";
import Unique from "../images/Driving Schools/Unique.jpg";
import SchoolDetails from "./SchoolDetails";
import StarRating from "./StarRating";

const Services = () => {
  const [selectedSchool, setSelectedSchool] = useState(null);

  const handleBookNowClick = (school) => {
    console.log("Book now clicked");
    setSelectedSchool(school);
  };

  const handleCloseModal = () => {
    setSelectedSchool(null);
  };
  const drivingSchoolsData = [
    {
      id: 1,
      name: "Aadesh Driving School",
      img: Aadesh,
      city: "Pune",
      rating: 0.5,
      distance: 50,
      hourlyCharges: 200,
    },
    {
      id: 2,
      name: "Unique Driving School",
      img: Unique,
      city: "Pune",
      rating: 0.9,
      distance: 110,
      hourlyCharges: 250,
    },
    {
      id: 3,
      name: "Maruti Motor Driving School",
      img: Maruti,
      city: "Mumbai",
      rating: 2,
      distance: 800,
      hourlyCharges: 180,
    },
    {
      id: 4,
      name: "Diamond Driving School",
      img: Diamond,
      rating: 1.2,
      city: "Pune",
      distance: 150,
      hourlyCharges: 220,
    },
    {
      id: 5,
      name: "Gajanan Driving School",
      img: Gajanan,
      city: "Pimpri Chinchwad",
      rating: 2.8,
      distance: 900,
      hourlyCharges: 300,
    },
    {
      id: 6,
      name: "Saraswati Driving School",
      img: Saraswati,
      city: "Pimpri Chinchwad",
      rating: 3.6,
      distance: 1200,
      hourlyCharges: 350,
    },
    {
      id: 7,
      name: "Bramha Driving School",
      img: Bramha,
      city: "Pimpri Chinchwad",
      rating: 2.5,
      distance: 900,
      hourlyCharges: 400,
    },
    {
      id: 8,
      name: "Dhanashree Driving School",
      img: Dhanashree,
      city: "Pune",
      rating: 3.4,
      distance: 1400,
      hourlyCharges: 350,
    },
    {
      id: 9,
      name: "Kesari Driving School",
      img: Kesari,
      city: "Pune",
      rating: 4.0,
      distance: 80,
      hourlyCharges: 300,
    },
    {
      id: 10,
      name: "Dyaneshwar Driving School",
      img: Dyaneshwar,
      city: "Mumbai",
      rating: 4.1,
      distance: 170,
      hourlyCharges: 250,
    },
    {
      id: 11,
      name: "Pragati Driving School",
      img: Pragati,
      city: "Mumbai",
      rating: 2,
      distance: 300,
      hourlyCharges: 200,
    },
    {
      id: 12,
      name: "Rudransh Driving School",
      img: Rudransh,
      city: "Pimpri Chinchwad",
      rating: 3,
      distance: 240,
      hourlyCharges: 100,
    },
  ];

  const [filter, setFilter] = useState({ rating: 0, city: "" });
  const [sortedBy, setSortedBy] = useState("distance");

  // Function to filter driving schools based on rating and city
  const filteredDrivingSchools = drivingSchoolsData.filter(
    (school) =>
      school.rating >= filter.rating &&
      (filter.city === "" ||
        school.city.toLowerCase() === filter.city.toLowerCase())
  );

  // Function to sort driving schools based on the selected sorting option
  const sortedDrivingSchools = filteredDrivingSchools.sort((a, b) => {
    if (sortedBy === "distance") return a.distance - b.distance;
    if (sortedBy === "hourlyCharges") return a.hourlyCharges - b.hourlyCharges;
    return b.rating - a.rating;
  });

  return (
    <div className="flex min-h-screen">
      <div className="w-1/6 filter-column p-4 bg-gray-200 sticky top-0 h-screen overflow-y-hidden">
        <div className="ml-2 mt-4">
          <h2 className="text-3xl font-semibold mb-4 filter-sort-heading">
            Filter & Sort
          </h2>

          <div className="mb-4 filter-by-rating">
  <label className="block text-xl font-medium text-gray-600">
    Filter by Rating:
  </label>

  <div className="text-base grid items-center">
    {[0, 5, 4, 3, 2, 1].map((rating) => (
      <div key={rating} className="flex items-center">
        <span className="mr-2">{rating === 0 ? 'All' : ''}</span>
        <StarRating rating={rating} />
        <input
          type="checkbox"
          id={`ratingFilter${rating}`}
          checked={filter.rating === rating}
          onChange={() => setFilter({ ...filter, rating })}
          className="mx-2"
        />
      </div>
    ))}
  </div>
</div>


          {/* Filter by City */}
          <div className="filter-for-mobile">
            <div className="mb-4 filter-by-city">
              <label
                htmlFor="cityFilter"
                className="block text-xl font-medium text-gray-600"
              >
                Filter by City:
              </label>
              <input
                type="text"
                id="cityFilter"
                value={filter.city}
                onChange={(e) => setFilter({ ...filter, city: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            {/* Sort By */}
            <div className="filter-sort">
              <label
                htmlFor="sortFilter"
                className="block text-xl font-medium text-gray-600"
              >
                Sort By:
              </label>
              <select
                id="sortFilter"
                onChange={(e) => setSortedBy(e.target.value)}
                value={sortedBy}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="distance">Distance</option>
                <option value="rating">Rating</option>
                <option value="hourlyCharges">Hourly Charges</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* List of Driving Schools */}
      <div
        className="w-5/6 p-4 list-column"
        style={{
          backdropFilter: "blur(10px)",
          overflowY: "auto",
          height: "calc(100vh - 2rem)",
        }}
      >
        {sortedDrivingSchools.map((school) => (
          <div
            key={school.id}
            className="border p-4 mb-4 bg-white shadow-md rounded-md flex school-card"
            onClick={() => handleBookNowClick(school)}
          >
            {/* Dummy Image */}
            <div className="mr-4 school-imgs">
              <img
                src={school.img}
                alt={`Logo ${school.name}`}
                className="object-fill"
              />
            </div>

            <div className="ml-4 info-box">
              <h3 className="text-2xl font-serif font-semibold mb-4 school-name">
                {school.name}
              </h3>

              <div className="card-info grid grid-cols-2 mb-2">
                <div className="info">
                  <p className="text-gray-600">
                    <strong>City: </strong>
                    {school.city}
                  </p>
                </div>
                <div className="info">
                  <p className="text-gray-600">
                    <strong>Rating: <StarRating rating={school.rating} /> </strong>
                    
                  </p>
                </div>
                <div className="info">
                  <p className="text-gray-600">
                    <strong>Distance: </strong>
                    {school.distance}
                  </p>
                </div>
                <div className="info">
                  <p className="text-gray-600">
                    <strong>Hourly Charges:</strong> ₹{school.hourlyCharges}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3">
                {/* <button>Book now</button> */}
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm py-2.5 text-center mb-2"
                  style={{ width: "100px" }}
                >
                  Book now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Render SchoolDetails when a school is selected */}
      {selectedSchool && (
        <SchoolDetails school={selectedSchool} onClose={handleCloseModal} />
      )}{" "}
    </div>
  );
};

export default Services;
