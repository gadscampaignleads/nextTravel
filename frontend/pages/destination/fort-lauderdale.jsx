import React from 'react'
import Layout from '@/components/Layout'
import MainSearch from '@/components/Search/MainSearch'
export default function fortlauderdale() {
    return (
        <Layout title="Cheap Tickets: Flights, Hotels and Packages – Traveloways" description="Welcome to Traveloways">

            <section className="container-fluid common_banner_custttheme relative fort_b">
                <div className="container-fluid container-xl">
                    <div className="row common_padding">
                        <div className="col-12 text-center">
                            <h3 className='title_dess'>Fort Lauderdale </h3>
                        </div>
                        <MainSearch />
                    </div>
                </div>
            </section>
            <section className="container-fluid container-xl mt-4 mb-5">
                <div className="row common_padding">
                    <div className="col-12 spacing_m_p">
                        <p>Known as the ‘Venice of America,’ Fort Lauderdale is a stunning coastal city in Florida. The place is known for its picturesque canals, beaches, and pretty laid-back vibe. It’s a paradise for water lovers, offering activities like boating, paddleboarding, and snorkeling along its expansive coastline. The city’s famous Las Olas Boulevard is a hub of dining, shopping, and nightlife, while the historic Riverwalk provides a scenic stroll with access to museums, parks, and entertainment venues. Any nature enthusiasts can explore the Everglades or visit the serene Hugh Taylor Birch State Park. Along With luxurious resorts, a vibrant arts scene, and year-round sunshine, Fort Lauderdale is the perfect destination for relaxation and adventure.</p>
                        <h4>Major Attractions In Fort Lauderdale</h4>
                        <p>Being a coastal city Fort Lauderdale is a must visit place for tourists who enjoy watersports or beaches. Additionally, there are multiple attractions which you can visit to create everlasting memories. Some of the major attractions are mentioned below. </p>
                        <ul>
                            <li> Fort Lauderdale Beach </li>
                            <li> Las Olas Beach </li>
                            <li> Bonnet House Museums and Gardens </li>
                            <li> Hugh Tylor Birch State Park </li>
                            <li>Las Olas Boulevard </li>
                            <li>Flamingo Gardens </li>

                        </ul>
                        <h4>Famous Food Item In Fort Lauderdale</h4>
                        <p>Though Fort Lauderdale has some interesting and mouth savory dishes and cuisines it is still not known to the people of other parts. Right from Italian, Argentinean to Mediterranean is served at eateries around the city. To have a taste do checklist the items mentioned below.</p>
                        <ul>
                            <li>Dolce Salato Pizza and Gelato</li>
                            <li> Conch Fritters</li>
                            <li>  Stone Crab Claws</li>
                            <li>  Grouper Sandwich</li>
                            <li> Ceviche</li>
                            <li> Mahi-Mahi Tacos</li>

                        </ul>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
