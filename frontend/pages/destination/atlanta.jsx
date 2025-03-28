import React from 'react'
import Layout from '@/components/Layout'
import MainSearch from '@/components/Search/MainSearch'
export default function atlanta() {
  return (
    <Layout title="Cheap Tickets: Flights, Hotels and Packages – Traveloways" description="Welcome to Traveloways">
        
        <section className="container-fluid common_banner_custttheme relative">
          <div className="container-fluid container-xl">
            <div className="row common_padding">
                <div className="col-12 text-center">
                  <h3 className='title_dess'>Atlanta</h3>
                </div>
                <MainSearch />
            </div>
          </div>
        </section>
        <section className="container-fluid container-xl mt-4 mb-5">
          <div className="row common_padding">
            <div className="col-12 spacing_m_p">
              <p>As the capital of Georgia, Atlanta is a dynamic city blending southern charm with modern innovation. People from all around the world have shifted to this commercial hub, contributing to the city’s unique feel. Known as home to art and entertainment, you can explore plenty of other things, such as the High Museum of Art, the Fox Theatre, and the Atlanta Symphony Orchestra. If you are a nature lover, then you can explore the lush Atlanta Botanical Garden or stroll through Piedmont Park, while families will enjoy the Georgia Aquarium, one of the largest in the world, and the interactive exhibits at the World of Coca-Cola. With a mix of warm hospitality and unaccountable attractions, Atlanta has something or the other to offer everyone.</p>
              <h4>Major Attractions In Atlanta</h4>
              <p>There’s plenty of reason as to why one should Atlanta. The city boasts famous attractions, historic sites, diverse neighborhoods and unique events round the clock. Check out the major attractions of Atlanta listed below.</p>
              <ul>
                <li>  Centennial Olympic Park </li>
                <li>Martin Luther King, Jr. National Historical Park </li>
                <li>Atlanta History Center </li>
                <li> High Museum of Art </li>
                <li>Atlanta BeltLine </li>
                <li>Jimmy Carter Presidential Library and Museum </li>

              </ul>
              <h4>Famous Food Items in Atlanta </h4>
              <p>Majorly famous for its Southern food and rich diversity, some of Atlanta’s lip-smacking dishes are:</p>
              <ul>
                <li>Fried Chicken</li>
                <li>Chicken and Waffles</li>
                <li>Sweet Tea</li>
                <li>Sweet potato pie</li>

              </ul>
            </div>
          </div>
        </section>
      </Layout>
  )
}
