import React from 'react'
import Layout from '@/components/Layout'
import MainSearch from '@/components/Search/MainSearch'
export default function phoenix() {
    return (
        <Layout title="Cheap Tickets: Flights, Hotels and Packages – Traveloways" description="Welcome to Traveloways">

            <section className="container-fluid common_banner_custttheme relative ph_bb">
                <div className="container-fluid container-xl">
                    <div className="row common_padding">
                        <div className="col-12 text-center">
                            <h3 className='title_dess'>Phoenix </h3>
                        </div>
                        <MainSearch />
                    </div>
                </div>
            </section>
            <section className="container-fluid container-xl mt-4 mb-5">
                <div className="row common_padding">
                    <div className="col-12 spacing_m_p">
                        <p>Tourists know Phoenix as the ‘LA without the Pacific.’ The city is genuinely popular due to its high-end shopping, restaurant scenes, and the iconic resort life in Sonora Desert. As a desert metropolis, the city offers a unique blend of natural beauty, cultural richness, and year-round sunshine, making it an ideal destination for travelers. Known as the ‘Valley of Sun, ’ it is surrounded by stunning desert landscapes, including the iconic Camelback Mountain and South Mountain Park. While visiting these places, you can spend your time hiking, biking, and exploring. If you are a nature lover, then consider taking a look at the diverse flora of the Desert Botanical Garden, and in case you are simply looking for relaxation, then visit the luxurious spas to rejuvenate yourself.
                        </p>
                        <h4>Major Attraction in Phoenix</h4>
                        <p>Surprisingly, the desert metropolis has a number of things stacked with itself to explore and create long-lasting memories. To learn more, check out the pointers below.
                        </p>
                        <ul>
                            <li> Desert Botanical Garden </li>
                            <li>Camelback Mountain</li>
                            <li> Musical Instrument Museum</li>
                            <li> South Mountain Park</li>
                            <li> Phoenix Art Museum</li>

                        </ul>
                        <h4>Famous Food Items in Phoenix</h4>
                        <p>If you want to experience the blend of Mexican food with Southern flavours then consider exploring the food items listed below. </p>
                        <ul>
                            <li> Sonoran Hot Dogs</li>
                            <li>Chimichangas</li>
                            <li> Navajo Tacos</li>
                            <li> Prickly Pear Margaritas</li>
                            <li>  Sopaipillas</li>
                            <li> Carne Asada Fries</li>
                            <li> Tamales</li>
                            <li> Green Chile Pork Stew</li>
                            <li> Mesquite-Grilled Steak</li>
                            <li>Cactus Fries</li>
                            <li> Arizona Cheese Crisp</li>
                            <li> Churros</li>
                            <li>Rattlesnake Sausage</li>
                            <li> Prickly Pear Ice Cream</li>
                            <li> Posole</li>

                        </ul>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
