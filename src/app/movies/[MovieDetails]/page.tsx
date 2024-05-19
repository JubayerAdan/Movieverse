"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import Script from "next/script";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      name: "Sijjin",
      thumbnail:
        "https://i.ibb.co/5YYr0DM/MV5-BYWU2-Yj-E0-Zjct-Nm-Q1-Mi00-NGVj-LTlk-NGEt-Nz-Ji-MTYx-NTE2-NTdh-Xk-Ey-Xk-Fqc-Gde-QXVy-MTEz-MTI1.jpg",
      url: "https://example.com/movies/sijjin",
      country: "Indonesia",
      category: "Horror",
      description:
        "A spine-chilling tale of horror revolving around the use of dark sorcery and Jinns, with a story that delves deep into the realms of ancient evil practices.",
    },
    {
      id: 2,
      name: "Khanzab",
      thumbnail:
        "https://i.ibb.co/DVxyhLH/MV5-BMz-Ey-Mz-Q5-Ym-Yt-ODRk-YS00-ZDVk-LWIw-Mj-Qt-ZDc1-NTQ2-OTVi-MWJi-Xk-Ey-Xk-Fqc-Gde-QXVy-MTEz-MTI1.jpg",
      url: "https://example.com/movies/khanzab",
      country: "Indonesia",
      category: "Horror",
      description:
        "A gripping horror movie that portrays the haunting experiences of a family tormented by supernatural entities in their quest for peace and sanity.",
    },
    {
      id: 3,
      name: "Siksa Kubur",
      thumbnail:
        "https://i.ibb.co/R0FFD7n/MV5-BMz-I1-NWE1-NTYt-Nj-Fh-Yy00-Mj-I1-LTlh-ODct-OTJj-ZDU4-Y2-Ex-OGQ5-Xk-Ey-Xk-Fqc-Gde-QXVy-MTEz-MTI1.jpg",
      url: "https://example.com/movies/siksa_kubur",
      country: "Indonesia",
      category: "Horror",
      description:
        "A terrifying exploration into the afterlife, where the souls of the sinful are subjected to unimaginable torment and suffering in the grave.",
    },
    {
      id: 4,
      name: "KGF 2",
      thumbnail:
        "https://i.ibb.co/YPtms00/MV5-BMj-I2-Njg2-Y2-Et-Zjgw-MC00-ZGVk-LWJm-MWYt-Yj-Vh-Yjk2-ZTkw-NWE1-Xk-Ey-Xk-Fqc-Gde-QXVy-MTMx-Mj-A5.jpg",
      url: "https://example.com/movies/kgf_2",
      country: "India",
      category: "Action",
      description:
        "The sequel to the blockbuster KGF, this action-packed film continues the story of Rocky as he rises to power, facing formidable foes and battling for supremacy.",
    },
    {
      id: 5,
      name: "Pengabdi Setan",
      thumbnail:
        "https://i.ibb.co/X3qs3ZN/MV5-BYj-U5-Nj-Yy-Nz-Qt-ZDQ3-Ny00-Y2-Fk-LWIy-ZGYt-Nz-M5-Yz-M3-NDdj-Mj-Ux-Xk-Ey-Xk-Fqc-Gde-QXVy-Mz-Yz.jpg",
      url: "https://example.com/movies/pengabdi_setan",
      country: "Indonesia",
      category: "Horror",
      description:
        "A remake of the classic Indonesian horror film, 'Pengabdi Setan' follows a family plagued by the terrifying spirits of their deceased mother, uncovering dark secrets along the way.",
    },
    {
      id: 6,
      name: "Salaar",
      thumbnail:
        "https://i.ibb.co/V2bxwsb/MV5-BMm-U4-ZTM0-MTct-ZTQ3-Ny00-Yj-Zm-LWFh-Nz-Et-OGYz-MDk0-Zjcy-Nm-Yz-Xk-Ey-Xk-Fqc-Gde-QXVy-MTUy-Nj-I.jpg",
      url: "https://example.com/movies/salaar",
      country: "India",
      category: "Action",
      description:
        "An intense action film featuring Prabhas, 'Salaar' depicts the journey of a hardened criminal as he navigates through treacherous terrains and brutal enemies to establish his dominance.",
    },
    {
      id: 7,
      name: "Animal",
      thumbnail:
        "https://i.ibb.co/1GvqNtJ/MV5-BNGVi-M2-M4-Nm-Ut-Mm-Nk-Ny00-MTQ5-LTk5-MDYt-Nm-Nh-ODAz-ODkw-OTJl-Xk-Ey-Xk-Fqc-Gde-QXVy-MTY1-NDY4.jpg",
      url: "https://example.com/movies/animal",
      country: "India",
      category: "Action",
      description:
        "A dark and gritty action thriller, 'Animal' stars Ranbir Kapoor in a gripping tale of violence and redemption, showcasing the depths of human rage and vengeance.",
    },
  ];

  const params = useParams<{ MovieDetails: string }>();
  const cleanedParam = decodeURIComponent(params.MovieDetails).replace(
    /_/g,
    " "
  );
  const ultimateData = data.find((d) => d.name === cleanedParam);

  const isFavorite = false; // Replace with actual favorite status logic

  return (
    <div className="h-screen">
      <div id="container-9e520d8f5a90221868d8bf473a1930e2"></div>
      {ultimateData && (
        <section
          className={`bg-cover bg-no-repeat bg-details bg-center`}
          style={{ backgroundImage: `url(${ultimateData.thumbnail})` }}
        >
          <div className="h-full w-full inset-0 backdrop-filter backdrop-blur-md bg-gray-500 bg-opacity-50">
            <div className="container mx-auto py-16 px-4">
              <div className="flex items-center justify-center">
                <div className="card max-w-md rounded-lg shadow-md overflow-hidden">
                  <div className="flex flex-col gap-y-4">
                    <figure className="w-full">
                      <img
                        src={ultimateData.thumbnail}
                        className="w-full h-auto object-cover rounded-t-lg"
                        alt={ultimateData.name}
                      />
                    </figure>
                    <div className="p-4">
                      <h2 className="text-2xl font-semibold text-white">
                        {ultimateData.name}
                      </h2>
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => {
                            // Implement navigation logic here
                            console.log("Watch now clicked");
                          }}
                          className="btn btn-primary text-white"
                        >
                          Watch Now
                        </button>
                        <button
                          className={`btn btn-accent text-white ${
                            isFavorite ? "text-red-600" : ""
                          }`}
                        >
                          Download
                        </button>
                      </div>
                      <p className="mt-4 text-gray-100">
                        {ultimateData.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <Script
        type="text/javascript"
        src="//pl23354268.highcpmgate.com/ca/a7/5a/caa75acb45b64091ff8e1234dd19904b.js"
      />
      <Script
        type="text/javascript"
        src="//pl23354380.highcpmgate.com/81/b0/93/81b093db2978097f21023c604e15757e.js"
      ></Script>
      <Script
        async={true}
        data-cfasync="false"
        src="//rancidmorsel.com/9e520d8f5a90221868d8bf473a1930e2/invoke.js"
      ></Script>
    </div>
  );
};

export default page;
