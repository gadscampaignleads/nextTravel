import React from 'react' 
import Layout from '@/components/Layout'
import MainSearch from '@/components/Search/MainSearch'
export default function miami() {
    return (
        <Layout title="Cheap Tickets: Flights, Hotels and Packages – Traveloways" description="Welcome to Traveloways">

            <section className="container-fluid common_banner_custttheme relative los_bb">
                <div className="container-fluid container-xl">
                    <div className="row common_padding">
                        <div className="col-12 text-center">
                            <h3 className='title_dess'>Los Angeles</h3>
                        </div>
                        <MainSearch />
                    </div>
                </div>
            </section>
            <section className="container-fluid container-xl mt-4 mb-5">
                <div className="row common_padding">
                    <div className="col-12 spacing_m_p">
                        <p>As a sprawling metropolis, Los Angeles has an extensive array of things to explore. Known as the entertainment capital of the world, it is home to some iconic landmarks such as Griffith Museum, the Walk of Fame, and Hollywood Sign. The city’s cultural scene is equally impressive, with world-class museums such as The Getty Center, LACMA, and The Broad showcasing art, history, and innovation. </p>
                        <p>If you are someone who enjoys outdoor activity equally, then the city has some stunning places to boost, like Venice Beach, Malibu, and Santa Monica, as well as hiking trails in Griffith Park and the Santa Monica Mountains. For food enthusiasts, LA offers impressive and diverse cuisine from Koreatown, Little Tokyo, Gourmet food trucks, and farmers' markets. Whether you are discovering Universal Studios, soaking in the sun at the beach, or delving into the art and culture of the city, Los Angeles will leave you in complete surprise. </p>
                        <h4>Major Attractions in Los Angeles</h4>
                        <p>Los Angeles offers a number of things to see and explore. To know where to begin from and unwind, check out the pointers below.</p>
                        <ul>
                            <li> The Getty </li>
                            <li> Universal Studios </li>
                            <li> Griffith Observatory </li>
                            <li> Hollywood Sign </li>
                            <li>Walk of Fame </li>
                            <li> Zuma Beach </li>
                            <li> Sunset Boulevard </li>
                            <li> County Museum of Art </li>

                        </ul>
                        <h4>Famous Food Items in Los Angeles</h4>
                        <p>Los Angeles is the melting pot for culinary, offering a wide array of famous and iconic foods that reflect its diverse culture. Let’s take a look at some of the best mouth-watering food items available in Los Angeles.
                        </p>
                        <ul>
                            <li>Cobb Salad</li>
                            <li>Garlic stuffed Sourdough</li>
                            <li>Fish Tacos</li>
                            <li>Animal Style Fries</li>
                            <li> Avocado Toast</li>
                            <li> Churros</li>
                            <li> Sushi Burritos</li>
                            <li> French Dip Sandwich</li>

                        </ul>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
