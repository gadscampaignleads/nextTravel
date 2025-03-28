import React from 'react'
import Layout from '@/components/Layout'
import MainSearch from '@/components/Search/MainSearch'
export default function lasvegas() {
  return (
    <Layout title="Cheap Tickets: Flights, Hotels and Packages – Traveloways" description="Welcome to Traveloways">

      <section className="container-fluid common_banner_custttheme relative miami_b">
        <div className="container-fluid container-xl">
          <div className="row common_padding">
            <div className="col-12 text-center">
              <h3 className='title_dess'>Las Vegas </h3>
            </div>
            <MainSearch />
          </div>
        </div>
      </section>
      <section className="container-fluid container-xl mt-4 mb-5">
        <div className="row common_padding">
          <div className="col-12 spacing_m_p">
            <p>Las Vegas is a dazzling city known for its mix of excitement, luxury, and unique experiences. Often known as the ‘Entertainment capital of the world,’ it is a city where inhibitions are welcomed. The city is famous for its Iconic Strip, world-famous casinos, extravagant resorts, and mind-blowing live performances. Moving aside from the glitz and glamour, Las Vegas is also known for its dining scene. Apart from this, if you enjoy outdoor activities, then consider exploring nearby places such as the Grand Canyon, Red Rock Canyon, and Hoover Dam.</p>
            <h4>Major Attractions In Las Vegas</h4>
            <p>Known as the city that never sleeps, Las Vegas offers a dazzling array of attractions for tourists. From iconic landmarks to world-class entertainment, here are some must-see highlights that make Las Vegas a truly unique destination.</p>
            <ul>
              <li>The Strip                 </li>
              <li>The Sphere</li>
              <li>Bellagio Casino and Fountains</li>
              <li>The Venetian Casino and Grand Canal</li>
              <li> Fremont Street</li>
              <li>Red Rock Canyon</li>

            </ul>
            <h4>Famous Food Item In Las Vegas</h4>
            <p>Amidst tons of claims, a lot of people know Las Vegas for its fine dining and insta-worthy bites. If you are wondering where to stop by to eat when exploring Las Vegas, then check out the recommendations below.
            </p>
            <ul>
              <li> Buffet Feasts</li>
              <li>Shrimp Cocktail</li>
              <li> Prime Rib</li>
              <li> Gourmet Burgers</li>
              <li> Sushi Rolls</li>
              <li> Tacos al Pastor</li>
              <li> Chicken and Waffles</li>
              <li> Lobster Bisque</li>
              <li> Gelato</li>
              <li> Philly Cheesesteak</li>
              <li> Churros</li>
              <li> Bananas Foster</li>

            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}
