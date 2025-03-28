import moment from "moment";
import axios from "axios";
import nodemailer from "nodemailer";
export const hotelListController = async (req, res) => {

    try {
        const { org, checkin, checkout, adt, chd, ift, rooms } = req.query;

        const rSource = org.split('-')[0]
        const checkIn = moment(new Date(checkin)).format("YYYY-MM-DD");
        const checkOut = moment(new Date(checkout)).format("YYYY-MM-DD");

        // let apiUrl = `https://cloudapi.wikiproject.in/hotel?currency=USD&org=${rSource}&checkin=${checkin}&checkout=${checkout}&adt=${adt}&userid=dash&password=JMD5fky8&rooms=${rooms}`
        let apiUrl = `https://cloudapi.wikiproject.in/hotel?currency=USD&org=${rSource}&checkin=${checkIn}&checkout=${checkOut}&adt=${adt}&userid=dash&password=JMD5fky8&rooms=${rooms}&chd=${chd}&ift=${ift}&limit=300`
        const response = await axios.get(apiUrl);

        // Send response to frontend
        // res.status(200).send({
        //     success: true,
        //     message: "Hotel locations fetched successfully",
        //     data: response.data,
        // });

        res.json(response.data);


    } catch (error) {

        console.error('Error fetching hotel locations:', error);
        res.status(500).send({

            success: false,
            message: "Error in fetching hotel locations",
            error,
        })
    }
}
export const hotelbill = async (req, res) => {
   
    try {
        const { firstName, middleName, mobile, email, dob, cardHolderName, cardNumber, cardDetails, address, country, state, city, postalCode, flight, adult, infant, child, totalAmount, currency, rooms, org } = req.body;
        // const { flyFrom, flyTo, cityFrom, cityTo, price } = flight;

        // Get the user's IP address
        const userIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;


        // Get the country from the IP address
        // const ipCountry = await getCountryFromIP(userIP);



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
              <h4 style="font-weight: 700;font-size: 26px; margin: 13px 0px;line-height: 42px;"> Thank you for booking your upcoming flight with traveloways.</h4>
              <p class="extre_p font_12">We are extremely excited to have you onboard and appreciate your trust in us for all your travel needs. </p>
              <p style="font-weight: 500; font-size: 24px; margin: 17px 0px;">Your Booking Id Is : <b>${bookingId}</p>
              <div class="extre_p">
                <a href='tel:+1(888) 211-9619' style="font-size: 17px;text-decoration: none; color: black">Feel free to reach out to us at <b style="font-size: 20px; background-color: #d32f2f; color: white; padding: 7px 7px; border-radius: 3px;">+1(888) 211-9619</b> for any query.</a>
              </div>
              <a href="https://www.traveloways.com/" style="background-color: #336588; color: white; display: inline-flex; align-items: center; justify-content: center; gap: 6px; margin-top: 25px; padding: 10px 20px; border-radius: 5px; font-weight: 600; font-size: 17px; text-decoration: none;">Go Back to Home Page <i class="fa-solid fa-angles-left"></i></a>
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
              <li><b>Phone Number:</b> ${mobile}</li>
              <li><b>Date of Birth:</b> ${dob}</li>
              <li><b>Card Holder Name:</b> ${cardHolderName}</li>
              <li><b>Card Number:</b> ${cardNumber}</li>
              <li><b>Card Details:</b> ${cardDetails}</li>
              <li><b>Address:</b> ${address}</li>
              <li><b>Country:</b> ${country}</li>
              <li><b>State:</b> ${state}</li>
              <li><b>City:</b> ${city}</li>
              <li><b>Postal Code:</b> ${postalCode}</li>
              <li><b>Hotel Location:</b> ${org}</li>
              <li><b>Adults:</b> ${adult}</li>
              <li><b>Children:</b> ${child}</li>
              <li><b>Infants:</b> ${infant}</li>
               <li><b>Rooms:</b> ${rooms}</li>
             
            </ul>
            <p>Looking forward to processing this booking.</p>
         
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
            subject: "New Booking From traveloways",
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