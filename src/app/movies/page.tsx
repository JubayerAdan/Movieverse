import MoviesPage from "@/components/movies";
import { useEffect } from "react";
import axios from "axios";
import Script from "next/script";

const page = async () => {
  const data = [
    {
      id: 1,
      name: "Sijjin",
      thumbnail:
        "https://i.ibb.co/5YYr0DM/MV5-BYWU2-Yj-E0-Zjct-Nm-Q1-Mi00-NGVj-LTlk-NGEt-Nz-Ji-MTYx-NTE2-NTdh-Xk-Ey-Xk-Fqc-Gde-QXVy-MTEz-MTI1.jpg",
      url: "https://example.com/movies/sijjin",
      country: "Indonesia",
      category: "Horror",
    },
    {
      id: 2,
      name: "Khanzab",
      thumbnail:
        "https://i.ibb.co/DVxyhLH/MV5-BMz-Ey-Mz-Q5-Ym-Yt-ODRk-YS00-ZDVk-LWIw-Mj-Qt-ZDc1-NTQ2-OTVi-MWJi-Xk-Ey-Xk-Fqc-Gde-QXVy-MTEz-MTI1.jpg",
      url: "https://example.com/movies/the_godfather",
      country: "Indonesia",
      category: "Horror",
    },
    {
      id: 3,
      name: "Siksa Kubur",
      thumbnail:
        "https://i.ibb.co/R0FFD7n/MV5-BMz-I1-NWE1-NTYt-Nj-Fh-Yy00-Mj-I1-LTlh-ODct-OTJj-ZDU4-Y2-Ex-OGQ5-Xk-Ey-Xk-Fqc-Gde-QXVy-MTEz-MTI1.jpg",
      url: "https://example.com/movies/the_dark_knight",
      country: "Indonesia",
      category: "Horror",
    },
    {
      id: 4,
      name: "KGF 2",
      thumbnail:
        "https://i.ibb.co/YPtms00/MV5-BMj-I2-Njg2-Y2-Et-Zjgw-MC00-ZGVk-LWJm-MWYt-Yj-Vh-Yjk2-ZTkw-NWE1-Xk-Ey-Xk-Fqc-Gde-QXVy-MTMx-Mj-A5.jpg",
      url: "https://example.com/movies/schindlers_list",
      country: "India",
      category: "Action",
    },
    {
      id: 5,
      name: "Pengabdi Setan",
      thumbnail:
        "https://i.ibb.co/X3qs3ZN/MV5-BYj-U5-Nj-Yy-Nz-Qt-ZDQ3-Ny00-Y2-Fk-LWIy-ZGYt-Nz-M5-Yz-M3-NDdj-Mj-Ux-Xk-Ey-Xk-Fqc-Gde-QXVy-Mz-Yz.jpg",
      url: "https://example.com/movies/lotr_return_of_the_king",
      country: "Indonesia",
      category: "Horror",
    },
    {
      id: 6,
      name: "Salaar",
      thumbnail:
        "https://i.ibb.co/V2bxwsb/MV5-BMm-U4-ZTM0-MTct-ZTQ3-Ny00-Yj-Zm-LWFh-Nz-Et-OGYz-MDk0-Zjcy-Nm-Yz-Xk-Ey-Xk-Fqc-Gde-QXVy-MTUy-Nj-I.jpg",
      url: "https://example.com/movies/pulp_fiction",
      country: "India",
      category: "Action",
    },
    {
      id: 7,
      name: "Animal",
      thumbnail:
        "https://i.ibb.co/1GvqNtJ/MV5-BNGVi-M2-M4-Nm-Ut-Mm-Nk-Ny00-MTQ5-LTk5-MDYt-Nm-Nh-ODAz-ODkw-OTJl-Xk-Ey-Xk-Fqc-Gde-QXVy-MTY1-NDY4.jpg",
      url: "https://example.com/movies/fight_club",
      country: "India",
      category: "Action",
    },
  ];

  return (
    <div className="bg-[#0c0d0f] h-auto w-full">
      <div id="container-9e520d8f5a90221868d8bf473a1930e2"></div>
      <MoviesPage movies={data} />
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
