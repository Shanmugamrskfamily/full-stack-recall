let pilots=[
      {
        "name": "John Smith",
        "experience": 15,
        "license_type": "Commercial Pilot License",
        "aircraft_type_rating": ["Boeing 737", "Airbus A320"],
        "total_flight_hours": 12000,
        "rating": "Captain",
        "license_expiry": "2026-08-15",
        "last_training_date": "2023-05-20",
        "medical_certificate_expiry": "2025-11-30"
      },
      {
        "name": "Emily Johnson",
        "experience": 10,
        "license_type": "Airline Transport Pilot License",
        "aircraft_type_rating": ["Boeing 777", "Airbus A350"],
        "total_flight_hours": 9000,
        "rating": "First Officer",
        "license_expiry": "2027-03-10",
        "last_training_date": "2022-12-28",
        "medical_certificate_expiry": "2026-07-15"
      },
      {
        "name": "Michael Brown",
        "experience": 8,
        "license_type": "Private Pilot License",
        "aircraft_type_rating": ["Cessna 172"],
        "total_flight_hours": 1500,
        "rating": "Pilot in Command",
        "license_expiry": "2024-09-05",
        "last_training_date": "2023-10-12",
        "medical_certificate_expiry": "2025-03-20"
      },
      {
        "name": "Sarah Davis",
        "experience": 12,
        "license_type": "Commercial Pilot License",
        "aircraft_type_rating": ["Boeing 747", "Airbus A380"],
        "total_flight_hours": 15000,
        "rating": "Captain",
        "license_expiry": "2028-01-25",
        "last_training_date": "2024-02-18",
        "medical_certificate_expiry": "2026-10-05"
      },
      {
        "name": "David Wilson",
        "experience": 6,
        "license_type": "Private Pilot License",
        "aircraft_type_rating": ["Piper PA-28"],
        "total_flight_hours": 800,
        "rating": "Pilot in Command",
        "license_expiry": "2023-11-12",
        "last_training_date": "2022-09-30",
        "medical_certificate_expiry": "2024-06-15"
      }
    ];

    const findExperienced=(pilots)=>{
        let mostExperienced=[];
        let highestExperience=pilots[0].experience;
        pilots.forEach(pilot=>{
          if(pilot.experience>highestExperience){
            highestExperience=pilot.experience;
            mostExperienced=pilot;
          }
          else if(pilot.experience===highestExperience){
            mostExperienced.push(pilot);
          }
        });
        return mostExperienced;
    }

    console.log(findExperienced(pilots));
  