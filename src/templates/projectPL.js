import * as React from "react";
import Layout from "../components/pl/layoutPL";
import Seo from "../components/pl/seoPL";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { Link } from "gatsby";

const ProjectTemplatePL = ({
    pageContext: { slug },
    data: { datoCmsProjectArticleCopy1 },
}) => {
    return (
        <Layout>
            <section className="relative object-bottom flex items-center min-h-[16rem] overflow-hidden h-24 justify-center w-full">
                <div className="w-full -mt-4 -z-20 ">
                    <GatsbyImage
                        className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                        image={getImage(
                            datoCmsProjectArticleCopy1.img.gatsbyImageData
                        )}
                        alt={datoCmsProjectArticleCopy1.img.alt}
                    />
                    <div className="w-full h-full bg-gray-900/70 absolute top-0 left-0" />
                </div>
            </section>

            <section class="container -mt-36 lg:-mt-16 px-6 mx-auto">
                <section class=" mb-6 md:mb-12 xl:mb-32 text-gray-800">
                    <div class="container mx-auto xl:px-32 text-center lg:text-left">
                        <div class="flex flex-col lg:flex-row items-center ">
                            <div>
                                <GatsbyImage
                                    className="h-80 w-80 md:h-96 md:w-96 lg:p-72 rounded-lg shadow-lg"
                                    image={getImage(
                                        datoCmsProjectArticleCopy1.img
                                            .gatsbyImageData
                                    )}
                                    alt={datoCmsProjectArticleCopy1.img.alt}
                                />
                            </div>
                            <div class="mb-12 lg:mb-0">
                                <div class="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14">
                                    <h1 class="text-3xl font-bold mb-6 pb-2">
                                        {datoCmsProjectArticleCopy1.header}
                                    </h1>
                                    <p class="text-gray-500 mb-6 pb-2">
                                        {
                                            datoCmsProjectArticleCopy1.detailedDescription
                                        }
                                    </p>

                                    <Link
                                        to="/pl/#about"
                                        type="button"
                                        class="inline-block mb-4 px-7 mr-4 py-3 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                    >
                                        Powrót
                                    </Link>
                                    <Link
                                        to="/pl/#contact"
                                        type="button"
                                        class="inline-block px-7 py-3 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                    >
                                        Kontact
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </Layout>
    );
};

export const Head = () => <Seo titlePL="Facades Projekt" />;

export default ProjectTemplatePL;

export const query = graphql`
    query MyQuery($slug: String) {
        datoCmsProjectArticleCopy1(slug: { eq: $slug }) {
            description
            detailedDescription
            header
            img {
                alt
                gatsbyImageData
            }
        }
    }
`;
