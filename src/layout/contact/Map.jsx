import React from "react";
import L from "leaflet";
import styled from "styled-components";
import alfa from "../../assets/thumbnails/alfa.jpg";

const Wrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

class Map extends React.Component {
  componentDidMount() {
    this.map = L.map("map", {
      center: [54.414557, 18.568942],
      zoom: 15,
      zoomControl: false,
    });

    L.tileLayer(
      "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
      {
        detectRetina: true,
        maxZoom: 20,
        maxNativeZoom: 17,
      }
    ).addTo(this.map);
    L.marker([54.41166, 18.568942])
      .addTo(this.map)
      .bindPopup(
        `<b>Olivia Business Park</b><br><img class="img-alfa" src=${alfa} alt=""></img>`,
        {
          minWidth: "10rem",
        }
      )
      .openPopup();
  }

  render() {
    return <Wrapper width="100%" height="500px" id="map" />;
  }
}

export default Map;
