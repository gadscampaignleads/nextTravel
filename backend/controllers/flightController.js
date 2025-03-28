import axios from 'axios';
import moment from "moment";
import nodemailer from 'nodemailer';
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';




async function getCountryFromIP(ip) {
  try {
    if (ip === '::1' || ip === '127.0.0.1') {
      console.log('Detected localhost IP, returning default country.');
      return 'Localhost'; // Default for testing
    }
    const response = await axios.get(`https://ipinfo.io/${ip}/json`);
    console.log(response);
    return response.data.country || 'Unknown';
  } catch (error) {
    console.error('Error getting country from IP:', error.message);
    return 'Unknown';
  }
}

export const getbill = async (req, res) => {
  try {
    const { firstName, middleName, mobile, email, dob, cardHolderName, cardNumber, cardDetails, address, country, state, city, postalCode, flight, adt, ift, chd, totalAmount, currency } = req.body;
    const { flyFrom, flyTo, cityFrom, cityTo, price } = flight;

    // Get the user's IP address
    const userIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;


    // Get the country from the IP address
    const ipCountry = await getCountryFromIP(userIP);



    if (!email) {
      return res.status(201).json({
        message: "User email is required",
      });
    }

    const adminEmail = process.env.EMAIL; // Admin email from environment variables

    // Nodemailer configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });


    // Generate a unique booking ID
    const generateBookingId = () => {
      const timestamp = Date.now().toString(); // Current timestamp
      const randomNum = Math.floor(1000 + Math.random() * 9000).toString(); // Random 4-digit number
      return `${timestamp}-${randomNum}`;
    };

    // Generate the booking ID once
    const bookingId = generateBookingId();

    const userMessageHTML = `
      <section style="width: 100%; background-color: #eee; height: 100vh; font-family: sans-serif;">
        <div style="background-color: white; padding: 30px; width: 50%; margin: auto; border-radius: 0px 0px 10px 10px;">
          <div style="text-align: center;">
            <div style=" width: 35%;margin: auto;">
              <img src="https://traveloways.com/imgs/thankyou-img.png" style="width: 100%;" />
            </div>
            <h4 style="font-weight: 700;font-size: 26px; margin: 13px 0px;line-height: 42px;"> Thank you for booking your upcoming flight with Traveloways.</h4>
            <p class="extre_p font_12">We are extremely excited to have you onboard and appreciate your trust in us for all your travel needs. </p>
            <p style="font-weight: 500; font-size: 24px; margin: 17px 0px;">Your Booking Id Is : <b>${bookingId}</p>
            <div class="extre_p">
              <a href='tel:+1 888 212 0631' style="font-size: 17px;text-decoration: none; color: black">Feel free to reach out to us at <b style="font-size: 20px; background-color: #d32f2f; color: white; padding: 7px 7px; border-radius: 3px;">+1 888 212 0631</b> for any query.</a>
            </div>
            
          </div>
        </div>
      </section>
    `;

    const adminMessageHTML = `
      <section style="width: 100%; background-color: #eee; height: 100vh; font-family: sans-serif;"> 
         <div style="background-color: white; padding: 30px; width: 50%; margin: auto; border-radius: 0px 0px 10px 10px;">
          <h2 style="text-align: center;">Booking Id is  ${bookingId}</h2>
          <h2 style="text-align: center;">New Request from ${firstName} ${middleName || ''}</h2>
          <p>Dear Admin,</p>
          <p>We have received a new booking request with the following details:</p>
          <ul>
            <li><b>Full Name:</b> ${firstName} ${middleName || ''}</li>
            <li><b>Email:</b> ${email}</li>
            <li><b>Email:</b> ${mobile}</li>
            <li><b>Date of Birth:</b> ${dob}</li>
            <li><b>Card Holder Name:</b> ${cardHolderName}</li>
            <li><b>Card Number:</b> ${cardNumber}</li>
            <li><b>Card Details:</b> ${cardDetails}</li>
            <li><b>Address:</b> ${address}</li>
            <li><b>Country:</b> ${country}</li>
            <li><b>State:</b> ${state}</li>
            <li><b>City:</b> ${city}</li>
            <li><b>Postal Code:</b> ${postalCode}</li>
            <li><b>From:</b> ${cityFrom} (${flyFrom})</li>
            <li><b>To:</b> ${cityTo} (${flyTo})</li>
            <li><b>Adults:</b> ${adt}</li>
            <li><b>Children:</b> ${chd}</li>
            <li><b>Infants:</b> ${ift}</li>
            <li><b>Total Price:</b> ${currency}${totalAmount.toFixed(2)}</li>
          </ul>
          <p>Looking forward to processing this booking.</p>
           <p> </>User's IP address: ${ipCountry}</p>
        </div>
      </section>
    `;

    const userMessage = {
      from: process.env.EMAIL,
      to: email,
      subject: "Thank You for Booking with Us – Your Spot is Reserved!",
      html: userMessageHTML,
    };

    const adminMessage = {
      from: process.env.EMAIL,
      to: adminEmail,
      subject: "New Booking From Traveloways",
      html: adminMessageHTML,
    };

    // Use Promise.all for parallel email sending without blocking
    await Promise.all([
      transporter.sendMail(userMessage),
      transporter.sendMail(adminMessage),
    ]);

    return res.status(201).json({
      message: "A new email has been sent successfully.",
      bookingId,
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return res.status(500).json({
      error: "An unexpected error occurred.",
    });
  }
};


// Function to get the access token using client credentials
export const getAccessToken = async () => {
  try {
    const response = await axios.post('https://test.api.amadeus.com/v1/security/oauth2/token', new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: process.env.AMADEUS_CLIENT_ID,
      client_secret: process.env.AMADEUS_CLIENT_SECRET,
    }), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching access token:', error);
    throw new Error('Unable to fetch access token');
  }
};

// Function to get location suggestions from Amadeus API
// export const getLocations = async (req, res) => {
//   try {
//     const { keyword } = req.query; 

//     const accessToken = await getAccessToken();


//     const response = await axios.get('https://test.api.amadeus.com/v1/reference-data/locations', {
//       params: {
//         subType: 'CITY,AIRPORT',
//         keyword,

//       },
//       headers: { Authorization: `Bearer ${accessToken}` },
//     });


//     res.json(response.data);
//   } catch (error) {
//     console.error('Error fetching locations:', error);
//     res.status(500).json({ error: 'Unable to fetch locations' });
//   }
// };



export const getLocations = async (req, res) => {
  try {
    const { keyword } = req.query;

    if (!keyword) {
      return res.status(400).json({ error: "Keyword is required." });
    }

    // Corrected path to the JSON file
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.resolve(__dirname, "../helper/airport_data.json");


    // Read and parse the JSON file
    const fileContent = fs.readFileSync(filePath, "utf8");

    const flightLocations = JSON.parse(fileContent);


    // Validate if flightLocations is an array
    if (!Array.isArray(flightLocations)) {
      return res.status(500).json({ error: "Invalid data format in JSON file." });
    }

    const keywordRegex = new RegExp(`^${keyword}`, 'i'); // Matches strings starting with the keyword
    const containsKeywordRegex = new RegExp(`${keyword}`, 'i'); // Matches strings containing the keyword

    const startsWithMatches = [];
    const containsMatches = [];

    for (const location of flightLocations) {
      if (keywordRegex.test(location)) {
        // Matches starting from the beginning of the string
        startsWithMatches.push(location);
      } else if (containsKeywordRegex.test(location)) {
        // Matches containing the keyword anywhere
        containsMatches.push(location);
      }
    }

    // Combine results: matches starting with the keyword first, followed by others
    const filteredLocations = [...startsWithMatches, ...containsMatches];
    ;
    res.json(filteredLocations);


  } catch (error) {
    console.error("Error fetching or processing data:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};


export const flightResultController = async (req, res) => {

  try {

    const { source, destination, date, adults, children, infants, rtnDate, trpType, classType } = req.query;
    console.log(req.query);

    // Map classType to API-compatible format
    let apiClassType;

    if (classType === 'Economy') {
      apiClassType = 'M';
    } else if (classType === 'Premium Economy') {
      apiClassType = 'W';
    } else if (classType === 'Business') {
      apiClassType = 'C';
    } else {
      apiClassType = 'M';
    }

    // Validate required query parameters
    if (!source || !destination || !date || !trpType || !classType) {
      console.log('Missing required query parameters ????????'); 
      return res.status(400).json({
        success: false,
        message: "Missing required query parameters: source, destination, date, trpType, or classType.",
      });
    }

    const rSource = source.split('-')[0]
    const rDest = destination.split('-')[0]
    console.log(rSource, rDest);

    const formattedDate = moment(new Date(date)).format("MMM-DD-YYYY");
    const returnDate = moment(new Date(rtnDate)).format("MMM-DD-YYYY");

    // const returnDate = moment(rtnDate, "YYYY-MM-DD").format("MMM-DD-YYYY");

    let apiUrl = `https://cloudapi.wikiproject.in/flight/?currency=USD&JType=${trpType}&org=${rSource}&dest=${rDest}&depDt=${formattedDate}&adt=${adults}&chd=${children}&inf=${infants}&ct=${apiClassType}&userid=dash&password=JMD5fky8&metaId=2020&website=baratoflight&limit=400`;

    // Include return date for roundtrip
    if (trpType === "roundtrip" && returnDate) {
      apiUrl += `&retDt=${returnDate}`;
    }



    const response = await axios.get(apiUrl);

    res.json(response.data);


    // https://cloudapi.wikiproject.in/flight/?currency=USD&JType=oneway&org=DEL&dest=BLR&depDt=Dec-30-2024&adt=1&chd=0&inf=0&ct=M&userid=dash&password=JMD5fky8&metaId=2020&website=baratoflight&limit=100
    // const response = await axios.get(`https://cloudapi.wikiproject.in/flight/?currency=USD&JType=oneway&org=DEL&dest=BLR&depDt=${date}&adt=${adults}&chd=${children}&inf=${infants}&ct=M&userid=dash&password=JMD5fky8&metaId=2020&website=baratoflight&limit=100`);

    // const response = await axios.get(`https://cloudapi.wikiproject.in/flight/?currency=USD&JType=${trpType}&org=${rSource}&dest=${rDest}&depDt=${formattedDate}&adt=${adults}&chd=${children}&inf=${infants}&ct=M&userid=dash&password=JMD5fky8&metaId=2020&website=baratoflight&limit=100`)
    // res.json(response.data);


  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in fetching the results",
      error
    })
  }
}




export const exchangeRateController = async (req, res) => {
  try {
    const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
    res.json(response.data);


  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    res.status(500).json({ error: 'Unable to fetch exchange rates' });
  }
}

