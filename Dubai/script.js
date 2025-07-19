function showDetails(road) {
  const infoBox = document.getElementById("infoBox");

  const roadDetails = {
    "E11": {
      title: "E11 – Sheikh Zayed Road",
      desc: "The longest road in the UAE, running parallel to the coastline, connecting Abu Dhabi to Ras Al Khaimah through Dubai."
    },
    "E311": {
      title: "E311 – Sheikh Mohammed Bin Zayed Road",
      desc: "Major highway running parallel to E11, connecting several emirates including Dubai, Sharjah, and Ajman."
    },
    "E611": {
      title: "E611 – Emirates Road",
      desc: "Runs further inland and is used as an alternative to E311, easing traffic through Dubai and connecting to other emirates."
    }
  };

  if (roadDetails[road]) {
    infoBox.innerHTML = `
      <h2>${roadDetails[road].title}</h2>
      <p>${roadDetails[road].desc}</p>
    `;
  }
}
