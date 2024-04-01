const sqlite3 = require('sqlite3').verbose();

function joinUsersAndRestaurants(db, city="tokyo", order="asc") {
    return new Promise((resolve, reject) => {
        // Constructing the SQL query based on the given constraints
        const sqlQuery = `
            SELECT User.username, Restaurant.restaurant_name
            FROM User
            JOIN Restaurant ON User.city = Restaurant.city
            WHERE User.city = ? 
            ORDER BY User.username ${order.toUpperCase()}, Restaurant.restaurant_name ${order.toUpperCase()}
        `;

        // Executing the SQL query with the provided city parameter
        db.all(sqlQuery, [city], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

// Sample usage
if (require.main === module) {
    // Create an in-memory SQLite database
    const db = new sqlite3.Database(':memory:');

    // Create User and Restaurant tables
    db.serialize(() => {
        db.run(`
            CREATE TABLE User (
                username TEXT,
                city TEXT
            )
        `);

        db.run(`
            CREATE TABLE Restaurant (
                restaurant_name TEXT,
                city TEXT
            )
        `);

        // Insert sample data into User and Restaurant tables
        const usersData = [
            ["alex", "london"],
            ["charlie", "london"],
            ["avery", "moscow"],
            ["billie", "tokyo"]
        ];

        const restaurantsData = [
            ["icewind", "london"],
            ["blueglass", "moscow"],
            ["redwine", "london"]
        ];

        const insertUserStmt = db.prepare('INSERT INTO User VALUES (?, ?)');
        const insertRestaurantStmt = db.prepare('INSERT INTO Restaurant VALUES (?, ?)');

        db.serialize(() => {
            usersData.forEach(data => insertUserStmt.run(data));
            restaurantsData.forEach(data => insertRestaurantStmt.run(data));
        });

        // Call joinUsersAndRestaurants function with sample parameters
        joinUsersAndRestaurants(db, "london", "desc")
            .then(results => {
                // Display the results
                results.forEach(result => console.log(result.username, result.restaurant_name));
            })
            .catch(err => console.error(err))
            .finally(() => {
                // Close the database connection
                db.close();
            });
    });
}

joinUsersAndRestaurants();

module.exports = joinUsersAndRestaurants;
