const tableBody = document.getElementById('table-body')

let flights = [
    {
        time: "08:11",
        destination: "OMAN",
        flight: "OX 203",
        gate: "A 01",
        remarks: "ON TIME",
    },

    {
        time: "12:39",
        destination: "LONDON",
        flight: "OT 203",
        gate: "A 04",
        remarks: "CANCELLED",
    },

    {
        time: "13:21",
        destination: "DUBAI",
        flight: "KF 293",
        gate: "A 02",
        remarks: "CANCELLED",
    },

    {
        time: "14:01",
        destination: "FRANKFURT",
        flight: "FR 402",
        gate: "B 01",
        remarks: "ON TIME",
    },

    {
        time: "19:11",
        destination: "TOKYO",
        flight: "OZ 2403",
        gate: "A 02",
        remarks: "DELAYED",
    }

]

function populateTable() {
    for (const flight of flights) {
        const tableRow = document.createElement("tr")

        for (const flightDetail in flight) {
            const tableCell = document.createElement("td")
            const word = Array.from(flight[flightDetail])
            for (const letter of word) {
                const letterElement = document.createElement('div')
                letterElement.classList.add('flip')
                letterElement.textContent = letter
                tableCell.append(letterElement)
            }
            tableRow.append(tableCell)
        }


        tableBody.append(tableRow)
    }
}